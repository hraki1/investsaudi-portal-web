"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default function NationalPrograms() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Program logos data - create enough slides for smooth infinite loop
  const baseLogos = [
    {
      id: 1,
      image: "/national-transformation/invest-saudi.png",
      alt: "Invest Saudi",
    },
    { id: 2, image: "/national-transformation/ignite.png", alt: "Ignite" },
    {
      id: 3,
      image: "/national-transformation/private-program.png",
      alt: "Saudi Arabia Startup Program",
    },
    { id: 4, image: "/national-transformation/ntdp.png", alt: "NTDP" },
    {
      image: "/national-transformation/financial-program.png",
      id: 5,
      alt: "Financial Sector Development Program",
    },
    {
      id: 6,
      image: "/national-transformation/saudi-arabia.png",
      alt: "Saudi Arabia Startup Program",
    },
    {
      id: 7,
      image: "/national-transformation/air-program.png",
      alt: "air connectivity program",
    },
    {
      id: 8,
      image: "/national-transformation/quality-program.png",
      alt: "Quality of Life Program SDG",
    },
    {
      id: 9,
      image: "/national-transformation/saudi-arabia.png",
      alt: "Invest Saudi + Regional Headquarters Program",
      highlight: true,
    },
    {
      id: 10,
      image: "/national-transformation/national-investment.png",
      alt: "National Investment Strategy",
    },
  ];

  // Duplicate logos 3 times for seamless looping (30 slides total)
  const programLogos = [
    ...baseLogos,
    ...baseLogos.map((logo) => ({ ...logo, id: logo.id + 10 })),
    ...baseLogos.map((logo) => ({ ...logo, id: logo.id + 20 })),
  ];

  // RHQ stages data
  const rhqStages = [
    {
      id: 1,
      icon: "📍",
      iconBg: "#00A7A2",
      title: "Pre Location",
      description:
        "Saudi Arabia is actively recognizing its potential, seizing opportunities, and driving economic growth both domestically and internationally",
      image: "/national-programs/pre-location.jpg",
    },
    {
      id: 2,
      icon: "📦",
      iconBg: "#814A98",
      title: "Preparation For The Relocation",
      description:
        "Vision 2030 has driven a surge in demand for skilled professionals, with diversification and innovation attracting...",
      image: "/national-programs/preparation.jpg",
    },
    {
      id: 3,
      icon: "✈️",
      iconBg: "#D6358D",
      title: "Arrival In KSA",
      description:
        "Discover essential resources and guidance to ease your transition to life in Saudi Arabia. From housing and education...",
      image: "/national-programs/arrival.jpg",
    },
    {
      id: 4,
      icon: "🏠",
      iconBg: "#01778F",
      title: "Living In KSA",
      description:
        "Saudi Arabia is a treasure trove of history and culture, offering a glimpse into a rich and storied past",
      image: "/national-programs/living.jpg",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden">
      {/* Background with gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(245.07deg, #E6F6F6 11.73%, #ECE4F0 65.87%)",
        }}
      >
        <div className="absolute top-1 right-1 w-[300px] h-[400px] md:w-1/3 md:h-[550px] lg:w-2/3 lg:h-[588px] overflow-hidden">
          <div
            className="absolute inset-0 opacity-80"
            style={{
              backgroundImage: 'url("/bg-back.png")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "top right",
            }}
          ></div>
        </div>

        {/* Hexagon pattern overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="hexPattern"
              width="80"
              height="69.28"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M40 0L70 17.32L70 51.96L40 69.28L10 51.96L10 17.32Z"
                fill="none"
                stroke="#5BD5E8"
                strokeWidth="1"
                opacity="0.4"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexPattern)" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center md:text-left mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            National Programs Driving Transformation
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Coordinated initiatives accelerating growth and localization
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Side - Logo Carousel */}
          <div className="lg:col-span-3 flex flex-col items-center">
            {/* Up Arrow */}
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center mb-6 transition-all duration-300 hover:bg-gray-50"
              aria-label="Previous logo"
            >
              <BsChevronUp className="text-xl text-gray-700" />
            </button>

            {/* Logo Swiper */}
            <div className="w-full max-w-[500px] relative">
              <Swiper
                direction="vertical"
                slidesPerView={9}
                spaceBetween={15}
                loop={true}
                loopAdditionalSlides={5}
                centeredSlides={true}
                modules={[Navigation]}
                onSwiper={setSwiperInstance}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="h-[750px] logo-swiper"
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                slideActiveClass="swiper-slide-active-custom"
                speed={600}
              >
                {programLogos.map((logo, index) => {
                  // Calculate distance from center
                  const getDistanceFromCenter = () => {
                    if (!swiperInstance) return 0;
                    const totalSlides = programLogos.length;
                    if (totalSlides === 0) return 0;
                    const currentIndex = activeIndex ?? 0;
                    let distance = Math.abs(currentIndex - index);
                    // Handle loop distance calculation
                    if (distance > totalSlides / 2) {
                      distance = totalSlides - distance;
                    }
                    return isNaN(distance) ? 0 : distance;
                  };

                  const distance = getDistanceFromCenter();

                  // Calculate perspective transform based on distance
                  let translateZ = 0;
                  // let opacity = 1.0;
                  let zIndex = 0;

                  if (distance === 0) {
                    // Center slide - at front
                    translateZ = 0;
                    // opacity = 1.0;
                    zIndex = 10;
                  } else {
                    // All other slides recede into distance with perspective
                    translateZ = -distance * 100; // Moves back in 3D space
                    // opacity = Math.max(0.25, 1 - distance * 0.18);
                    zIndex = 10 - distance; // Lower z-index for farther slides
                  }

                  const isCenter = distance === 0;

                  return (
                    <SwiperSlide
                      key={logo.id}
                      className="flex items-center justify-center"
                      style={{
                        perspective: "1000px",
                        transformStyle: "preserve-3d",
                        zIndex: zIndex,
                        position: "relative",
                      }}
                    >
                      {isCenter ? (
                        <div
                          className="rounded-[22px] p-1.5 transition-all duration-300"
                          style={{
                            background:
                              "linear-gradient(269.96deg, #00A7A2 -0.73%, #0179C2 37.74%, #814A98 76.21%)",
                            height: "85px",
                            width: "100%",
                            transform: `translateZ(${translateZ}px)`,
                            transformStyle: "preserve-3d",
                            pointerEvents: "auto",
                            position: "relative",
                            zIndex: zIndex,
                          }}
                        >
                          <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                            <div className="relative w-full h-full flex items-center justify-center">
                              <Image
                                src={logo.image}
                                alt={logo.alt}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div
                          className="flex items-center justify-center rounded-2xl transition-all duration-300 bg-white shadow-sm -mb-5 cursor-pointer hover:scale-105"
                          style={{
                            height: "85px",
                            width: "100%",
                            // marginTop: `-${distance * 950}px`,
                            transform: `translateZ(${translateZ}px)`,
                            transformStyle: "preserve-3d",
                            pointerEvents: "auto",
                            position: "relative",
                            zIndex: zIndex,
                            // opacity: opacity,
                          }}
                        >
                          <div className="relative w-full h-full flex items-center justify-center">
                            <Image
                              src={logo.image}
                              alt={logo.alt}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                      )}
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            {/* Down Arrow */}
            <button
              onClick={() => swiperInstance?.slideNext()}
              className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center mt-6 transition-all duration-300 hover:bg-gray-50"
              aria-label="Next logo"
            >
              <BsChevronDown className="text-xl text-gray-700" />
            </button>
          </div>

          {/* Right Side - RHQ Program Card */}
          <div className="lg:col-span-9">
            <div
              className="rounded-3xl p-8 md:p-10 bg-white shadow-xl"
              style={{
                background:
                  "linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 50%, #F3F4F6 100%)",
              }}
            >
              {/* Card Header */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Regional Headquarters Program (RHQ)
              </h3>
              <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
                Saudi Arabia is a dynamic, globally influential economic
                powerhouse in the Middle East, offering diverse landscapes,
                climates, and a rich cultural heritage that blends tradition
                with modernity.
              </p>

              {/* Stages Grid */}
              <div className="space-y-6">
                {rhqStages.map((stage, index) => (
                  <div
                    key={stage.id}
                    className="flex flex-col md:flex-row items-start md:items-center gap-4 p-5 rounded-2xl bg-white/80 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shrink-0 shadow-md"
                      style={{ backgroundColor: stage.iconBg }}
                    >
                      <div className="text-sm font-bold">0{index + 1}</div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                        {stage.title}
                      </h4>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {stage.description}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="w-full md:w-32 h-24 rounded-xl overflow-hidden shadow-md shrink-0">
                      <div className="w-full h-full bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <span className="text-xs text-gray-500">
                          Stage {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Visit RHQ Button */}
              <div className="flex justify-end mt-8">
                <button className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-gray-300 rounded-full text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md">
                  <span>Visit RHQ</span>
                  <HiArrowRight className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Button */}
        <div className="flex justify-center md:justify-end mt-12">
          <button className="flex items-center gap-2.5 px-8 py-4 bg-[#00A7A2] rounded-full text-white font-semibold text-base md:text-lg hover:bg-[#008B8B] transition-all duration-300 shadow-lg hover:shadow-xl">
            <span>Explore National Programs</span>
            <HiArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
}
