import Events from "@/components/sections/Events";
import Hero from "@/components/sections/Hero";
import InvestorMatchmaking from "@/components/sections/InvestorMatchmaking";
import Miza from "@/components/sections/Miza";
import NationalPrograms from "@/components/sections/NationalPrograms";
import Opportunities from "@/components/sections/Opportunities";
import QRCard from "@/components/sections/QRCards";
import RegulatoryAgreement from "@/components/sections/RegulatoryAgreement";
import StrategicDirection from "@/components/sections/StrategicDirection";
import StrategicInvestorProgram from "@/components/sections/StrategicInvestorProgram";
// import SuccessStories from "@/components/sections/SuccessStories";
import SupportAndContact from "@/components/sections/SupportAndContact";
import Chatbot from "@/components/shared/Chatbot";

export default function Home() {
  return (
    <main>
      {/* <SuccessStories /> */}
      <Hero />
      <Opportunities />
      <StrategicDirection />
      <Events />
      <NationalPrograms />
      <StrategicInvestorProgram />
      <Miza />
      <InvestorMatchmaking />
      <RegulatoryAgreement />
      <SupportAndContact />
      <QRCard />
      <Chatbot />
    </main>
  );
}
