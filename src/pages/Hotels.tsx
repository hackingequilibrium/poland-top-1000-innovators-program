import { Link } from "react-router-dom";
import {
  MapPin,
  Plane,
  Bus,
  CalendarDays,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import polsvLogo from "@/assets/polsv-logo-color-dark-bg.svg.asset.json";
import hotelPhoto from "@/assets/marriott-waterfront-hd.png.asset.json";

const groupRate = () => (
  <div className="border border-white/12 bg-[#0a1230]/60 p-4 md:p-5">
    <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-white/55">
      Special group rate
    </p>
    <p className="mt-1.5 font-inter font-medium text-base md:text-lg">$199–$219</p>
    <p className="font-inter font-extralight text-[11px] text-white/60">USD per night</p>
  </div>
);

const rateItem = (label: string, value: string, note?: string) => (
  <div className="border border-white/12 bg-[#0a1230]/60 p-4 md:p-5">
    <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-white/55">
      {label}
    </p>
    <p className="mt-1.5 font-inter font-medium text-base md:text-lg">{value}</p>
    {note ? (
      <p className="font-inter font-extralight text-[11px] text-white/60">{note}</p>
    ) : null}
  </div>
);

const Hotels = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B1A3F] text-white font-sans">
      <header className="px-6 md:px-12 lg:px-[100px] pt-8 pb-6">
        <div className="max-w-[900px] mx-auto flex flex-col items-center text-center gap-4">
          <Link to="/">
            <img src={polsvLogo.url} alt="PolSV" className="h-20 md:h-28 w-auto" />
          </Link>
          <Link
            to="/"
            className="group inline-flex items-center gap-2 font-inter font-light text-sm text-white/60 hover:text-white transition-colors"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Back to main site
          </Link>
        </div>
      </header>

      <main className="flex-1 px-4 md:px-12 lg:px-[100px] pb-16">
        <div className="max-w-[720px] mx-auto">
          {/* ============ Hotel card ============ */}
          <section className="overflow-hidden rounded-2xl border border-white/15 bg-[#0d1b45] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
            {/* Photo */}
            <img
              src={hotelPhoto.url}
              alt="San Francisco Airport Marriott Waterfront"
              className="h-60 w-full object-cover md:h-80"
            />

            {/* Header */}
            <div className="px-6 md:px-10 pt-8 pb-8">
              <p className="font-inter text-[11px] uppercase tracking-[0.2em] text-white/60">
                Top 1000 Innovators of Poland in Silicon Valley
              </p>
              <h1 className="mt-3 font-inter font-extrabold text-2xl md:text-3xl uppercase tracking-tight">
                Accommodation &amp; Travel
              </h1>
              <p className="mt-4 max-w-[640px] font-inter font-extralight text-sm md:text-base leading-relaxed text-white/70">
                We've secured a preferred hotel rate for TOP 1000 participants at the San
                Francisco Airport Marriott Waterfront. Stay alongside fellow attendees,
                speakers, and organizers throughout the Summit.
              </p>

              <hr className="my-8 border-white/10" />

              {/* Hotel identity */}
              <p>
                <span className="inline-block rounded-full border border-[#3661F6]/40 bg-[#3661F6]/15 px-3 py-1 font-inter text-[10px] uppercase tracking-[0.15em] text-[#9DB8FF]">
                  Official Summit Hotel
                </span>
              </p>
              <h2 className="mt-3 block font-inter font-bold text-xl md:text-2xl tracking-tight underline decoration-white/20 decoration-dotted underline-offset-8">
                San Francisco Airport Marriott Waterfront
              </h2>
              <p className="mt-3 flex items-center gap-2 font-inter font-extralight text-sm md:text-base text-white/60">
                <MapPin className="h-4 w-4 shrink-0 text-[#9DB8FF]" />
                Burlingame, California · Near San Francisco International Airport (SFO)
              </p>

              {/* Rate + dates grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {groupRate()}
                {rateItem("Booking deadline", "October 22, 2026", "Subject to availability")}
                {rateItem("Group rate dates", "November 8–14, 2026")}
                {rateItem("Summit dates", "November 9–12, 2026")}
              </div>

              {/* Reserve band */}
              <div className="mt-8 rounded-xl border border-white/15 bg-[#0a1230]/60 p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-4 w-4 shrink-0 text-[#9DB8FF]" />
                  <h3 className="font-inter font-semibold text-base md:text-lg uppercase tracking-tight">
                    Reserve Your Room
                  </h3>
                </div>
                <p className="mt-3 font-inter font-extralight text-sm md:text-base leading-relaxed text-white/70">
                  Book using the dedicated TOP 1000 reservation link to access the negotiated
                  group rate.
                </p>
                <a
                  href="https://app.marriott.com/resview2?id=1791480188686&key=GRP&app=resvlink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 flex h-14 w-full items-center justify-center gap-2 rounded-full bg-white text-[#0B1A3F] transition-colors duration-300 hover:bg-white/85"
                >
                  <span className="font-inter text-base font-medium tracking-wide">
                    Book Your Room
                  </span>
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <p className="mt-3 text-center font-inter font-extralight text-xs text-white/60">
                  Reservations are managed directly by Marriott.
                </p>
              </div>
            </div>
          </section>

          {/* ============ Transportation ============ */}
          <section className="mt-14 px-2 md:px-6">
            <h2 className="font-inter font-extrabold text-xl md:text-2xl uppercase tracking-tight">
              Transportation
            </h2>

            <div className="mt-6 flex items-start gap-4">
              <Plane className="mt-1 h-5 w-5 shrink-0 text-[#9DB8FF]" />
              <div>
                <h3 className="font-inter font-semibold text-sm md:text-base uppercase tracking-tight">
                  Airport → Hotel
                </h3>
                <p className="mt-2 font-inter font-extralight text-sm leading-relaxed text-white/70">
                  Conveniently located near San Francisco International Airport (SFO). Please
                  check directly with the hotel for airport shuttle availability and operating
                  hours.
                </p>
              </div>
            </div>

            <hr className="my-6 border-white/10" />

            <div className="flex items-start gap-4">
              <Bus className="mt-1 h-5 w-5 shrink-0 text-[#9DB8FF]" />
              <div>
                <h3 className="font-inter font-semibold text-sm md:text-base uppercase tracking-tight">
                  Hotel → Summit Venues
                </h3>
                <p className="mt-2 font-inter font-extralight text-sm leading-relaxed text-white/70">
                  The Summit takes place across multiple locations:
                </p>
                <ul className="mt-2 space-y-1.5 font-inter font-extralight text-sm text-white/70">
                  {[
                    "November 9: Stanford University",
                    "November 10: UC Berkeley",
                    "November 11: Silicon Valley",
                    "November 12: UC San Francisco",
                  ].map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="shrink-0">·</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 font-inter font-extralight text-sm leading-relaxed text-white/70">
                  Transportation arrangements between the hotel and Summit venues will be
                  communicated to registered participants.
                </p>
              </div>
            </div>
          </section>

          {/* ============ Why stay ============ */}
          <section className="mt-14 px-2 md:px-6">
            <h2 className="font-inter font-extrabold text-xl md:text-2xl uppercase tracking-tight">
              Why Stay at the Recommended Hotel?
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                "Stay alongside fellow participants, speakers, and organizers",
                "Access exclusive Summit group rates",
                "Convenient location near SFO",
                "Make the most of informal networking opportunities",
              ].map((text) => (
                <li
                  key={text}
                  className="flex items-start gap-3 font-inter font-extralight text-sm md:text-base text-white/80"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#9DB8FF]" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 flex items-center gap-2 font-inter font-extralight text-sm text-white/50">
              <CalendarDays className="h-4 w-4 shrink-0" />
              Reservations close October 22, 2026 — subject to availability.
            </p>
          </section>
        </div>
      </main>

      <footer className="px-6 md:px-12 lg:px-[100px] pb-10 text-[11px] text-white/30 tracking-wide">
        <Link to="/" className="hover:text-white transition-colors">
          Back to home
        </Link>
        <span className="mx-2">|</span>
        <Link to="/tickets" className="hover:text-white transition-colors">
          Tickets
        </Link>
        <span className="mx-2">|</span>
        <Link to="/contact" className="hover:text-white transition-colors">
          Contact us
        </Link>
      </footer>
    </div>
  );
};

export default Hotels;
