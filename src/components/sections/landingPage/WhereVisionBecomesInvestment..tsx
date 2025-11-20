import { useTranslation } from "react-i18next";
import CounterNumber from "../../shared/CounterNumber";
import { useCallback, useEffect, useState } from "react";
import { useGlobe } from "@/hooks/useGlobe";
import Globe from "@/components/3D/Globe";
import { motion } from "framer-motion";
import { fadeUp } from "@/animations/motionVariants";
import i18n from "@/i18n/config";

interface WhereVisionBecomesInvestmentProps {
  activeTab: "Competitiveness" | "Macroeconomic  Overview";
}
export default function WhereVisionBecomesInvestment({
  activeTab,
}: WhereVisionBecomesInvestmentProps) {
  const { t } = useTranslation();

  const [isHeroGlobeReady, setIsHeroGlobeReady] = useState(false);
  const [isRouterReady, setIsRouterReady] = useState(false);
  const { setGlobe: setHeroGlobe, flyTo, resetView } = useGlobe();

  const handleHeroGlobeLoaded = useCallback(
    (instance: { globe: any; router: any }) => {
      setHeroGlobe(instance.globe, instance.router);
      setIsHeroGlobeReady(true);
      
      // Wait for the router's initial transition to complete
      const router = instance.router;
 
      
      let routerReadySet = false;
      const onComplete = () => {
        if (!routerReadySet) {
          routerReadySet = true;
          setIsRouterReady(true);
          router.removeEventListener("complete", onComplete);
        }
      };
      
      // Listen for complete event
      if (typeof router.addEventListener === 'function') {
        router.addEventListener("complete", onComplete);
        // Also set ready after a delay as fallback
        setTimeout(() => {
          if (!routerReadySet) {
            routerReadySet = true;
            setIsRouterReady(true);
            router.removeEventListener("complete", onComplete);
          }
        }, 2000);
      } else {
        // Fallback if addEventListener doesn't exist
        setTimeout(() => {
          setIsRouterReady(true);
        }, 1000);
      }
    },
    [setHeroGlobe]
  );

  const handleHeroRouteChange = useCallback((location: string) => {
    console.log("Hero globe route:", location);
  }, []);

  useEffect(() => {
    if (!isHeroGlobeReady || !isRouterReady) {
      return;
    }

    console.log("Tab changed, activeTab:", activeTab);
    
    // Small delay to ensure router is fully ready
    const timeoutId = setTimeout(() => {
      // Check if activeTab is the Macroeconomic Overview tab
      if (activeTab !== "Competitiveness") {
        console.log("Calling flyTo('SA')");
        flyTo("SA");
      } else {
        console.log("Calling resetView()");
        resetView();
      }
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [activeTab, flyTo, resetView, isHeroGlobeReady, isRouterReady]);

  const isRTL = i18n.language === "ar";

  const topStats = [
    {
      id: 1,
      number: "1",
      suffix: "st",
      description: t("destination.top_stats.trust_ranking"),
      icon: "/icons/edelman.png",
      organization: "Edelman",
    },
    {
      id: 2,
      number: "13",
      suffix: "th",
      description: t("destination.top_stats.ip_enforcement"),
      icon: "/icons/imd.png",
      organization: "IMD",
    },
    {
      id: 3,
      number: "~600",
      suffix: "",
      description: t("destination.top_stats.multinational_corps"),
      icon: "/icons/spa.png",
      organization: "MISA",
    },
  ];

  const pillars = [
    {
      id: 1,
      title: t("destination.pillar1"),
      textColor: "#009692",
      borderCircleColor: "#B0E4E2",
      circleColor: "#00A7A2",
      stats: [
        {
          number: "12",
          suffix: "th",
          description: "in business efficiency in 2025",
          bgColor: "bg-cyan-50",
          borderColor: "border-cyan-100",
          arrowColor: "#00A7A2",
          numberColor: "#009692",
        },
        {
          number: "26",
          suffix: "th",
          description: "in business efficiency in 2021",
          bgColor: "bg-white",
          borderColor: "border-gray-200",
          arrowColor: "#D4D4D4",
          numberColor: "#737373",
        },
      ],
    },
    {
      id: 2,
      title: t("destination.pillar2"),
      textColor: "#744389",
      borderCircleColor: "#D8C7DF",
      circleColor: "#814A98",
      stats: [
        {
          number: "17",
          suffix: "th",
          description: "in gov. efficiency in 2025",
          bgColor: "bg-purple-50",
          borderColor: "border-purple-100",
          arrowColor: "#814A98",
          numberColor: "#814A98",
        },
        {
          number: "24",
          suffix: "th",
          description: "in economic performance in 2025",
          bgColor: " bg-[#ECE4F0]",
          borderColor: "border-gray-200",
          arrowColor: "#D4D4D4",
          numberColor: "#737373",
        },
      ],
    },
    {
      id: 3,
      title: t("destination.pillar3"),
      textColor: "#003A5D",
      borderCircleColor: "#B0C2CD",
      circleColor: "#003A5D",
      stats: [
        {
          number: "17",
          suffix: "th",
          description: "in economic performance in 2025",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-100",
          arrowColor: "#003A5D",
          numberColor: "#003A5D",
        },
        {
          number: "48",
          suffix: "th",
          description: "in economic performance in 2025",
          bgColor: "bg-white",
          borderColor: "border-gray-200",
          arrowColor: "#D4D4D4",
          numberColor: "#737373",
        },
      ],
    },
    {
      id: 4,
      title: t("destination.pillar4"),
      textColor: "#01778F",
      borderCircleColor: "#93EEFF",
      circleColor: "#01778F",
      stats: [
        {
          number: "31",
          suffix: "th",
          description: "in infra. performance in 2025",
          bgColor: "bg-teal-50",
          borderColor: "border-teal-100",
          arrowColor: "#01778F",
          numberColor: "#01778F",
        },
        {
          number: "36",
          suffix: "th",
          description: "in economic performance in 2025",
          bgColor: "bg-white",
          borderColor: "border-gray-200",
          arrowColor: "#D4D4D4",
          numberColor: "#737373",
        },
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Decorative Map Pattern - Right Side */}
      <div
        className={`absolute ${
          isRTL ? "left-0" : "right-0"
        } top-0 bottom-0 w-full sm:w-[60%] lg:w-[35%] pointer-events-none`}
        aria-hidden="true"
      >
        <div className="relative h-full w-full pointer-events-none opacity-0 md:opacity-60 lg:opacity-90 transition-opacity duration-300">
          <Globe
            initialLocation="branding-interstitial"
            onLoaded={handleHeroGlobeLoaded}
            onRouteChange={handleHeroRouteChange}
            style={{
              width: "120%",
              height: "117%",
              transform: "translateY(-10%)",
            }}
          />
          {!isHeroGlobeReady && (
            <div className="absolute inset-0 flex items-center justify-center text-white text-sm">
              Loading globe...
            </div>
          )}
        </div>
      </div>

      <div className={`container mx-auto px-3 relative z-10 mb-12`}>
        {/* Content */}
        {activeTab === "Competitiveness" && (
          <div className={`  ${isRTL ? "lg:pl-[30%]" : "lg:pr-[30%]"}`}>
            {/* Business Environment Card */}
            <motion.div
              className="bg-linear-to-r from-[#00A7A2] to-[#814a98]  p-1 pt-2  rounded-2xl mb-5 md:mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2, margin: "-50px" }}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="px-4 py-1 pb-2 relative">
                <h3 className="text-2xl capitalize md:text-[32px] bukra-medium text-white">
                  Business environment
                </h3>
                <p className="text-white text-lg bukra-regular">
                  Rankings and performance on business environment rankings
                </p>

                {/* background image */}
                <div className="absolute bottom-0 right-0 w-full h-[129.56px] opacity-20">
                  <div
                    className="absolute inset-0 w-full h-full "
                    style={{
                      backgroundImage: 'url("/whereInvest/bg-card.png")',
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
              </div>

              {/* Top 3 Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 bg-white overflow-hidden rounded-2xl">
                {topStats.map((stat, index) => (
                  <div
                    key={index}
                    className={`bg-white border border-gray-200 p-3 md:p-5 space-y-1 md:space-y-3`}
                  >
                    <div className="flex items-baseline gap-1">
                      <CounterNumber
                        value={stat.number}
                        suffix={stat.suffix}
                        className="text-3xl flex font-light text-[#262626] bukra-medium md:text-[38px]"
                        suffixClassName="text-xl text-[#262626]"
                        animationDuration={0.8}
                        enableScaleAnimation={false}
                      />
                    </div>
                    <p className="text-[##171717] text-sm md:text-base  bukra-regular min-h-[50px]">
                      {stat.description}
                    </p>
                    <div className="flex items-end gap-2">
                      <img
                        src={stat.icon}
                        alt={stat.organization}
                        className="h-10 w-auto"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* World Competitiveness Ranking */}
            <motion.div
              className="bg-linear-to-r from-[#00A7A2] to-[#814a98]  p-1 pt-2 rounded-2xl mb-5 md:mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2, margin: "-50px" }}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="px-4 py-1 pb-2 relative flex items-center  justify-between">
                {/* content */}
                <div>
                  <h3 className="text-2xl capitalize md:text-[32px] bukra-medium text-white">
                    17 Th
                  </h3>
                  <p className="text-white text-lg bukra-regular">
                    in World Competitiveness Ranking in 2025
                  </p>
                </div>

                {/* IMD image */}
                <div className="w-[20px] md:w-[76px] h-[40px] md:h-[28px]">
                  <img
                    src="/whereInvest/imd.png"
                    alt="IMD"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* background image */}
                <div className="absolute bottom-0 right-0 w-full h-[129.56px] opacity-20">
                  <div
                    className="absolute inset-0 w-full h-full "
                    style={{
                      backgroundImage: 'url("/whereInvest/bg-card.png")',
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white rounded-2xl">
                {pillars.map((pillar) => (
                  <div className={` bg-white p-3 rounded-xl`} key={pillar.id}>
                    <div
                      className={`text-base text-[${pillar.textColor}] bukra-medium mb-3 flex items-center gap-2`}
                      style={{
                        color: pillar.textColor,
                      }}
                    >
                      <span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="19"
                            height="19"
                            rx="9.5"
                            fill="white"
                            fillOpacity="0.7"
                          />
                          <rect
                            x="0.5"
                            y="0.5"
                            width="19"
                            height="19"
                            rx="9.5"
                            stroke={pillar.borderCircleColor}
                          />
                          <circle
                            cx="10"
                            cy="10"
                            r="3.5"
                            fill={pillar.circleColor}
                          />
                        </svg>
                      </span>
                      {pillar.title}
                    </div>
                    <div className="space-y-3">
                      {pillar.stats.map((stat, index) => (
                        <div
                          key={index}
                          className={`${stat.bgColor}  px-4 py-3.5 rounded-xl`}
                          style={{
                            background:
                              "linear-gradient(180deg, #D9F2F1 0%, rgba(255, 255, 255, 0.3) 100%)",
                          }}
                        >
                          <div className="flex items- justify-between gap-1 mb-2">
                            <CounterNumber
                              value={stat.number}
                              suffix={stat.suffix}
                              className="text-2xl md:text-[38px] font-light flex bukra-medium"
                              suffixClassName="text-lg"
                              numberColor={stat.numberColor}
                              suffixColor={stat.numberColor}
                              enableScaleAnimation={false}
                            />
                            <span>
                              <svg
                                width="30"
                                height="39"
                                viewBox="0 0 30 39"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.99965 37.5001C8.99965 36.6714 9.67064 36.0005 10.4993 36.0005C11.328 36.0005 11.9989 36.6714 11.9989 37.5001C11.9989 38.3288 11.328 38.9998 10.4993 38.9998C9.67064 38.9998 8.99965 38.3288 8.99965 37.5001ZM18.001 5.99871C18.001 5.17004 18.672 4.49906 19.5007 4.49906C20.3294 4.49906 21.0003 5.17004 21.0003 5.99871C21.0003 6.82736 20.3294 7.49835 19.5007 7.49835C18.672 7.49835 18.001 6.82737 18.001 5.99871ZM13.5003 1.49976C13.5003 0.671092 14.1713 0.000106192 15 0.000106156C15.8287 0.00010612 16.4996 0.671092 16.4996 1.49976C16.4996 2.32841 15.8287 2.9994 15 2.9994C14.1713 2.9994 13.5003 2.32841 13.5003 1.49976ZM13.5003 5.99871C13.5003 5.17004 14.1713 4.49906 15 4.49906C15.8287 4.49906 16.4996 5.17004 16.4996 5.99871C16.4996 6.82737 15.8287 7.49835 15 7.49835C14.1713 7.49835 13.5003 6.82737 13.5003 5.99871ZM8.99965 5.99871C8.99965 5.17004 9.67064 4.49906 10.4993 4.49906C11.328 4.49906 11.9989 5.17004 11.9989 5.99871C11.9989 6.82737 11.328 7.49835 10.4993 7.49835C9.67064 7.49835 8.99965 6.82737 8.99965 5.99871ZM22.5 10.4994C22.5 9.67074 23.171 8.99975 23.9996 8.99975C24.8283 8.99975 25.4993 9.67074 25.4993 10.4994C25.4993 11.3281 24.8283 11.9991 23.9996 11.9991C23.171 11.9991 22.5 11.3281 22.5 10.4994ZM18.001 10.4994C18.001 9.67075 18.672 8.99975 19.5007 8.99975C20.3294 8.99975 21.0003 9.67074 21.0003 10.4994C21.0003 11.3281 20.3294 11.9991 19.5007 11.9991C18.672 11.9991 18.001 11.3281 18.001 10.4994ZM13.5003 10.4994C13.5003 9.67075 14.1713 8.99975 15 8.99975C15.8287 8.99975 16.4996 9.67075 16.4996 10.4994C16.4996 11.3281 15.8287 11.9991 15 11.9991C14.1713 11.9991 13.5003 11.3281 13.5003 10.4994ZM4.5007 10.4994C4.5007 9.67075 5.17169 8.99975 6.00035 8.99975C6.82901 8.99975 7.5 9.67075 7.5 10.4994C7.5 11.3281 6.82901 11.9991 6.00035 11.9991C5.17169 11.9991 4.5007 11.3281 4.5007 10.4994ZM8.99965 10.4994C8.99965 9.67075 9.67064 8.99975 10.4993 8.99975C11.328 8.99975 11.9989 9.67075 11.9989 10.4994C11.9989 11.3281 11.328 11.9991 10.4993 11.9991C9.67064 11.9991 8.99965 11.3281 8.99965 10.4994ZM27.0007 15.0001C27.0007 14.1714 27.6717 13.5005 28.5003 13.5005C29.329 13.5005 30 14.1714 30 15.0001C30 15.8288 29.329 16.4998 28.5003 16.4998C27.6717 16.4998 27.0007 15.8288 27.0007 15.0001ZM22.5 15.0001C22.5 14.1714 23.171 13.5005 23.9996 13.5005C24.8283 13.5005 25.4993 14.1714 25.4993 15.0001C25.4993 15.8288 24.8283 16.4998 23.9996 16.4998C23.171 16.4998 22.5 15.8288 22.5 15.0001ZM18.001 15.0001C18.001 14.1714 18.672 13.5005 19.5007 13.5005C20.3294 13.5005 21.0003 14.1714 21.0003 15.0001C21.0003 15.8288 20.3294 16.4998 19.5007 16.4998C18.672 16.4998 18.001 15.8288 18.001 15.0001ZM13.5003 15.0001C13.5003 14.1714 14.1713 13.5005 15 13.5005C15.8287 13.5005 16.4996 14.1714 16.4996 15.0001C16.4996 15.8288 15.8287 16.4998 15 16.4998C14.1713 16.4998 13.5003 15.8288 13.5003 15.0001ZM-1.04906e-06 15.0001C-1.08528e-06 14.1714 0.670987 13.5005 1.49965 13.5005C2.32831 13.5005 2.9993 14.1714 2.9993 15.0001C2.9993 15.8288 2.32831 16.4998 1.49965 16.4998C0.670987 16.4998 -1.01284e-06 15.8288 -1.04906e-06 15.0001ZM4.5007 15.0001C4.5007 14.1714 5.17169 13.5005 6.00035 13.5005C6.82901 13.5005 7.5 14.1714 7.5 15.0001C7.5 15.8288 6.82901 16.4998 6.00035 16.4998C5.17169 16.4998 4.5007 15.8288 4.5007 15.0001ZM8.99965 15.0001C8.99965 14.1714 9.67064 13.5005 10.4993 13.5005C11.328 13.5005 11.9989 14.1714 11.9989 15.0001C11.9989 15.8288 11.328 16.4998 10.4993 16.4998C9.67064 16.4998 8.99965 15.8288 8.99965 15.0001ZM18.0011 19.4991C18.0011 18.6704 18.672 17.9994 19.5007 17.9994C20.3294 17.9994 21.0004 18.6704 21.0004 19.4991C21.0004 20.3277 20.3294 20.9987 19.5007 20.9987C18.672 20.9987 18.0011 20.3277 18.0011 19.4991ZM13.5003 19.4991C13.5003 18.6704 14.1713 17.9994 15 17.9994C15.8287 17.9994 16.4996 18.6704 16.4996 19.4991C16.4996 20.3277 15.8287 20.9987 15 20.9987C14.1713 20.9987 13.5003 20.3277 13.5003 19.4991ZM8.99965 19.4991C8.99965 18.6704 9.67064 17.9994 10.4993 17.9994C11.328 17.9994 11.9989 18.6704 11.9989 19.4991C11.9989 20.3277 11.328 20.9987 10.4993 20.9987C9.67064 20.9987 8.99965 20.3277 8.99965 19.4991ZM18.0011 23.9998C18.0011 23.1711 18.672 22.5001 19.5007 22.5001C20.3294 22.5001 21.0004 23.1711 21.0004 23.9998C21.0004 24.8284 20.3294 25.4994 19.5007 25.4994C18.672 25.4994 18.0011 24.8284 18.0011 23.9998ZM13.5003 23.9998C13.5003 23.1711 14.1713 22.5001 15 22.5001C15.8287 22.5001 16.4996 23.1711 16.4996 23.9998C16.4996 24.8284 15.8287 25.4994 15 25.4994C14.1713 25.4994 13.5003 24.8284 13.5003 23.9998ZM8.99965 23.9998C8.99965 23.1711 9.67064 22.5001 10.4993 22.5001C11.328 22.5001 11.9989 23.1711 11.9989 23.9998C11.9989 24.8284 11.328 25.4994 10.4993 25.4994C9.67064 25.4994 8.99965 24.8284 8.99965 23.9998ZM18.0011 28.5005C18.0011 27.6718 18.672 27.0008 19.5007 27.0008C20.3294 27.0008 21.0004 27.6718 21.0004 28.5005C21.0004 29.3291 20.3294 30.0001 19.5007 30.0001C18.672 30.0001 18.0011 29.3291 18.0011 28.5005ZM13.5003 28.5005C13.5003 27.6718 14.1713 27.0008 15 27.0008C15.8287 27.0008 16.4996 27.6718 16.4996 28.5005C16.4996 29.3291 15.8287 30.0001 15 30.0001C14.1713 30.0001 13.5003 29.3291 13.5003 28.5005ZM8.99965 28.5005C8.99965 27.6718 9.67064 27.0008 10.4993 27.0008C11.328 27.0008 11.9989 27.6718 11.9989 28.5005C11.9989 29.3291 11.328 30.0001 10.4993 30.0001C9.67064 30.0001 8.99965 29.3291 8.99965 28.5005ZM18.0011 32.9994C18.0011 32.1707 18.672 31.4998 19.5007 31.4998C20.3294 31.4998 21.0004 32.1707 21.0004 32.9994C21.0004 33.8281 20.3294 34.4991 19.5007 34.4991C18.672 34.4991 18.0011 33.8281 18.0011 32.9994ZM13.5003 32.9994C13.5003 32.1707 14.1713 31.4998 15 31.4998C15.8287 31.4998 16.4996 32.1707 16.4996 32.9994C16.4996 33.8281 15.8287 34.4991 15 34.4991C14.1713 34.4991 13.5003 33.8281 13.5003 32.9994ZM8.99965 32.9994C8.99965 32.1707 9.67064 31.4998 10.4993 31.4998C11.328 31.4998 11.9989 32.1707 11.9989 32.9994C11.9989 33.8281 11.328 34.4991 10.4993 34.4991C9.67064 34.4991 8.99965 33.8281 8.99965 32.9994ZM18.0011 37.5001C18.0011 36.6714 18.672 36.0005 19.5007 36.0005C20.3294 36.0005 21.0004 36.6714 21.0004 37.5001C21.0004 38.3288 20.3294 38.9998 19.5007 38.9998C18.672 38.9998 18.0011 38.3288 18.0011 37.5001ZM13.5003 37.5001C13.5003 36.6714 14.1713 36.0005 15 36.0005C15.8287 36.0005 16.4996 36.6714 16.4996 37.5001C16.4996 38.3288 15.8287 38.9998 15 38.9998C14.1713 38.9998 13.5003 38.3288 13.5003 37.5001Z"
                                  fill={stat.arrowColor}
                                />
                              </svg>
                            </span>
                          </div>
                          <p className="text-[#171717] text-lg bukra-regular">
                            {stat.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {activeTab === "Macroeconomic  Overview" && (
          <div className={`  ${isRTL ? "lg:pl-[30%]" : "lg:pr-[30%]"}`}>
            {/* Business Environment Card */}
            <div className="bg-linear-to-r from-[#00A7A2] to-[#814a98]  p-1 pt-2  rounded-2xl mb-5 md:mb-8">
              <div className="px-4 py-1 pb-2 relative">
                <h3 className="text-2xl capitalize md:text-[32px] bukra-medium text-white">
                  Business environment
                </h3>
                <p className="text-white text-lg bukra-regular">
                  Rankings and performance on business environment rankings
                </p>

                {/* background image */}
                <div className="absolute bottom-0 right-0 w-full h-[129.56px] opacity-20">
                  <div
                    className="absolute inset-0 w-full h-full "
                    style={{
                      backgroundImage: 'url("/whereInvest/bg-card.png")',
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
              </div>

              {/* Top 3 Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 bg-white overflow-hidden rounded-2xl">
                {topStats.map((stat, index) => (
                  <div
                    key={index}
                    className={`bg-white border border-gray-200 p-3 md:p-5 space-y-1 md:space-y-3`}
                  >
                    <div className="flex items-baseline gap-1">
                      <CounterNumber
                        value={stat.number}
                        suffix={stat.suffix}
                        className="text-3xl flex font-light text-[#262626] bukra-medium md:text-[38px]"
                        suffixClassName="text-xl text-[#262626]"
                        animationDuration={0.8}
                        enableScaleAnimation={false}
                      />
                    </div>
                    <p className="text-[##171717] text-sm md:text-base  bukra-regular min-h-[50px]">
                      {stat.description}
                    </p>
                    <div className="flex items-end gap-2">
                      <img
                        src={stat.icon}
                        alt={stat.organization}
                        className="h-10 w-auto"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* World Competitiveness Ranking */}
            <div className="bg-linear-to-r from-[#00A7A2] to-[#814a98]  p-1 pt-2 rounded-2xl mb-5 md:mb-8">
              <div className="px-4 py-1 pb-2 relative flex items-center  justify-between">
                {/* content */}
                <div>
                  <h3 className="text-2xl capitalize md:text-[32px] bukra-medium text-white">
                    17 Th
                  </h3>
                  <p className="text-white text-lg bukra-regular">
                    in World Competitiveness Ranking in 2025
                  </p>
                </div>

                {/* IMD image */}
                <div className="w-[20px] md:w-[76px] h-[40px] md:h-[28px]">
                  <img
                    src="/whereInvest/imd.png"
                    alt="IMD"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* background image */}
                <div className="absolute bottom-0 right-0 w-full h-[129.56px] opacity-20">
                  <div
                    className="absolute inset-0 w-full h-full "
                    style={{
                      backgroundImage: 'url("/whereInvest/bg-card.png")',
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white rounded-2xl">
                {pillars.map((pillar) => (
                  <div className={` bg-white p-3 rounded-xl`} key={pillar.id}>
                    <div
                      className={`text-base text-[${pillar.textColor}] bukra-medium mb-3 flex items-center gap-2`}
                      style={{
                        color: pillar.textColor,
                      }}
                    >
                      <span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="19"
                            height="19"
                            rx="9.5"
                            fill="white"
                            fillOpacity="0.7"
                          />
                          <rect
                            x="0.5"
                            y="0.5"
                            width="19"
                            height="19"
                            rx="9.5"
                            stroke={pillar.borderCircleColor}
                          />
                          <circle
                            cx="10"
                            cy="10"
                            r="3.5"
                            fill={pillar.circleColor}
                          />
                        </svg>
                      </span>
                      {pillar.title}
                    </div>
                    <div className="space-y-3">
                      {pillar.stats.map((stat, index) => (
                        <div
                          key={index}
                          className={`${stat.bgColor}  px-4 py-3.5 rounded-xl`}
                          style={{
                            background:
                              "linear-gradient(180deg, #D9F2F1 0%, rgba(255, 255, 255, 0.3) 100%)",
                          }}
                        >
                          <div className="flex items- justify-between gap-1 mb-2">
                            <CounterNumber
                              value={stat.number}
                              suffix={stat.suffix}
                              className="text-2xl md:text-[38px] font-light flex bukra-medium"
                              suffixClassName="text-lg"
                              numberColor={stat.numberColor}
                              suffixColor={stat.numberColor}
                              enableScaleAnimation={false}
                            />
                            <span>
                              <svg
                                width="30"
                                height="39"
                                viewBox="0 0 30 39"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.99965 37.5001C8.99965 36.6714 9.67064 36.0005 10.4993 36.0005C11.328 36.0005 11.9989 36.6714 11.9989 37.5001C11.9989 38.3288 11.328 38.9998 10.4993 38.9998C9.67064 38.9998 8.99965 38.3288 8.99965 37.5001ZM18.001 5.99871C18.001 5.17004 18.672 4.49906 19.5007 4.49906C20.3294 4.49906 21.0003 5.17004 21.0003 5.99871C21.0003 6.82736 20.3294 7.49835 19.5007 7.49835C18.672 7.49835 18.001 6.82737 18.001 5.99871ZM13.5003 1.49976C13.5003 0.671092 14.1713 0.000106192 15 0.000106156C15.8287 0.00010612 16.4996 0.671092 16.4996 1.49976C16.4996 2.32841 15.8287 2.9994 15 2.9994C14.1713 2.9994 13.5003 2.32841 13.5003 1.49976ZM13.5003 5.99871C13.5003 5.17004 14.1713 4.49906 15 4.49906C15.8287 4.49906 16.4996 5.17004 16.4996 5.99871C16.4996 6.82737 15.8287 7.49835 15 7.49835C14.1713 7.49835 13.5003 6.82737 13.5003 5.99871ZM8.99965 5.99871C8.99965 5.17004 9.67064 4.49906 10.4993 4.49906C11.328 4.49906 11.9989 5.17004 11.9989 5.99871C11.9989 6.82737 11.328 7.49835 10.4993 7.49835C9.67064 7.49835 8.99965 6.82737 8.99965 5.99871ZM22.5 10.4994C22.5 9.67074 23.171 8.99975 23.9996 8.99975C24.8283 8.99975 25.4993 9.67074 25.4993 10.4994C25.4993 11.3281 24.8283 11.9991 23.9996 11.9991C23.171 11.9991 22.5 11.3281 22.5 10.4994ZM18.001 10.4994C18.001 9.67075 18.672 8.99975 19.5007 8.99975C20.3294 8.99975 21.0003 9.67074 21.0003 10.4994C21.0003 11.3281 20.3294 11.9991 19.5007 11.9991C18.672 11.9991 18.001 11.3281 18.001 10.4994ZM13.5003 10.4994C13.5003 9.67075 14.1713 8.99975 15 8.99975C15.8287 8.99975 16.4996 9.67075 16.4996 10.4994C16.4996 11.3281 15.8287 11.9991 15 11.9991C14.1713 11.9991 13.5003 11.3281 13.5003 10.4994ZM4.5007 10.4994C4.5007 9.67075 5.17169 8.99975 6.00035 8.99975C6.82901 8.99975 7.5 9.67075 7.5 10.4994C7.5 11.3281 6.82901 11.9991 6.00035 11.9991C5.17169 11.9991 4.5007 11.3281 4.5007 10.4994ZM8.99965 10.4994C8.99965 9.67075 9.67064 8.99975 10.4993 8.99975C11.328 8.99975 11.9989 9.67075 11.9989 10.4994C11.9989 11.3281 11.328 11.9991 10.4993 11.9991C9.67064 11.9991 8.99965 11.3281 8.99965 10.4994ZM27.0007 15.0001C27.0007 14.1714 27.6717 13.5005 28.5003 13.5005C29.329 13.5005 30 14.1714 30 15.0001C30 15.8288 29.329 16.4998 28.5003 16.4998C27.6717 16.4998 27.0007 15.8288 27.0007 15.0001ZM22.5 15.0001C22.5 14.1714 23.171 13.5005 23.9996 13.5005C24.8283 13.5005 25.4993 14.1714 25.4993 15.0001C25.4993 15.8288 24.8283 16.4998 23.9996 16.4998C23.171 16.4998 22.5 15.8288 22.5 15.0001ZM18.001 15.0001C18.001 14.1714 18.672 13.5005 19.5007 13.5005C20.3294 13.5005 21.0003 14.1714 21.0003 15.0001C21.0003 15.8288 20.3294 16.4998 19.5007 16.4998C18.672 16.4998 18.001 15.8288 18.001 15.0001ZM13.5003 15.0001C13.5003 14.1714 14.1713 13.5005 15 13.5005C15.8287 13.5005 16.4996 14.1714 16.4996 15.0001C16.4996 15.8288 15.8287 16.4998 15 16.4998C14.1713 16.4998 13.5003 15.8288 13.5003 15.0001ZM-1.04906e-06 15.0001C-1.08528e-06 14.1714 0.670987 13.5005 1.49965 13.5005C2.32831 13.5005 2.9993 14.1714 2.9993 15.0001C2.9993 15.8288 2.32831 16.4998 1.49965 16.4998C0.670987 16.4998 -1.01284e-06 15.8288 -1.04906e-06 15.0001ZM4.5007 15.0001C4.5007 14.1714 5.17169 13.5005 6.00035 13.5005C6.82901 13.5005 7.5 14.1714 7.5 15.0001C7.5 15.8288 6.82901 16.4998 6.00035 16.4998C5.17169 16.4998 4.5007 15.8288 4.5007 15.0001ZM8.99965 15.0001C8.99965 14.1714 9.67064 13.5005 10.4993 13.5005C11.328 13.5005 11.9989 14.1714 11.9989 15.0001C11.9989 15.8288 11.328 16.4998 10.4993 16.4998C9.67064 16.4998 8.99965 15.8288 8.99965 15.0001ZM18.0011 19.4991C18.0011 18.6704 18.672 17.9994 19.5007 17.9994C20.3294 17.9994 21.0004 18.6704 21.0004 19.4991C21.0004 20.3277 20.3294 20.9987 19.5007 20.9987C18.672 20.9987 18.0011 20.3277 18.0011 19.4991ZM13.5003 19.4991C13.5003 18.6704 14.1713 17.9994 15 17.9994C15.8287 17.9994 16.4996 18.6704 16.4996 19.4991C16.4996 20.3277 15.8287 20.9987 15 20.9987C14.1713 20.9987 13.5003 20.3277 13.5003 19.4991ZM8.99965 19.4991C8.99965 18.6704 9.67064 17.9994 10.4993 17.9994C11.328 17.9994 11.9989 18.6704 11.9989 19.4991C11.9989 20.3277 11.328 20.9987 10.4993 20.9987C9.67064 20.9987 8.99965 20.3277 8.99965 19.4991ZM18.0011 23.9998C18.0011 23.1711 18.672 22.5001 19.5007 22.5001C20.3294 22.5001 21.0004 23.1711 21.0004 23.9998C21.0004 24.8284 20.3294 25.4994 19.5007 25.4994C18.672 25.4994 18.0011 24.8284 18.0011 23.9998ZM13.5003 23.9998C13.5003 23.1711 14.1713 22.5001 15 22.5001C15.8287 22.5001 16.4996 23.1711 16.4996 23.9998C16.4996 24.8284 15.8287 25.4994 15 25.4994C14.1713 25.4994 13.5003 24.8284 13.5003 23.9998ZM8.99965 23.9998C8.99965 23.1711 9.67064 22.5001 10.4993 22.5001C11.328 22.5001 11.9989 23.1711 11.9989 23.9998C11.9989 24.8284 11.328 25.4994 10.4993 25.4994C9.67064 25.4994 8.99965 24.8284 8.99965 23.9998ZM18.0011 28.5005C18.0011 27.6718 18.672 27.0008 19.5007 27.0008C20.3294 27.0008 21.0004 27.6718 21.0004 28.5005C21.0004 29.3291 20.3294 30.0001 19.5007 30.0001C18.672 30.0001 18.0011 29.3291 18.0011 28.5005ZM13.5003 28.5005C13.5003 27.6718 14.1713 27.0008 15 27.0008C15.8287 27.0008 16.4996 27.6718 16.4996 28.5005C16.4996 29.3291 15.8287 30.0001 15 30.0001C14.1713 30.0001 13.5003 29.3291 13.5003 28.5005ZM8.99965 28.5005C8.99965 27.6718 9.67064 27.0008 10.4993 27.0008C11.328 27.0008 11.9989 27.6718 11.9989 28.5005C11.9989 29.3291 11.328 30.0001 10.4993 30.0001C9.67064 30.0001 8.99965 29.3291 8.99965 28.5005ZM18.0011 32.9994C18.0011 32.1707 18.672 31.4998 19.5007 31.4998C20.3294 31.4998 21.0004 32.1707 21.0004 32.9994C21.0004 33.8281 20.3294 34.4991 19.5007 34.4991C18.672 34.4991 18.0011 33.8281 18.0011 32.9994ZM13.5003 32.9994C13.5003 32.1707 14.1713 31.4998 15 31.4998C15.8287 31.4998 16.4996 32.1707 16.4996 32.9994C16.4996 33.8281 15.8287 34.4991 15 34.4991C14.1713 34.4991 13.5003 33.8281 13.5003 32.9994ZM8.99965 32.9994C8.99965 32.1707 9.67064 31.4998 10.4993 31.4998C11.328 31.4998 11.9989 32.1707 11.9989 32.9994C11.9989 33.8281 11.328 34.4991 10.4993 34.4991C9.67064 34.4991 8.99965 33.8281 8.99965 32.9994ZM18.0011 37.5001C18.0011 36.6714 18.672 36.0005 19.5007 36.0005C20.3294 36.0005 21.0004 36.6714 21.0004 37.5001C21.0004 38.3288 20.3294 38.9998 19.5007 38.9998C18.672 38.9998 18.0011 38.3288 18.0011 37.5001ZM13.5003 37.5001C13.5003 36.6714 14.1713 36.0005 15 36.0005C15.8287 36.0005 16.4996 36.6714 16.4996 37.5001C16.4996 38.3288 15.8287 38.9998 15 38.9998C14.1713 38.9998 13.5003 38.3288 13.5003 37.5001Z"
                                  fill={stat.arrowColor}
                                />
                              </svg>
                            </span>
                          </div>
                          <p className="text-[#171717] text-lg bukra-regular">
                            {stat.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* links  */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-5 md:items-center md:justify-start">
          <button className="border-[#006461] bukra-regular border md:border-[0.91px] rounded-full bg-white py-3.5 md:px-6 md:text-lg flex gap-2 justify-center items-center text-[#006461] w-full md:w-auto appearance-none transition-colors duration-200 hover:bg-[#006461] hover:text-white hover:border-[#006461] cursor-pointer">
            Open Latest Report
            <span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6316 4.10535C11.6316 3.72747 11.3252 3.42114 10.9474 3.42114C10.5695 3.42114 10.2632 3.72747 10.2632 4.10535V11.825L10.2576 11.8185C10.0654 11.5917 9.87723 11.3519 9.70124 11.1278L9.66044 11.0758C9.48507 10.8525 9.30058 10.618 9.15729 10.4706C8.89392 10.1996 8.46074 10.1934 8.18977 10.4568C7.9188 10.7202 7.91265 11.1534 8.17603 11.4243C8.25695 11.5076 8.3898 11.6735 8.58429 11.9211L8.62722 11.9758C8.80061 12.1967 9.00404 12.4558 9.2136 12.7031C9.43821 12.9682 9.68961 13.2435 9.94092 13.4576C10.0669 13.5648 10.2088 13.6706 10.3615 13.7523C10.5088 13.8312 10.7117 13.9124 10.9474 13.9124C11.183 13.9124 11.3859 13.8312 11.5332 13.7523C11.6859 13.6706 11.8279 13.5648 11.9538 13.4576C12.2051 13.2435 12.4565 12.9682 12.6811 12.7031C12.8907 12.4558 13.0941 12.1967 13.2675 11.9758L13.3104 11.9211C13.5049 11.6735 13.6378 11.5076 13.7187 11.4243C13.9821 11.1534 13.9759 10.7202 13.705 10.4568C13.434 10.1934 13.0008 10.1996 12.7374 10.4706C12.5941 10.618 12.4097 10.8525 12.2343 11.0758L12.1935 11.1278C12.0175 11.3519 11.8293 11.5917 11.6371 11.8185L11.6316 11.825V4.10535Z"
                  fill="currentColor"
                />
                <path
                  d="M4.33333 15.0527C4.33333 14.6748 4.02699 14.3685 3.64912 14.3685C3.27124 14.3685 2.9649 14.6748 2.9649 15.0527C2.9649 15.6336 2.99431 16.1466 3.09006 16.5824C3.18751 17.026 3.36277 17.4322 3.68462 17.7541C4.00648 18.0759 4.41268 18.2512 4.85628 18.3486C5.29212 18.4444 5.80508 18.4738 6.38596 18.4738H15.5088C16.0896 18.4738 16.6026 18.4444 17.0384 18.3486C17.482 18.2512 17.8882 18.0759 18.2101 17.7541C18.532 17.4322 18.7072 17.026 18.8047 16.5824C18.9004 16.1466 18.9298 15.6336 18.9298 15.0527C18.9298 14.6748 18.6235 14.3685 18.2456 14.3685C17.8677 14.3685 17.5614 14.6748 17.5614 15.0527C17.5614 15.604 17.5317 15.9992 17.4681 16.2888C17.4062 16.5706 17.3218 16.7071 17.2425 16.7864C17.1632 16.8658 17.0267 16.9502 16.7448 17.0121C16.4552 17.0757 16.06 17.1054 15.5088 17.1054H6.38596C5.83469 17.1054 5.43948 17.0757 5.14989 17.0121C4.86805 16.9502 4.73156 16.8658 4.65224 16.7864C4.57292 16.7071 4.48852 16.5706 4.42661 16.2888C4.36299 15.9992 4.33333 15.604 4.33333 15.0527Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </button>
          <button className="border-[#006461] bukra-regular border md:border-[0.91px] rounded-full bg-white py-3.5 px-6 md:text-lg flex gap-2 justify-center items-center text-[#006461] w-full md:w-auto appearance-none transition-colors duration-200 hover:bg-[#006461] hover:text-white hover:border-[#006461] cursor-pointer">
            Competitiveness Details
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9985 5.96182C17.752 5.73322 17.4267 5.60642 17.1498 5.52665C16.8544 5.44155 16.5165 5.38353 16.1686 5.3429C15.4713 5.26148 14.6536 5.24113 13.8884 5.24774C13.1188 5.25439 12.3816 5.28858 11.8383 5.32093C11.5661 5.33713 11.3415 5.35294 11.1845 5.36473C11.1059 5.37063 11.0442 5.37554 11.0018 5.37899L10.953 5.38303L10.94 5.38413L10.935 5.38457C10.5223 5.42052 10.2169 5.78418 10.2529 6.19683C10.2888 6.60946 10.653 6.91478 11.0657 6.87886L11.0682 6.87865L11.0791 6.87772L11.1236 6.87404C11.163 6.87082 11.2216 6.86617 11.2968 6.86052C11.4473 6.84922 11.664 6.83396 11.9274 6.81828C12.4551 6.78686 13.1653 6.75404 13.9013 6.74769C14.6417 6.74129 15.3879 6.76194 15.9946 6.83278C16.0287 6.83676 16.062 6.84087 16.0947 6.8451L5.46967 17.4702C5.17678 17.7631 5.17678 18.2379 5.46967 18.5308C5.76256 18.8237 6.23744 18.8237 6.53033 18.5308L17.1578 7.9033C17.1596 7.91765 17.1614 7.93215 17.1631 7.94679C17.2334 8.54662 17.2544 9.29705 17.2486 10.047C17.2429 10.7923 17.211 11.5161 17.1803 12.0551C17.1651 12.3242 17.1501 12.5461 17.1391 12.7002C17.1336 12.7773 17.129 12.8374 17.1258 12.8779L17.1222 12.9236L17.121 12.9381C17.0868 13.3509 17.3936 13.7133 17.8063 13.7476C18.2191 13.7819 18.5816 13.4746 18.6159 13.0618L18.6163 13.0573L18.6174 13.044L18.6213 12.9942C18.6247 12.9509 18.6295 12.8878 18.6352 12.8075C18.6467 12.647 18.6622 12.4177 18.6779 12.1403C18.7094 11.5863 18.7426 10.8364 18.7485 10.0586C18.7545 9.28538 18.7338 8.46317 18.6529 7.77221C18.6125 7.42794 18.5547 7.09345 18.4689 6.80435C18.3907 6.54089 18.258 6.20251 17.9985 5.96182Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
