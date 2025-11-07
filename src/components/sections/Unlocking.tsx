"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

type Sector = {
  id: string;
  title: string;
  side: "left" | "right" | "center";
  description?: string;
  strategySummary?: string;
  strategyCta?: string;
  opportunities?: Array<{
    id: string;
    title: string;
    location: string;
    investmentSize: string;
    highlight?: string;
  }>;
  keyNumbers?: Array<{
    id: string;
    label: string;
    value: string;
  }>;
  background?: {
    image?: string;
    gradient: string;
  };
};

const sectors: Sector[] = [
  {
    id: "advanced-manufacturing",
    title: "Advanced Manufacturing",
    side: "center",
    description:
      "Saudi Arabia's advanced manufacturing sector is emerging as a leader in innovation and industrial growth. With a focus on cutting-edge technologies, a skilled workforce, and a supportive investment climate, the sector is becoming a key player in global manufacturing, offering competitive advantages in terms of location, incentives, and technological advancements.",
    strategySummary:
      "In late 2022, the Saudi government revealed details of the country's latest National Industrial Strategy (NIS). The NIS is Saudi Arabia's comprehensive roadmap for accelerating the diversification of its industrial base to increase non-oil exports, encourage privatization, attract more foreign investment.",
    strategyCta: "Download Strategy",
    opportunities: [
      {
        id: "opportunity-1",
        title: "Commercial And Digital Banking",
        location: "Al-Madinah",
        investmentSize: "Investment Size: $220 Million",
        highlight:
          "Saudi Arabia's advanced manufacturing sector is emerging as a leader in innovation and industrial growth. With a focus on cutting-edge technologies, a skilled workforce, and a supportive investment climate...",
      },
      {
        id: "opportunity-2",
        title: "Industrial Automation Platforms",
        location: "Riyadh",
        investmentSize: "Investment Size: $175 Million",
        highlight:
          "Automation-focused platforms enabling predictive maintenance, smart logistics, and large-scale production efficiencies for regional manufacturers.",
      },
    ],
    keyNumbers: [
      {
        id: "kn-1",
        value: "$30 - BN",
        label:
          "Projected 2030 GDP contribution for machinery and equipment industry",
      },
      {
        id: "kn-2",
        value: "4th",
        label: "Largest manufacturing hub in the MENA region by 2035",
      },
      {
        id: "kn-3",
        value: "15%",
        label: "Expected growth in the sector over the next decade",
      },
    ],
    background: {
      image: "/sectors/advanced-manufacturing.jpg",
      gradient:
        "linear-gradient(180deg, rgba(0, 166, 160, 0.88) 0%, rgba(16, 34, 70, 0.95) 100%)",
    },
  },
  {
    id: "aerospace",
    title: "Aero Space",
    side: "left",
    background: {
      image: "/sectors/aerospace.jpg",
      gradient:
        "linear-gradient(180deg, rgba(10, 35, 64, 0.8) 0%, rgba(12, 49, 88, 0.95) 100%)",
    },
  },
  {
    id: "agriculture-food",
    title: "Agriculture & Food",
    side: "left",
    background: {
      image: "/sectors/agriculture.jpg",
      gradient:
        "linear-gradient(180deg, rgba(20, 78, 56, 0.82) 0%, rgba(7, 46, 31, 0.94) 100%)",
    },
  },
  {
    id: "energy",
    title: "Energy",
    side: "left",
    background: {
      image: "/sectors/energy.jpg",
      gradient:
        "linear-gradient(180deg, rgba(58, 30, 12, 0.82) 0%, rgba(15, 7, 2, 0.92) 100%)",
    },
  },
  {
    id: "environment-services",
    title: "Environment Services",
    side: "left",
    background: {
      image: "/sectors/environment.jpg",
      gradient:
        "linear-gradient(180deg, rgba(12, 69, 64, 0.82) 0%, rgba(5, 28, 32, 0.94) 100%)",
    },
  },
  {
    id: "financial-services",
    title: "Financial Services",
    side: "left",
    background: {
      image: "/sectors/finance.jpg",
      gradient:
        "linear-gradient(180deg, rgba(29, 45, 70, 0.8) 0%, rgba(10, 15, 39, 0.94) 100%)",
    },
  },
  {
    id: "human-capital",
    title: "Human Capital & Innovation",
    side: "left",
    background: {
      image: "/sectors/human-capital.jpg",
      gradient:
        "linear-gradient(180deg, rgba(36, 22, 73, 0.82) 0%, rgba(6, 12, 33, 0.94) 100%)",
    },
  },
  {
    id: "ict",
    title: "Information & Communication Technology",
    side: "left",
    background: {
      image: "/sectors/ict.jpg",
      gradient:
        "linear-gradient(180deg, rgba(4, 71, 76, 0.82) 0%, rgba(1, 29, 28, 0.95) 100%)",
    },
  },
  {
    id: "mining-metals",
    title: "Mining & Metals",
    side: "right",
    background: {
      image: "/sectors/mining.jpg",
      gradient:
        "linear-gradient(180deg, rgba(58, 40, 21, 0.8) 0%, rgba(21, 11, 5, 0.94) 100%)",
    },
  },
  {
    id: "petrochemicals",
    title: "Petrochemicals and Conversion",
    side: "right",
    background: {
      image: "/sectors/petrochemicals.jpg",
      gradient:
        "linear-gradient(180deg, rgba(62, 18, 21, 0.82) 0%, rgba(21, 3, 6, 0.94) 100%)",
    },
  },
  {
    id: "pharma-biotech",
    title: "Pharma & Biotech",
    side: "right",
    background: {
      image: "/sectors/pharma.jpg",
      gradient:
        "linear-gradient(180deg, rgba(13, 49, 82, 0.8) 0%, rgba(2, 17, 36, 0.94) 100%)",
    },
  },
  {
    id: "real-estate",
    title: "Real Estate & Construction",
    side: "right",
    background: {
      image: "/sectors/real-estate.jpg",
      gradient:
        "linear-gradient(180deg, rgba(49, 31, 64, 0.82) 0%, rgba(15, 5, 21, 0.94) 100%)",
    },
  },
  {
    id: "tourism",
    title: "Tourism & Quality of Life",
    side: "right",
    background: {
      image: "/sectors/tourism.jpg",
      gradient:
        "linear-gradient(180deg, rgba(34, 53, 83, 0.82) 0%, rgba(10, 23, 41, 0.94) 100%)",
    },
  },
  {
    id: "transport",
    title: "Transport & Logistics",
    side: "right",
    background: {
      image: "/sectors/transport.jpg",
      gradient:
        "linear-gradient(180deg, rgba(14, 59, 82, 0.82) 0%, rgba(6, 24, 32, 0.94) 100%)",
    },
  },
  {
    id: "healthcare",
    title: "Healthcare Services & Devices",
    side: "right",
    background: {
      image: "/sectors/healthcare.jpg",
      gradient:
        "linear-gradient(180deg, rgba(27, 75, 63, 0.82) 0%, rgba(4, 29, 25, 0.95) 100%)",
    },
  },
];

const defaultBackgroundGradient =
  "linear-gradient(180deg, rgba(0, 166, 160, 0.8) 0%, rgba(2, 38, 47, 0.92) 100%)";

function SectorCard({
  sector,
  onSelect,
  isActive,
  variant,
}: {
  sector: Sector;
  onSelect: (sector: Sector) => void;
  isActive?: boolean;
  variant: "compact" | "featured";
}) {
  const background = sector.background?.gradient ?? defaultBackgroundGradient;

  return (
    <button
      type="button"
      onClick={() => onSelect(sector)}
      className={`relative overflow-hidden rounded-2xl border border-white/10 text-left transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEA6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#001A2A] before:pointer-events-none before:absolute before:inset-0 before:bg-black/20 ${
        variant === "featured" ? "min-h-[360px] w-full" : "min-h-[112px] w-full"
      } ${
        isActive
          ? "ring-2 ring-offset-2 ring-[#00AEA6] ring-offset-[#012833]"
          : "hover:-translate-y-1 hover:ring-1 hover:ring-[#00AEA6]/60"
      }`}
      style={{
        background,
      }}
    >
      {sector.background?.image && (
        <Image
          src={sector.background.image}
          alt={sector.title}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover opacity-50"
        />
      )}
      <span className="relative z-10 block px-6 py-6 text-white">
        <span className="bukra-medium text-lg leading-6 md:text-xl">
          {sector.title}
        </span>
      </span>
      {isActive && (
        <div className="pointer-events-none absolute inset-x-8 bottom-6 flex items-center justify-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M10 4.16663V15.8333"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 10L10 15.8333L15 10"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      )}
    </button>
  );
}

export default function Unlocking() {
  const [activeSectorId, setActiveSectorId] = useState<string>(
    sectors.find((sector) => sector.side === "center")?.id ?? sectors[0].id
  );

  const activeSector = useMemo(
    () => sectors.find((sector) => sector.id === activeSectorId) ?? sectors[0],
    [activeSectorId]
  );

  const leftSectors = useMemo(
    () =>
      sectors.filter(
        (sector) => sector.id !== activeSectorId && sector.side === "left"
      ),
    [activeSectorId]
  );
  const rightSectors = useMemo(
    () =>
      sectors.filter(
        (sector) => sector.id !== activeSectorId && sector.side === "right"
      ),
    [activeSectorId]
  );

  const handleSelect = (sector: Sector) => {
    setActiveSectorId(sector.id);
  };

  return (
    <section className="relative overflow-hidden bg-[#001A2A] py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160.64deg,#001421_13.58%,#003A39_87.49%)]" />
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 2px, transparent 2px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 text-white md:px-6 lg:px-0">
        <header className="space-y-4 text-center md:text-left">
          <h2 className="bukra-bold text-3xl leading-tight md:text-4xl lg:text-[44px]">
            Unlocking transformative Investment Opportunities across diverse
            Sectors
          </h2>
          <p className="bukra-regular text-base text-white/80 md:text-lg">
            Powering innovation, resilience, and sustainable growth at the heart
            of a globally connected economy.
          </p>
        </header>

        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-3 lg:flex lg:flex-col lg:gap-4">
            {leftSectors.map((sector) => (
              <SectorCard
                key={sector.id}
                sector={sector}
                onSelect={handleSelect}
                variant="compact"
              />
            ))}
          </div>

          <div className="w-full lg:w-[360px] xl:w-[400px]">
            <SectorCard
              sector={activeSector}
              onSelect={handleSelect}
              isActive
              variant="featured"
            />
          </div>

          <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-3 lg:flex lg:flex-col lg:gap-4">
            {rightSectors.map((sector) => (
              <SectorCard
                key={sector.id}
                sector={sector}
                onSelect={handleSelect}
                variant="compact"
              />
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#022b37]/80 p-6 backdrop-blur-md md:p-8 lg:p-10">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00AEA6]/20">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#00AEA6]"
                >
                  <path
                    d="M12 4V20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 11L12 4L19 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h3 className="bukra-bold text-2xl md:text-3xl">
                  {activeSector.title}
                </h3>
                {activeSector.description && (
                  <p className="bukra-regular mt-3 text-base text-white/80 md:text-lg">
                    {activeSector.description}
                  </p>
                )}
              </div>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-2 self-start rounded-full border border-[#00AEA6] px-5 py-2 text-sm font-medium text-[#00AEA6] transition-colors hover:bg-[#00AEA6] hover:text-[#001A2A]"
            >
              Learn More
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <path
                  d="M4.5 9H13.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.75 5.25L13.5 9L9.75 12.75"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_1.2fr] xl:grid-cols-[1.2fr_1.5fr]">
            <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <h4 className="bukra-medium text-xl text-white">
                  National Industrial Strategy
                </h4>
                {activeSector.strategyCta && (
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20"
                  >
                    {activeSector.strategyCta}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 4.5V13.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.75 9L9 13.5L5.25 9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                )}
              </div>
              {activeSector.strategySummary ? (
                <p className="bukra-regular text-sm leading-6 text-white/70">
                  {activeSector.strategySummary}
                </p>
              ) : (
                <p className="bukra-regular text-sm leading-6 text-white/60">
                  Insights and policy updates for this sector will be available
                  soon.
                </p>
              )}
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="bukra-medium text-xl text-white">
                  Investment Opportunities
                </h4>
                <button
                  type="button"
                  className="text-sm font-medium text-[#57F9DC] hover:text-white"
                >
                  View all
                </button>
              </div>

              <div className="space-y-4">
                {(activeSector.opportunities ?? []).map((opportunity) => (
                  <article
                    key={opportunity.id}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#011f25]/80 p-5 transition hover:border-[#00AEA6]/60"
                  >
                    <div className="flex items-center justify-between">
                      <h5 className="bukra-medium text-lg text-white">
                        {opportunity.title}
                      </h5>
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-white">
                        {opportunity.location}
                      </span>
                    </div>
                    {opportunity.highlight && (
                      <p className="bukra-regular mt-3 text-sm text-white/70">
                        {opportunity.highlight}
                      </p>
                    )}
                    <p className="bukra-medium mt-4 text-sm text-[#57F9DC]">
                      {opportunity.investmentSize}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(activeSector.keyNumbers ?? []).map((stat) => (
              <div
                key={stat.id}
                className="rounded-2xl border border-white/10 bg-[#012833]/80 p-6 text-white"
              >
                <p className="bukra-bold text-2xl text-[#57F9DC]">
                  {stat.value}
                </p>
                <p className="bukra-regular mt-3 text-sm text-white/75">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-[#57F9DC] hover:text-[#57F9DC]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 5L7.5 10L12.5 15"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-[#57F9DC] hover:text-[#57F9DC]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 5L12.5 10L7.5 15"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#57F9DC] px-6 py-3 text-sm font-semibold text-[#012833] transition hover:bg-white"
              >
                Explore Opportunities
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#57F9DC] px-6 py-3 text-sm font-semibold text-[#57F9DC] transition hover:border-white hover:text-white"
              >
                Explore Sectors
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
