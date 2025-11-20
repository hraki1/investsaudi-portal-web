"use client";

import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsArrowUpRight } from "react-icons/bs";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { fadeUp, subtleRise, staggered } from "@/animations/motionVariants";


// Interfaces for Hero section data
interface HeroBackgroundImage {
  src: string;
  alt: string;
}

interface HeroContent {
  title: string;
  subtitle: string;
}

interface HeroSearch {
  placeholder: string;
}

interface HeroStat {
  iconName: string;
  title: string;
  description: string;
}

interface Hero {
  sectionId: string;
  backgroundImage: HeroBackgroundImage;
  content: HeroContent;
  search: HeroSearch;
  actions: string[];
  stats: HeroStat[];
  iconMap: string[];
}

// Hero section data object - prepared for API integration
const hero: Hero = {
  sectionId: "home",
  backgroundImage: {
    src: "/Hero/Hero.png",
    alt: "Saudi Arabia landscape",
  },
  content: {
    title: "Invest Saudi – The Global Investment Opportunity Engine",
    subtitle:
      "Driven by world class opportunities, powered by talent, and designed for limitless scale — Saudi Arabia is redefining what nations can build.",
  },
  search: {
    placeholder: "i am looking for..",
  },
  actions: ["Explore Sectors", "E-Services", "E-Consulting"],
  stats: [
    {
      iconName: "MdOutlineTrendingUp",
      title: "World's Fastest Growing G20",
      description: "Economy positioned as a global logistic and trade hub",
    },
    {
      iconName: "MdOutlineRocketLaunch",
      title: "Transformational",
      description: "Economy positioned as a global logistic and trade hub",
    },
    {
      iconName: "PiGlobeStand",
      title: "Global Market Access",
      description: "Economy positioned as a global logistic and trade hub",
    },
    {
      iconName: "PiMoneyWavyThin",
      title: "A Pro Investor Eco-System",
      description: "Economy positioned as a global logistic and trade hub",
    },
    {
      iconName: "BsPersonVcard",
      title: "Unlock Government Contracts",
      description: "Economy positioned as a global logistic and trade hub",
    },
  ],
  // Icon mapping for API integration (icon names as strings)
  iconMap: [
    "MdOutlineTrendingUp",
    "MdOutlineRocketLaunch",
    "PiGlobeStand",
    "PiMoneyWavyThin",
    "BsPersonVcard",
  ],
};

const isRTL = false;

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-end justify-end relative overflow-hidden">
        {/* background video */}
        {/* <div className="absolute inset-0">
        <BackgroundVideo
          src="/Hero/hero.mp4"
          // poster="/Hero/hero-poster.png"
          priority
          className="w-full h-full"
        />
      </div> */}
        <div className="absolute inset-0">
          <img
            src={hero.backgroundImage.src}
            alt={hero.backgroundImage.alt}
            className="object-cover w-full h-full"
          />
        </div>
        {/* overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), linear-gradient(180deg, rgba(0, 0, 0, 0) 51.74%, #002B2A 100%)`,
          }}
        ></div>
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(15,110,109,0.5)_0%,rgba(0,0,0,0)_65%)] blur-3xl pointer-events-none" />

        {/* Hero section */}
        <div className="w-full ">
          <div>
            {/* Content */}
            <LazyMotion features={domAnimation}>
              <div className="relative z-10 container mx-auto px-3 mb-16 md:mb-[9vh]">
                <m.div
                  className="max-w-[929px] mb-4 md:mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                  variants={staggered}
                >
                  <m.h1
                    variants={fadeUp}
                    className={`text-3xl bukra-bold text-center ${
                      isRTL ? "md:text-right" : "md:text-left"
                    } sm:text-4xl md:text-5xl lg:text-[51px] font-extralight text-white mb-2 md:mb-4 leading-snug tracking-wide`}
                  >
                    {hero.content.title}
                  </m.h1>

                  <m.p
                    variants={subtleRise}
                    className={`text-base md:text-[22px] bukra-regular text-white/90 mb-8 md:mb-10 text-center ${
                      isRTL ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    {hero.content.subtitle}
                  </m.p>
                </m.div>

                {/* actions */}
                <m.div
                  className="w-full flex flex-col justify-between items-center md:items-start sm:flex-row flex-wrap gap-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                  variants={staggered}
                >
                  {/* search input */}
                  <m.div
                    variants={fadeUp}
                    className="w-[300px] md:min-w-[500px] relative mb-2 sm:mb-0"
                  >
                    <input
                      type="text"
                      placeholder={hero.search.placeholder}
                      className="min-w-full text-base px-4 py-4 rounded-xl bg-black/40 text-white border border-white/30 placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-300/60 transition-all duration-300"
                      style={{
                        backdropFilter: "blur(40px)",
                        boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.25)",
                      }}
                    />
                    <HiMagnifyingGlass
                      className={`absolute ${isRTL ? "left-2" : "right-2"} ${
                        isRTL ? "md:left-5" : "md:right-5"
                      } top-1/2 -translate-y-1/2 text-white size-6`}
                    />
                  </m.div>

                  {/* buttons */}
                  <m.div
                    variants={staggered}
                    className="flex flex-col bukra-regular sm:flex-row flex-wrap gap-2 md:gap-4"
                  >
                    {hero.actions.map((action) => (
                      <m.button
                        key={action}
                        variants={fadeUp}
                        className="bukra-regular flex justify-between gap-3 items-center pr-[22px] pl-[24px] py-3 rounded-4xl border border-white/30 text-white bg-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
                      >
                        {action}
                        <BsArrowUpRight className="size-4" />
                      </m.button>
                    ))}
                  </m.div>
                </m.div>
              </div>
            </LazyMotion>
          </div>
        </div>

        <LazyMotion features={domAnimation}>
          <m.div
            className="container mx-auto px-3 relative z-10 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, margin: "-50px" }}
            variants={staggered}
          >
            {/* title */}
            <m.div variants={fadeUp}>
              <h2 className="bukra-medium text-2xl sm:text-3xl bukra-bold md:text-[28px] lg:text-[38px] font-extralight text-white mb-4">
                Why Invest in Saudi Arabia
              </h2>
              <div className="h-px bg-linear-to-r from-white/50 via-emerald-200/80 to-transparent mb-4 w-full max-w-2xl"></div>
              <p className="bukra-regular text-base sm:text-lg md:text-xl text-white/90">
                Top 5 reasons to invest
              </p>
            </m.div>

           
          </m.div>
        </LazyMotion>
      </section>
  );
}
