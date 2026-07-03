import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import polsvLogo from "@/assets/polsv-logo-color-dark-bg.svg.asset.json";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const EVENT_DATE = new Date("2026-11-09T00:00:00-08:00").getTime();

type Interest = "researcher" | "company" | "university" | "other";

const sectors = [
  "Life Sciences & Biomed",
  "Space & Avionics",
  "Dual-Use Technologies",
  "Energy & Sustainability",
];

function useCountdown(target: number) {
  const compute = () => {
    const diff = Math.max(0, target - Date.now());
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  };
  const [time, setTime] = useState(compute());
  useEffect(() => {
    const id = setInterval(() => setTime(compute()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);
  return time;
}

const pad = (n: number) => n.toString().padStart(2, "0");

const Index2026 = () => {
  const { days, hours, minutes, seconds } = useCountdown(EVENT_DATE);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState<Interest>("researcher");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast.error("Please enter your name and email.");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase
      .from("waitlist_2026" as any)
      .insert({ name: name.trim(), email: email.trim(), interest });
    setSubmitting(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    setSubmitted(true);
    setName("");
    setEmail("");
    toast.success("You're on the waitlist. Talk soon.");
  };

  const countdownCells = [
    { label: "DAYS", value: days },
    { label: "HOURS", value: pad(hours) },
    { label: "MIN", value: pad(minutes) },
    { label: "SEC", value: pad(seconds) },
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-[#05070f]">
      {/* Gradient wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 800px at 15% 10%, rgba(56,110,255,0.35), transparent 60%), radial-gradient(900px 700px at 85% 20%, rgba(199,8,40,0.22), transparent 60%), radial-gradient(1000px 900px at 50% 100%, rgba(30,80,200,0.35), transparent 60%), linear-gradient(180deg, #030512 0%, #060b22 40%, #0a1330 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      {/* Nav */}
      <header className="max-w-7xl mx-auto px-6 pt-8 flex items-center justify-between">
        <a href="https://www.polsv.org" className="flex items-center gap-3">
          <img src={polsvLogo.url} alt="PolSV" className="h-14 md:h-16 w-auto" />
        </a>
        <Link
          to="/2025"
          className="hidden sm:inline-block text-sm text-white/70 hover:text-white transition-colors border border-white/20 rounded-full px-4 py-2"
        >
          2025 Inaugural Summit →
        </Link>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 md:pt-24 pb-10 text-center">
        <div className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.35em] text-white/60 border border-white/15 rounded-full px-4 py-1.5 mb-8">
          Save the Date
        </div>

        <h1 className="font-display leading-[0.9] tracking-[-0.03em]">
          <span className="block text-[16vw] sm:text-7xl md:text-8xl lg:text-[10rem] font-medium text-white">
            TOP 1000
          </span>
          <span className="block mt-5 text-xl sm:text-2xl md:text-4xl font-light tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#7fb0ff] via-white to-[#7fb0ff]">
            Innovators of Poland in Silicon Valley
          </span>
        </h1>

        <div className="mt-10 inline-flex items-center gap-3">
          <span className="inline-block h-px w-10 bg-[#C70828]" />
          <span className="text-[11px] md:text-xs uppercase tracking-[0.5em] text-[#ff6b81] font-medium">
            Second Cohort
          </span>
          <span className="inline-block h-px w-10 bg-[#C70828]" />
        </div>

        <p className="mt-10 font-display text-3xl md:text-5xl font-light tracking-tight text-white">
          9—11 November 2026
        </p>
        <p className="mt-4 text-[11px] md:text-xs uppercase tracking-[0.35em] text-white/60">
          Stanford &nbsp;·&nbsp; Berkeley &nbsp;·&nbsp; UC San Francisco &nbsp;·&nbsp; Silicon Valley
        </p>
        <p className="mt-8 text-base md:text-lg text-white/60 max-w-xl mx-auto">
          Innovative Poland meets the Silicon Valley ecosystem.
        </p>
      </section>

      {/* Countdown */}
      <section className="max-w-5xl mx-auto px-6 pt-6 pb-16">
        <div className="grid grid-cols-4 gap-3 md:gap-6">
          {countdownCells.map((c) => (
            <div
              key={c.label}
              className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm py-6 md:py-10 text-center"
            >
              <div className="font-serif text-4xl sm:text-5xl md:text-7xl font-light tabular-nums text-white">
                {c.value}
              </div>
              <div className="mt-2 text-[10px] md:text-xs tracking-[0.35em] text-white/50">
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist */}
      <section className="max-w-2xl mx-auto px-6 pb-20">
        <div className="rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-center">
            Join the waitlist
          </h2>
          <p className="mt-2 text-center text-white/60 text-sm">
            Be first to hear when applications and the full program open.
          </p>

          {submitted ? (
            <div className="mt-8 text-center text-white/80">
              You're on the list. We'll be in touch.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="w-full bg-white/[0.06] border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#7fb0ff] transition-colors"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full bg-white/[0.06] border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#7fb0ff] transition-colors"
              />

              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-white/50 mb-2">
                  I'm interested as
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(
                    [
                      { v: "researcher", l: "Researcher" },
                      { v: "company", l: "Company" },
                      { v: "university", l: "University partner" },
                      { v: "other", l: "Other" },
                    ] as { v: Interest; l: string }[]
                  ).map((opt) => (
                    <button
                      type="button"
                      key={opt.v}
                      onClick={() => setInterest(opt.v)}
                      className={`text-xs md:text-sm rounded-full px-3 py-2 border transition-colors ${
                        interest === opt.v
                          ? "bg-[#C70828] border-[#C70828] text-white"
                          : "bg-white/[0.04] border-white/15 text-white/70 hover:text-white hover:border-white/30"
                      }`}
                    >
                      {opt.l}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full mt-2 bg-white text-[#05070f] font-medium rounded-xl px-4 py-3 hover:bg-white/90 transition-colors disabled:opacity-60"
              >
                {submitting ? "Joining…" : "Join the waitlist"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Sectors */}
      <section className="max-w-5xl mx-auto px-6 pb-24 text-center">
        <div className="text-xs uppercase tracking-[0.35em] text-white/50 mb-6">
          Focus sectors
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {sectors.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm md:text-base text-white/85"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-white/20" />
          <span className="text-sm md:text-base text-white/70 italic">
            Artificial Intelligence — the connective layer
          </span>
          <span className="h-px w-12 bg-white/20" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <div>
            Organized by the Poland in Silicon Valley Center for Science,
            Innovation, and Entrepreneurship (PolSV).
          </div>
          <Link
            to="/2025"
            className="text-white/70 hover:text-white transition-colors"
          >
            See the 2025 inaugural summit →
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Index2026;
