import Image from "next/image";

import Wrapper from "../Wrapper/Wrapper";

const OurCommitment = () => {
  return (
    <section className="py-28 lg:px-16">
      <Wrapper className="flex flex-col items-center justify-center gap-12 md:flex-row md:justify-between">
        <>
          <Image
            src={"/about/desktop/image-commitment.jpg"}
            alt="Barista Making Coffee"
            width={445}
            height={520}
            className="hidden lg:block"
          />
          <Image
            src={"/about/tablet/image-commitment.jpg"}
            alt="Barista Making Coffee"
            width={281}
            height={470}
            className="hidden md:block lg:hidden"
          />
          <Image
            src={"/about/mobile/image-commitment.jpg"}
            alt="Barista Making Coffee"
            width={327}
            height={400}
            className="md:hidden"
          />
        </>
        <div className="flex w-[327px] flex-col items-center justify-center gap-7.5 text-center md:w-[339px] md:items-start md:text-left lg:w-[540px]">
          <h2 className="font-[fraunces] text-[2rem] leading-12 font-black tracking-normal text-[#333D4B] lg:w-[text-[2.5rem]]">
            Our commitment
          </h2>
          <p className="font-[barlow] text-base leading-[1.625rem] font-normal tracking-normal text-[#333D4B]/80">
            We&apos;re built on a simple mission and a commitment to doing good
            along the way. We want to make it easy for you to discover and brew
            the world&apos;s best coffee at home. It all starts at the source.
            To locate the specific lots we want to purchase, we travel nearly 60
            days a year trying to understand the challenges and opportunities in
            each of these places. We collaborate with exceptional coffee growers
            and empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </Wrapper>
    </section>
  );
};
export default OurCommitment;
