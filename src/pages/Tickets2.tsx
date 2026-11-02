import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import polsvLogo from "@/assets/polsv-logo-color-dark-bg.svg.asset.json";
import {
  MAX_TICKETS,
  TICKET_LABELS,
  TICKET_PRICES,
  TicketType,
  formatUsd,
  ticketTotal,
} from "@/lib/ticketPricing";

const tiers: { type: TicketType; eligibility: string }[] = [
  {
    type: "university",
    eligibility:
      "For researchers, faculty, university leaders, and university technology transfer officers seeking to accelerate innovation, commercialization, and international collaboration.",
  },
  {
    type: "business",
    eligibility:
      "For entrepreneurs, startups, investors, corporate innovators, and industry leaders looking to build partnerships, explore emerging technologies, and connect with Silicon Valley's innovation ecosystem.",
  },
];

type Holder = { full_name: string; position: string; organization: string };
const emptyHolder = (): Holder => ({ full_name: "", position: "", organization: "" });

const req = (label: string, max: number) =>
  z.string().trim().min(1, `${label} is required`).max(max, `${label} is too long`);

const schema = z.object({
  contact_name: req("Full name", 150),
  contact_email: z.string().trim().email("Enter a valid email").max(255),
  contact_phone: req("Phone", 50),
  country: req("Country", 100),
  holders: z.array(
    z.object({
      full_name: req("Full name", 150),
      position: req("Position / role", 150),
      organization: req("Organization", 200),
    })
  ),
  billing_org: req("Organization name", 200),
  billing_address: req("Billing address", 500),
  tax_id: z.string().trim().max(100),
  notes: z.string().trim().max(2000),
});

const inputCls =
  "input-autofill-dark bg-white/5 border-white/20 text-white placeholder:text-white/40 rounded-none focus-visible:ring-[#8FC7F5]";
const labelCls = "block font-inter text-sm text-white/80 mb-1.5";

const Field = ({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <label className="block">
    <span className={labelCls}>{label}</span>
    {children}
    {error && <span className="mt-1 block text-xs text-red-300">{error}</span>}
  </label>
);

const Tickets2 = () => {
  const [type, setType] = useState<TicketType>("university");
  const [quantity, setQuantity] = useState(1);
  const [contact, setContact] = useState({
    contact_name: "",
    contact_email: "",
    contact_phone: "",
    country: "",
  });
  const [holders, setHolders] = useState<Holder[]>([emptyHolder()]);
  const [billing, setBilling] = useState({ billing_org: "", billing_address: "", tax_id: "" });
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const changeQuantity = (q: number) => {
    const n = Math.min(MAX_TICKETS, Math.max(1, q || 1));
    setQuantity(n);
    setHolders((prev) =>
      n > prev.length
        ? [...prev, ...Array.from({ length: n - prev.length }, emptyHolder)]
        : prev.slice(0, n)
    );
  };

  const setHolder = (i: number, key: keyof Holder, value: string) =>
    setHolders((prev) => prev.map((h, idx) => (idx === i ? { ...h, [key]: value } : h)));

  const total = ticketTotal(type, quantity);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    const parsed = schema.safeParse({ ...contact, holders, ...billing, notes });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((iss) => {
        const k = iss.path.join(".");
        if (!errs[k]) errs[k] = iss.message;
      });
      setErrors(errs);
      document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    setErrors({});
    setSubmitting(true);
    const d = parsed.data;
    const id = crypto.randomUUID();
    const { error } = await supabase.from("ticket_registrations").insert({
      id,
      ticket_type: type,
      quantity,
      contact_name: d.contact_name,
      contact_email: d.contact_email,
      contact_phone: d.contact_phone,
      country: d.country,
      holders: d.holders,
      billing_org: d.billing_org,
      billing_address: d.billing_address,
      tax_id: d.tax_id || null,
      notes: d.notes || null,
    });
    if (error) {
      console.error("Ticket registration failed:", error);
      setSubmitError("Something went wrong. Please try again or email info@polsv.org.");
      setSubmitting(false);
      return;
    }

    const templateData = {
      contactName: d.contact_name,
      contactEmail: d.contact_email,
      contactPhone: d.contact_phone,
      country: d.country,
      ticketLabel: TICKET_LABELS[type],
      unitPrice: formatUsd(TICKET_PRICES[type]),
      quantity,
      total: formatUsd(total),
      holders: d.holders,
      billingOrg: d.billing_org,
      billingAddress: d.billing_address,
      taxId: d.tax_id || undefined,
      notes: d.notes || undefined,
    };
    const send = (templateName: string, recipientEmail: string, key: string) =>
      supabase.functions
        .invoke("send-transactional-email", {
          body: { templateName, recipientEmail, idempotencyKey: `${key}-${id}`, templateData },
        })
        .catch((err) => console.error("Email failed:", err));
    send("ticket-registration-confirmation", d.contact_email, "ticket-confirm");
    send("ticket-registration-admin", "info@polsv.org", "ticket-admin-info");
    send("ticket-registration-admin", "agata.braja@polsv.org", "ticket-admin-agata");

    setSubmitting(false);
    setDone(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#002266] text-white font-sans">
      <header className="px-6 md:px-12 lg:px-[100px] pt-8">
        <div className="max-w-[900px] mx-auto flex flex-col items-center text-center gap-4">
          <Link to="/">
            <img src={polsvLogo.url} alt="PolSV" className="h-24 md:h-32 w-auto" />
          </Link>
          <h2 className="font-inter font-semibold text-sm md:text-lg uppercase tracking-tight text-white/80">
            Top 1000 Innovators of Poland in Silicon Valley
          </h2>
          <Link
            to="/"
            className="group inline-flex items-center gap-2 font-inter font-light text-sm text-white/60 hover:text-white transition-colors"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Back to main site
          </Link>
        </div>
      </header>

      <main className="flex-1 px-6 md:px-12 lg:px-[100px] py-10 md:py-14">
        <div className="max-w-[900px] mx-auto">
          <h1 className="font-inter font-semibold text-3xl md:text-5xl text-center mb-3">
            Register for Summit II
          </h1>
          <p className="font-inter font-light text-center text-white/75 mb-10">
            14–17 December 2026 · Silicon Valley. Fill in the form below and our team will email
            you an invoice with payment details within 2 business days.
          </p>

          {done ? (
            <div className="text-center border border-white/20 bg-white/5 p-10">
              <h2 className="font-inter font-semibold text-2xl mb-3">Thank you!</h2>
              <p className="font-inter font-light text-white/80 leading-relaxed">
                Thank you — our team will send your invoice with payment details within 2 business
                days.
              </p>
              <Link
                to="/"
                className="mt-8 inline-flex items-center gap-2 font-inter font-medium text-sm text-[#8FC7F5] hover:text-white transition-colors"
              >
                ← Back to main site
              </Link>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-5 mb-10">
                {tiers.map((t) => {
                  const on = type === t.type;
                  return (
                    <button
                      type="button"
                      key={t.type}
                      onClick={() => setType(t.type)}
                      aria-pressed={on}
                      className={`text-left p-6 border transition-colors ${
                        on
                          ? "border-white bg-white/10"
                          : "border-white/20 bg-white/[0.03] hover:border-white/50"
                      }`}
                    >
                      <div className="font-inter text-sm uppercase tracking-wider text-[#8FC7F5]">
                        {TICKET_LABELS[t.type]}
                      </div>
                      <div className="font-inter font-semibold text-3xl mt-2">
                        USD {formatUsd(TICKET_PRICES[t.type])}
                      </div>
                      <div className="font-inter text-xs text-white/60 mb-3">per participant</div>
                      <p className="font-inter font-light text-sm text-white/80 leading-relaxed">
                        {t.eligibility}
                      </p>
                      <div className="mt-4 font-inter text-xs text-white/70">
                        {on ? "✓ Selected" : "Select"}
                      </div>
                    </button>
                  );
                })}
              </div>

              <form
                id="registration-form"
                onSubmit={onSubmit}
                noValidate
                className="space-y-10 border border-white/15 bg-white/[0.04] p-6 md:p-10"
              >
                <section className="space-y-5">
                  <h3 className="font-inter font-semibold text-xl">Tickets</h3>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Ticket type *">
                      <div className="flex gap-2">
                        {(["university", "business"] as TicketType[]).map((tt) => (
                          <button
                            type="button"
                            key={tt}
                            onClick={() => setType(tt)}
                            className={`flex-1 h-10 border font-inter text-sm ${
                              type === tt
                                ? "bg-white text-[#002266] border-white"
                                : "border-white/30 text-white/80"
                            }`}
                          >
                            {TICKET_LABELS[tt]}
                          </button>
                        ))}
                      </div>
                    </Field>
                    <Field label="Number of tickets *">
                      <Input
                        type="number"
                        min={1}
                        max={MAX_TICKETS}
                        value={quantity}
                        onChange={(e) => changeQuantity(parseInt(e.target.value, 10))}
                        className={inputCls}
                      />
                    </Field>
                  </div>
                  <p className="font-inter text-white/85">
                    Total: {quantity} × USD {formatUsd(TICKET_PRICES[type])} ={" "}
                    <strong>USD {formatUsd(total)}</strong>
                  </p>
                </section>

                <section className="space-y-5">
                  <h3 className="font-inter font-semibold text-xl">Contact person</h3>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {(
                      [
                        ["contact_name", "Full name *", "text"],
                        ["contact_email", "Email *", "email"],
                        ["contact_phone", "Phone *", "tel"],
                        ["country", "Country *", "text"],
                      ] as const
                    ).map(([k, label, t]) => (
                      <Field key={k} label={label} error={errors[k]}>
                        <Input
                          type={t}
                          value={contact[k]}
                          onChange={(e) => setContact({ ...contact, [k]: e.target.value })}
                          className={inputCls}
                        />
                      </Field>
                    ))}
                  </div>
                </section>

                <section className="space-y-5">
                  <h3 className="font-inter font-semibold text-xl">
                    Ticket holder{quantity > 1 ? "s" : ""}
                  </h3>
                  {holders.map((h, i) => (
                    <div key={i} className="border-l-2 border-[#8FC7F5]/60 pl-4 space-y-4">
                      <div className="font-inter text-sm text-[#8FC7F5]">Ticket {i + 1}</div>
                      <div className="grid sm:grid-cols-3 gap-4">
                        {(
                          [
                            ["full_name", "Full name *"],
                            ["position", "Position / role *"],
                            ["organization", "Organization *"],
                          ] as const
                        ).map(([k, label]) => (
                          <Field key={k} label={label} error={errors[`holders.${i}.${k}`]}>
                            <Input
                              value={h[k]}
                              onChange={(e) => setHolder(i, k, e.target.value)}
                              className={inputCls}
                            />
                          </Field>
                        ))}
                      </div>
                    </div>
                  ))}
                </section>

                <section className="space-y-5">
                  <div>
                    <h3 className="font-inter font-semibold text-xl">Billing details</h3>
                    <p className="font-inter font-light text-sm text-white/65 mt-1">
                      The organization the invoice should be issued to — it can differ from the
                      ticket holders' organizations.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Organization name *" error={errors.billing_org}>
                      <Input
                        value={billing.billing_org}
                        onChange={(e) => setBilling({ ...billing, billing_org: e.target.value })}
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Tax ID / VAT number (optional)" error={errors.tax_id}>
                      <Input
                        value={billing.tax_id}
                        onChange={(e) => setBilling({ ...billing, tax_id: e.target.value })}
                        className={inputCls}
                      />
                    </Field>
                  </div>
                  <Field label="Billing address *" error={errors.billing_address}>
                    <Textarea
                      rows={3}
                      value={billing.billing_address}
                      onChange={(e) => setBilling({ ...billing, billing_address: e.target.value })}
                      className={inputCls}
                    />
                  </Field>
                </section>

                <Field label="Notes (optional)" error={errors.notes}>
                  <Textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className={inputCls}
                  />
                </Field>

                {Object.keys(errors).length > 0 && (
                  <p className="text-sm text-red-300">Please fill in the highlighted fields.</p>
                )}
                {submitError && <p className="text-sm text-red-300">{submitError}</p>}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-14 bg-white text-[#002266] font-inter font-semibold text-base transition-colors hover:bg-[#8FC7F5] disabled:opacity-60"
                >
                  {submitting ? "Submitting…" : "Submit registration"}
                </button>
              </form>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Tickets2;
