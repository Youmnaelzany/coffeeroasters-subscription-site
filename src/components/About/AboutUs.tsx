import Wrapper from "../Wrapper/Wrapper";

const AboutUs = () => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-0">
      <Wrapper className="relative flex h-[400px] justify-center rounded-sm bg-[url('/about/mobile/image-hero-whitecup.jpg')] bg-cover bg-center bg-no-repeat md:justify-start md:bg-[url('/about/tablet/image-hero-whitecup.jpg')] lg:h-[450px] lg:justify-start lg:bg-[url('/about/desktop/image-hero-whitecup.jpg')]">
        {/* Overlay */}
        <div className="absolute inset-0 z-10">
          {/* Gradient Overlay */}
          <div className="h-full w-full rounded-sm bg-gradient-to-r from-black/60 to-black/40" />
        </div>

        {/* Content Layer */}
        <div className="relative z-20 flex flex-col justify-center">
          <div className="flex w-[279px] flex-col justify-center gap-6 text-center sm:px-8 md:w-[398px] md:text-left lg:w-[445px] lg:px-16">
            {/* The Text */}
            <h2 className="font-[fraunces] text-[1.75rem] leading-7 font-black tracking-normal text-[#FEFCF7] md:text-[2rem] md:leading-10 lg:text-[2.5rem]">
              About us
            </h2>
            <p className="line-clamp-6 font-[barlow] text-[0.75rem] leading-[1.5625rem] font-normal tracking-normal text-[#FEFCF7]">
              Coffeeroasters began its journey of exotic discovery in 1999,
              highlighting stories of coffee from around the world. We have
              since been dedicated to bring the perfect cup - from bean to brew
              - in every shipment.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default AboutUs;
