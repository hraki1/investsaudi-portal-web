import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export type TabId = "economy" | "society" | "nation" | "talent" | "saudi";

interface Tab {
  id: TabId;
  title: string;
}

// UI style constants
const activeButtonBgClass =
  "bg-gradient-to-r from-black/40 via-black/30 to-black/0 backdrop-blur-xl";
const inactiveButtonHoverClass = "hover:border-cyan-400/60 hover:bg-cyan-400/5";
const activeTabLeftBarClass =
  "bg-[linear-gradient(181.86deg,_#00A7A2_5.72%,_#0179C2_49.63%,_#814A98_93.54%)]";

export default function Vision2030Tabs() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabId>("economy");

  const tabs: Tab[] = [
    { id: "economy", title: t("strategic_direction.tabs.economy") },
    { id: "society", title: t("strategic_direction.tabs.society") },
    { id: "nation", title: t("strategic_direction.tabs.nation") },
    { id: "talent", title: t("strategic_direction.tabs.talent") },
    { id: "saudi", title: t("strategic_direction.tabs.saudi") },
  ];

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
          text: "17 Vision Realization Programs driving structural reforms, privatization, and diversification",
        },
        {
          icon: (
            <img
              src="/icons/cash-02.png"
              alt="Investment"
              className="w-full h-full"
            />
          ),
          text: "Reform-driven framework ensuring investor confidence and policy clarity.",
        },
        {
          icon: (
            <img
              src="/icons/globe.png"
              alt="Market Access"
              className="w-full h-full"
            />
          ),
          text: "Gateway between Asia, Europe, and Africa with unmatched regional access and connectivity. Gateway to 3 continents, 4 hours to 2B people",
        },
        {
          icon: (
            <img
              src="/icons/catalogue.png"
              alt="Ecosystem"
              className="w-full h-full"
            />
          ),
          text: "Stable governance anchored in Vision 2030 with clear, sustained direction.",
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

  return (
    <div className="flex flex-col lg:flex-row gap-6 md:gap-0 flex-1 items-start">
      {/* Tabs/Pillars */}
      <div className="lg:max-w-[320px] xl:max-w-[300px] space-y-3  sm:mb-5 lg:mb-0 md:mt-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full text-left relative pl-6 2xl:pl-6 rounded-l-xl transition-all duration-300 py-3 md:py-5 ${
              activeTab === tab.id
                ? activeButtonBgClass
                : inactiveButtonHoverClass
            }`}
          >
            <span
              className={`absolute top-0 left-0 w-2 rounded-l-3xl h-full ${
                activeTab === tab.id ? activeTabLeftBarClass : "bg-transparent"
              }`}
            ></span>
            <h3 className="text-white font-light text-base md:text-lg lg:text-[18px] 2xl:text-[20px] bukra-regular">
              {tab.title}
            </h3>
          </button>
        ))}
      </div>

      {/* content */}
      <div className="relative overflow-hidden bg-black/60 flex-1 backdrop-blur-sm p-6 md:p-8 2xl:py-[30px] 2xl:px-[30px] rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="exit"
            animate="enter"
            exit="exit"
            className="space-y-3 md:space-y-6"
            style={{ willChange: "opacity" }}
          >
            {tabContent[activeTab].items.map((item, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                animate="visible"
                style={{ willChange: "opacity" }}
              >
                <div className="flex gap-5">
                  <motion.div
                    className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center"
                    whileHover="hover"
                    style={{ willChange: "transform" }}
                  >
                    {item.icon}
                  </motion.div>
                  <p className="2xl:min-w-[418px] text-white/80 text-base bukra-regular md:text-[17px] 2xl:text-xl max-w-[418px]">
                    {item.text}
                  </p>
                </div>
                {idx < tabContent[activeTab].items.length - 1 && (
                  <motion.div
                    className="mt-6 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"
                    custom={idx}
                    initial="hidden"
                    animate="visible"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
