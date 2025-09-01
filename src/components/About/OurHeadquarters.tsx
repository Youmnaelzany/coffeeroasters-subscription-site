import Image from "next/image";

import Wrapper from "../Wrapper/Wrapper";

const OurHeadquarters = () => {
  return (
    <section>
      <Wrapper>
        {/* Main Section Title */}
        <div>
          <h2>Our headquarters</h2>
        </div>
        {/* Headquarters */}
        <div className="">
          {/* United Kingdom */}
          <div className="">
            <Image
              src={"about/desktop/illustration-uk.svg"}
              alt="Australia"
              width={42}
              height={50}
            />
            <h3>United Kingdom</h3>
            <div>
              <p>68 Asfordby Rd</p>
              <p>Alcaston</p>
              <p>SY6 1YA</p>
              <p>+44 1241 918425</p>
            </div>
          </div>
          {/* Canada */}
          <div>
            <Image
              src={"about/desktop/illustration-canada.svg"}
              alt="Australia"
              width={52}
              height={50}
            />
            <h3>Canada</h3>
            <div>
              <p>1528 Eglinton Avenue</p>
              <p>Toronto</p>
              <p>Ontario M4P 1A6</p>
              <p>+1 416 485 2997</p>
            </div>
          </div>
          {/* Australia */}
          <div>
            <Image
              src={"about/desktop/illustration-australia.svg"}
              alt="Australia"
              width={49}
              height={44}
            />
            <h3>Australia</h3>
            <div>
              <p>36 Swanston Street</p>
              <p>Kewell</p>
              <p>Victoria</p>
              <p>+61 4 9928 3629</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default OurHeadquarters;
