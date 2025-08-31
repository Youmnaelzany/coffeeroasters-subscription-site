import Image from "next/image";
import Link from "next/link";

import Wrapper from "./Wrapper/Wrapper";

const Header = () => {
  return (
    <header>
      <Wrapper>
        <Link href={"/"}>
          <Image
            src="/shared/desktop/logo.svg"
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
      </Wrapper>
    </header>
  );
};
export default Header;
