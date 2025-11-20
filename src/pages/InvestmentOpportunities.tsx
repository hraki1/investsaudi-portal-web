import Blogs from "@/components/sections/landingPage/Blogs";
import Hero from "@/components/sections/opportunities/Hero";
import QRCard from "@/components/sections/opportunities/QRCards";
import SuccessStories from "@/components/sections/opportunities/SuccessStories";
import InvestmentProjects from "@/components/sections/opportunities/Investment-projects/InvestmentProjects";
import BusinessOpportunities from "@/components/sections/opportunities/opportunities-list/BusinessOpportunities";
import TrustedCompanies from "@/components/sections/opportunities/TrustedCompanies";
import TrustedPartners from "@/components/sections/opportunities/TrustedPartners";
import ScrollProgressIndicator from "@/components/ui/ScrollProgressIndicator";
import NeedMoreInfo from "@/components/sections/opportunities/NeedMoreInfo";

export default function InvestmentOpportunities() {
  return (
    <div className="relative">
      <ScrollProgressIndicator />
      <Hero />
      <InvestmentProjects />
      <div className="mx-auto">
        <BusinessOpportunities />
      </div>
      <TrustedCompanies />
      <SuccessStories/>
      <Blogs />
      <TrustedPartners />
      <NeedMoreInfo />
      <QRCard />
    </div>
  );
}

