// import { useTranslation } from 'react-i18next';
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";

interface RegulationCard {
  id: number;
  iconImage: string;
  iconBg: string;
  cardBg: string;
  title: string;
  description: string;
  dataPoints: Array<{ value: string; label: string }>;
}

export default function RegulatoryAgreement() {
  // const { t } = useTranslation();

  const cards: RegulationCard[] = [
    {
      id: 1,
      iconImage: "/RBA/icons/icon-1.png",
      iconBg: "#27C5C6",
      cardBg: "#E6F6F6",
      title: "Investment and trade",
      description:
        "We don't just ask about your symptoms—we uncover your full health history. Our proprietary technology securely retrieves, organizes, and delivers comprehensive insights into investment opportunities.",
      dataPoints: [
        { value: "10", label: "BIT" },
        { value: "12", label: "FTA" },
        { value: "17 B", label: "FTA" },
      ],
    },
    {
      id: 2,
      iconImage: "/RBA/icons/icon-2.png",
      iconBg: "#814A98",
      cardBg: "#F8F4FA",
      title: "Trade and Investment Agreements",
      description:
        "We don't just ask about your symptoms—we uncover your full health history. Our proprietary technology securely retrieves, organizes, and delivers comprehensive insights into investment opportunities.",
      dataPoints: [
        { value: "10", label: "BIT" },
        { value: "12", label: "FTA" },
        { value: "17 B", label: "FTA" },
      ],
    },
    {
      id: 3,
      iconImage: "/RBA/icons/icon-3.png",
      iconBg: "#003A5D",
      cardBg: "#E6EBEF",
      title: "Investment Law",
      description:
        "We don't just ask about your symptoms—we uncover your full health history. Our proprietary technology securely retrieves, organizes, and delivers comprehensive insights into investment opportunities.",
      dataPoints: [
        { value: "10", label: "BIT" },
        { value: "12", label: "FTA" },
        { value: "12", label: "FTA" },
      ],
    },
    {
      id: 4,
      iconImage: "/RBA/icons/icon-4.png",
      iconBg: "#814A98",
      cardBg: "#F8F4FA",
      title: "Trade and Investment Agreements",
      description:
        "We don't just ask about your symptoms—we uncover your full health history. Our proprietary technology securely retrieves, organizes, and delivers comprehensive insights into investment opportunities.",
      dataPoints: [
        { value: "10", label: "BIT" },
        { value: "12", label: "FTA" },
        { value: "12", label: "FTA" },
      ],
    },
    {
      id: 5,
      iconImage: "/RBA/icons/icon-5.png",
      iconBg: "#003A5D",
      cardBg: "#F8F4FA",
      title: "Investment Law",
      description:
        "We don't just ask about your symptoms—we uncover your full health history. Our proprietary technology securely retrieves, organizes, and delivers comprehensive insights into investment opportunities.",
      dataPoints: [
        { value: "10", label: "BIT" },
        { value: "12", label: "FTA" },
        { value: "12", label: "FTA" },
      ],
    },
    {
      id: 6,
      iconImage: "/RBA/icons/icon-6.png",
      iconBg: "#27C5C6",
      cardBg: "#F8F4FA",
      title: "Investment and trade",
      description:
        "We don't just ask about your symptoms—we uncover your full health history. Our proprietary technology securely retrieves, organizes, and delivers comprehensive insights into investment opportunities.",
      dataPoints: [
        { value: "10", label: "BIT" },
        { value: "12", label: "FTA" },
        { value: "12", label: "FTA" },
      ],
    },
  ];

  return (
    <section
      className="relative w-full py-16 bg-linear-to-b from-white to-purple-50/30"
      style={{
        background: `linear-gradient(245.07deg, #E6F6F6 11.73%, #ECE4F0 65.87%)`,
      }}
    >
      {/* Background Pattern - Subtle geometric pattern in top-right */}
      {/* background image down right */}
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-4xl">
          {/* Tag */}
          <div className="inline-block mb-4">
            <span className="text-sm md:text-xl font-medium text-[#814A98] px-4 py-2 rounded-md">
              Stable, Transparent and Future-Proof
            </span>
          </div>
          
          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-[48px] font-bold text-[#002E4A] mb-4 leading-tight">
            Regulatory and Bilateral Agreements
          </h2>
          
          {/* Description */}
          <p className="text-base md:text-2xl text-slate-600 leading-relaxed">
            Saudi Arabia&apos;s regulatory framework ensures investor clarity and confidence. Anchored in the Investment Law, PPP Law, and SEZ Regulations, guided by digital governance and ESG compliance.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cards.map((card) => (
            <div key={card.id} className="relative bg-white p-2 rounded-2xl">
              <div
                key={card.id}
                className={`rounded-xl p-6 backdrop-blur-xl border border-white/12 relative overflow-hidden`}
                style={{
                  background: `linear-gradient(180deg, ${card.cardBg} 0%, #FFFFFF 100%)`,
                }}
              >
                {/* background image up right */}
                <div className="absolute top-1 right-1 w-[300px] h-[400px] md:w-[400px] md:h-[550px] lg:w-3/5 lg:1/3 overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-80"
                    style={{
                      backgroundImage: 'url("/RBA/bg-back.png")',
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      backgroundPosition: "top right",
                    }}
                  ></div>
                </div>

                {/* Card Header */}
                <div className="flex items-start gap-4 mb-4 min-h-[60px]">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: card.iconBg }}
                  >
                    <Image
                      src={card.iconImage}
                      alt={card.title}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  <h3 className="text-lg md:text-[26px] font-medium text-slate-800 line-clamp-2 leading-tight">
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6 line-clamp-3">
                  {card.description}
                </p>

                {/* Data Points */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {card.dataPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className=" flex flex-col px-4 py-3 rounded-md border border-[#F5F5F5]"
                      style={{
                        background: `linear-gradient(135deg, #FEFEFE 14.73%, #FBFBFB 46.14%, #F1F1F1 69.88%, #E7E7E7 84.53%)`,
                      }}
                    >
                      <span className="text-base md:text-[34px] font-bold text-slate-800">
                        {point.value}{" "}
                      </span>
                      <span className="text-lg text-slate-600">
                        {point.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* View Details Button */}
                <button className="w-full flex items-center justify-center bg-[#FFFFFF] relative z-10  gap-2 py-2.5 px-4 rounded-full font-medium">
                  View Details
                  <HiArrowRight className="w-4 h-4 -rotate-45" />
                </button>

                {/* shape down */}
                <div className="absolute bottom-0 left-0 z-0">
                  <svg
                    width="452"
                    height="195"
                    viewBox="0 0 452 195"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.15" filter="url(#filter0_f_19118_22806)">
                      <ellipse
                        cx="260.267"
                        cy="193.135"
                        rx="208.123"
                        ry="78.0864"
                        transform="rotate(-19.7487 260.267 193.135)"
                        fill={card.iconBg}
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_19118_22806"
                        x="-28.8229"
                        y="0.00038147"
                        width="578.18"
                        height="386.269"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="45.7078"
                          result="effect1_foregroundBlur_19118_22806"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition-colors font-medium">
            Explore Regulation & Agreements
            <HiArrowRight className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-100 text-purple-700 border-2 border-purple-600 hover:bg-purple-200 transition-colors font-medium">
            Request Regulatory e-Advise
            <HiArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
