import { useEffect } from "react";
import { Link } from "react-router-dom";
import polsvLogo from "@/assets/polsv-logo-color-dark-bg.svg.asset.json";

const ZEFFY_SCRIPT_SRC = "https://www.zeffy.com/embed/v2/zeffy-embed.js";

const Tickets = () => {
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
          <p className="text-center font-inter font-light text-sm md:text-base text-white mb-5">
            Summit II · 9–12 November 2026
            <br />
            Stanford University · UC Berkeley · UC San Francisco
          </p>

          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C70828] px-3.5 py-1 text-[10px] md:text-xs font-inter font-bold uppercase tracking-[0.12em] text-white shadow-[0_0_18px_rgba(199,8,40,0.5)]">
              <span className="h-1.5 w-1.5 rounded-full bg-white/90 animate-pulse" />
              Early bird ends Sep 30
            </span>
          </div>

          <div className="max-w-[640px] mx-auto mb-10 rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-center font-inter text-[11px] md:text-xs font-light leading-relaxed text-white/80">
            <span className="font-semibold text-white">Important:</span> The registration fee shown on this page is the total amount charged by PolSV. During checkout, Zeffy will offer an optional donation to support its platform. If you do not wish to contribute, simply select $0 from the dropdown menu.
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
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  height: 450,
                  width: "100%",
                  paddingTop: 450,
                }}
              >
                <iframe
                  title="Donation form powered by Zeffy"
                  style={{
                    position: "absolute",
                    border: 0,
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  data-zeffy-embed-src="https://www.zeffy.com/embed/ticketing/top-1000-innovators-of-poland-in-silicon-valley--2026"
                  allowTransparency
                />
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
        <a
          href="https://polsv.org/contact/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          Contact us
        </a>
      </footer>
    </div>
  );
};

export default Tickets;
