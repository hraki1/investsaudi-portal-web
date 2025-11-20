
// Critical above-the-fold components - load immediately
import Hero from "../components/sections/landingPage/Hero";
import HeroContainer from "@/components/sections/landingPage/HeroContainer";
import Blogs from "@/components/sections/landingPage/Blogs";
import Events from "@/components/sections/landingPage/Events";
import Incentives from "@/components/sections/landingPage/Incentives";
import InvestorMatchmaking from "@/components/sections/landingPage/InvestorMatchmaking";
import Miza from "@/components/sections/landingPage/Miza";
import NationalPrograms from "@/components/sections/landingPage/NationalPrograms";
import Opportunities from "@/components/sections/landingPage/Opportunities";
import RegulatoryAgreement from "@/components/sections/landingPage/RegulatoryAgreement";
import SeamlessInvestorServices from "@/components/sections/landingPage/SeamlessInvestorServices";
import StrategicInvestorProgram from "@/components/sections/landingPage/StrategicInvestorProgram";
import SupportAndContact from "@/components/sections/landingPage/SupportAndContact";
import Talent from "@/components/sections/landingPage/Talent";
import Unlocking from "@/components/sections/landingPage/Unlocking";
import QRCard from "@/components/sections/opportunities/QRCards";
import SuccessStories from "@/components/sections/opportunities/SuccessStories";

// import HeroContainer from "../components/sections/landingPage/HeroContainer";

// Simple loading placeholder for lazy components

export default function Home() {
  return (
    <main>
      <Hero />
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
