import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Wrapper from "../Wrapper/Wrapper";
import OrderSummary from "./OrderSummary";

const HowToDrink = () => {
  return (
    <section>
      <Wrapper>
        {/* The Steps */}
        <div>
          <h2>
            <span>01</span> Preferences
          </h2>
          <h2>
            <span>02</span> Bean type
          </h2>
          <h2>
            <span>03</span> Quantity
          </h2>
          <h2>
            <span>04</span> Grind option
          </h2>
          <h2>
            <span>05</span> Deliveries
          </h2>
        </div>
        {/* The Choices */}
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {/* Step 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h2>How do you drink your coffee?</h2>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div>
                <div>
                  <h3>Capsule</h3>
                  <p>Compatible with Nespresso systems and similar brewers</p>
                </div>
                <div>
                  <h3>Filter</h3>
                  <p>
                    For pour over or drip methods like Aeropress, Chemex, and
                    V60
                  </p>
                </div>
                <div>
                  <h3>Espresso</h3>
                  <p>
                    Dense and finely ground beans for an intense, flavorful
                    experience
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          {/* Step 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <h2>What type of coffee?</h2>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div>
                <div>
                  <h3>Single origin</h3>
                  <p>
                    Distinct, high quality coffee from a specific family-owned
                    farm
                  </p>
                </div>
                <div>
                  <h3>Decaf</h3>
                  <p>
                    Just like regular coffee, except the caffeine has been
                    removed
                  </p>
                </div>
                <div>
                  <h3>Blended</h3>
                  <p>
                    Combination of two or three dark roasted beans of organic
                    coffees
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          {/* Step 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <h2>How much would you like?</h2>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div>
                <div>
                  <h3>250g</h3>
                  <p>
                    Perfect for the solo drinker. Yields about 12 delicious
                    cups.
                  </p>
                </div>
                <div>
                  <h3>500g</h3>
                  <p>
                    Perfect option for a couple. Yields about 40 delectable
                    cups.
                  </p>
                </div>
                <div>
                  <h3>1000g</h3>
                  <p>
                    Perfect for offices and events. Yields about 90 delightful
                    cups.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          {/* Step 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <h2>Want us to grind them?</h2>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div>
                <div>
                  <h3>Wholebean</h3>
                  <p>Best choice if you cherish the full sensory experience</p>
                </div>
                <div>
                  <h3>Filter</h3>
                  <p>
                    For drip or pour-over coffee methods such as V60 or
                    Aeropress
                  </p>
                </div>
                <div>
                  <h3>Cafetiére</h3>
                  <p>
                    Course ground beans specially suited for french press coffee
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          {/* Step 5 */}
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <h2>How often should we deliver?</h2>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div>
                <div>
                  <h3>Every week</h3>
                  <p>
                    $14.00 per shipment. Includes free first-class shipping.
                  </p>
                </div>
                <div>
                  <h3>Every 2 weeks</h3>
                  <p>$17.25 per shipment. Includes free priority shipping.</p>
                </div>
                <div>
                  <h3>Every month</h3>
                  <p>$22.50 per shipment. Includes free priority shipping.</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* Create my plan button */}
        <div className="">
          {/* The Order Summary */}
          <div>
            <h3>Order Summary</h3>
            <p>
              “I drink coffee _____, with a _____ type of bean. _____ ground ala
              _____, sent to me _____.”
            </p>
          </div>
          {/* The Create my plan button */}
          <div className="">
            <OrderSummary />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default HowToDrink;
