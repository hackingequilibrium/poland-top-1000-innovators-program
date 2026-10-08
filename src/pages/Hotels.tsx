import { Link } from "react-router-dom";
import { MapPin, CalendarDays, Plane, Bus, Users, Tag, Network, ArrowRight } from "lucide-react";
import polsvLogo from "@/assets/polsv-logo-color-dark-bg.svg.asset.json";

const Hotels = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B1A3F] text-white font-sans">
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
            Accommodation &amp; Travel
          </h1>
          <p className="text-center font-inter font-light text-sm md:text-base text-white/80 max-w-[640px] mx-auto">
            We've secured a preferred hotel rate for TOP 1000 participants at the San
            Francisco Airport Marriott Waterfront. Stay alongside fellow attendees,
            speakers, and organizers throughout the Summit.
          </p>

          {/* Official Summit Hotel */}
          <section className="mt-12 border border-white/15 bg-white/5 p-6 md:p-10">
            <p className="font-inter text-xs uppercase tracking-[0.2em] text-white/50 mb-2">
              Official Summit Hotel
            </p>
            <h2 className="font-inter font-bold text-2xl md:text-3xl tracking-tight">
              San Francisco Airport Marriott Waterfront
            </h2>
            <p className="mt-2 flex items-center gap-2 font-inter font-extralight text-sm md:text-base text-white/70">
              <MapPin className="h-4 w-4 shrink-0" />
              Burlingame, California · Near San Francisco International Airport (SFO)
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="border border-white/15 bg-[#0a0a1a]/40 p-5">
                <p className="font-inter text-[11px] uppercase tracking-[0.15em] text-white/50">
                  Special group rate
                </p>
                <p className="mt-2 font-inter font-bold text-2xl md:text-3xl">$199–$219</p>
                <p className="font-inter font-extralight text-xs text-white/60">USD per night</p>
              </div>
              <div className="border border-white/15 bg-[#0a0a1a]/40 p-5">
                <p className="font-inter text-[11px] uppercase tracking-[0.15em] text-white/50">
                  Booking deadline
                </p>
                <p className="mt-2 font-inter font-bold text-2xl md:text-3xl">Oct 22, 2026</p>
                <p className="font-inter font-extralight text-xs text-white/60">Subject to availability</p>
              </div>
              <div className="border border-white/15 bg-[#0a0a1a]/40 p-5">
                <p className="font-inter text-[11px] uppercase tracking-[0.15em] text-white/50">
                  Group rate dates
                </p>
                <p className="mt-2 font-inter font-bold text-2xl md:text-3xl">Nov 8–14, 2026</p>
                <p className="font-inter font-extralight text-xs text-white/60">
                  Summit dates: November 9–12, 2026
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-inter font-semibold text-lg md:text-xl uppercase tracking-tight mb-2">
                Reserve Your Room
              </h3>
              <p className="font-inter font-extralight text-sm md:text-base text-white/70 mb-5">
                Book using the dedicated TOP 1000 reservation link to access the negotiated
                group rate. Reservations are managed directly by Marriott.
              </p>
              <a
                href="https://app.marriott.com/resview2?id=1791480188686&key=GRP&app=resvlink"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-10 h-14 px-6 border border-[#3661F6] bg-[#3661F6] transition-colors duration-300 hover:bg-[#2a4fd4] hover:border-[#2a4fd4]"
              >
                <span className="text-base font-medium tracking-wide text-white">
                  Book Your Room
                </span>
                <ArrowRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </section>

          {/* Transportation */}
          <section className="mt-12">
            <h2 className="font-inter font-extrabold text-2xl md:text-3xl uppercase tracking-tight mb-6">
              Transportation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-white/15 bg-white/5 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Plane className="h-5 w-5 text-[#9DB8FF]" />
                  <h3 className="font-inter font-semibold text-base md:text-lg uppercase tracking-tight">
                    Airport → Hotel
                  </h3>
                </div>
                <p className="font-inter font-extralight text-sm text-white/70 leading-relaxed">
                  Conveniently located near San Francisco International Airport (SFO).
                  Please check directly with the hotel for airport shuttle availability and
                  operating hours.
                </p>
              </div>
              <div className="border border-white/15 bg-white/5 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Bus className="h-5 w-5 text-[#9DB8FF]" />
                  <h3 className="font-inter font-semibold text-base md:text-lg uppercase tracking-tight">
                    Hotel → Summit Venues
                  </h3>
                </div>
                <p className="font-inter font-extralight text-sm text-white/70 leading-relaxed mb-3">
                  The Summit takes place across multiple locations:
                </p>
                <ul className="font-inter font-extralight text-sm text-white/70 space-y-1.5">
                  <li className="pl-4 -indent-4">· November 9: Stanford University</li>
                  <li className="pl-4 -indent-4">· November 10: UC Berkeley</li>
                  <li className="pl-4 -indent-4">· November 11: Silicon Valley</li>
                  <li className="pl-4 -indent-4">· November 12: UC San Francisco</li>
                </ul>
                <p className="mt-3 font-inter font-extralight text-sm text-white/70 leading-relaxed">
                  Transportation arrangements between the hotel and Summit venues will be
                  communicated to registered participants.
                </p>
              </div>
            </div>
          </section>

          {/* Why stay */}
          <section className="mt-12 border border-white/15 bg-white/5 p-6 md:p-10">
            <h2 className="font-inter font-extrabold text-2xl md:text-3xl uppercase tracking-tight mb-6">
              Why Stay at the Recommended Hotel?
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-inter font-extralight text-sm md:text-base text-white/80">
              <li className="flex items-start gap-3">
                <Users className="h-5 w-5 shrink-0 text-[#9DB8FF] mt-0.5" />
                Stay alongside fellow participants, speakers, and organizers
              </li>
              <li className="flex items-start gap-3">
                <Tag className="h-5 w-5 shrink-0 text-[#9DB8FF] mt-0.5" />
                Access exclusive Summit group rates
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-[#9DB8FF] mt-0.5" />
                Convenient location near SFO
              </li>
              <li className="flex items-start gap-3">
                <Network className="h-5 w-5 shrink-0 text-[#9DB8FF] mt-0.5" />
                Make the most of informal networking opportunities
              </li>
            </ul>
            <p className="mt-8 flex items-center gap-2 font-inter font-extralight text-sm text-white/60">
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
