import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import polsvLogo from "@/assets/polsv-logo-color-dark-bg.svg.asset.json";
import BankTransferDetails from "@/components/tickets/BankTransferDetails";

const ZEFFY_SCRIPT_SRC = "https://www.zeffy.com/embed/v2/zeffy-embed.js";

const tabBase =
  "px-5 py-2.5 rounded-full border font-inter text-sm md:text-base font-medium transition-colors";
const tabOn = "bg-white text-[#002266] border-white";
const tabOff = "border-white/30 text-white/80 hover:text-white hover:border-white/60";

const Tickets = () => {
  const [params, setParams] = useSearchParams();
  const type = params.get("type") === "business" ? "business" : "university";
  const [method, setMethod] = useState<"card" | "bank">("card");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = ZEFFY_SCRIPT_SRC;
    script.async = true;
    script.onerror = () => {
      document
        .querySelectorAll<HTMLElement>("[data-zeffy-embed-fallback]")
        .forEach((el) => {
          el.style.display = "block";
          el.querySelectorAll<HTMLIFrameElement>(
            "iframe[data-zeffy-embed-src]"
          ).forEach((frame) => {
            const src = frame.getAttribute("data-zeffy-embed-src");
            if (src) frame.src = src;
          });
        });
    };
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

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

      <main className="flex-1 px-6 md:px-12 lg:px-[100px] py-12 md:py-16">
        <div className="max-w-[900px] mx-auto">
          <h1 className="text-center font-inter font-extrabold text-3xl md:text-5xl uppercase tracking-tight mb-3">
            Get Your Tickets
          </h1>
          <p className="text-center font-inter font-light text-sm md:text-base text-white mb-8">
            Summit II · 14–17 December 2026
            <br />
            Stanford University · UC Berkeley · UC San Francisco
          </p>

          <div role="tablist" aria-label="Ticket type" className="flex justify-center gap-2 mb-8">
            {(["university", "business"] as const).map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={type === t}
                onClick={() => setParams(t === "university" ? {} : { type: t }, { replace: true })}
                className={`${tabBase} ${type === t ? tabOn : tabOff}`}
              >
                {t === "university" ? "University · $4,499" : "Business · $6,499"}
              </button>
            ))}
          </div>

          <p className="max-w-[640px] mx-auto mb-10 text-center font-inter text-[11px] md:text-xs font-light leading-relaxed text-white/80">
            Traveling to Silicon Valley?{" "}
            <Link to="/hotels" className="underline underline-offset-2 hover:text-white transition-colors">
              Book your hotel at the special TOP 1000 group rate
            </Link>
            . Reservations close November 20.
          </p>

          {type === "university" && (
            <div className="flex justify-center gap-2 mb-8" role="tablist" aria-label="Payment method">
              {(["card", "bank"] as const).map((m) => (
                <button
                  key={m}
                  role="tab"
                  aria-selected={method === m}
                  onClick={() => setMethod(m)}
                  className={`${tabBase} text-xs md:text-sm ${method === m ? tabOn : tabOff}`}
                >
                  {m === "card" ? "Pay by card" : "Pay by bank transfer"}
                </button>
              ))}
            </div>
          )}

          {type === "business" && (
            <div className="max-w-[720px] mx-auto">
              <p className="font-inter font-light text-sm md:text-base text-white/80 leading-relaxed mb-10">
                Business ticket payments are made by bank transfer. To complete your registration,
                please follow the steps below.
              </p>
              <BankTransferDetails amount="6,499" />
            </div>
          )}

          {type === "university" && method === "bank" && (
            <div className="max-w-[720px] mx-auto">
              <BankTransferDetails amount="4,499" />
            </div>
          )}

          {/* Zeffy stays mounted so its script can initialise; hidden unless University → card */}
          <div className={type === "university" && method === "card" ? "" : "hidden"}>
            <div className="max-w-[640px] mx-auto mb-6 rounded-lg border-2 border-[#F5C542] bg-[#F5C542]/15 px-5 py-4 text-center font-inter text-sm md:text-base font-normal leading-relaxed text-white">
              <span className="font-bold text-[#F5C542]">Important:</span> The registration fee shown on this page is the total amount charged by PolSV. During checkout, Zeffy will offer an optional donation to support its platform. If you do not wish to contribute, simply select $0 from the dropdown menu.
            </div>
            <style>{`
              .zeffy-wrap > div {
                max-width: 100% !important;
                width: 100% !important;
                margin-left: 0 !important;
                margin-right: 0 !important;
              }
            `}</style>
            <div className="zeffy-wrap">
              <div
                data-zeffy-embed
                data-form-url="/embed/ticketing/top-1000-innovators-of-poland-in-silicon-valley--2026"
              />
              <div data-zeffy-embed-fallback style={{ display: "none" }}>
                <div style={{ position: "relative", overflow: "hidden", height: 450, width: "100%", paddingTop: 450 }}>
                  <iframe
                    title="Donation form powered by Zeffy"
                    style={{ position: "absolute", border: 0, top: 0, left: 0, bottom: 0, right: 0, width: "100%", height: "100%" }}
                    data-zeffy-embed-src="https://www.zeffy.com/embed/ticketing/top-1000-innovators-of-poland-in-silicon-valley--2026"
                    allowTransparency
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="px-6 md:px-12 lg:px-[100px] pb-10 text-[11px] text-white/30 tracking-wide">
        <Link to="/" className="hover:text-white transition-colors">
          Back to home
        </Link>
        <span className="mx-2">|</span>
        <Link to="/contact" className="hover:text-white transition-colors">
          Contact us
        </Link>
      </footer>
    </div>
  );
};

export default Tickets;
