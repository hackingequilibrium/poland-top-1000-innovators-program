import { Link } from "react-router-dom";
import { MapPin, CalendarDays, ChevronDown } from "lucide-react";
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

const Index2026 = () => {


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
              className="h-28 md:h-32 lg:h-40 w-auto"
            />
          </a>

          <div className="relative z-10 mt-8">
            <h1 className="font-display text-white leading-[0.88] tracking-tight uppercase">
              <span className="block text-5xl md:text-6xl lg:text-7xl font-bold">TOP 1000</span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-bold">Innovators</span>
              <span className="block mt-2 text-2xl md:text-3xl lg:text-4xl font-bold">
                Of Poland in <span className="whitespace-nowrap">Silicon Valley</span>
              </span>
            </h1>
            <div className="mt-5">
              <span className="inline-block rounded-full px-4 py-2 text-[10px] md:text-xs uppercase tracking-[0.05em] bg-[#C70828] border border-[#C70828] text-white">
                Summit II
              </span>
            </div>

            {/* Venue / Date */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-white text-base md:text-lg font-light">
                <MapPin className="h-4 w-4 shrink-0 text-white" />
                <span>Stanford University · UC San Francisco · UC Berkeley · Silicon Valley</span>
              </div>
              <div className="flex items-center gap-2 text-white text-base md:text-lg font-light">
                <CalendarDays className="h-4 w-4 shrink-0 text-white" />
                <span>9-12 November 2026</span>
              </div>
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

          <a
            href="#about"
            aria-label="Scroll for more information"
            className="relative z-10 mt-12 inline-flex items-center gap-3 text-white/50 hover:text-white transition-colors duration-300 group w-fit"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] font-light">More below</span>
            <ChevronDown className="h-5 w-5 animate-bounce group-hover:translate-y-1 transition-transform duration-300" />
          </a>

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
