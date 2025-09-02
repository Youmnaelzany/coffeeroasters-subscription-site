import Image from "next/image";

import Wrapper from "../Wrapper/Wrapper";

const HowItWorks = () => {
  return (
    <section className="pt-[33rem] pb-16 md:pt-[26rem] lg:px-16 lg:pt-64">
      <Wrapper className="flex flex-col items-center justify-center gap-14 md:items-start">
        <div className="">
          <h2 className="font-[fraunces] text-[1.5rem] leading-[2rem] font-black tracking-normal">
            How it works
          </h2>
        </div>
        <div className="hidden md:block">
          <Image src={"/shared/line.png"} alt="Line" width={497} height={31} />
        </div>
        <div className="flex flex-col justify-between gap-10 md:flex-row md:gap-4 lg:gap-16">
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h3 className="font-[fraunces] text-[4.5rem] leading-[4.5rem] font-black tracking-normal text-[#FDD6BA]">
              01
            </h3>
            <h4 className="w-[327px] font-[fraunces] text-[1.75rem] leading-8 font-black tracking-normal text-[#333D4B] md:w-[223px] lg:w-[262px] lg:text-[2rem] lg:leading-[2.25rem]">
              Pick your coffee
            </h4>
            <p className="w-[327px] font-[barlow] text-[0.9375rem] leading-[1.5625rem] font-normal tracking-normal text-[#333D4B] md:w-[223px] lg:w-[285px] lg:text-[1rem] lg:leading-[1.625rem]">
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </div>
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h3 className="font-[fraunces] text-[4.5rem] leading-[4.5rem] font-black tracking-normal text-[#FDD6BA]">
              02
            </h3>
            <h4 className="w-[327px] font-[fraunces] text-[1.75rem] leading-8 font-black tracking-normal text-[#333D4B] md:w-[223px] lg:w-[262px] lg:text-[2rem] lg:leading-[2.25rem]">
              Choose the frequency
            </h4>
            <p className="w-[327px] font-[barlow] text-[0.9375rem] leading-[1.5625rem] font-normal tracking-normal text-[#333D4B] md:w-[223px] lg:w-[285px] lg:text-[1rem] lg:leading-[1.625rem]">
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h3 className="font-[fraunces] text-[4.5rem] leading-[4.5rem] font-black tracking-normal text-[#FDD6BA]">
              03
            </h3>
            <h4 className="w-[327px] font-[fraunces] text-[1.75rem] leading-8 font-black tracking-normal text-[#333D4B] md:w-[223px] lg:w-[262px] lg:text-[2rem] lg:leading-[2.25rem]">
              Receive and enjoy!
            </h4>
            <p className="w-[327px] font-[barlow] text-[0.9375rem] leading-[1.5625rem] font-normal tracking-normal text-[#333D4B] md:w-[223px] lg:w-[285px] lg:text-[1rem] lg:leading-[1.625rem]">
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default HowItWorks;
