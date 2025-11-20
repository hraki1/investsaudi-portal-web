// import { cookies } from "next/headers";
import Vision2030Tabs from "./Vision2030Tabs";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { fadeUp, staggered } from "@/animations/motionVariants";

interface StatCard {
  value: string;
  suffix?: string; // "st", "b", "%", "&", etc.
  title: string;
  description: string;
  gradientFrom: string;
  isNewRecord?: boolean;
}

interface QuoteSegment {
  text: string;
  highlight?: boolean;
}

interface VisionQuoteContent {
  quoteSegments: QuoteSegment[];
  leaderName: string;
  leaderTitle: string;
  leaderImageSrc: string;
  leaderImageAlt: string;
}

export default function WhySaudiInvest() {
  // Get language from cookies for SSR
  // const cookieStore = await cookies();
  // const locale = cookieStore.get("i18nextLng")?.value || cookieStore.get("locale")?.value || "en";
  // const isRTL = locale === "ar";
  const isRTL = false;

  const visionQuoteContent: VisionQuoteContent = {
    quoteSegments: [
      {
        text: "“Our Vision is a strong, thriving, and stable Saudi Arabia that provides opportunity for all. Our Vision is a ",
      },
      { text: "tolerant country ", highlight: true },
      {
        text: "with Islam as its constitution and moderation as its method. We will welcome ",
      },
      { text: "qualified individuals ", highlight: true },
      {
        text: "from all over the world and will respect those who have come to ",
      },
      { text: "join our journey and our success", highlight: true },
      { text: ".”" },
    ],
    leaderName: "HRH Mohammed bin Salman Crown",
    leaderTitle:
      "Prince, Prime Minister, and Chairman of the Council of Economic and Development Affairs",
    leaderImageSrc: "/mbs.png",
    leaderImageAlt: "Crown Prince",
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

  return (
    <section className="relative pt-12 md:pt-10">
      {/* Background Saudi Emblem Pattern */}
      <div className="container mx-auto px-3 relative z-50">
        {/* Card Grid */}
        <LazyMotion features={domAnimation}>
          <m.div
            variants={staggered}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-12 md:mb-16"
          >
            {statCards.map((card, index) => (
              <m.div
                key={index}
                variants={fadeUp}
                viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ delay: index * 0.9, type: "spring", stiffness: 300, damping: 20 }}
                className="relative p-6 md:p-8 overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg cursor-pointer group"
                style={{
                  background: `${card.gradientFrom}`,
                  willChange: "transform",
                }}
              >
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
                  <m.div
                    className="flex items-center justify-center gap-2 mb-3"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: false,
                      amount: 0,
                      margin: "0px",
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div className="text-4xl md:text-5xl lg:text-[36px] bukra-bold text-white flex items-start">
                      {card.value}
                      {card.suffix && (
                        <span className="text-2xl md:text-3xl lg:text-[28px] bukra-bold -mt-1">
                          {card.suffix}
                        </span>
                      )}
                    </div>
                  </m.div>
                  <m.h3
                    className="text-base md:text-xl text-center bukra-medium text-white mb-3"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: false,
                      amount: 0,
                      margin: "0px",
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {card.title}
                  </m.h3>
                  <m.p
                    className="text-xs md:text-sm opacity-80 text-white/80 text-center bukra-regular"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 0.8, y: 0 }}
                    viewport={{
                      once: false,
                      amount: 0,
                      margin: "0px",
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {card.description}
                  </m.p>
                </div>
              </m.div>
            ))}
          </m.div>
        </LazyMotion>

        {/* title */}
        <LazyMotion features={domAnimation}>
          <m.div
            className="max-w-2xl space-y-4 mb-6 md:mb-10 lg:mt-26"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, margin: "-50px" }}
          >
            <m.h2
              variants={fadeUp}
              viewport={{ once: true, amount: 0.2, margin: "-50px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className={`text-3xl text-center ${
                isRTL ? "md:text-right" : "md:text-left"
              } md:text-5xl lg:text-[38px] bukra-medium bukra-bold text-white`}
            >
              A Nation With A Bold Vision
            </m.h2>
            <m.p
              variants={fadeUp}
              viewport={{ once: true, amount: 0.2, margin: "-50px" }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`text-base text-center md:text-lg lg:text-[20px] text-white/70 bukra-regular ${
                isRTL ? "md:text-right" : "md:text-left"
              }`}
            >
              Unlocking game-changing opportunities for the world
            </m.p>
          </m.div>
        </LazyMotion>

        {/* Main Content Grid */}
        <LazyMotion features={domAnimation}>
          <m.div
            className="flex flex-col items-center xl:flex-row gap-5 xl:gap-10 2xl:gap-14 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, margin: "-50px" }}
            variants={fadeUp}
          >
            {/* Left Column: Vision Quote & Crown Prince */}
            <m.div
              variants={fadeUp}
              className="flex-1 xl:max-w-[530px] mb-10 xl:mb-0"
            >
              {/* Vision Quote */}
              <div className="h-full w-full bg-black/60 backdrop-blur-2xl p-6 md:p-[30px] 2xl:p-[40px] md:pb-[30px] rounded-[30px] flex flex-col justify-between">
                <p className="text-white/90 text-base md:text-[22px] leading-relaxed bukra-regular">
                  {visionQuoteContent.quoteSegments.map((segment, index) =>
                    segment.highlight ? (
                      <span key={index} className="text-[#00A7A2]">
                        {segment.text}
                      </span>
                    ) : (
                      <span key={index}>{segment.text}</span>
                    )
                  )}
                </p>
                {/* Crown Prince */}
                <div className="flex justify-between items-start gap-4 md:gap-[15px] mt-8">
                  <div className="w-20 md:w-[134px] h-32 md:min-h-[168.5806427001953px] p-2 rounded-xl overflow-hidden shrink-0">
                    <img
                      src={visionQuoteContent.leaderImageSrc}
                      alt={visionQuoteContent.leaderImageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center text-white">
                    <h3 className="text-base md:text-xl bukra-bold mb-1">
                      {visionQuoteContent.leaderName}
                    </h3>
                    <p className="text-xs md:text-[16px] text-white bukra-regular">
                      {visionQuoteContent.leaderTitle}
                    </p>
                  </div>
                </div>
              </div>
            </m.div>

            {/* right: Vision 2030 with Tabs */}
            <m.div variants={fadeUp} viewport={{ once: true, amount: 0.2, margin: "-50px" }}>
              <Vision2030Tabs />
            </m.div>
          </m.div>
        </LazyMotion>
      </div>
    </section>
  );
}
