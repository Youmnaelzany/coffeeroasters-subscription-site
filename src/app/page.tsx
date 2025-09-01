import GreatCoffee from "@/components/Home/GreatCoffee";
import HowItWorks from "@/components/Home/HowItWorks";
import OurCollection from "@/components/Home/OurCollection";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export default function Home() {
  return (
    <main className="">
      <GreatCoffee />
      <OurCollection />
      <WhyChooseUs />
      <HowItWorks />
    </main>
  );
}
