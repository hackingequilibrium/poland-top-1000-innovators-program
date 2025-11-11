import { Menu, X } from "lucide-react";
import { useState } from "react";
import polsvLogo from "@/assets/polsv-logo.png";

const VideoHero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-visible">
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

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1435] to-[#0F23A3]/20" />

      {/* Logo */}
      <div className="absolute top-8 left-6 md:left-12 lg:left-[100px] z-20">
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
      <div className="relative z-10 flex flex-col px-4 md:px-12 lg:px-[100px] pt-32 md:pt-40">
        <div className="text-left max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="font-inter font-extrabold uppercase text-4xl md:text-6xl text-hero-text mb-2 tracking-tight leading-tight">
            Top 1000<br />Innovators
          </h1>
          <h2 className="font-inter font-semibold uppercase text-xl md:text-[30px] text-hero-text mb-8 tracking-tight">
            of Poland in Silicon Valley
          </h2>
          <div className="flex gap-2 mb-4">
            <div className="inline-block bg-[#C70828] px-4 py-2">
              <span className="font-inter font-semibold uppercase text-white text-sm">
                Dec 9–12, 2025
              </span>
            </div>
            <div className="inline-block bg-[#0F1435] px-4 py-2">
              <span className="font-inter font-semibold uppercase text-white text-sm">
                Inaugural Summit
              </span>
            </div>
          </div>
          <p className="font-inter font-light text-base lg:text-[20px] text-hero-text mb-[70px]">
            Stanford + Berkeley + Triple Ring Innovation Center
          </p>
          
          {/* Four Boxes - Responsive Grid */}
          <div className="w-screen -ml-4 md:-ml-12 lg:-ml-[100px] px-4 md:px-12 lg:px-[100px]">
            {/* First Row / Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[20px] mb-[20px]">
              <div className="bg-[#0C0F24] h-[130px] flex flex-col items-center justify-center">
                <div className="font-inter font-extrabold text-[36px] md:text-[42px] lg:text-[48px] text-hero-text leading-none">4</div>
                <div className="font-inter font-light text-xs md:text-sm lg:text-[18px] text-hero-text">Intensive Days</div>
              </div>
              <div className="bg-[#0C0F24] h-[130px] flex flex-col items-center justify-center">
                <div className="font-inter font-extrabold text-[36px] md:text-[42px] lg:text-[48px] text-hero-text leading-none">200</div>
                <div className="font-inter font-light text-xs md:text-sm lg:text-[18px] text-hero-text">Elite Researchers</div>
              </div>
              <div className="bg-[#0C0F24] h-[130px] flex flex-col items-center justify-center">
                <div className="font-inter font-extrabold text-[36px] md:text-[42px] lg:text-[48px] text-hero-text leading-none">100+</div>
                <div className="font-inter font-light text-xs md:text-sm lg:text-[18px] text-hero-text">Innovation Projects</div>
              </div>
              <div className="bg-[#0C0F24] h-[130px] flex flex-col items-center justify-center">
                <div className="font-inter font-extrabold text-[36px] md:text-[42px] lg:text-[48px] text-hero-text leading-none">12</div>
                <div className="font-inter font-light text-xs md:text-sm lg:text-[18px] text-hero-text">Top Universities</div>
              </div>
            </div>
            
            {/* Second Row */}
            <div className="bg-white py-[40px] pl-[50px] pr-[100px]">
              <h2 className="font-inter font-extrabold text-[28px] md:text-[32px] lg:text-[36px] text-[#0F1435] leading-tight uppercase mb-4">
                The Largest Polish Tech and Science <span className="hidden lg:inline"><br /></span>
                Delegation Ever in Silicon Valley
              </h2>
              <p className="font-inter font-light text-[16px] md:text-[18px] lg:text-[20px] text-[#797B8E] leading-relaxed">
                200 elite researchers from 12 Polish universities bring over 100 breakthrough projects during four intensive days. <span className="whitespace-nowrap">A unique</span> opportunity to access one of Europe's most talented pools of scientists and engineers, cost-effective R&D partnerships, €95 billion of EU funding, and commercialization-ready innovations – all concentrated in one transformational week.
              </p>
            </div>
            
            {/* New Header */}
            <div className="mt-[70px]">
              <h2 className="font-inter font-extrabold text-[28px] md:text-[32px] lg:text-[36px] text-white leading-tight uppercase text-left">
                partner with poland's top innovators
              </h2>
            </div>
            
            {/* Red Boxes */}
            <div className="mt-[40px] grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              <div className="bg-[#C70828] flex flex-col items-start justify-center pl-8 py-6 gap-2">
                <div className="inline-block bg-[#0F1435] px-4 py-2">
                  <span className="font-inter font-semibold uppercase text-white text-sm">
                    For Companies & Investors
                  </span>
                </div>
                <div className="font-inter font-extrabold text-[36px] md:text-[42px] lg:text-[48px] text-white leading-none">4</div>
                <div className="font-inter font-light text-xs md:text-sm lg:text-[18px] text-white">Intensive Days</div>
              </div>
              <div className="bg-[#C70828] flex flex-col items-start justify-center pl-8 py-6 gap-2">
                <div className="inline-block bg-[#0F1435] px-4 py-2">
                  <span className="font-inter font-semibold uppercase text-white text-sm">
                    Dec 9–12, 2025
                  </span>
                </div>
                <div className="font-inter font-extrabold text-[36px] md:text-[42px] lg:text-[48px] text-white leading-none">4</div>
                <div className="font-inter font-light text-xs md:text-sm lg:text-[18px] text-white">Intensive Days</div>
              </div>
            </div>
            
            {/* Second Instance - New Header */}
            <div className="mt-[70px]">
              <h2 className="font-inter font-extrabold text-[28px] md:text-[32px] lg:text-[36px] text-white leading-tight uppercase text-left">
                Innovation Across 8 Critical Sectors
              </h2>
            </div>
            
            {/* Second Instance - Red Boxes */}
            <div className="mt-[40px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[20px]">
              <div className="bg-white h-[130px] flex flex-col items-center justify-center">
                <div className="font-inter font-extrabold text-[36px] md:text-[42px] lg:text-[48px] text-[#0F1435] leading-none">4</div>
                <div className="font-inter font-light text-xs md:text-sm lg:text-[18px] text-[#0F1435]">Intensive Days</div>
              </div>
              <div className="bg-white h-[130px] flex flex-col items-center justify-center">
                <div className="font-inter font-extrabold text-[36px] md:text-[42px] lg:text-[48px] text-[#0F1435] leading-none">200</div>
                <div className="font-inter font-light text-xs md:text-sm lg:text-[18px] text-[#0F1435]">Elite Researchers</div>
              </div>
              <div className="bg-white h-[130px] flex flex-col items-center justify-center">
                <div className="font-inter font-extrabold text-[36px] md:text-[42px] lg:text-[48px] text-[#0F1435] leading-none">100+</div>
                <div className="font-inter font-light text-xs md:text-sm lg:text-[18px] text-[#0F1435]">Innovation Projects</div>
              </div>
              <div className="bg-white h-[130px] flex flex-col items-center justify-center">
                <div className="font-inter font-extrabold text-[36px] md:text-[42px] lg:text-[48px] text-[#0F1435] leading-none">12</div>
                <div className="font-inter font-light text-xs md:text-sm lg:text-[18px] text-[#0F1435]">Top Universities</div>
              </div>
            </div>
            
            {/* Third Instance - Red Boxes */}
            <div className="mt-[20px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[20px]">
              <div className="bg-white h-[130px] flex flex-col items-center justify-center">
                <div className="font-inter font-extrabold text-[36px] md:text-[42px] lg:text-[48px] text-[#0F1435] leading-none">4</div>
                <div className="font-inter font-light text-xs md:text-sm lg:text-[18px] text-[#0F1435]">Intensive Days</div>
              </div>
              <div className="bg-white h-[130px] flex flex-col items-center justify-center">
                <div className="font-inter font-extrabold text-[36px] md:text-[42px] lg:text-[48px] text-[#0F1435] leading-none">200</div>
                <div className="font-inter font-light text-xs md:text-sm lg:text-[18px] text-[#0F1435]">Elite Researchers</div>
              </div>
              <div className="bg-white h-[130px] flex flex-col items-center justify-center">
                <div className="font-inter font-extrabold text-[36px] md:text-[42px] lg:text-[48px] text-[#0F1435] leading-none">100+</div>
                <div className="font-inter font-light text-xs md:text-sm lg:text-[18px] text-[#0F1435]">Innovation Projects</div>
              </div>
              <div className="bg-white h-[130px] flex flex-col items-center justify-center">
                <div className="font-inter font-extrabold text-[36px] md:text-[42px] lg:text-[48px] text-[#0F1435] leading-none">12</div>
                <div className="font-inter font-light text-xs md:text-sm lg:text-[18px] text-[#0F1435]">Top Universities</div>
              </div>
            </div>
          </div>
        </div>

        {/* Ready to Collaborate Section */}
        <div className="mt-[70px]">
          <h2 className="font-inter font-extrabold text-[20px] md:text-[24px] lg:text-[26px] text-white leading-tight uppercase text-left">
            Ready to Collaborate?
          </h2>
          <p className="font-inter font-light text-base lg:text-[20px] text-white mt-2">
            Join the network shaping Poland&apos;s innovation bridge to Silicon Valley.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <button className="inline-block bg-[#C70828] px-4 py-2 hover:bg-[#A00620] transition-colors">
              <span className="font-inter font-semibold uppercase text-white text-sm">
                Lead a Session →
              </span>
            </button>
            <button className="inline-block bg-[#C70828] px-4 py-2 hover:bg-[#A00620] transition-colors">
              <span className="font-inter font-semibold uppercase text-white text-sm">
                meet the innovators →
              </span>
            </button>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-[70px] w-screen -ml-4 md:-ml-12 lg:-ml-[100px]">
          <div className="bg-[#0C0F24] h-[70px] flex items-center justify-between px-4 md:px-12 lg:px-[100px]">
            <span className="font-inter text-white text-xs md:text-sm">
              Copyright© 2025 Poland in Silicon Valley Center
            </span>
            <span className="font-inter text-white text-xs md:text-sm">
              Palo Alto, California
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
