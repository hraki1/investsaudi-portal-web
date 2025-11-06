import Image from "next/image";
import Hero from "./Hero";
import StrategicDirection from "./StrategicDirection";

export default function HeroContainer() {
  return (
    <main>
      <section className="min-h-screen flex flex-col items-end justify-end relative">
        {/* background image */}
        <div className="absolute inset-0">
          <Image
            src="/Hero/Hero.png"
            alt="Hero Background"
            fill
            className="object-cover"
          />
        </div>
        {/* overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), linear-gradient(180deg, rgba(0, 0, 0, 0) 51.74%, #002B2A 100%)`,
          }}
        ></div>

        {/* Hero section */}
        <div className="w-full ">
          <Hero />
        </div>

        <div className="container mx-auto px-3 relative">
          {/* title */}
          <div>
            <h2 className="bukra-medium text-2xl sm:text-3xl bukra-bold md:text-[28px] lg:text-[38px] font-extralight text-white mb-4">
              Why Invest in Saudi Arabia
            </h2>
            <div className="h-px bg-white/30 mb-4 w-full max-w-2xl"></div>
            <p className="bukra-regular text-base sm:text-lg md:text-xl text-white/90">
              Top 5 reasons to invest
            </p>
          </div>
        </div>
      </section>

      <section className="min-h-[1500px] relative">
        {/* background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/investmentDestination-hero.png"
            alt="Hero Background"
            fill
            className="object-cover"
          />
        </div>
        {/* overlay */}
        <div className="absolute inset-0 z-10 bg-linear-to-b from-[#031A18] to-black/0"></div>


        {/* strategic direction section */}
        <div className="container mx-auto px-3 relative z-50">
          <StrategicDirection />
        </div>
      </section>

      <section></section>
    </main>
  );
}
