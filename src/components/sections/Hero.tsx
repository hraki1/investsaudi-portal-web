import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsArrowUpRight, BsPersonVcard } from "react-icons/bs";
import { PiMoneyWavyThin, PiGlobeStand } from "react-icons/pi";
import { MdOutlineRocketLaunch, MdOutlineTrendingUp } from "react-icons/md";
import Image from "next/image";
import type { ComponentType } from "react";

// Icon mapping for rendering (maps string names to components)
const iconComponents: Record<string, ComponentType<{ className?: string }>> = {
  MdOutlineTrendingUp,
  MdOutlineRocketLaunch,
  PiGlobeStand,
  PiMoneyWavyThin,
  BsPersonVcard,
};

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
    <div>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-3 mb-20 md:mb-[8vh]">
        <div className="max-w-[929px] mb-2 md:mb-5">
          <h1
            className={`text-3xl bukra-bold text-center ${isRTL ? 'md:text-right' : 'md:text-left'} sm:text-4xl md:text-5xl lg:text-[51px] font-extralight text-white mb-1 md:mb-2 leading-snug tracking-wide`}
          >
            {hero.content.title}
          </h1>

          <p className={`text-sm md:text-[22px] bukra-regular text-white/90 mb-8 md:mb-0 text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
            {hero.content.subtitle}
          </p>
        </div>

        {/* actions */}
        <div className=" w-full flex flex-col justify-between  items-center md:items-start sm:flex-row flex-wrap gap-4">
          {/* search input */}
          <div className="w-[300px] md:min-w-[500px] relative mb-2 sm:mb-0">
            <input
              type="text"
              placeholder={hero.search.placeholder}
              className="min-w-full text-base px-4 py-4 rounded-xl bg-black/40 text-white border border-white/30 placeholder:text-white/70"
              style={{
                backdropFilter: "blur(40px)",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.1)",
              }}
            />
            <HiMagnifyingGlass className={`absolute ${isRTL ? 'left-2' : 'right-2'} ${isRTL ? 'md:left-5' : 'md:right-5'} top-1/2 -translate-y-1/2 text-white size-6`} />
          </div>

          {/* buttons */}
          <div className=" flex flex-col bukra-regular sm:flex-row flex-wrap gap-2 md:gap-4">
            {hero.actions.map((action) => (
              <button
                key={action}
                className="bukra-regular flex justify-between gap-3 items-center pr-[22px] pl-[24px] py-3 rounded-4xl border border-white/30 text-white bg-black/30 backdrop-blur-xl"
              >
                {action}
                <BsArrowUpRight className="size-4" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
