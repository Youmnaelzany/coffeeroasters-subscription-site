import CreatePlan from "@/components/Plan/CreatePlan";
import HowToDrink from "@/components/Plan/HowToDrink";
import StepsToChoose from "@/components/Plan/StepsToChoose";

export default function PlanPage() {
  return (
    <main className="">
      <CreatePlan />
      <StepsToChoose />
      <HowToDrink />
    </main>
  );
}
