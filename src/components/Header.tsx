import { Link } from "react-router-dom";
import HeaderLink from "./HeaderLink";
import polsvLogo from "@/assets/polsv-logo.png";

const Header = () => {
  return (
    <header className="relative z-10">
      <nav className="absolute top-0 right-0 left-0 flex justify-between items-start px-8 lg:px-[100px] pt-8">
        <div className="flex flex-col items-start">
          <Link to="/">
            <img 
              src={polsvLogo} 
              alt="PolSV Logo" 
              className="w-[80%] h-auto mb-4"
            />
          </Link>
          <div className="text-white">
            <h1 className="font-inter font-extrabold text-3xl md:text-4xl lg:text-5xl uppercase leading-tight">
              Top 1000<br />
              Innovators
            </h1>
            <p className="font-inter font-semibold text-xl md:text-2xl lg:text-[30px] uppercase mt-2">
              of Poland in Silicon Valley
            </p>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 items-center pt-2">
          <HeaderLink href="https://polsv.org/home/" external>About PolSV</HeaderLink>
          <HeaderLink href="/lead-session">Lead a Session</HeaderLink>
          <HeaderLink href="https://polsv.org/contact/" external>Contact</HeaderLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
