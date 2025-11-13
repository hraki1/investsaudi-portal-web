import BusinessOpportunities from "@/components/sections/opportunities/BusinessOpportunities";
import Hero from "@/components/sections/opportunities/Hero";

export default function InvestmentOpportunities() {
  return (
    <div>
      <Hero />
      <div className="mx-auto">
        <BusinessOpportunities />
      </div>
    </div>
  );
}