import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bokehVideo from "@/assets/bokeh-blue-hero.mp4.asset.json";
import {
  AboutSection,
  FocusAreasSection,
  SpeakersSection,
  WhySection,
  VenuesSection,
  ProgramSection,
  PreviousSummitSection,
  PartnersSection,
  TicketsSection,
  FinalCtaSection,
} from "@/components/top1000/Sections";

const EVENT_DATE = new Date("2026-11-09T00:00:00-08:00").getTime();

const sectors = [
  "Biomed & Life Sciences",
  "Energy & Sustainability",
  "Space & Avionics",
  "Dual-Use Technologies",
  "Artificial Intelligence",
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

  const countdownCells = [
    { label: "DAYS", value: days },
    { label: "HOURS", value: pad(hours) },
    { label: "MIN", value: pad(minutes) },
    { label: "SEC", value: pad(seconds) },
  ];

  return (
    <div className="w-full font-sans text-white bg-[#0a0a1a]">
      {/* ---------- 1. HERO ---------- */}
      <div className="min-h-screen w-full flex flex-col lg:flex-row relative overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={bokehVideo.url} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#0a0a1a]/35 z-10" />
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ background: "radial-gradient(circle at 50% 40%, transparent 0%, #0a0a1a 85%)" }}
        />

        {/* Left: branding */}
        <div className="relative z-20 w-full lg:w-1/2 flex flex-col justify-start p-10 md:p-16 overflow-hidden">
          <a href="https://www.polsv.org" className="relative z-10 flex items-center gap-4">
            <img
              src="/assets/polsv-logo-color-dark-bg.svg"
              alt="PolSV"
              className="h-20 md:h-24 lg:h-28 w-auto"
            />
          </a>

          <div className="relative z-10 mt-8 lg:mt-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-white text-sm font-thin tracking-[0.2em] uppercase">
                Save the Date
              </span>
            </div>

            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tighter">
              TOP 1000
            </h1>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl font-medium text-white/85 max-w-md leading-relaxed">
              Innovators of Poland in{" "}
              <span className="whitespace-nowrap">Silicon Valley</span>
            </p>

            <div className="mt-5 inline-flex items-center gap-3">
              <span className="inline-block h-px w-6 bg-[#C70828]" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#ff9aab] font-medium">
                Second Cohort
              </span>
              <span className="inline-block h-px w-6 bg-[#C70828]" />
            </div>

            <p className="mt-6 font-display text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
              November 9-12, 2026
            </p>
            <p className="mt-3 text-[10px] md:text-xs uppercase tracking-[0.35em] text-white/60">
              Stanford &nbsp;·&nbsp; UCSF &nbsp;·&nbsp; UC Berkeley &nbsp;·&nbsp;{" "}
              <span className="whitespace-nowrap">Silicon Valley</span>
            </p>
          </div>
        </div>

        {/* Right: countdown, tags, CTAs */}
        <div className="relative z-20 w-full lg:w-1/2 min-h-screen bg-[#0a0a1a]/10 backdrop-blur-md p-10 md:p-16 flex flex-col justify-center">
          <div className="mb-12">
            <h3 className="text-white/60 text-xs font-thin tracking-[0.3em] uppercase mb-8">
              Event Countdown
            </h3>
            <div className="grid grid-cols-4 gap-3 md:gap-4">
              {countdownCells.map((c) => (
                <div key={c.label} className="flex flex-col">
                  <span className="font-display text-4xl md:text-5xl font-bold text-white tabular-nums">
                    {c.value}
                  </span>
                  <span className="text-white/60 text-[10px] uppercase tracking-widest mt-2">
                    {c.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-white/60 text-xs font-thin tracking-[0.3em] uppercase mb-6">
              Focus Areas
            </h3>
            <div className="flex flex-wrap gap-2">
              {sectors.map((s) => (
                <span
                  key={s}
                  className="rounded-full px-4 py-2 text-xs font-medium backdrop-blur-sm bg-white/5 border border-white/10 text-white/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/tickets"
              className="group flex-1 flex items-center justify-between h-14 px-7 rounded-full bg-white/10 backdrop-blur-[20px] border border-white/20 transition-all duration-300 ease-out hover:bg-white hover:border-white/10 hover:backdrop-blur-none"
            >
              <span className="text-base md:text-lg font-bold text-white transition-colors duration-300 ease-out group-hover:text-[#0A0A0A]">
                Get Your Seat
              </span>
              <div className="relative h-10 w-10 flex items-center justify-center shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#0A0A0A] scale-0 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="relative text-white transition-transform duration-300 ease-out group-hover:rotate-45"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </div>
            </Link>

            <a
              href="https://polsv.org/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-14 px-7 rounded-full border border-white/20 text-base font-semibold text-white/90 transition-colors duration-300 hover:bg-white/10 hover:text-white"
            >
              Partner With Us
            </a>
          </div>

          <div className="mt-12 text-[10px] text-white/20 tracking-wide text-center lg:text-left">
            <div className="mb-2">
              Organized by the Poland in Silicon Valley Center for Science, Innovation, and
              Entrepreneurship (PolSV).
            </div>
            <Link to="/2025" className="text-white/30 hover:text-white transition-colors duration-300">
              2025 Inaugural Summit
            </Link>
            <span className="mx-2 text-white/20">|</span>
            <a
              href="https://polsv.org/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors duration-300"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>

      {/* ---------- 2-11 ---------- */}
      <AboutSection />
      <FocusAreasSection />
      <SpeakersSection />
      <WhySection />
      <VenuesSection />
      <ProgramSection />
      <PreviousSummitSection />
      <PartnersSection />
      <TicketsSection />
      <FinalCtaSection />

      <footer className="px-6 md:px-12 lg:px-24 pb-12 text-[11px] text-white/30 tracking-wide text-center">
        Organized by the Poland in Silicon Valley Center for Science, Innovation, and Entrepreneurship
        (PolSV).
        <div className="mt-2">
          <Link to="/2025" className="hover:text-white transition-colors">
            2025 Inaugural Summit
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
        </div>
      </footer>
    </div>
  );
};

export default Index2026;
