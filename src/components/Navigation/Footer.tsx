import Image from "next/image";
import Link from "next/link";

import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Wrapper from "./Wrapper/Wrapper";

const Footer = () => {
  return (
    <footer>
      <Wrapper>
        <Link href={"/"}>
          <Image
            src="/shared/desktop/logo-white.svg"
            alt="Logo"
            width={237}
            height={27}
          />
        </Link>
        <nav>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>About us</Link>
            </li>
            <li>
              <Link href={"/"}>Create your plan</Link>
            </li>
          </ul>
        </nav>
        <div className="">
          <FaFacebookSquare />
          <FaXTwitter />
          <FaInstagram />
        </div>
      </Wrapper>
    </footer>
  );
};
export default Footer;
