import Wrapper from "../Navigation/Wrapper/Wrapper";
import { Button } from "../ui/button";

const GreatCoffee = () => {
  return (
    <section className="">
      <Wrapper>
        <div>
          <h1>Great coffee made simple.</h1>
          <p>
            Start your mornings with the world&apos;s best coffees. Try our
            expertly curated artisan coffees from our best roasters delivered
            directly to your door, at your schedule.
          </p>
          <Button>Create your plan</Button>
        </div>
      </Wrapper>
    </section>
  );
};
export default GreatCoffee;
