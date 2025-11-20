import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useState, useRef, useEffect, useMemo, startTransition } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi2";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { fadeUp } from "@/animations/motionVariants";

export interface CardContent {
  id: number | string;
  brand?: string;
  brandLogo?: string;
  category: string;
  categoryIcon?: string;
  name?: string;
  title?: string;
  description?: string;
  image?: string;
  hasVideo?: boolean;
  videoThumbnail?: string;
  video?: string;
  color: string;
  gradient?: string;
  img?: string;
  readMoreLink?: string;
  onReadMoreClick?: () => void;
  onPlayVideoClick?: () => void;
}

export interface SwiperCardsProps {
  // Title
  title: string;
  titleClassName?: string;

  // Card Data
  cards: CardContent[];
  categoryField?: keyof CardContent; // Field name to use for category filtering (default: 'category')
  allTabLabel?: string; // Label for "All" tab (default: "All")

  // Tabs
  showTabs?: boolean;
  tabsClassName?: string;
  tabActiveClassName?: string;
  tabInactiveClassName?: string;

  // Buttons
  primaryButtonText?: string;
  primaryButtonLink?: string;
  primaryButtonOnClick?: () => void;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  secondaryButtonOnClick?: () => void;
  showButtons?: boolean;

  // Card Actions
  readMoreButtonText?: string;
  playVideoButtonText?: string;

  // Background
  backgroundImage?: string;
  showBackgroundShape?: boolean;
  backgroundShapeId?: string; // Unique ID for SVG filter to avoid conflicts

  // Navigation
  navigationPrevClass?: string;
  navigationNextClass?: string;
  swiperClassName?: string;

  // Styling
  sectionClassName?: string;
  emptyStateMessage?: string;
}

export default function SwiperCards({
  title,
  titleClassName = "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-5",
  cards,
  categoryField = "category",
  allTabLabel = "All",
  showTabs = true,
  tabsClassName = "",
  tabActiveClassName = "border border-[#14B8A6] text-white shadow-[0_0_8px_rgba(20,184,166,0.3)]",
  tabInactiveClassName = "text-white/80 hover:text-white",
  primaryButtonText,
  primaryButtonLink,
  primaryButtonOnClick,
  secondaryButtonText,
  secondaryButtonLink,
  secondaryButtonOnClick,
  showButtons = true,
  readMoreButtonText = "Read more",
  playVideoButtonText = "Play Video",
  backgroundImage,
  showBackgroundShape = true,
  backgroundShapeId = "filter0_f_22641_10972",
  navigationPrevClass = "success-stories-prev",
  navigationNextClass = "success-stories-next",
  swiperClassName = "success-stories-swiper",
  sectionClassName = "",
  emptyStateMessage = "No items found for this category.",
}: SwiperCardsProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>(allTabLabel);

  // Get unique categories from cards
  const categories = useMemo(
    () => [
      allTabLabel,
      ...Array.from(
        new Set(
          cards.map((card) => {
            const categoryValue = card[categoryField];
            return typeof categoryValue === "string" ? categoryValue : String(categoryValue);
          })
        )
      ),
    ],
    [cards, categoryField, allTabLabel]
  );

  // Filter cards based on selected category
  const filteredCards = useMemo(
    () =>
      selectedCategory === allTabLabel
        ? cards
        : cards.filter((card) => {
            const categoryValue = card[categoryField];
            const categoryStr = typeof categoryValue === "string" ? categoryValue : String(categoryValue);
            return categoryStr === selectedCategory;
          }),
    [selectedCategory, cards, categoryField, allTabLabel]
  );

  // Reset active index when category changes
  useEffect(() => {
    startTransition(() => {
      setActiveIndex(0);
    });
  }, [selectedCategory]);

  const handleReadMore = (card: CardContent) => {
    if (card.onReadMoreClick) {
      card.onReadMoreClick();
    }
  };

  const handlePlayVideo = (card: CardContent) => {
    if (card.onPlayVideoClick) {
      card.onPlayVideoClick();
    } else if (card.hasVideo) {
      const videoElement = document.getElementById(
        `video-${card.id}`
      ) as HTMLVideoElement;
      if (videoElement) {
        if (videoElement.paused) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      }
    }
  };

  return (
    <section
      className={`relative w-full py-12 sm:py-14 md:py-14 lg:py-20 bg-[#08141f] overflow-hidden ${sectionClassName}`}
    >
      {/* Background Pattern */}
      {backgroundImage && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("${backgroundImage}")`,
          }}
        ></div>
      )}

      {/* Background Shape */}
      {showBackgroundShape && (
        <div className="absolute -bottom-[350px] -right-[350px] w-[1114.3014019250581px] h-[734.7771064167506px]">
          <svg
            width="784"
            height="483"
            viewBox="0 0 784 483"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.4" filter={`url(#${backgroundShapeId})`}>
              <path
                d="M1280.49 714.784C789.194 510.866 425.627 891.827 265.116 799.26C63.3434 682.897 304.964 278.02 552.619 198.176C844.536 104.062 1613.44 852.977 1280.49 714.784Z"
                fill="#46F3E6"
              />
            </g>
            <defs>
              <filter
                id={backgroundShapeId}
                x="6.10352e-05"
                y="-0.000427246"
                width="1552.5"
                height="1003.99"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="94.9826"
                  result={`effect1_foregroundBlur_${backgroundShapeId}`}
                />
              </filter>
            </defs>
          </svg>
        </div>
      )}

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-20">
        {/* Title */}
        <LazyMotion features={domAnimation}>
          <m.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, margin: "-50px" }}
            variants={fadeUp}
            className={titleClassName}
          >
            {title}
          </m.h2>
        </LazyMotion>

        {/* Category Tabs */}
        {showTabs && categories.length > 1 && (
          <div className="mb-3 md:mb-0 relative z-20">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2 overflow-x-auto pb-2 scrollbar-hide relative z-20">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedCategory(category);
                  }}
                  className={`bg-black/50 relative z-30 px-2 sm:px-3 md:px-[17.88px] py-2 sm:py-[8.9px] rounded-full text-sm sm:text-base font-medium whitespace-nowrap transition-all duration-300 cursor-pointer pointer-events-auto ${
                    selectedCategory === category
                      ? tabActiveClassName
                      : tabInactiveClassName
                  } ${tabsClassName}`}
                  style={{ pointerEvents: "auto" }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="relative z-10 lg:max-w-[1200px] mx-auto px-0 min-[375px]:px-0 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-visible">
        <div
          className={`relative z-10 container mx-auto ${
            activeIndex === 0 &&
            "md:ml-[-70px] lg:ml-[-50px] xl:ml-[-150px] 2xl:ml-[-210px] transition-all duration-300"
          } ${
            activeIndex === 1 && "transition-all duration-300"
          } px-4 min-[375px]:px-0 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-visible`}
        >
          {/* Swiper Carousel */}
          <div className="mb-2 sm:mb-3 md:mb-3 lg:mb-0 overflow-visible max-w-[1200px]">
            {filteredCards.length > 0 ? (
              <Swiper
                key={`swiper-${selectedCategory}-${filteredCards.length}`}
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
                  nextEl: `.${navigationNextClass}`,
                  prevEl: `.${navigationPrevClass}`,
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  swiper.slideTo(0, 0);
                }}
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.activeIndex);
                }}
                className={`${swiperClassName} stacked-cards transition-all duration-300`}
              >
                {filteredCards.map((card) => (
                  <SwiperSlide key={card.id} className="h-auto! stacked-slide">
                    <div
                      className={`w-[90vw]! min-[375px]:w-[85vw]! sm:w-[500px]! md:w-[550px]! lg:h-[550px]! xl:w-[650px]! 2xl:w-[900px]! h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
                        card.gradient
                          ? `bg-linear-to-r ${card.gradient}`
                          : `bg-[${card.color}]`
                      }`}
                      style={
                        !card.gradient
                          ? { backgroundColor: card.color }
                          : undefined
                      }
                    >
                      <div className="grid grid-cols-1 p-1 lg:p-2 lg:grid-cols-2 h-full min-h-[280px] min-[375px]:min-h-[320px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[460px]">
                        {/* Left Panel - Image/Video */}
                        <div className="relative min-h-[180px] rounded-2xl overflow-hidden min-[375px]:min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:h-full">
                          <div className="relative h-full w-full">
                            {card.hasVideo ? (
                              <video
                                id={`video-${card.id}`}
                                poster={
                                  card.img || card.videoThumbnail || card.image
                                }
                                className="w-full h-full object-cover"
                                preload="metadata"
                                controls={false}
                              >
                                {card.video && (
                                  <source src={card.video} type="video/mp4" />
                                )}
                                {!card.video && card.image && (
                                  <source src={card.image} type="video/mp4" />
                                )}
                                Your browser does not support the video tag.
                              </video>
                            ) : (
                              <img
                                src={card.img || card.image}
                                alt={card.name || card.brand || "Card image"}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            )}
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                              <button
                                onClick={() => handlePlayVideo(card)}
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
                            {card.brand && (
                              <div className="absolute top-2 left-2 min-[375px]:top-2.5 min-[375px]:left-2.5 sm:top-3 sm:left-3 px-2 py-0.5 min-[375px]:px-2.5 min-[375px]:py-1 sm:px-3 sm:py-1 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                                <span className="text-white text-[10px] min-[375px]:text-xs sm:text-sm font-semibold uppercase tracking-wide">
                                  {card.brand}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Right Panel - Content */}
                        <div className="p-1 min-[375px]:p-2 sm:p-3 md:p-4 lg:p-5 flex flex-col justify-between">
                          <div className="mb-3 min-[375px]:mb-4 sm:mb-5 md:mb-6 px-5">
                            {card.brand && (
                              <h3 className="text-white text-start md:text-end text-xl min-[375px]:text-2xl sm:text-3xl md:text-4xl font-bold mb-2 min-[375px]:mb-3 sm:mb-4 leading-tight">
                                {card.brand}
                              </h3>
                            )}

                            {/* Category Tag */}
                            {card.category && (
                              <div className="inline-flex items-center gap-1.5 min-[375px]:gap-2 px-2.5 min-[375px]:px-3 py-1 min-[375px]:py-1.5 sm:px-4 sm:py-2 bg-black rounded-lg border border-teal-400/60 mb-3 min-[375px]:mb-4 sm:mb-5 md:mb-6">
                                {card.categoryIcon ? (
                                  <img
                                    src={card.categoryIcon}
                                    alt={card.category}
                                    className="w-3 h-3 min-[375px]:w-3.5 min-[375px]:h-3.5 sm:w-4 sm:h-4"
                                  />
                                ) : (
                                  <svg
                                    className="w-3 h-3 min-[375px]:w-3.5 min-[375px]:h-3.5 sm:w-4 sm:h-4 text-teal-400 shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M4 8h12M4 12h12M4 16h8"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M18 9l-3-3m0 0l-3 3m3-3v12"
                                    />
                                  </svg>
                                )}
                                <span className="text-white text-[10px] min-[375px]:text-xs sm:text-sm font-medium whitespace-nowrap">
                                  {card.category}
                                </span>
                              </div>
                            )}

                            {/* Name and Title */}
                            {card.name && (
                              <h4 className="text-white text-base min-[375px]:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 min-[375px]:mb-1.5sm:mb-1 leading-tight">
                                {card.name}
                              </h4>
                            )}
                            {card.title && (
                              <p className="text-white/90 text-xs min-[375px]:text-sm sm:text-base md:text-lg mb-3 min-[375px]:mb-4 sm:mb-5 md:mb-6 leading-snug">
                                {card.title}
                              </p>
                            )}

                            {/* Description */}
                            {card.description && (
                              <p className="text-white/80 line-clamp-4 sm:line-clamp-5 text-[11px] min-[375px]:text-xs sm:text-sm md:text-base leading-relaxed mb-4 min-[375px]:mb-5 sm:mb-5">
                                {card.description}
                              </p>
                            )}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-col min-[375px]:flex-row gap-2 min-[375px]:gap-2.5 sm:gap-3">
                            {card.readMoreLink ? (
                              <a
                                href={card.readMoreLink}
                                className="px-4 min-[375px]:px-5 py-2 min-[375px]:py-2.5 sm:px-6 sm:py-3 bg-white text-teal-600 rounded-lg font-bold text-[11px] min-[375px]:text-xs sm:text-sm hover:bg-gray-100 active:scale-95 transition-all flex items-center justify-center gap-1.5 min-[375px]:gap-2 touch-manipulation min-h-[40px] min-[375px]:min-h-[44px]"
                              >
                                <span>{readMoreButtonText}</span>
                              </a>
                            ) : (
                              <button
                                onClick={() => handleReadMore(card)}
                                className="px-4 min-[375px]:px-5 py-2 min-[375px]:py-2.5 sm:px-6 sm:py-3 bg-white text-teal-600 rounded-lg font-bold text-[11px] min-[375px]:text-xs sm:text-sm hover:bg-gray-100 active:scale-95 transition-all flex items-center justify-center gap-1.5 min-[375px]:gap-2 touch-manipulation min-h-[40px] min-[375px]:min-h-[44px]"
                              >
                                <span>{readMoreButtonText}</span>
                              </button>
                            )}
                            {card.hasVideo && (
                              <button
                                onClick={() => handlePlayVideo(card)}
                                className="px-4 min-[375px]:px-5 py-2 min-[375px]:py-2.5 sm:px-6 sm:py-3 bg-teal-500 text-white rounded-lg font-bold text-[11px] min-[375px]:text-xs sm:text-sm hover:bg-teal-600 active:scale-95 transition-all flex items-center justify-center gap-1.5 min-[375px]:gap-2 touch-manipulation min-h-[40px] min-[375px]:min-h-[44px]"
                              >
                                <svg
                                  className="w-3.5 h-3.5 min-[375px]:w-4 min-[375px]:h-4 sm:w-5 sm:h-5 shrink-0"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                                <span>{playVideoButtonText}</span>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="flex items-center justify-center min-h-[400px]">
                <p className="text-white/60 text-lg">{emptyStateMessage}</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Controls and Pagination */}
        {filteredCards.length > 0 && (
          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
            <button
              className={`${navigationPrevClass} flex items-center gap-2 sm:gap-3 text-white hover:text-white/80 transition-all group`}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 backdrop-blur-3xl flex items-center justify-center group-hover:bg-purple-700/80 transition-all">
                <HiArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-sm sm:text-base font-medium hidden sm:inline">
                Previous
              </span>
            </button>

            {/* Custom Pagination Dots */}
            {filteredCards.length > 1 && (
              <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                {filteredCards.map((_, index: number) => (
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

            <button
              className={`${navigationNextClass} flex items-center gap-2 sm:gap-3 text-white hover:text-white/80 transition-all group`}
            >
              <span className="text-sm sm:text-base font-medium hidden sm:inline">
                Next
              </span>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 backdrop-blur-3xl flex items-center justify-center group-hover:bg-purple-700/80 transition-all">
                <HiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </button>
          </div>
        )}
      </div>

      {/* Bottom CTA Buttons */}
      {showButtons && (primaryButtonText || secondaryButtonText) && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 min-[375px]:gap-3 sm:gap-4 md:gap-6 px-4 sm:px-0">
          {primaryButtonText && (
            <>
              {primaryButtonLink ? (
                <a
                  href={primaryButtonLink}
                  className="w-full sm:w-auto px-5 min-[375px]:px-6 sm:px-8 py-2.5 min-[375px]:py-3 sm:py-4 bg-transparent border-2 border-white/30 text-white rounded-lg font-semibold hover:border-white/50 hover:bg-white/5 active:scale-95 transition-all flex items-center justify-center gap-1.5 min-[375px]:gap-2 text-xs min-[375px]:text-sm sm:text-base touch-manipulation min-h-[44px]"
                >
                  <span>{primaryButtonText}</span>
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
                </a>
              ) : (
                <button
                  onClick={primaryButtonOnClick}
                  className="w-full sm:w-auto px-5 min-[375px]:px-6 sm:px-8 py-2.5 min-[375px]:py-3 sm:py-4 bg-transparent border-2 border-white/30 text-white rounded-lg font-semibold hover:border-white/50 hover:bg-white/5 active:scale-95 transition-all flex items-center justify-center gap-1.5 min-[375px]:gap-2 text-xs min-[375px]:text-sm sm:text-base touch-manipulation min-h-[44px]"
                >
                  <span>{primaryButtonText}</span>
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
              )}
            </>
          )}
          {secondaryButtonText && (
            <>
              {secondaryButtonLink ? (
                <a
                  href={secondaryButtonLink}
                  className="w-full sm:w-auto px-5 min-[375px]:px-6 sm:px-8 py-2.5 min-[375px]:py-3 sm:py-4 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 active:scale-95 transition-all flex items-center justify-center gap-1.5 min-[375px]:gap-2 text-xs min-[375px]:text-sm sm:text-base touch-manipulation min-h-[44px]"
                >
                  <span>{secondaryButtonText}</span>
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
                </a>
              ) : (
                <button
                  onClick={secondaryButtonOnClick}
                  className="w-full sm:w-auto px-5 min-[375px]:px-6 sm:px-8 py-2.5 min-[375px]:py-3 sm:py-4 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 active:scale-95 transition-all flex items-center justify-center gap-1.5 min-[375px]:gap-2 text-xs min-[375px]:text-sm sm:text-base touch-manipulation min-h-[44px]"
                >
                  <span>{secondaryButtonText}</span>
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
              )}
            </>
          )}
        </div>
      )}
    </section>
  );
}
