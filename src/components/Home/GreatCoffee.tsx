import Link from "next/link";

import Wrapper from "../Wrapper/Wrapper";
import { Button } from "../ui/button";

const GreatCoffee = () => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-0">
      <Wrapper className="relative flex h-[500px] justify-center rounded-sm bg-[url('/home/mobile/image-hero-coffeepress.jpg')] bg-cover bg-center bg-no-repeat md:justify-start md:bg-[url('/home/tablet/image-hero-coffeepress.jpg')] lg:h-[600px] lg:justify-start lg:bg-[url('/home/desktop/image-hero-coffeepress.jpg')]">
        {/* Overlay */}
        <div className="absolute inset-0 z-10">
          {/* Gradient Overlay */}
          <div className="h-full w-full rounded-sm bg-gradient-to-r from-black/60 to-black/40" />
        </div>

        {/* Content Layer */}
        <div className="relative z-20 flex flex-col justify-center">
          {/* The Text */}
          <div className="flex-col justify-center gap-6 space-y-14 text-center text-white sm:px-8 md:text-left lg:px-16">
            <div className="w-[318px] space-y-8 md:w-[493px]">
              <h1 className="font-[fraunces] text-[2.5rem] leading-[3rem] font-black tracking-normal md:text-[4.5rem] md:leading-[4.5rem]">
                Great coffee made simple.
              </h1>
              <p className="font-[barlow] text-[0.9375rem] leading-[1.5625rem] font-normal tracking-normal">
                Start your mornings with the world&apos;s best coffees. Try our
                expertly curated artisan coffees from our best roasters
                delivered directly to your door, at your schedule.
              </p>
            </div>
            <Button size="xl" variant="pill" asChild>
              <Link href="/plan">Create your plan</Link>
            </Button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default GreatCoffee;
