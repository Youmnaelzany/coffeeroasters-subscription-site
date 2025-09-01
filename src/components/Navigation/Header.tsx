import Image from "next/image";
import Link from "next/link";

import Wrapper from "../Wrapper/Wrapper";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="py-8">
      <Wrapper className="flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src="/shared/desktop/logo.svg"
            alt="Logo"
            width={237}
            height={27}
          />
        </Link>
        {/* Tablet & Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center justify-between gap-8">
            <li>
              <Link
                href={"/"}
                className="cursor-pointer font-[barlow] text-[0.75rem] leading-[0.9375rem] font-bold tracking-[0.0575rem] text-[#83888F] uppercase transition-colors duration-300 ease-in-out hover:text-[#333D4B]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className="cursor-pointer font-[barlow] text-[0.75rem] leading-[0.9375rem] font-bold tracking-[0.0575rem] text-[#83888F] uppercase transition-colors duration-300 ease-in-out hover:text-[#333D4B]"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href={"/plan"}
                className="cursor-pointer font-[barlow] text-[0.75rem] leading-[0.9375rem] font-bold tracking-[0.0575rem] text-[#83888F] uppercase transition-colors duration-300 ease-in-out hover:text-[#333D4B]"
              >
                Create your plan
              </Link>
            </li>
          </ul>
        </nav>
        {/* Mobile Navigation */}
        <MobileMenu />
      </Wrapper>
    </header>
  );
};
export default Header;
