import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const OrderSummary = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="xl" variant="pill">
          Create my plan
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Order Summary</DialogTitle>
          <DialogDescription>
            Review your coffee subscription details before proceeding to
            checkout.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="rounded-lg bg-gray-50 p-4">
            <p className="text-sm text-gray-700">
              "I drink coffee _____, with a _____ type of bean. _____ ground ala
              _____, sent to me _____."
            </p>
          </div>

          <div className="text-sm text-gray-600">
            <p>
              Is this correct? You can proceed to checkout or go back to plan
              selection if something is off. Subscription discount codes can
              also be redeemed at the checkout.
            </p>
          </div>

          <div className="flex items-center justify-between border-t pt-4">
            <h4 className="text-lg font-semibold">$_____/month</h4>
            <Button size="lg" variant="pill">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderSummary;
