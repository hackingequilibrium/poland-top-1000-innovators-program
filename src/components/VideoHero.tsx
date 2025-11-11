import { Menu, X } from "lucide-react";
import { useState } from "react";
import polsvLogo from "@/assets/polsv-logo.png";

const VideoHero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay/30 backdrop-blur-[1px]" />
      
      {/* Gradient Overlay - Left to Right */}
      <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay/60 to-transparent" />

      {/* Logo */}
      <div className="absolute top-16 left-6 md:left-12 lg:left-[100px] z-20">
        <img src={polsvLogo} alt="PolSV Logo" className="h-16 md:h-[77px] lg:h-[90px] w-auto" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 right-0 z-20 p-6 pr-8 md:p-8 md:pr-12 lg:px-[100px] lg:py-8">
        {/* Desktop & Tablet Navigation */}
        <ul className="hidden md:flex gap-6 lg:gap-8 font-inter font-normal text-base lg:text-[20px] text-hero-text">
          <li>
            <a href="#about" className="hover:underline transition-all">
              About PolSV
            </a>
          </li>
          <li>
            <a href="#lead-session" className="hover:underline transition-all">
              Lead a Session
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline transition-all">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-hero-text z-50 relative"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-hero-overlay/95 z-40 md:hidden">
            <ul className="flex flex-col items-center justify-center h-full gap-8 font-inter font-normal text-2xl text-hero-text">
              <li>
                <a 
                  href="#about" 
                  className="hover:underline transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About PolSV
                </a>
              </li>
              <li>
                <a 
                  href="#lead-session" 
                  className="hover:underline transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Lead a Session
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="hover:underline transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-4 md:px-12 lg:px-[100px]">
        <div className="text-left max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-block bg-[#C70828] px-4 py-2 mb-4">
            <span className="font-inter font-semibold uppercase text-white text-sm">
              Dec 9–12, 2025
            </span>
          </div>
          <h1 className="font-inter font-extrabold uppercase text-5xl md:text-7xl text-hero-text mb-2 tracking-tight leading-tight">
            Top 1000<br />Innovators
          </h1>
          <h2 className="font-inter font-semibold uppercase text-2xl md:text-[36px] text-hero-text mb-6 tracking-tight">
            of Poland in Silicon Valley
          </h2>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-hero-text/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-hero-text/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
