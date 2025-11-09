/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { TbArrowCurveRight } from "react-icons/tb";
import { CgArrowTopRight } from "react-icons/cg";
import i18n from "@/lib/i18n";

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

export default function WhySaudiInvest() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"economy" | "society" | "nation">(
    "economy"
  );

  const tabs: Array<{
    id: "economy" | "society" | "nation" | "talent" | "saudi";
    title: string;
  }> = [
    { id: "economy", title: "Transformational Vision" },
    { id: "society", title: "Game-Changing Opportunities" },
    { id: "nation", title: "Trusted and Stable Destination" },
    { id: "talent", title: "Physical Infrastructure " },
    { id: "saudi", title: "Digital Infrastructure" },
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
    talent: {
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
    saudi: {
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

  const isRTL = i18n.language === "ar";

  return (
    <section className="relative pt-12 md:pt-10">
      {/* Background Saudi Emblem Pattern */}
      <div className="container mx-auto px-3 relative z-50">
        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-12 md:mb-16">
          {statCards.map((card, index) => (
            <div
              key={index}
              className=" relative p-6 md:p-8 overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg"
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

        {/* title */}
        <div className="max-w-2xl space-y-4  mb-6 md:mb-10 lg:mt-26">
          <h2
            className={`text-3xl text-center ${
              isRTL ? "md:text-right" : "md:text-left"
            } md:text-5xl lg:text-[38px] bukra-medium bukra-bold text-white`}
          >
            A Nation With A Bold Vision
          </h2>
          <p
            className={`text-base text-center md:text-lg lg:text-[20px] text-white/70 bukra-regular ${
              isRTL ? "md:text-right" : "md:text-left"
            }`}
          >
            Unlocking game-changing opportunities for the world
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 mb-16  ">
          {/* Left Column: Vision Quote & Crown Prince */}
          <div className="flex-1 xl:max-w-[530px]   mb-10 xl:mb-0">
            {/* Vision Quote */}
            <div className="h-full w-full bg-black/60 backdrop-blur-2xl p-6 md:p-[40px] md:pb-[30px] rounded-2xl flex flex-col justify-between">
              <p className="text-white/90 text-base md:text-[22px] leading-relaxed bukra-regular ">
                “Our Vision is a strong, thriving, and stable Saudi Arabia that
                provides opportunity for all. Our Vision is a{" "}
                <span className="text-[#00A7A2]">tolerant country </span> with
                Islam as its constitution and moderation as its method. We will
                welcome <span className="text-[#00A7A2]">qualified</span>{" "}
                individuals from all over the world and will respect those who
                have come to{" "}
                <span className="text-[#00A7A2]">
                  join our journey and our success
                </span>{" "}
                .”
              </p>
              {/* Crown Prince */}
              <div className="flex justify-between items-start gap-4 md:gap-[15px] mt-8  ">
                <div className="w-20 md:w-[134px] h-32 md:min-h-[168.5806427001953px] p-2  rounded-xl overflow-hidden shrink-0">
                  <img
                    src="/mbs.png"
                    alt="Crown Prince"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className=" flex flex-col items-center text-white ">
                  <h3 className="text-base md:text-xl bukra-bold mb-1">
                    HRH Mohammed bin Salman Crown
                  </h3>
                  <p className="text-xs md:text-[16px] text-white bukra-regular">
                    Prince, Prime Minister, and Chairman of the Council of
                    Economic and Development Affairs 
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* right: Vision 2030 with Tabs */}
          <div className="flex flex-col lg:flex-row gap-6 md:gap-0 flex-1 items-start">
            {/* Tabs/Pillars */}
            <div className="lg:max-w-[320px] xl:max-w-[360px] space-y-3  mb-5 lg:mb-0 md:mt-10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() =>
                    setActiveTab(tab.id as "economy" | "society" | "nation")
                  }
                  className={`w-full text-left relative pl-6 rounded-l-xl transition-all duration-300 py-3 md:py-5 ${
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
                  <h3 className="text-white font-light text-base md:text-lg lg:text-[20px] bukra-regular">
                    {tab.title}
                  </h3>
                </button>
              ))}
            </div>

            {/* content */}
            <div className="relative overflow-hidden bg-black/60 flex-1 backdrop-blur-sm p-6 md:p-8 2xl:py-[30px] 2xl:px-[30px] rounded-2xl">
              <div className="space-y-3 md:space-y-6">
                {tabContent[activeTab].items.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex gap-5 animate-fade-in">
                      <div className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center ">
                        {item.icon}
                      </div>
                      <p className="md:min-w-[418px] text-white/80 text-base bukra-regular md:text-xl leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                    {idx < tabContent[activeTab].items.length - 1 && (
                      <div className="mt-6 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* shape background */}
              <div className=" absolute -bottom-[120px] -right-[140px] w-[697.75px] h-[361px] rounded-full overflow-hidden">
                <svg
                  width="562"
                  height="244"
                  viewBox="0 0 562 244"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.6" filter="url(#filter0_f_20879_6501)">
                    <path
                      d="M1152.9 714.501C686.709 524.233 319.663 932.839 168.431 843.876C-21.6776 732.044 228.547 303.79 471.121 211.041C757.049 101.714 1468.83 843.442 1152.9 714.501Z"
                      fill="#00A7A2"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_20879_6501"
                      x="-98.5973"
                      y="0"
                      width="1530.73"
                      height="1056.73"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="100"
                        result="effect1_foregroundBlur_20879_6501"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Review link */}
        {/* <div className="mt-12 mb-12 flex items-center justify-center text-center">
          <div className="flex items-center gap-2 justify-center bg-[#00A7A2] text-white md:px-6 px-5 py-2 rounded-3xl text-sm md:text-xl bukra-regular">
            <p>
              {t("strategic_direction.review_economy_report")}{" "}
              <span className="text-sm md:text-base">2025</span>
            </p>
            <CgArrowTopRight />
          </div>
        </div> */}
      </div>

      {/* Bottom Stats Bar - Swiper */}
      {/* <div className="bg-black/30 backdrop-blur-sm px-4 md:px-6 lg:px-[30px] relative z-10">
        <div className="py-4">
          <Swiper
            modules={[Navigation]}
            slidesPerView="auto"
            navigation={true}
            className="stats-swiper"
          >
            {statsData.map((stat, index) => (
              <SwiperSlide key={index} className="w-auto! px-2 md:px-6 lg:px-4">
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
      </div> */}
    </section>
  );
}
