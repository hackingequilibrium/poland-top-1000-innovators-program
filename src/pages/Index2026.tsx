import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, CalendarDays } from "lucide-react";
import bokehVideo from "@/assets/bokeh-blue-hero.mp4.asset.json";
import {
  AboutSection,
  FocusAreasSection,
  SpeakersSection,
  WhySection,
  VenuesSection,
  ProgramSection,
  PreviousSummitSection,
  TicketsSection,
  FinalCtaSection,
} from "@/components/top1000/Sections";

const EVENT_DATE = new Date("2026-11-09T00:00:00-08:00").getTime();




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

        {/* All hero content on the left */}
        <div className="relative z-20 w-full lg:w-3/5 flex flex-col justify-center p-10 md:p-16">
          <a href="https://www.polsv.org" className="relative z-10 flex items-center gap-4">
            <img
              src="/assets/polsv-logo-color-dark-bg.svg"
              alt="PolSV"
              className="h-20 md:h-24 lg:h-28 w-auto"
            />
          </a>

          <div className="relative z-10 mt-8">
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tighter">
              TOP 1000
            </h1>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl font-medium text-white/85 max-w-md leading-relaxed">
              Innovators of Poland in{" "}
              <span className="whitespace-nowrap">Silicon Valley</span>
            </p>
            <div className="mt-5">
              <span className="inline-block rounded-full px-4 py-2 text-[10px] md:text-xs uppercase tracking-[0.1em] backdrop-blur-sm bg-white/5 border border-white/20 text-white/80">
                Summit II
              </span>
            </div>
          </div>




          {/* CTAs */}
          <div className="relative z-10 mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/tickets"
              className="group flex items-center justify-between gap-10 h-14 px-6 border border-[#2f5bd0] bg-[#2f5bd0] transition-colors duration-300 hover:bg-[#24489f] hover:border-[#24489f]"
            >
              <span className="text-base font-medium tracking-wide text-white">
                Get Your Seat
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>


            <a
              href="https://polsv.org/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-10 h-14 px-6 border border-white/70 bg-transparent transition-colors duration-300 hover:bg-white"
            >
              <span className="text-base font-medium tracking-wide text-white transition-colors duration-300 group-hover:text-[#0A0A0A]">
                Partner With Us
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white transition-colors duration-300 group-hover:text-[#0A0A0A]"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Venue / Date */}
          <div className="relative z-10 mt-12 flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div>
              <div className="flex items-center gap-2 text-[#ff9aab] text-xs uppercase tracking-[0.2em]">
                <MapPin className="h-4 w-4" />
                Venue:
              </div>
              <div className="mt-2 text-white text-base md:text-lg font-normal">
                Stanford University · UC San Francisco · UC Berkeley
                <br />
                <span className="whitespace-nowrap">Silicon Valley</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-[#ff9aab] text-xs uppercase tracking-[0.2em]">
                <CalendarDays className="h-4 w-4" />
                Date:
              </div>
              <div className="mt-2 text-white text-base md:text-lg font-normal">
                9-12 November 2026
              </div>

            </div>
          </div>

          <div className="relative z-10 mt-12 text-[10px] text-white/25 tracking-wide">
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
