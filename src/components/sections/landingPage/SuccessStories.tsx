/* eslint-disable @next/next/no-img-element */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useState, useRef } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi2";

interface SuccessStory {
  id: number;
  brand: string;
  brandLogo?: string;
  category: string;
  categoryIcon?: string;
  name: string;
  title: string;
  description: string;
  image?: string;
  hasVideo?: boolean;
  videoThumbnail?: string;
  video?: string;
  color: string;
  gradient?: string;
  img?: string;
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    brand: "LUCID",
    category: "Advanced Manufacturing",
    video: "investor-matchmaking/video.mp4",
    name: "Faisal Sultan",
    title: "VP and Manager Director in the Middle East",
    description:
      "The Lucid AMP-2 facility in Saudi Arabia opened its doors in September 2023 at King Abdullah Economic City (KAEC), marking a significant milestone in Saudi Vision 2030. This state-of-the-art manufacturing plant represents a key investment in the electric automotive industry, contributing to the Kingdom's ambitious goals of diversifying its economy and expanding its manufacturing supply chain.",
    image: "/Hero.png",
    hasVideo: true,
    color: "linear-gradient(270deg, #007D7A 0%, #00A7A2 100%)",
    gradient: "from-[#0F766E] via-[#14B8A6] to-[#2DD4BF]",
    img: "success-stories/card.png",
  },
  {
    id: 2,
    brand: "pwc",
    category: "Professional Services",
    name: "John Smith",
    title: "Managing Partner",
    description:
      "The Lucid AMP-2 facility in Saudi Arabia opened its doors in September 2023 at King Abdullah Economic City (KAEC), marking a significant milestone in Saudi Vision 2030. This state-of-the-art manufacturing plant represents a key investment in the electric automotive industry, contributing to the Kingdom's ambitious goals of diversifying its economy and expanding its manufacturing supply chain.",
    color: "#7C3AED",
    img: "success-stories/card.png",
  },
  {
    id: 3,
    brand: "HUAWEI",
    category: "Technology",
    name: "Li Ming",
    title: "Regional Director",
    description:
      "The Lucid AMP-2 facility in Saudi Arabia opened its doors in September 2023 at King Abdullah Economic City (KAEC), marking a significant milestone in Saudi Vision 2030. This state-of-the-art manufacturing plant represents a key investment in the electric automotive industry, contributing to the Kingdom's ambitious goals of diversifying its economy and expanding its manufacturing supply chain.",
    color: "#DB2777",
    img: "success-stories/card.png",
  },
  {
    id: 4,
    brand: "pwc",
    category: "Professional Services",
    name: "John Smith",
    title: "Managing Partner",
    description:
      "The Lucid AMP-2 facility in Saudi Arabia opened its doors in September 2023 at King Abdullah Economic City (KAEC), marking a significant milestone in Saudi Vision 2030. This state-of-the-art manufacturing plant represents a key investment in the electric automotive industry, contributing to the Kingdom's ambitious goals of diversifying its economy and expanding its manufacturing supply chain.",
    color: "#7C3AED",
    img: "success-stories/card.png",
  },
  {
    id: 5,
    brand: "HUAWEI",
    category: "Technology",
    name: "Li Ming",
    title: "Regional Director",
    description:
      "The Lucid AMP-2 facility in Saudi Arabia opened its doors in September 2023 at King Abdullah Economic City (KAEC), marking a significant milestone in Saudi Vision 2030. This state-of-the-art manufacturing plant represents a key investment in the electric automotive industry, contributing to the Kingdom's ambitious goals of diversifying its economy and expanding its manufacturing supply chain.",
    color: "#DB2777",
    img: "success-stories/card.png",
  },
  {
    id: 6,
    brand: "HUAWEI",
    category: "Technology",
    name: "Li Ming",
    title: "Regional Director",
    description:
      "The Lucid AMP-2 facility in Saudi Arabia opened its doors in September 2023 at King Abdullah Economic City (KAEC), marking a significant milestone in Saudi Vision 2030. This state-of-the-art manufacturing plant represents a key investment in the electric automotive industry, contributing to the Kingdom's ambitious goals of diversifying its economy and expanding its manufacturing supply chain.",
    color: "#DB2777",
    img: "success-stories/card.png",
  },
  {
    id: 7,
    brand: "LUCID",
    category: "Advanced Manufacturing",
    name: "Faisal Sultan",
    title: "VP and Manager Director in the Middle East",
    description:
      "The Lucid AMP-2 facility in Saudi Arabia opened its doors in September 2023 at King Abdullah Economic City (KAEC), marking a significant milestone in Saudi Vision 2030. This state-of-the-art manufacturing plant represents a key investment in the electric automotive industry, contributing to the Kingdom's ambitious goals of diversifying its economy and expanding its manufacturing supply chain.",
    image: "/Hero.png",
    hasVideo: true,
    color: "linear-gradient(270deg, #007D7A 0%, #00A7A2 100%)",
    gradient: "from-[#0F766E] via-[#14B8A6] to-[#2DD4BF]",
    img: "success-stories/card.png",
  },
  {
    id: 8,
    brand: "HUAWEI",
    category: "Technology",
    name: "Li Ming",
    title: "Regional Director",
    description:
      "The Lucid AMP-2 facility in Saudi Arabia opened its doors in September 2023 at King Abdullah Economic City (KAEC), marking a significant milestone in Saudi Vision 2030. This state-of-the-art manufacturing plant represents a key investment in the electric automotive industry, contributing to the Kingdom's ambitious goals of diversifying its economy and expanding its manufacturing supply chain.",
    color: "#DB2777",
    gradient: "from-[#0F766E] via-[#14B8A6] to-[#2DD4BF]",
    img: "success-stories/card.png",
  },
];

export default function SuccessStories() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#08141f] overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 md:mb-12">
          Success Stories
        </h2>
      </div>

      <div className="relative z-10 lg:max-w-[1200px] mx-auto px-0 min-[375px]:px-0 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-visible">
        {/* Title */}

        <div
          className={`relative z-10  container mx-auto ${
            activeIndex === 0 && "md:ml-[-200px]"
          } ${
            activeIndex === 1 && "transition-all duration-300"
          } px-4 min-[375px]:px-0 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-visible`}
        >
          {/* Swiper Carousel */}
          <div className="mb-6 sm:mb-8 md:mb-12 lg:mb-16 overflow-visible max-w-[1200px]">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1.2}
              spaceBetween={-820}
              breakpoints={{
                375: {
                  slidesPerView: 1.2,
                  spaceBetween: -80,
                  centeredSlides: true,
                },
                480: {
                  slidesPerView: 1.0,
                  spaceBetween: -100,
                },
                640: {
                  slidesPerView: 1.08,
                  spaceBetween: -120,
                },
                768: {
                  slidesPerView: 1.14,
                  spaceBetween: -120,
                },
                1024: {
                  slidesPerView: 1.2,
                  spaceBetween: -820,
                },
                1280: {
                  slidesPerView: 1.2,
                  spaceBetween: -820,
                },
              }}
              navigation={{
                nextEl: ".success-stories-next",
                prevEl: ".success-stories-prev",
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
              }}
              className="success-stories-swiper stacked-cards "
            >
              {successStories.map((story,index) => (
                <SwiperSlide key={index} className="h-auto! stacked-slide">
                  <div
                    className={`w-[90vw]! min-[375px]:w-[85vw]! sm:w-[500px]! md:w-[550px]! lg:h-[550px]! xl:w-[650px]! 2xl:w-[900px]! h-full  rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
                      story.gradient
                        ? `bg-linear-to-r ${story.gradient}`
                        : `bg-[${story.color}]`
                    }`}
                    style={
                      !story.gradient
                        ? { backgroundColor: story.color }
                        : undefined
                    }
                  >
                    <div className="grid grid-cols-1 p-1 lg:p-2 lg:grid-cols-2 h-full min-h-[280px] min-[375px]:min-h-[320px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[460px]">
                      {/* Left Panel - Image/Video */}
                      <div className="relative min-h-[180px] rounded-2xl overflow-hidden min-[375px]:min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:h-full">
                        <div className="relative h-full w-full">
                          {story.hasVideo ? (
                            <video
                              id={`video-${story.id}`}
                              poster={story.img || story.videoThumbnail || story.image}
                              className="w-full h-full object-cover"
                              preload="metadata"
                              controls={false}
                            >
                              {story.video && (
                                <source src={story.video} type="video/mp4" />
                              )}
                              {!story.video && story.image && (
                                <source src={story.image} type="video/mp4" />
                              )}
                              Your browser does not support the video tag.
                            </video>
                          ) : (
                            <img
                              src={story.img}
                              alt={story.name}
                              className="w-full h-full object-cover"
                            />
                          )}
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <button
                              onClick={() => {
                                if (story.hasVideo) {
                                  const videoElement = document.getElementById(`video-${story.id}`) as HTMLVideoElement;
                                  if (videoElement) {
                                    if (videoElement.paused) {
                                      videoElement.play();
                                    } else {
                                      videoElement.pause();
                                    }
                                  }
                                }
                              }}
                              className="w-10 h-10 min-[375px]:w-12 min-[375px]:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-black/50 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center hover:bg-black/70 active:scale-95 transition-all group touch-manipulation"
                            >
                              <svg
                                className="w-4 h-4 min-[375px]:w-5 min-[375px]:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white ml-0.5 min-[375px]:ml-1 group-hover:scale-110 transition-transform"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </button>
                          </div>
                          {/* Brand Label on Image */}
                          <div className="absolute top-2 left-2 min-[375px]:top-2.5 min-[375px]:left-2.5 sm:top-3 sm:left-3 px-2 py-0.5 min-[375px]:px-2.5 min-[375px]:py-1 sm:px-3 sm:py-1 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                            <span className="text-white text-[10px] min-[375px]:text-xs sm:text-sm font-semibold uppercase tracking-wide">
                              {story.brand}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Right Panel - Content */}
                      <div className="p-1 min-[375px]:p-2 sm:p-3 md:p-4 lg:p-5 flex flex-col justify-between">
                        {/* Logo */}
                        <div className="mb-3 min-[375px]:mb-4 sm:mb-5 md:mb-6 px-5">
                          <h3 className="text-white text-start md:text-end text-xl min-[375px]:text-2xl sm:text-3xl md:text-4xl font-bold mb-2 min-[375px]:mb-3 sm:mb-4 leading-tight">
                            {story.brand}
                          </h3>

                          {/* Category Tag */}
                          <div className="inline-flex items-center gap-1.5 min-[375px]:gap-2 px-2.5 min-[375px]:px-3 py-1 min-[375px]:py-1.5 sm:px-4 sm:py-2 bg-black rounded-lg border border-teal-400/60 mb-3 min-[375px]:mb-4 sm:mb-5 md:mb-6">
                            <svg
                              className="w-3 h-3 min-[375px]:w-3.5 min-[375px]:h-3.5 sm:w-4 sm:h-4 text-teal-400 shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              {/* Three horizontal lines */}
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 8h12M4 12h12M4 16h8"
                              />
                              {/* Upward arrow */}
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M18 9l-3-3m0 0l-3 3m3-3v12"
                              />
                            </svg>
                            <span className="text-white text-[10px] min-[375px]:text-xs sm:text-sm font-medium whitespace-nowrap">
                              {story.category}
                            </span>
                          </div>

                          {/* Name and Title */}
                          <h4 className="text-white text-base min-[375px]:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 min-[375px]:mb-1.5sm:mb-1 leading-tight">
                            {story.name}
                          </h4>
                          <p className="text-white/90 text-xs min-[375px]:text-sm sm:text-base md:text-lg mb-3 min-[375px]:mb-4 sm:mb-5 md:mb-6 leading-snug">
                            {story.title}
                          </p>

                          {/* Description */}
                          <p className="text-white/80 line-clamp-4 sm:line-clamp-5 text-[11px] min-[375px]:text-xs sm:text-sm md:text-base leading-relaxed mb-4 min-[375px]:mb-5 sm:mb-5">
                            {story.description}
                          </p>
                        </div>
                        {/* Action Buttons */}
                        <div className="flex flex-col min-[375px]:flex-row gap-2 min-[375px]:gap-2.5 sm:gap-3">
                          <button className="px-4 min-[375px]:px-5 py-2 min-[375px]:py-2.5 sm:px-6 sm:py-3 bg-white text-teal-600 rounded-lg font-bold text-[11px] min-[375px]:text-xs sm:text-sm hover:bg-gray-100 active:scale-95 transition-all flex items-center justify-center gap-1.5 min-[375px]:gap-2 touch-manipulation min-h-[40px] min-[375px]:min-h-[44px]">
                            <span>Read more</span>
                          </button>
                          {story.hasVideo && (
                            <button className="px-4 min-[375px]:px-5 py-2 min-[375px]:py-2.5 sm:px-6 sm:py-3 bg-teal-500 text-white rounded-lg font-bold text-[11px] min-[375px]:text-xs sm:text-sm hover:bg-teal-600 active:scale-95 transition-all flex items-center justify-center gap-1.5 min-[375px]:gap-2 touch-manipulation min-h-[40px] min-[375px]:min-h-[44px]">
                              <svg
                                className="w-3.5 h-3.5 min-[375px]:w-4 min-[375px]:h-4 sm:w-5 sm:h-5 shrink-0"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                              <span>Play Video</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Navigation Controls and Pagination */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          <button className="success-stories-prev flex items-center gap-2 sm:gap-3 text-white hover:text-white/80 transition-all group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 backdrop-blur-3xl flex items-center justify-center group-hover:bg-purple-700/80 transition-all">
              <HiArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="text-sm sm:text-base font-medium hidden sm:inline">
              Previous
            </span>
          </button>

          {/* Custom Pagination Dots */}
          {successStories.length > 1 && (
            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              {successStories.map((_, index: number) => (
                <button
                  key={index}
                  onClick={() => swiperRef.current?.slideTo(index)}
                  className={`transition-all duration-300 cursor-pointer rounded-[3px] ${
                    activeIndex === index
                      ? "bg-white w-10 sm:w-12 h-1.5"
                      : "bg-purple-300/50 hover:bg-purple-300/70 w-5 sm:w-12 h-1.5"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          <button className="success-stories-next flex items-center gap-2 sm:gap-3 text-white hover:text-white/80 transition-all group">
            <span className="text-sm sm:text-base font-medium hidden sm:inline">
              Next
            </span>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 backdrop-blur-3xl flex items-center justify-center group-hover:bg-purple-700/80 transition-all">
              <HiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </button>
        </div>

        {/* Bottom CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 min-[375px]:gap-3 sm:gap-4 md:gap-6 px-4 sm:px-0">
          <button className="w-full sm:w-auto px-5 min-[375px]:px-6 sm:px-8 py-2.5 min-[375px]:py-3 sm:py-4 bg-transparent border-2 border-white/30 text-white rounded-lg font-semibold hover:border-white/50 hover:bg-white/5 active:scale-95 transition-all flex items-center justify-center gap-1.5 min-[375px]:gap-2 text-xs min-[375px]:text-sm sm:text-base touch-manipulation min-h-[44px]">
            <span>View All Stories</span>
            <svg
              className="w-3.5 h-3.5 min-[375px]:w-4 min-[375px]:h-4 sm:w-5 sm:h-5 shrink-0"
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
          <button className="w-full sm:w-auto px-5 min-[375px]:px-6 sm:px-8 py-2.5 min-[375px]:py-3 sm:py-4 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 active:scale-95 transition-all flex items-center justify-center gap-1.5 min-[375px]:gap-2 text-xs min-[375px]:text-sm sm:text-base touch-manipulation min-h-[44px]">
            <span>Join Us For Testimonials</span>
            <svg
              className="w-3.5 h-3.5 min-[375px]:w-4 min-[375px]:h-4 sm:w-5 sm:h-5 shrink-0"
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
    </section>
  );
}
