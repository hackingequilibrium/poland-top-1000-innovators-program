import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import polsvLogo from "@/assets/polsv-logo.png";
import { useCountUp } from "@/hooks/useCountUp";
import box1Icon from "@/assets/box1.png";
import box2Icon from "@/assets/box2.png";
import box3Icon from "@/assets/box3.png";
import box4Icon from "@/assets/box4.png";
import box5Icon from "@/assets/box5.png";
import box6Icon from "@/assets/box6.png";
import box7Icon from "@/assets/box7.png";
import box8Icon from "@/assets/box8.png";

const VideoHero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const counter4 = useCountUp(4, 2000, true, 500);
  const counter200 = useCountUp(200, 2000, true, 500);
  const counter100 = useCountUp(100, 2000, true, 500);
  const counter12 = useCountUp(12, 2000, true, 500);

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
            <a href="https://polsv.org/home/" target="_blank" rel="noopener noreferrer" className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-hero-text after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              About PolSV
            </a>
          </li>
          <li>
            <Link to="/lead-session" className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-hero-text after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              Lead a Session
            </Link>
          </li>
          <li>
            <a href="https://polsv.org/contact/" target="_blank" rel="noopener noreferrer" className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-hero-text after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
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
                  href="https://polsv.org/home/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-hero-text after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About PolSV
                </a>
              </li>
              <li>
                <Link 
                  to="/lead-session" 
                  className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-hero-text after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Lead a Session
                </Link>
              </li>
              <li>
                <a 
                  href="https://polsv.org/contact/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-hero-text after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
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
              <div ref={counter4.elementRef} className="bg-[#0C0F24] h-[130px] flex flex-col items-center justify-center">
                <div className="font-inter font-extrabold text-[36px] md:text-[42px] lg:text-[48px] text-hero-text leading-none">{counter4.count}</div>
                <div className="font-inter font-light text-xs md:text-sm lg:text-[18px] text-hero-text">Intensive Days</div>
              </div>
              <div ref={counter200.elementRef} className="bg-[#0C0F24] h-[130px] flex flex-col items-center justify-center">
                <div className="font-inter font-extrabold text-[36px] md:text-[42px] lg:text-[48px] text-hero-text leading-none">{counter200.count}</div>
                <div className="font-inter font-light text-xs md:text-sm lg:text-[18px] text-hero-text">Elite Researchers</div>
              </div>
              <div ref={counter100.elementRef} className="bg-[#0C0F24] h-[130px] flex flex-col items-center justify-center">
                <div className="font-inter font-extrabold text-[36px] md:text-[42px] lg:text-[48px] text-hero-text leading-none">{counter100.count}+</div>
                <div className="font-inter font-light text-xs md:text-sm lg:text-[18px] text-hero-text">Innovation Projects</div>
              </div>
              <div ref={counter12.elementRef} className="bg-[#0C0F24] h-[130px] flex flex-col items-center justify-center">
                <div className="font-inter font-extrabold text-[36px] md:text-[42px] lg:text-[48px] text-hero-text leading-none">{counter12.count}</div>
                <div className="font-inter font-light text-xs md:text-sm lg:text-[18px] text-hero-text">Top Universities</div>
              </div>
            </div>
            
            {/* Second Row */}
            <div className="bg-white py-[40px] pl-[50px] pr-[100px]">
              <h2 className="font-inter font-extrabold text-[28px] md:text-[32px] lg:text-[36px] text-[#0F1435] leading-tight uppercase mb-4">
                The Largest Polish Tech and Science <span className="hidden lg:inline"><br /></span>
                Delegation Ever in Silicon Valley
              </h2>
              <p className="font-inter font-light text-base md:text-lg text-[#797B8E] leading-relaxed">
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
              <div className="bg-gradient-to-br from-[#C70828] to-[#A80E34] flex flex-col items-start justify-start p-[40px] gap-2">
                <div className="inline-block bg-[#0F1435] px-4 py-2">
                  <span className="font-inter font-bold uppercase text-white text-lg">
                    For Companies & Investors
                  </span>
                </div>
                <div className="font-inter font-semibold text-base md:text-lg lg:text-xl text-white">
                  Access world-class innovation,<br className="lg:hidden" /> ready to scale
                </div>
                <ul className="font-inter font-normal text-base md:text-lg text-white space-y-2 mt-2 list-disc list-outside ml-5">
                  <li>First-mover advantage on <strong>100+</strong> commercialization-ready projects</li>
                  <li>Cost-effective R&D — <strong>50–70%</strong> lower than US costs, with EU-level quality</li>
                  <li>Exceptional talent — Poland ranks <strong>#3</strong> globally in math and CS education</li>
                  <li>Partnerships with startups ready for global scale</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#C70828] to-[#A80E34] flex flex-col items-start justify-start p-[40px] gap-2">
                <div className="inline-block bg-[#0F1435] px-4 py-2">
                  <span className="font-inter font-bold uppercase text-white text-lg">
                    For universities
                  </span>
                </div>
                <div className="font-inter font-semibold text-base md:text-lg lg:text-xl text-white">
                  Collaborate, co-fund,<br className="lg:hidden" /> and co-create the future
                </div>
                <ul className="font-inter font-normal text-base md:text-lg text-white space-y-2 mt-2 list-disc list-outside ml-5">
                  <li>Research collaboration with Poland's top scientists and engineering talent</li>
                  <li>Joint US–EU funding opportunities</li>
                  <li>Student pipelines: PhD / Post-doc exchange programs</li>
                  <li>Poland–US Research Fellowships</li>
                  <li>Faculty Innovation Sabbaticals</li>
                </ul>
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
              <div className="bg-white pt-4 pb-8 flex flex-col items-center justify-start gap-1 min-h-[200px]">
                <div className="h-[100px] flex items-center justify-center">
                  <img src={box1Icon} alt="Innovation Icon" className="w-auto h-auto scale-[0.77]" />
                </div>
                <div className="font-inter font-light text-xs md:text-sm lg:text-[18px] text-[#0F1435] text-center">Space Engineering<br />& Aerospace</div>
              </div>
              <div className="bg-white pt-4 pb-8 flex flex-col items-center justify-start gap-1 min-h-[200px]">
                <div className="h-[100px] flex items-center justify-center">
                  <img src={box2Icon} alt="Researchers Icon" className="w-auto h-auto scale-[0.77]" />
                </div>
                <div className="font-inter font-light text-xs md:text-sm lg:text-[18px] text-[#0F1435] text-center">Biomedical Engineering<br />& Healthcare</div>
              </div>
              <div className="bg-white pt-4 pb-8 flex flex-col items-center justify-start gap-1 min-h-[200px]">
                <div className="h-[100px] flex items-center justify-center">
                  <img src={box3Icon} alt="Projects Icon" className="w-auto h-auto scale-[0.77]" />
                </div>
                <div className="font-inter font-light text-xs md:text-sm lg:text-[18px] text-[#0F1435] text-center">Computer Science<br />& AI</div>
              </div>
              <div className="bg-white pt-4 pb-8 flex flex-col items-center justify-start gap-1 min-h-[200px]">
                <div className="h-[100px] flex items-center justify-center">
                  <img src={box4Icon} alt="Universities Icon" className="w-auto h-auto scale-[0.77]" />
                </div>
                <div className="font-inter font-light text-xs md:text-sm lg:text-[18px] text-[#0F1435] text-center">Energy & Environmental<br />Engineering</div>
              </div>
            </div>
            
            {/* Third Instance - Red Boxes */}
            <div className="mt-[20px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[20px]">
              <div className="bg-white pt-4 pb-8 flex flex-col items-center justify-start gap-1 min-h-[200px]">
                <div className="h-[100px] flex items-center justify-center">
                  <img src={box5Icon} alt="Electronics Icon" className="w-auto h-auto scale-[0.77]" />
                </div>
                <div className="font-inter font-light text-xs md:text-sm lg:text-[18px] text-[#0F1435] text-center">Chip Technology<br />& Data centers</div>
              </div>
              <div className="bg-white pt-4 pb-8 flex flex-col items-center justify-start gap-1 min-h-[200px]">
                <div className="h-[100px] flex items-center justify-center">
                  <img src={box6Icon} alt="Engineering Icon" className="w-auto h-auto scale-[0.77]" />
                </div>
                <div className="font-inter font-light text-xs md:text-sm lg:text-[18px] text-[#0F1435] text-center">Mechanical & Materials<br />Engineering</div>
              </div>
              <div className="bg-white pt-4 pb-8 flex flex-col items-center justify-start gap-1 min-h-[200px]">
                <div className="h-[100px] flex items-center justify-center">
                  <img src={box7Icon} alt="Construction Icon" className="w-auto h-auto scale-[0.77]" />
                </div>
                <div className="font-inter font-light text-xs md:text-sm lg:text-[18px] text-[#0F1435] text-center">Civil Engineering<br />& Infrastructure</div>
              </div>
              <div className="bg-white pt-4 pb-8 flex flex-col items-center justify-start gap-1 min-h-[200px]">
                <div className="h-[100px] flex items-center justify-center">
                  <img src={box8Icon} alt="Network Icon" className="w-auto h-auto scale-[0.77]" />
                </div>
                <div className="font-inter font-light text-xs md:text-sm lg:text-[18px] text-[#0F1435] text-center">Humanities<br />& Social Sciences</div>
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
            <Link to="/lead-session" className="inline-block bg-[#C70828] px-4 py-2 hover:bg-[#A00620] transition-colors">
              <span className="font-inter font-semibold uppercase text-white text-sm">
                Lead a Session →
              </span>
            </Link>
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
