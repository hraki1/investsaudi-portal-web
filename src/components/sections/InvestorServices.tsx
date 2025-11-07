"use client";

import { useMemo, useState } from "react";

type StatItem = {
  label: string;
  value: string;
  accent: string;
};

type StepItem = {
  id: number;
  title: string;
  description: string;
  accent: string;
};

type ServiceCategory = {
  id: string;
  title: string;
  blurb: string;
  bullets: string[];
};

const stats: StatItem[] = [
  {
    label: "Registered Companies",
    value: "51K+",
    accent: "from-[#B9F4E4] to-[#6ED2BF]",
  },
  {
    label: "RHQ Licenses Process",
    value: "680+",
    accent: "from-[#F6D8FF] to-[#D599FF]",
  },
  {
    label: "E-Services",
    value: "60+",
    accent: "from-[#FFD9E7] to-[#FF93B8]",
  },
];

const steps: StepItem[] = [
  {
    id: 1,
    title: "Process Explorer",
    description: "Understand every step before you start.",
    accent: "from-[#A6F6EA] via-[#7AE0CF] to-[#53C0B4]",
  },
  {
    id: 2,
    title: "E-Services",
    description: "Access digital services tailored for investors.",
    accent: "from-[#E9D8FF] via-[#C2A9FF] to-[#9367F7]",
  },
  {
    id: 3,
    title: "Advisory Services",
    description: "Get expert guidance at each milestone.",
    accent: "from-[#C6F2FF] via-[#8FD5FF] to-[#52A9FF]",
  },
  {
    id: 4,
    title: "Advocacy Services",
    description: "Unlock ongoing support and partnerships.",
    accent: "from-[#F7D6FF] via-[#E2A8FF] to-[#C16CFF]",
  },
];

const serviceCategories: ServiceCategory[] = [
  {
    id: "registration",
    title: "Registration Services",
    blurb:
      "The Ministry of Investment offers streamlined services to help you obtain the permits and registrations required to kick-start your investment journey.",
    bullets: [
      "Issuing investment registration to start activities.",
      "Confirming existing registration status.",
      "Modifying registration details with ease.",
      "Transitioning to national registration or cancelling when needed.",
    ],
  },
  {
    id: "governmental",
    title: "Governmental Services",
    blurb:
      "Navigate regulatory requirements seamlessly with coordinated services that connect you to the right government stakeholders at the right time.",
    bullets: [
      "End-to-end permit and licensing coordination.",
      "Facilitating governmental approvals and appointments.",
      "Consolidated guidance for compliance obligations.",
      "Dedicated support for strategic investment projects.",
    ],
  },
  {
    id: "post-registration",
    title: "Post-Registration Services",
    blurb:
      "Maintain momentum after registration with services designed to help your business scale sustainably within the Kingdom.",
    bullets: [
      "Expansions, amendments, and ongoing compliance updates.",
      "Insightful advisory on incentives and talent programs.",
      "Advocacy for investors with key public stakeholders.",
      "Always-on support desk for operational challenges.",
    ],
  },
];

const skylineColors = [
  "bg-[#8AD4C6]",
  "bg-[#6855E0]",
  "bg-[#2B9E9E]",
  "bg-[#F76AB0]",
  "bg-[#0F8CBE]",
  "bg-[#9B72E5]",
  "bg-[#FF9A62]",
  "bg-[#00A89A]",
];

const skylineHeightPattern = [94, 82, 76, 88, 84, 72, 98, 86];

export default function InvestorServices() {
  const [activeCategory, setActiveCategory] = useState<string>("registration");
  const skylineHeights = useMemo(
    () =>
      skylineColors.map(
        (_, index) => skylineHeightPattern[index % skylineHeightPattern.length]
      ),
    []
  );

  const activeContent = useMemo(
    () =>
      serviceCategories.find((category) => category.id === activeCategory) ??
      serviceCategories[0],
    [activeCategory]
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F4FBFF] via-[#F7F0FF] to-[#F7E8FF] py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(90,198,198,0.12),_rgba(255,255,255,0)_60%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_20%_-30%,rgba(19,123,120,0.25),rgba(255,255,255,0)_70%)] opacity-80" />
        <div className="absolute inset-x-6 md:inset-x-20 top-20 h-24 rounded-full blur-3xl bg-[#8FE0CF]/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block rounded-full bg-white/70 px-5 py-2 text-xs md:text-sm uppercase tracking-[0.2em] text-[#0A756E] shadow-sm">
            Seamless Investor Journey
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-[42px] font-semibold text-[#0D2D2F] bukra-bold">
            Seamless Investor Services
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#3A5050] bukra-regular">
            Discover, invest, and grow in the world&apos;s most transformative
            economy with services built to accelerate every stage of your
            journey.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-3xl bg-white/80 px-6 py-8 shadow-md backdrop-blur"
            >
              <div
                className={`absolute inset-0 opacity-80 bg-gradient-to-br ${stat.accent}`}
              />
              <div className="relative z-10">
                <p className="text-sm uppercase tracking-[0.18em] text-[#0D4C4E] bukra-medium">
                  {stat.label}
                </p>
                <p className="mt-4 text-3xl md:text-4xl font-semibold text-[#0C3C3E] bukra-bold">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row md:items-stretch md:gap-6">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between w-full">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center gap-4">
                <div className="relative">
                  <div
                    className={`relative flex h-36 w-32 flex-col items-center justify-center rounded-[32px] bg-gradient-to-br ${step.accent} text-center shadow-lg`}
                    style={{
                      clipPath:
                        "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
                    }}
                  >
                    <span className="absolute -top-6 right-1 rounded-full bg-white px-3 py-1 text-sm font-semibold text-[#7A36D2] shadow-md">
                      {step.id}
                    </span>
                    <div className="mt-6 px-4">
                      <p className="text-base font-semibold text-[#0E2F31] bukra-medium">
                        {step.title}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 -z-10 translate-y-6 blur-xl bg-[#0B8D85]/20" />
                </div>
                <p className="max-w-[200px] text-center text-sm text-[#386264] bukra-regular">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block h-[1px] w-32 rounded-full bg-gradient-to-r from-[#6CD7CA] via-[#9F7CE7] to-[#E4A1F2]" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-[32px] border border-white/50 bg-white/90 p-6 md:p-10 shadow-2xl backdrop-blur">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4 flex flex-col gap-4">
              {serviceCategories.map((category, index) => {
                const active = category.id === activeCategory;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={`group flex w-full items-start gap-4 rounded-2xl px-5 py-4 text-left transition ${
                      active
                        ? "bg-[#0F4F50] text-white shadow-lg"
                        : "bg-white/60 text-[#355152] hover:bg-white/70"
                    }`}
                  >
                    <span
                      className={`mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${
                        active
                          ? "border-white/60 bg-white/10"
                          : "border-[#6CC8BB] bg-[#E2F8F2]"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-base font-semibold bukra-medium">
                        {category.title}
                      </p>
                      <p className="mt-1 text-sm opacity-80 bukra-regular">
                        Explore tailored services
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="md:col-span-5 space-y-4">
              <h3 className="text-2xl font-semibold text-[#0C3C3E] bukra-bold">
                {activeContent.title}
              </h3>
              <p className="text-base text-[#355152] bukra-regular">
                {activeContent.blurb}
              </p>
              <ul className="space-y-3">
                {activeContent.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-sm md:text-base text-[#1E3F42] bukra-regular"
                  >
                    <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#8FE0CF] text-xs font-semibold text-[#0D4948]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 0 1 0 1.42l-7.25 7.25a1 1 0 0 1-1.414 0l-3.25-3.25a1 1 0 1 1 1.414-1.414l2.543 2.543 6.543-6.543a1 1 0 0 1 1.414 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0F4F50] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0B3A3B]"
                >
                  <span>Download Guide</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 5v10m0 0 4-4m-4 4-4-4m-2 9h12"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-[#0F4F50] px-6 py-3 text-sm font-semibold text-[#0F4F50] transition hover:bg-[#0F4F50] hover:text-white"
                >
                  <span>E-Services</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5h10m0 0v10m0-10-12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/60 bg-gradient-to-br from-[#0F4F50] via-[#1B7170] to-[#8FE0CF]/70 p-6 shadow-lg">
                <div className="absolute inset-x-0 top-0 h-24 bg-white/20 blur-2xl" />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                      Visual Spotlight
                    </p>
                    <h4 className="mt-4 text-2xl font-semibold text-white bukra-bold">
                      Add Your Imagery
                    </h4>
                    <p className="mt-2 text-sm text-white/80 bukra-regular">
                      Replace this placeholder with the official photography or
                      illustration from your Figma export.
                    </p>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {[0, 1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="aspect-square rounded-2xl bg-white/20"
                      />
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-6 h-28 w-28 rounded-full bg-white/20 blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-32 items-end gap-3 px-6 md:px-20">
        {skylineColors.map((color, index) => (
          <div
            key={index}
            className={`flex-1 rounded-t-full ${color}`}
            style={{ height: `${skylineHeights[index]}px` }}
          />
        ))}
      </div>

      <div className="absolute -bottom-8 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#8FE0CF]/40 blur-3xl" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(90,198,198,0.15),_rgba(255,255,255,0)_65%)]" />
    </section>
  );
}

