/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { TbArrowCurveRight } from "react-icons/tb";
import { CgArrowTopRight } from "react-icons/cg";

// Swiper styles will be added to CSS file

interface DashboardMetric {
  label: string;
  baseline: string;
  current: string;
  target: string;
  suffix?: string; // Optional suffix like "B", "%", "th", etc.
}

interface StatCard {
  value: string;
  suffix?: string; // "st", "b", "%", "&", etc.
  title: string;
  description: string;
  gradientFrom: string;
  isNewRecord?: boolean;
}

const gradientColors: Record<string, string> = {
  "teal-900/80": "rgba(19, 78, 74, 0.8)",
  "teal-700/60": "rgba(15, 118, 110, 0.6)",
  "blue-900/80": "rgba(30, 58, 138, 0.8)",
  "blue-700/60": "rgba(29, 78, 216, 0.6)",
  "indigo-900/80": "rgba(30, 27, 75, 0.8)",
  "indigo-700/60": "rgba(67, 56, 202, 0.6)",
  "purple-900/80": "rgba(88, 28, 135, 0.8)",
  "purple-700/60": "rgba(126, 34, 206, 0.6)",
};

export default function StrategicDirection() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"economy" | "society" | "nation">(
    "economy"
  );

  const statsData = [
    {
      id: 1,
      icon: "📈",
      value: "1.8%",
      description: t("strategic_direction.stats.gdp_growth"),
    },
    {
      id: 2,
      icon: "💰",
      value: "24%",
      description: t("strategic_direction.stats.fdi_growth"),
    },
    {
      id: 3,
      icon: "⭐",
      value: "A+",
      description: t("strategic_direction.stats.credit_rating"),
    },
    {
      id: 4,
      icon: "🚀",
      value: "30.4%",
      description: t("strategic_direction.stats.export_growth"),
    },
    {
      id: 1,
      title: t("strategic_direction.stats.pro_investor"),
      value: "24%",
      description: t("strategic_direction.stats.pro_investor_desc"),
    },
    {
      id: 2,
      title: t("strategic_direction.stats.tax_incentives"),
      value: "24%",
      description: t("strategic_direction.stats.tax_incentives_desc"),
    },
    {
      id: 3,
      title: t("strategic_direction.stats.tax_laws"),
      value: "24%",
      description: t("strategic_direction.stats.tax_laws_desc"),
    },
    {
      id: 4,
      title: t("strategic_direction.stats.investment_law"),
      value: "24%",
      description: t("strategic_direction.stats.investment_law_desc"),
    },
  ];

  const tabs: Array<{ id: "economy" | "society" | "nation"; title: string }> = [
    { id: "economy", title: t("strategic_direction.thriving_economy") },
    { id: "society", title: t("strategic_direction.vibrant_society") },
    { id: "nation", title: t("strategic_direction.ambitious_nation") },
  ];

  // UI style constants
  const activeButtonBgClass =
    "bg-gradient-to-r from-black/40 via-black/30 to-black/0 backdrop-blur-xl";
  const inactiveButtonHoverClass =
    "hover:border-cyan-400/60 hover:bg-cyan-400/5";
  const activeTabLeftBarClass =
    "bg-[linear-gradient(181.86deg,_#00A7A2_5.72%,_#0179C2_49.63%,_#814A98_93.54%)]";

  const tabContent = {
    economy: {
      title: t("strategic_direction.investment_destination"),
      items: [
        {
          icon: (
            <img
              src="/icons/globe.png"
              alt="Economy"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.economy_items.item1"),
        },
        {
          icon: (
            <img
              src="/icons/cash-02.png"
              alt="Investment"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.economy_items.item2"),
        },
        {
          icon: (
            <img
              src="/icons/globe.png"
              alt="Market Access"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.economy_items.item3"),
        },
        {
          icon: (
            <img
              src="/icons/catalogue.png"
              alt="Ecosystem"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.economy_items.item4"),
        },
        {
          icon: (
            <img
              src="/icons/coins-01.png"
              alt="Incentives"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.economy_items.item5"),
        },
      ],
    },
    society: {
      title: t("strategic_direction.investment_destination"),
      items: [
        {
          icon: (
            <img
              src="/icons/city-01.png"
              alt="Tourism"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.society_items.item1"),
        },
        {
          icon: (
            <img
              src="/icons/catalogue.png"
              alt="Culture"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.society_items.item2"),
        },
        {
          icon: (
            <img
              src="/icons/city-01.png"
              alt="Quality of Life"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.society_items.item3"),
        },
        {
          icon: (
            <img
              src="/icons/catalogue.png"
              alt="Education"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.society_items.item4"),
        },
        {
          icon: (
            <img
              src="/icons/city-01.png"
              alt="Social"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.society_items.item5"),
        },
      ],
    },
    nation: {
      title: t("strategic_direction.investment_destination"),
      items: [
        {
          icon: (
            <img
              src="/icons/globe.png"
              alt="Competitiveness"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.nation_items.item1"),
        },
        {
          icon: (
            <img
              src="/icons/city-01.png"
              alt="Giga Projects"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.nation_items.item2"),
        },
        {
          icon: (
            <img
              src="/icons/catalogue.png"
              alt="Digital"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.nation_items.item3"),
        },
        {
          icon: (
            <img
              src="/icons/coins-01.png"
              alt="SMEs"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.nation_items.item4"),
        },
        {
          icon: (
            <img
              src="/icons/globe.png"
              alt="Energy"
              className="w-full h-full"
            />
          ),
          text: t("strategic_direction.nation_items.item5"),
        },
      ],
    },
  };

  // Static data array for stat cards
  const statCards: StatCard[] = [
    {
      value: "1",
      suffix: "st",
      title: "Diversification & Reform Journey",
      description:
        "Presence Of Investment Opportunities For Transformational Projects",
      gradientFrom: "#003A39",
      isNewRecord: true,
    },
    {
      value: "230",
      suffix: "B",
      title: "Game-Changing Opportunities",
      description:
        "Presence Of Investment Opportunities For Transformational Projects",
      gradientFrom: "#002C46",
    },
    {
      value: "10.7",
      suffix: "%",
      title: "Integrated Infrastructure",
      description:
        "Presence Of Investment Opportunities For Transformational Projects",
      gradientFrom: "#002A32",
    },
    {
      value: "1",
      suffix: "st",
      title: "Attractive Property Solutions",
      description:
        "Presence Of Investment Opportunities For Transformational Projects",
      gradientFrom: "#001A2A",
      isNewRecord: true,
    },
    {
      value: "230",
      suffix: "B",
      title: "Young & Skilled Workforce",
      description:
        "Presence Of Investment Opportunities For Transformational Projects",
      gradientFrom: "#14122E",
    },
  ];

  return (
    <section className="relative pt-12 md:pt-10">
      {/* Background Saudi Emblem Pattern */}
      <div className="container mx-auto px-3 relative z-50">
        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-12 md:mb-16">
          {statCards.map((card, index) => (
            <div
              key={index}
              className="glass relative p-6 md:p-8 overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg"
              style={{
                background: `${card.gradientFrom}`,
              }}
            >
              {/* Light effect at bottom right */}
              <div
                className="absolute bottom-0 right-0 w-full h-full pointer-events-none rounded-2xl overflow-hidden"
                style={{
                  background: `radial-gradient(ellipse 70% 50% at bottom right, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 25%, transparent 65%)`,
                }}
              />

              {/* background image */}
              <div className="absolute inset-0">
                <img
                  src="/strategic/bg-card.png"
                  alt={card.title}
                  className="w-full h-1/2"
                />
              </div>

              {/* card content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="text-4xl md:text-5xl lg:text-[36px] bukra-bold text-white flex items-start">
                    {card.value}
                    {card.suffix && (
                      <span className="text-2xl md:text-3xl lg:text-[28px] bukra-bold -mt-1">
                        {card.suffix}
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="text-base md:text-xl text-center bukra-medium text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm opacity-80 text-white/80 text-center bukra-regular">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-14 mb-16">
          {/* Left Column: Vision Quote & Crown Prince - 4 columns */}
          <div className="lg:col-span-5 space-y-6 mb-10 lg:mb-0">
            {/* Vision Quote */}
            <div className=" bg-black/50  backdrop-blur-sm p-6 md:p-8 rounded-2xl">
              <p className="text-white/90 text-xs md:text-2xl leading-relaxed">
                &quot;“Our Vision is a strong, thriving, and stable Saudi Arabia
                that provides opportunity for all. Our Vision is a tolerant
                country with Islam as its constitution and moderation as its
                method. We will welcome qualified individuals from all over the
                world and will respect those who have come to join our journey
                and our success.”&quot;
              </p>
              {/* Crown Prince */}
              <div className="flex items-start mt-12 gap-4">
                <img
                  src="/mbs.png"
                  alt="Crown Prince"
                  className="w-full h-full object-cover"
                />
                <div className="text-white">
                  <h3 className="font-medium text-base md:text-2xl mb-1">
                    HRH Mohammed bin Salman Crown
                  </h3>
                  <p className="text-base md:text-[22px] text-white/60 bukra-regular">
                    “Prince, Prime Minister, and Chairman of the Council of
                    Economic and Development Affairs ”
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* right: Vision 2030 with Tabs - 4 columns */}
          <div className="lg:col-span-7 flex flex-col md:flex-row items-start justify-center">
            {/* Tabs/Pillars */}
            <div className="space-y-3 md:space-y-4 mb-5 mt-7 lg:mb-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() =>
                    setActiveTab(tab.id as "economy" | "society" | "nation")
                  }
                  className={`w-full text-left relative pl-6 rounded-l-xl transition-all duration-300 py-3 md:py-6 ${
                    activeTab === tab.id
                      ? activeButtonBgClass
                      : inactiveButtonHoverClass
                  }`}
                >
                  <span
                    className={`absolute top-0 left-0 w-2 rounded-l-3xl h-full ${
                      activeTab === tab.id
                        ? activeTabLeftBarClass
                        : "bg-transparent"
                    }`}
                  ></span>
                  <h3 className="text-white font-light text-base md:text-lg lg:text-2xl">
                    {tab.title}
                  </h3>
                </button>
              ))}
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl">
              <div className="space-y-6">
                {tabContent[activeTab].items.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex gap-4 animate-fade-in">
                      <div className="w-10 h-10 flex-shrink-0 rounded-lg flex items-center justify-center ">
                        {item.icon}
                      </div>
                      <p className="md:min-w-[418px] text-white/80 text-base md:text-lg leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                    {idx < tabContent[activeTab].items.length - 1 && (
                      <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Review link */}
        <div className="mt-12 mb-12 flex items-center justify-center text-center">
          <div className="flex items-center gap-2 justify-center bg-[#00A7A2] text-white md:px-6 px-5 py-2 rounded-3xl text-sm md:text-xl bukra-regular">
            <p>
              {t("strategic_direction.review_economy_report")}{" "}
              <span className="text-sm md:text-base">2025</span>
            </p>
            <CgArrowTopRight />
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar - Swiper */}
      <div className="bg-black/30 backdrop-blur-sm px-4 md:px-6 lg:px-[30px] relative z-10">
        <div className="py-4">
          <Swiper
            modules={[Navigation]}
            slidesPerView="auto"
            navigation={true}
            className="stats-swiper"
          >
            {statsData.map((stat, index) => (
              <SwiperSlide key={index} className="!w-auto px-2 md:px-6 lg:px-4">
                <div className="flex items-center gap-4 md:gap-8">
                  <img
                    src="/icons/saudi-tree.png"
                    alt=""
                    className="h-[16px] md:h-[18px] lg:h-[22px]"
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 text-sm md:text-base lg:text-[22px] font-bold whitespace-nowrap">
                      {stat.value}
                    </span>
                    <span className="text-white text-sm md:text-base lg:text-[22px] whitespace-nowrap">
                      {stat.description}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
