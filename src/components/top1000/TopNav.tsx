import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const linkClass =
  "font-inter font-light text-xs md:text-sm text-white/70 hover:text-white transition-colors whitespace-nowrap";

const TopNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-40 flex justify-end px-4 md:px-10 pt-3 md:pt-5 pointer-events-none">
      <div
        className={`pointer-events-auto flex items-center gap-x-4 md:gap-x-7 rounded-full border px-4 py-1.5 md:px-6 md:py-2 transition-all duration-300 ${
          scrolled
            ? "border-white/20 bg-[#0B1A3F]/70 backdrop-blur-xl"
            : "border-white/10 bg-transparent"
        }`}
      >
        <a href="#speakers" className={linkClass}>
          Speakers
        </a>
        <Link to="/hotels" className={linkClass}>
          Travel &amp; Stay
        </Link>
        <Link to="/tickets" className={linkClass}>
          Get a Ticket
        </Link>
      </div>
    </nav>
  );
};

export default TopNav;
