import Image from "next/image";
import Link from "next/link";

import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Wrapper from "../Wrapper/Wrapper";

const Footer = () => {
  return (
    <footer className="px-4 py-16 sm:px-6 lg:px-0">
      <Wrapper className="flex flex-col items-center justify-center gap-8 bg-[#2C343E] p-8 lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center justify-center gap-8 md:gap-4 lg:flex-row lg:justify-between lg:gap-12">
          <Link href={"/"}>
            <Image
              src="/shared/desktop/logo-white.svg"
              alt="Logo"
              width={237}
              height={27}
            />
          </Link>
          <nav>
            <ul className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between">
              <li>
                <Link
                  href={"/"}
                  className="cursor-pointer font-[barlow] text-[0.75rem] leading-[0.9375rem] font-bold tracking-[0.0575rem] text-[#83888F] uppercase transition-colors duration-300 ease-in-out hover:text-[#FEFCF7]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className="cursor-pointer font-[barlow] text-[0.75rem] leading-[0.9375rem] font-bold tracking-[0.0575rem] text-[#83888F] uppercase transition-colors duration-300 ease-in-out hover:text-[#FEFCF7]"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href={"/plan"}
                  className="cursor-pointer font-[barlow] text-[0.75rem] leading-[0.9375rem] font-bold tracking-[0.0575rem] text-[#83888F] uppercase transition-colors duration-300 ease-in-out hover:text-[#FEFCF7]"
                >
                  Create your plan
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center justify-between gap-6">
          {/* Facebook Page Link */}
          <Tooltip>
            <TooltipTrigger>
              <Link href={"/"}>
                <FaFacebookSquare className="size-6 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:text-[#FDD6BA]" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Facebook</p>
            </TooltipContent>
          </Tooltip>
          {/* X Page Link */}
          <Tooltip>
            <TooltipTrigger>
              <Link href={"/"}>
                <FaXTwitter className="size-6 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:text-[#FDD6BA]" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>X</p>
            </TooltipContent>
          </Tooltip>
          {/* Instagram Page Link */}
          <Tooltip>
            <TooltipTrigger>
              <Link href={"/"}>
                <FaInstagram className="size-6 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:text-[#FDD6BA]" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Instagram</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </Wrapper>
    </footer>
  );
};
export default Footer;
