import { Link } from "react-router-dom";

const linkClass =
  "font-inter font-light text-sm md:text-base text-white/70 hover:text-white transition-colors";

const TopNav = () => (
  <nav className="absolute inset-x-0 top-0 z-30 px-10 md:px-16 pt-6 md:pt-8">
    <div className="flex flex-wrap items-center gap-x-7 md:gap-x-10 gap-y-3 md:justify-end">
      <Link
        to="/"
        className="hidden md:inline-block font-inter font-bold text-sm md:text-base uppercase tracking-[0.12em] text-white hover:text-white/70 transition-colors"
      >
        TOP 1000
      </Link>
      <Link to="/program" className={linkClass}>
        Program
      </Link>
      <a href="#speakers" className={linkClass}>
        Speakers
      </a>
      <Link to="/hotels" className={linkClass}>
        Travel &amp; Stay
      </Link>
      <Link
        to="/tickets"
        className="font-inter text-xs md:text-sm uppercase tracking-[0.12em] font-medium px-4 md:px-5 py-2 border border-white/40 text-white hover:bg-white hover:text-[#0A0A0A] transition-colors"
      >
        Get a Ticket
      </Link>
    </div>
  </nav>
);

export default TopNav;
