import BusinessOpportunities from "@/components/sections/opportunities/BusinessOpportunities";
import Hero from "@/components/sections/opportunities/Hero";
import PathInvesting from "@/components/sections/opportunities/PathInvesting";
import TrustedPartners from "@/components/sections/opportunities/TrustedPartners";
import TrustedCompanies from "@/components/sections/opportunities/TrustedCompanies";
import ScrollProgressIndicator from "@/components/ui/ScrollProgressIndicator";
import QRCard from "@/components/sections/opportunities/QRCards";
import Blogs from "@/components/sections/landingPage/Blogs";
import NeedMoreInfo from "@/components/sections/opportunities/NeedMoreInfo";

export default function InvestmentOpportunities() {
  return (
    <div className="relative">
      <ScrollProgressIndicator />
      <Hero />
      {/* <div className="mx-auto">
        <BusinessOpportunities />
      </div> */}
      <TrustedCompanies />
      <Blogs />
      <TrustedPartners />
      <NeedMoreInfo />
      <QRCard />
    </div>
  );
}
