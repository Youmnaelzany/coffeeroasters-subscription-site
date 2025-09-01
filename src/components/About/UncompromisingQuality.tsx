import Image from "next/image";

import Wrapper from "../Wrapper/Wrapper";

const UncompromisingQuality = () => {
  return (
    <section>
      <Wrapper>
        <div>
          <h2>Uncompromising quality</h2>
          <p>
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
        <div className="">
          <Image
            src={"/about/desktop/image-quality.jpg"}
            alt="Cup of Coffee"
            width={445}
            height={474}
            className="hidden lg:block"
          />
          <Image
            src={"/about/tablet/image-quality.jpg"}
            alt="Cup of Coffee"
            width={573}
            height={320}
            className="hidden md:block lg:hidden"
          />
          <Image
            src={"/about/mobile/image-quality.jpg"}
            alt="Cup of Coffee"
            width={279}
            height={156}
            className="md:hidden"
          />
        </div>
      </Wrapper>
    </section>
  );
};
export default UncompromisingQuality;
