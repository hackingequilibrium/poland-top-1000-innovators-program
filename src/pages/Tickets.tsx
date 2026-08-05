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
            <img src={polsvLogo.url} alt="PolSV" className="h-16 md:h-20 w-auto" />
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
          <p className="text-center font-inter font-light text-base md:text-lg text-white/60 mb-10">
            Second Cohort Summit · 9–12 November 2026 · Stanford · Berkeley · UC
            San Francisco
          </p>


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
