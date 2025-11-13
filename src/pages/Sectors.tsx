import { Link } from "react-router-dom";
import polsvLogo from "@/assets/polsv-logo.png";
import box1Icon from "@/assets/box1.png";
import box2Icon from "@/assets/box2.png";
import box3Icon from "@/assets/box3.png";
import box4Icon from "@/assets/box4.png";
import box5Icon from "@/assets/box5.png";
import box6Icon from "@/assets/box6.png";
import box7Icon from "@/assets/box7.png";
import box8Icon from "@/assets/box8.png";

const Sectors = () => {
  return (
    <main className="bg-[#0F1435] min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-12 lg:px-[100px] py-8">
        <div className="flex items-center gap-4">
          <img src={polsvLogo} alt="PolSV Logo" className="h-12 md:h-16 w-auto" />
          <div className="font-inter font-semibold text-white text-lg md:text-xl lg:text-2xl">
            Top 1000 Innovators of Poland in Silicon Valley
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-grow px-4 md:px-12 lg:px-[100px] py-12">
        <div className="w-full">
          {/* Header */}
          <div className="mb-[40px]">
            <h2 className="font-inter font-extrabold text-[28px] md:text-[32px] lg:text-[36px] text-white leading-tight uppercase text-left">
              Innovation Across 8 Critical Sectors
            </h2>
          </div>
          
          {/* First Row - Boxes 1-4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[20px] mb-[20px]">
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
          
          {/* Second Row - Boxes 5-8 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[20px]">
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

      {/* Footer */}
      <footer className="mt-auto">
        <div className="bg-[#0C0F24] h-[70px] flex items-center justify-between px-4 md:px-12 lg:px-[100px]">
          <span className="font-inter text-white text-xs md:text-sm">
            Copyright© 2025 Poland in Silicon Valley Center
          </span>
          <span className="font-inter text-white text-xs md:text-sm">
            Palo Alto, California
          </span>
        </div>
      </footer>
    </main>
  );
};

export default Sectors;
