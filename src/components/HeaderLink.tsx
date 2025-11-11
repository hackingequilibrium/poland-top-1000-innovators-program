import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface HeaderLinkProps {
  href: string;
  children: ReactNode;
  external?: boolean;
}

const HeaderLink = ({ href, children, external }: HeaderLinkProps) => {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-inter font-normal text-base lg:text-xl text-white/70 hover:text-white hover:underline underline-offset-4 transition-colors"
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      to={href}
      className="font-inter font-normal text-base lg:text-xl text-white/70 hover:text-white hover:underline underline-offset-4 transition-colors"
    >
      {children}
    </Link>
  );
};

export default HeaderLink;
