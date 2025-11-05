"use client";

import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import SaudiMap from "../maps/SaudiMap";
import { regionData } from "@/app/data/regionData";
import CounterNumber from "../ui/CounterNumber";

export default function Opportunities() {
  const { t } = useTranslation();

  const [activeRegionKey, setActiveRegionKey] = useState<string>("riyadh"); // Default to Makkah
  const activeRegion = regionData.find(
    (region) => region.key === activeRegionKey
  );

  const swiperRef = useRef<SwiperType | null>(null);
  const sectorSwiperRef = useRef<SwiperType | null>(null);
  const projectsSwiperRef = useRef<SwiperType | null>(null);
  const opportunitiesSwiperRef = useRef<SwiperType | null>(null);

  // Swiper nav disabled states
  const [keyFiguresAtStart, setKeyFiguresAtStart] = useState<boolean>(true);
  const [keyFiguresAtEnd, setKeyFiguresAtEnd] = useState<boolean>(false);
  const [sectorsAtStart, setSectorsAtStart] = useState<boolean>(true);
  const [sectorsAtEnd, setSectorsAtEnd] = useState<boolean>(false);
  const [projectsAtStart, setProjectsAtStart] = useState<boolean>(true);
  const [projectsAtEnd, setProjectsAtEnd] = useState<boolean>(false);
  const [oppsAtStart, setOppsAtStart] = useState<boolean>(true);
  const [oppsAtEnd, setOppsAtEnd] = useState<boolean>(false);

  const attachNavHandlers = (
    swiper: SwiperType,
    setAtStart: (v: boolean) => void,
    setAtEnd: (v: boolean) => void
  ) => {
    const update = () => {
      setAtStart(swiper.isBeginning);
      setAtEnd(swiper.isEnd);
    };
    update();
    swiper.on("slideChange", update);
    swiper.on("resize", update);
    swiper.on("update", update);
  };

  // Function to set active region by name (accepts region key or region name)
  const setActiveRegionByName = (regionName: string) => {
    const normalizedName = regionName.toLowerCase().trim();

    // Try to find by key first
    const foundRegionByKey = regionData.find(
      (region) => region.key.toLowerCase() === normalizedName
    );

    if (foundRegionByKey) {
      setActiveRegionKey(foundRegionByKey.key);
      const regionIndex = regionData.indexOf(foundRegionByKey);
      if (regionIndex !== -1) {
        swiperRef.current?.slideTo(regionIndex);
      }
      // Reset other swipers to first slide
      sectorSwiperRef.current?.slideTo(0);
      projectsSwiperRef.current?.slideTo(0);
      opportunitiesSwiperRef.current?.slideTo(0);
      return;
    }

    // If not found by key, try to find by region name
    const foundRegionByName = regionData.find(
      (region) => region.name.toLowerCase() === normalizedName
    );

    if (foundRegionByName) {
      setActiveRegionKey(foundRegionByName.key);
      const regionIndex = regionData.indexOf(foundRegionByName);
      if (regionIndex !== -1) {
        swiperRef.current?.slideTo(regionIndex);
      }
      // Reset other swipers to first slide
      sectorSwiperRef.current?.slideTo(0);
      projectsSwiperRef.current?.slideTo(0);
      opportunitiesSwiperRef.current?.slideTo(0);
    }
  };

  return (
    <section className="relative py-6 md:py-8  overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src="/opportunities/opportunities-hero.png"
            alt="Opportunities Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-3 md:px-12 lg:px-5 relative z-10">
        {/* Title with dotted border */}
        <div className="pt-8 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {t("opportunities.title")}
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-12 items-center">
          {/* Left Column - Map */}
          <div className="relative mx-auto md:mx-0">
            <SaudiMap setActiveRegionByName={setActiveRegionByName} />
          </div>

          {/* Right Column - Details */}
          {activeRegion && (
            <div className="space-y-8 bg-black/60 p-4 md:p-5 rounded-2xl backdrop-blur-sm">
              {/* Key Figures */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base md:text-[22px] font-light text-white">
                    {activeRegion.name} {t("opportunities.key_figures")}
                  </h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => swiperRef.current?.slidePrev()}
                      disabled={keyFiguresAtStart}
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800/80 border border-gray-700/50 flex items-center justify-center transition-colors ${
                        keyFiguresAtStart
                          ? "opacity-40 cursor-not-allowed"
                          : "hover:bg-gray-700/80"
                      }`}
                      aria-label="Previous"
                    >
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => swiperRef.current?.slideNext()}
                      disabled={keyFiguresAtEnd}
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800/80 border border-gray-700/50 flex items-center justify-center transition-colors ${
                        keyFiguresAtEnd
                          ? "opacity-40 cursor-not-allowed"
                          : "hover:bg-gray-700/80"
                      }`}
                      aria-label="Next"
                    >
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Swiper Container */}
                <div className=" backdrop-blur-sm rounded-2xl p-4 md:p-5">
                  <Swiper
                    onSwiper={(swiper) => {
                      swiperRef.current = swiper;
                      attachNavHandlers(
                        swiper,
                        setKeyFiguresAtStart,
                        setKeyFiguresAtEnd
                      );
                    }}
                    onSlideChange={() => {
                      // Only reset other swipers to first slide, never change the active region from here
                      sectorSwiperRef.current?.slideTo(0);
                      projectsSwiperRef.current?.slideTo(0);
                      opportunitiesSwiperRef.current?.slideTo(0);
                    }}
                    modules={[Navigation]}
                    spaceBetween={16}
                    slidesPerView={1}
                    className="key-figures-swiper"
                  >
                    {activeRegion &&
                      (() => {
                        // Group keyFigures into sets of 4 for multiple slides
                        const figuresPerSlide = 4;
                        const slides = [];
                        for (
                          let i = 0;
                          i < activeRegion.keyFigures.length;
                          i += figuresPerSlide
                        ) {
                          slides.push(
                            activeRegion.keyFigures.slice(
                              i,
                              i + figuresPerSlide
                            )
                          );
                        }
                        return slides.map((slideFigures, slideIdx) => (
                          <SwiperSlide key={slideIdx}>
                            <div className="grid grid-cols-2 gap-2">
                              {slideFigures.map((stat, idx) => (
                                <div key={idx} className="p-2">
                                  <div>
                                    <div className="flex items-center gap-2 mb-1">
                                      <CounterNumber
                                        value={stat.value}
                                        suffix={stat.suffix}
                                        animationDuration={0.8}
                                        className="text-2xl md:text-[43px] font-light text-white"
                                        suffixClassName="text-2xl md:text-[43px] font-light text-white px-1"
                                        enableScaleAnimation={true}
                                      />
                                      <div className="flex items-center gap-1">
                                        <Image
                                          src="/opportunities/icons/trend-up.png"
                                          alt="Trend Up"
                                          width={16}
                                          height={16}
                                          className="w-3 h-3 md:w-4 md:h-4"
                                        />
                                        <span className="text-xs md:text-sm text-[#00A7A2]">
                                          {stat.change}
                                        </span>
                                      </div>
                                    </div>
                                    <p className="text-sm md:text-base text-gray-400 leading-tight">
                                      {stat.label}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </SwiperSlide>
                        ));
                      })()}
                  </Swiper>
                </div>
              </div>

              {/* key strategic sector */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-medium text-slate-400">
                    Key Strategic Sector
                  </h4>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => sectorSwiperRef.current?.slidePrev()}
                      disabled={sectorsAtStart}
                      className={`w-8 h-8 rounded-full bg-gray-800/80 border border-gray-700/50 flex items-center justify-center transition-colors ${
                        sectorsAtStart
                          ? "opacity-40 cursor-not-allowed"
                          : "hover:bg-gray-700/80"
                      }`}
                      aria-label="Previous sectors"
                    >
                      <svg
                        className="w-4 h-4 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => sectorSwiperRef.current?.slideNext()}
                      disabled={sectorsAtEnd}
                      className={`w-8 h-8 rounded-full bg-gray-800/80 border border-gray-700/50 flex items-center justify-center transition-colors ${
                        sectorsAtEnd
                          ? "opacity-40 cursor-not-allowed"
                          : "hover:bg-gray-700/80"
                      }`}
                      aria-label="Next sectors"
                    >
                      <svg
                        className="w-4 h-4 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <Swiper
                  onSwiper={(swiper) => {
                    sectorSwiperRef.current = swiper;
                    attachNavHandlers(
                      swiper,
                      setSectorsAtStart,
                      setSectorsAtEnd
                    );
                  }}
                  modules={[Navigation]}
                  spaceBetween={10}
                  slidesPerView={2}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                  }}
                >
                  {activeRegion.keyStrategicSectors.map((sector, idx) => (
                    <SwiperSlide key={idx} className="h-auto!">
                      <div className="rounded-xl bg-black/40 border border-white/10 p-3 h-full flex flex-col items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                          <Image
                            src={sector.icon}
                            alt=""
                            width={24}
                            height={24}
                            className="w-6 h-6 object-contain opacity-90"
                          />
                        </div>
                        <p className="text-white text-sm md:text-base leading-tight text-center">
                          {sector.title}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Key Regional Projects */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-medium text-slate-400">
                    Key Regional Projects
                  </h4>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => projectsSwiperRef.current?.slidePrev()}
                      disabled={projectsAtStart}
                      className={`w-8 h-8 rounded-full bg-gray-800/80 border border-gray-700/50 flex items-center justify-center transition-colors ${
                        projectsAtStart
                          ? "opacity-40 cursor-not-allowed"
                          : "hover:bg-gray-700/80"
                      }`}
                      aria-label="Previous projects"
                    >
                      <svg
                        className="w-4 h-4 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => projectsSwiperRef.current?.slideNext()}
                      disabled={projectsAtEnd}
                      className={`w-8 h-8 rounded-full bg-gray-800/80 border border-gray-700/50 flex items-center justify-center transition-colors ${
                        projectsAtEnd
                          ? "opacity-40 cursor-not-allowed"
                          : "hover:bg-gray-700/80"
                      }`}
                      aria-label="Next projects"
                    >
                      <svg
                        className="w-4 h-4 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <Swiper
                  onSwiper={(swiper) => {
                    projectsSwiperRef.current = swiper;
                    attachNavHandlers(
                      swiper,
                      setProjectsAtStart,
                      setProjectsAtEnd
                    );
                  }}
                  modules={[Navigation]}
                  spaceBetween={10}
                  slidesPerView={2}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                  }}
                  className="mb-6"
                >
                  {activeRegion.keyRegionalProjects.map((project, idx) => (
                    <SwiperSlide key={idx} className="h-auto!">
                      <div className="rounded-xl bg-black/40 border border-white/10 p-6 aspect-4/3 flex items-center justify-center">
                        <Image
                          src={project.image}
                          alt=""
                          width={80}
                          height={80}
                          className="max-h-16 md:max-h-20 object-contain opacity-90"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Opportunities */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-medium text-slate-400">
                    Opportunities
                  </h4>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        opportunitiesSwiperRef.current?.slidePrev()
                      }
                      disabled={oppsAtStart}
                      className={`w-8 h-8 rounded-full bg-gray-800/80 border border-gray-700/50 flex items-center justify-center transition-colors ${
                        oppsAtStart
                          ? "opacity-40 cursor-not-allowed"
                          : "hover:bg-gray-700/80"
                      }`}
                      aria-label="Previous opportunities"
                    >
                      <svg
                        className="w-4 h-4 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() =>
                        opportunitiesSwiperRef.current?.slideNext()
                      }
                      disabled={oppsAtEnd}
                      className={`w-8 h-8 rounded-full bg-gray-800/80 border border-gray-700/50 flex items-center justify-center transition-colors ${
                        oppsAtEnd
                          ? "opacity-40 cursor-not-allowed"
                          : "hover:bg-gray-700/80"
                      }`}
                      aria-label="Next opportunities"
                    >
                      <svg
                        className="w-4 h-4 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <Swiper
                  onSwiper={(swiper) => {
                    opportunitiesSwiperRef.current = swiper;
                    attachNavHandlers(swiper, setOppsAtStart, setOppsAtEnd);
                  }}
                  modules={[Navigation]}
                  spaceBetween={12}
                  slidesPerView={1}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2 },
                  }}
                >
                  {activeRegion.opportunities.map((opportunity, idx) => (
                    <SwiperSlide key={idx} className="h-auto!">
                      <div
                        className={`rounded-lg backdrop-blur-sm bg-linear-to-br from-black/60  ${opportunity.gradient} border border-white/20 p-3 h-full flex flex-col cursor-pointer transition-transform hover:scale-[1.02]`}
                      >
                        <div
                          className={`${opportunity.categoryColor} rounded-full px-3 flex items-center justify-center py-1.5 mb-4  w-fit`}
                        >
                          <span className="text-white text-xs font-medium">
                            {opportunity.category}
                          </span>
                        </div>
                        <p className="text-white text-sm sm:text-base font-medium leading-tight flex-1">
                          {opportunity.title}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
