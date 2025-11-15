import Events from "@/components/sections/landingPage/Events";
import HeroContainer from "@/components/sections/landingPage/HeroContainer";
// import Hero from "@/components/sections/Hero";
import Incentives from "@/components/sections/landingPage/Incentives";
import InvestorMatchmaking from "@/components/sections/landingPage/InvestorMatchmaking";
import Miza from "@/components/sections/landingPage/Miza";
import NationalPrograms from "@/components/sections/landingPage/NationalPrograms";
import Opportunities from "@/components/sections/landingPage/Opportunities";
import QRCard from "@/components/sections/landingPage/QRCards";
import RegulatoryAgreement from "@/components/sections/landingPage/RegulatoryAgreement";
import SeamlessInvestorServices from "@/components/sections/landingPage/SeamlessInvestorServices";
import StrategicInvestorProgram from "@/components/sections/landingPage/StrategicInvestorProgram";
import SuccessStories from "@/components/sections/landingPage/SuccessStories";
import SupportAndContact from "@/components/sections/landingPage/SupportAndContact";
import Talent from "@/components/sections/landingPage/Talent";
import Unlocking from "@/components/sections/landingPage/Unlocking";
import Blogs from "@/components/sections/landingPage/Blogs";

export default function Home() {
  return (
    <main>
      <HeroContainer />
      <Unlocking />
      <Opportunities />
      <SeamlessInvestorServices />
      <SuccessStories />
      <Talent />
      <Incentives />
      <RegulatoryAgreement />
      <Miza />
      <NationalPrograms />
      <StrategicInvestorProgram />
      <InvestorMatchmaking />
      <Events />
      <Blogs />
      <SupportAndContact />
      <QRCard />
    </main>
  );
}
