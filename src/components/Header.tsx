import { Link } from "react-router-dom";
import HeaderLink from "./HeaderLink";
import polsvLogo from "@/assets/polsv-logo.png";

interface HeaderProps {
  simplified?: boolean;
}

const Header = ({ simplified = false }: HeaderProps) => {
  return (
    <header className="relative z-10">
      <nav className="absolute top-0 right-0 left-0 px-8 lg:px-[100px] pt-8">
        <div className={simplified ? "max-w-4xl mx-auto flex justify-between items-start" : "flex justify-between items-start"}>
          <div className="flex flex-row items-center gap-4">
          <Link to="/">
            <img 
              src={polsvLogo} 
              alt="PolSV Logo" 
              className={simplified ? "w-[60px] h-auto" : "w-[80%] h-auto"}
            />
          </Link>
          {simplified ? (
            <div className="text-white">
              <h1 className="font-inter font-semibold text-lg md:text-xl lg:text-2xl uppercase whitespace-nowrap">
                Top 1000 Innovators of Poland in Silicon Valley
              </h1>
            </div>
          ) : (
            <div className="text-white">
              <h1 className="font-inter font-extrabold text-3xl md:text-4xl lg:text-5xl uppercase leading-tight">
                Top 1000<br />
                Innovators
              </h1>
              <p className="font-inter font-semibold text-xl md:text-2xl lg:text-[30px] uppercase mt-2">
                of Poland in Silicon Valley
              </p>
            </div>
          )}
          </div>
        
          {!simplified && (
          <div className="hidden md:flex gap-8 items-center pt-2">
            <HeaderLink href="https://polsv.org/home/" external>About PolSV</HeaderLink>
            <HeaderLink href="/lead-session">Lead a Session</HeaderLink>
            <HeaderLink href="https://polsv.org/contact/" external>Contact</HeaderLink>
          </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
