import Image from "next/image";

import Wrapper from "../Wrapper/Wrapper";

const OurCollection = () => {
  return (
    <section className="py-16 md:pt-24 md:pb-[4.5rem] lg:pt-32 lg:pb-24">
      <Wrapper className="flex flex-col gap-6 md:gap-0">
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h2 className="bg-gradient-to-b from-[#83888F] to-transparent bg-clip-text font-[fraunces] text-[2.5rem] leading-[3rem] font-black tracking-normal text-transparent md:text-[4.5rem] md:leading-[4.5rem] lg:text-[9.375rem] lg:leading-[9.375rem]">
            Our collection
          </h2>
        </div>
        {/* The Coffees */}
        <div className="relative z-50 flex flex-col items-center justify-center gap-8 -bg-conic-210 md:-top-6 md:gap-0 lg:-top-8 lg:flex-row lg:items-start lg:justify-between lg:px-16">
          {/* Gran Espresso */}
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-between lg:flex-col lg:justify-center">
            <Image
              src={"/home/desktop/image-gran-espresso.png"}
              alt="Danche"
              width={200}
              height={151}
              className="md:h-[193px] md:w-[255px]"
            />
            <div className="flex w-[282px] flex-col items-center justify-center gap-6 text-center md:items-start md:text-left lg:w-[252px] lg:items-center lg:text-center">
              <h3 className="font-[fraunces] text-[1.5rem] leading-[2rem] font-black tracking-normal">
                Gran Espresso
              </h3>
              <p className="font-[barlow] text-[0.9375rem] leading-[1.5625rem] font-normal tracking-normal">
                Light and flavorful blend with cocoa and black pepper for an
                intense experience
              </p>
            </div>
          </div>
          {/* Planalto */}
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-between lg:flex-col lg:justify-center">
            <Image
              src={"/home/desktop/image-planalto.png"}
              alt="Danche"
              width={200}
              height={151}
              className="md:h-[193px] md:w-[255px]"
            />
            <div className="flex w-[282px] flex-col items-center justify-center gap-6 text-center md:items-start md:text-left lg:w-[252px] lg:items-center lg:text-center">
              <h3 className="font-[fraunces] text-[1.5rem] leading-[2rem] font-black tracking-normal">
                Planalto
              </h3>
              <p className="font-[barlow] text-[0.9375rem] leading-[1.5625rem] font-normal tracking-normal">
                Brazilian dark roast with rich and velvety body, and hints of
                fruits and nuts
              </p>
            </div>
          </div>
          {/* Piccollo */}
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-between lg:flex-col lg:justify-center">
            <Image
              src={"/home/desktop/image-piccollo.png"}
              alt="Danche"
              width={200}
              height={151}
              className="md:h-[193px] md:w-[255px]"
            />
            <div className="flex w-[282px] flex-col items-center justify-center gap-6 text-center md:items-start md:text-left lg:w-[252px] lg:items-center lg:text-center">
              <h3 className="font-[fraunces] text-[1.5rem] leading-[2rem] font-black tracking-normal">
                Piccollo
              </h3>
              <p className="font-[barlow] text-[0.9375rem] leading-[1.5625rem] font-normal tracking-normal">
                Mild and smooth blend featuring notes of toasted almond and
                dried cherry
              </p>
            </div>
          </div>
          {/* Danche */}
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-between lg:flex-col lg:justify-center">
            <Image
              src={"/home/desktop/image-danche.png"}
              alt="Danche"
              width={200}
              height={151}
              className="md:h-[193px] md:w-[255px]"
            />
            <div className="flex w-[282px] flex-col items-center justify-center gap-6 text-center md:items-start md:text-left lg:w-[252px] lg:items-center lg:text-center">
              <h3 className="font-[fraunces] text-[1.5rem] leading-[2rem] font-black tracking-normal">
                Danche
              </h3>
              <p className="font-[barlow] text-[0.9375rem] leading-[1.5625rem] font-normal tracking-normal">
                Ethiopian hand-harvested blend densely packed with vibrant fruit
                notes
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default OurCollection;
