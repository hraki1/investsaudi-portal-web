import Blogs from "@/components/sections/landingPage/Blogs";
import Hero from "@/components/sections/sectors/Hero";
import QRCard from "@/components/sections/sectors/QRCards";
import NeedMoreInfo from "@/components/sections/sectors/NeedMoreInfo";
import GlobalFirms from "@/components/sections/sectors/GlobalFirms";
import InvestmentSectors from "@/components/sections/sectors/InvestmentSectors";

export default function Sectors() {
  return (
    <main>
    <Hero />
    <InvestmentSectors />
    <Blogs />
    <GlobalFirms />
    <NeedMoreInfo />
    <QRCard />
  </main>
  );
}

