import Image from "next/image";

import Wrapper from "../Wrapper/Wrapper";

const WhyChooseUs = () => {
  return (
    <section className="">
      <Wrapper className="relative flex flex-col items-center">
        <div className="flex h-[902px] w-full flex-col items-center gap-6 rounded-sm bg-[#2C343E] py-16 text-center md:h-[573px] lg:h-[577px] lg:gap-8">
          <h2 className="font-[fraunces] text-[1.75rem] leading-7 font-black tracking-normal text-[#FEFCF7] md:text-[2rem] md:leading-12 lg:text-[2.5rem]">
            Why choose us?
          </h2>
          <p className="w-[279px] font-[barlow] text-[0.9375rem] leading-[1.5625rem] font-normal tracking-normal text-[#FEFCF7] md:w-[540px]">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
        <div className="absolute -bottom-96 flex flex-col items-center justify-center gap-7 md:-bottom-73 lg:-bottom-30 lg:flex-row lg:justify-between">
          <div className="flex h-[282px] w-[279px] flex-col items-center justify-center gap-8 rounded-sm bg-[#0E8784] md:h-[180px] md:w-[573px] md:flex-row lg:h-[382px] lg:w-[350px] lg:flex-col lg:items-center lg:justify-center">
            <Image
              src={"/home/desktop/icon-coffee-bean.svg"}
              alt="icon-coffee-bean"
              width={73}
              height={72}
            />
            <div className="flex w-[255px] flex-col items-center justify-center gap-6 text-center md:w-[344px] md:items-start md:text-left lg:w-[255px] lg:items-center lg:text-center">
              <h3 className="font-[fraunces] text-[1.5rem] leading-[2rem] font-black tracking-normal text-[#FEFCF7]">
                Best quality
              </h3>
              <p className="font-[barlow] text-[0.9375rem] leading-[1.5625rem] font-normal tracking-normal text-[#FEFCF7] md:text-[1rem] md:leading-[1.625rem]">
                Discover an endless variety of the world&apos;s best artisan
                coffee from each of our roasters.
              </p>
            </div>
          </div>
          <div className="flex h-[282px] w-[279px] flex-col items-center justify-center gap-8 rounded-sm bg-[#0E8784] md:h-[180px] md:w-[573px] md:flex-row lg:h-[382px] lg:w-[350px] lg:flex-col lg:items-center lg:justify-center">
            <Image
              src={"/home/desktop/icon-gift.svg"}
              alt="icon-gift"
              width={72}
              height={72}
            />
            <div className="flex w-[255px] flex-col items-center justify-center gap-6 text-center md:w-[344px] md:items-start md:text-left lg:w-[255px] lg:items-center lg:text-center">
              <h3 className="font-[fraunces] text-[1.5rem] leading-[2rem] font-black tracking-normal text-[#FEFCF7]">
                Exclusive benefits
              </h3>
              <p className="font-[barlow] text-[0.9375rem] leading-[1.5625rem] font-normal tracking-normal text-[#FEFCF7] md:text-[1rem] md:leading-[1.625rem]">
                Special offers and swag when you subscribe, including 30% off
                your first shipment.
              </p>
            </div>
          </div>
          <div className="flex h-[282px] w-[279px] flex-col items-center justify-center gap-8 rounded-sm bg-[#0E8784] md:h-[180px] md:w-[573px] md:flex-row lg:h-[382px] lg:w-[350px] lg:flex-col lg:items-center lg:justify-center">
            <Image
              src={"/home/desktop/icon-truck.svg"}
              alt="icon-truck.svg"
              width={72}
              height={50}
            />
            <div className="flex w-[255px] flex-col items-center justify-center gap-6 text-center md:w-[344px] md:items-start md:text-left lg:w-[255px] lg:items-center lg:text-center">
              <h3 className="font-[fraunces] text-[1.5rem] leading-[2rem] font-black tracking-normal text-[#FEFCF7]">
                Free shipping{" "}
              </h3>
              <p className="font-[barlow] text-[0.9375rem] leading-[1.5625rem] font-normal tracking-normal text-[#FEFCF7] md:text-[1rem] md:leading-[1.625rem]">
                We cover the cost and coffee is delivered fast. Peak freshness:
                guaranteed.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default WhyChooseUs;
