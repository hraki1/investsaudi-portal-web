import Hero from "@/components/sections/opportunities/Hero";
import PathInvesting from "@/components/sections/opportunities/PathInvesting";
import ScrollProgressIndicator from "@/components/ui/ScrollProgressIndicator";

export default function InvestmentOpportunities() {
  return (
    <div className="relative">
      <ScrollProgressIndicator />
      <Hero />
      <PathInvesting />
    </div>
  );
}