import { lazy, Suspense } from "react";

// Critical above-the-fold components - load immediately
import Hero from "../components/sections/landingPage/Hero";
import HeroContainer from "@/components/sections/landingPage/HeroContainer";
import Loading from "@/components/ui/loading";

// import HeroContainer from "../components/sections/landingPage/HeroContainer";

// Lazy load all other components for better performance
const Unlocking = lazy(
  () => import("../components/sections/landingPage/Unlocking")
);
const Opportunities = lazy(
  () => import("../components/sections/landingPage/Opportunities")
);
const SeamlessInvestorServices = lazy(
  () => import("../components/sections/landingPage/SeamlessInvestorServices")
);
const SuccessStories = lazy(
  () => import("../components/sections/landingPage/SuccessStories")
);
const Talent = lazy(() => import("../components/sections/landingPage/Talent"));
const Incentives = lazy(
  () => import("../components/sections/landingPage/Incentives")
);
const RegulatoryAgreement = lazy(
  () => import("../components/sections/landingPage/RegulatoryAgreement")
);
const Miza = lazy(() => import("../components/sections/landingPage/Miza"));
const NationalPrograms = lazy(
  () => import("../components/sections/landingPage/NationalPrograms")
);
const StrategicInvestorProgram = lazy(
  () => import("../components/sections/landingPage/StrategicInvestorProgram")
);
const InvestorMatchmaking = lazy(
  () => import("../components/sections/landingPage/InvestorMatchmaking")
);
const Events = lazy(() => import("../components/sections/landingPage/Events"));
const Blogs = lazy(() => import("../components/sections/landingPage/Blogs"));
const SupportAndContact = lazy(
  () => import("../components/sections/landingPage/SupportAndContact")
);
const QRCard = lazy(() => import("../components/sections/landingPage/QRCards"));

// Simple loading placeholder for lazy components

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroContainer />
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </main>
  );
}
