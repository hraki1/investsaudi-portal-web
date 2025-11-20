import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import SaudiMap from "../../maps/SaudiMap";
import { regionData } from "@/data/regionData";
import CounterNumber from "../../ui/CounterNumber";

export default function Opportunities() {
  const [activeRegionKey, setActiveRegionKey] = useState<string>("riyadh"); // Default to Makkah
  const activeRegion = regionData.find(
    (region) => region.key === activeRegionKey
  );

  const sectorSwiperRef = useRef<SwiperType | null>(null);
  const projectsSwiperRef = useRef<SwiperType | null>(null);
  const opportunitiesSwiperRef = useRef<SwiperType | null>(null);

  // Swiper nav disabled states
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
      // Reset other swipers to first slide
      sectorSwiperRef.current?.slideTo(0);
      projectsSwiperRef.current?.slideTo(0);
      opportunitiesSwiperRef.current?.slideTo(0);
    }
  };

  return (
    <section className="relative  overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <img
            src="/opportunities/opportunities-hero.png"
            alt="Opportunities Background"
            className="object-cover w-full h-full"
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
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* map */}
        <div className="container mx-auto px-3 md:px-12 lg:px-5 relative z-10">
          {/* Title with dotted border */}
          <div className="my-10 md:my-10 lg:my-22 pb-8 md:mb-16 mt-10 lg:pt-10">
            <h2 className="text-center text-3xl md:text-[34px] bukra-bold text-white">
              Explore Dynamic Regional Opportunities shaping Saudi Arabia’s
              growth story
            </h2>
          </div>

          {/* Left Column - Map */}
          <div className="relative flex mb-8 lg:mb-0 justify-center items-center mx-auto md:mx-0">
            <SaudiMap setActiveRegionByName={setActiveRegionByName} />
          </div>
        </div>

        {/* Details sectors */}
        <div className="relative w-full max-w-[750px] ml-auto bg-linear-to-b from-[#003A39] to-[#E6F6F699]/60 p-4 md:p-5 backdrop-blur-[20px]">
          <div className="">
            {/* Dot pattern overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 2px, transparent 2px)",
                backgroundSize: "30px 30px",
              }}
            ></div>
            {activeRegion && (
              <div className="relative z-10 space-y-2">
                {/* Key Figures */}
                <div>
                  <div className="flex flex-col gap-2 mb-4 md:mb-6">
                    <h3 className="text-base md:text-[22px] font-light text-white bukra-medium">
                      {activeRegion.name} Region
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 leading-tight bukra-regular">
                      Riyadh is the capital and largest city of Saudi Arabia. It
                      is also the capital of the Riyadh Province and the centre
                      of the Riyadh Governorate.
                    </p>
                  </div>

                  {/* Swiper Container */}
                  <div className="rounded-2xl p-2 md:p-4">
                    <div className="grid grid-cols-2 gap-2">
                      {activeRegion?.keyFigures.slice(0, 4).map((stat, idx) => (
                        <div
                          key={idx}
                          className="z-10 bg-black/50 backdrop-blur-sm rounded-2xl p-4"
                        >
                          <div className="flex justify-between items-center gap-2 mb-1">
                            <CounterNumber
                              value={stat.value}
                              suffix={stat.suffix}
                              animationDuration={0.8}
                              className="text-2xl md:text-[32px] flex font-light text-white"
                              suffixClassName="text-2xl md:text-[22px] font-light text-white px-1"
                              enableScaleAnimation={true}
                            />
                            <div className="flex items-center gap-1">
                                <img
                                src="/opportunities/icons/trend-up.png"
                                alt="Trend Up"
                                className="w-3 h-3 md:w-4 md:h-4 object-contain"
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
                      ))}
                    </div>
                  </div>
                </div>

                {/* key strategic sector */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm md:text-[20px] bukra-regular text-white/75">
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
                      320: { slidesPerView: 2 },
                      480: { slidesPerView: 2 },
                      640: { slidesPerView: 2 },
                      768: { slidesPerView: 3 },
                      1024: { slidesPerView: 3 },
                    }}
                  >
                    {activeRegion.keyStrategicSectors.map((sector, idx) => (
                      <SwiperSlide key={idx} className="h-auto!">
                        <div className="relative flex items-center justify-center rounded-[16px] overflow-hidden min-h-[120px] md:w-[219px] md:h-[120px] p-3">
                          <img
                            src={sector.icon}
                            alt={sector.title}
                            className="absolute inset-0 top-0 left-0 w-full h-full object-cover"
                          />
                          {/* overlay */}
                          <div className="absolute inset-0 top-0 left-0 bg-black/60" />
                          <p className="text-sm md:text-[16px] bukra-medium leading-6 relative text-white text-center">
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
                    <h4 className="text-sm md:text-[20px] bukra-regular text-white/75">
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
                      320: { slidesPerView: 2 },
                      480: { slidesPerView: 2 },
                      640: { slidesPerView: 2 },
                      768: { slidesPerView: 3 },
                      1024: { slidesPerView: 3 },
                    }}
                    className="mb-6"
                  >
                    {activeRegion.keyRegionalProjects.map((project, idx) => (
                      <SwiperSlide key={idx} className="h-auto!">
                        <div className="relative flex items-center justify-center rounded-[16px] overflow-hidden min-h-[120px] md:w-[219px] md:h-[120px] p-3">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 top-0 left-0 w-full h-full object-cover"
                          />
                          {/* overlay */}
                          <div className="absolute inset-0 top-0 left-0 bg-black/60" />
                          <p className="text-sm md:text-[16px] bukra-medium leading-6 relative text-white text-center">
                            {project.title}
                          </p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Opportunities */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm md:text-[20px] bukra-regular text-white/75">
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
                  >
                    {(() => {
                      const opportunitiesPerSlide = 4;
                      const slides = [] as Array<
                        typeof activeRegion.opportunities
                      >;
                      for (
                        let i = 0;
                        i < activeRegion.opportunities.length;
                        i += opportunitiesPerSlide
                      ) {
                        slides.push(
                          activeRegion.opportunities.slice(
                            i,
                            i + opportunitiesPerSlide
                          )
                        );
                      }
                      return slides.map((slideOpportunities, slideIdx) => (
                        <SwiperSlide key={slideIdx} className="h-auto!">
                          <div className="grid grid-cols-2 gap-3">
                            {slideOpportunities.map((opportunity, idx) => (
                              <div
                                key={idx}
                                className={`rounded-xl backdrop-blur-sm bg-linear-to-br from-black/60  ${opportunity.gradient} border border-white/20 p-3 h-full flex flex-col cursor-pointer`}
                              >
                                <div
                                  className={`${opportunity.categoryColor} bukra-regular text-xs rounded-full px-3 flex items-center justify-center py-2 mb-4  w-fit`}
                                >
                                  <span className="text-white text-xs font-medium">
                                    {opportunity.category}
                                  </span>
                                </div>
                                <p className="text-white bukra-regular text-sm sm:text-base leading-tight flex-1">
                                  {opportunity.title}
                                </p>
                              </div>
                            ))}
                          </div>
                        </SwiperSlide>
                      ));
                    })()}
                  </Swiper>
                </div>

                {/* links */}
                <div className="flex items-center justify-end gap-2 py-4">
                  <a    
                    href={``}
                    className="text-white bg-black/50 py-4 px-6 rounded-full text-sm md:text-base bukra-regular flex items-center gap-2"
                  >
                    Download Report
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
                          fill="white"
                        />
                      </svg>
                    </span>
                  </a>
                  <a
                    href={``}
                    className="text-white bg-black/50 py-4 px-6 rounded-full text-sm md:text-base bukra-regular flex items-center gap-2"
                  >
                    Learn More
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
                          fill="white"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
