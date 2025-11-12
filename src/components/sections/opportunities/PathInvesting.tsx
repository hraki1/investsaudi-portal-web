"use client";

import Image from "next/image";

interface Step {
  id: string;
  title: string;
  description: string;
  gradient: string;
  accentBar: string;
  numberColor: string;
  underlineColor: string;
}

const steps: Step[] = [
  {
    id: "01",
    title: "Discover",
    description:
      "Browse opportunities across high-growth sectors and regions.",
    gradient: "from-[#F2FFFD] via-[#FBFFFE] to-white/70",
    accentBar: "from-[#6DE7DA] to-[#27B2AE]",
    numberColor: "#2AB6AD",
    underlineColor: "#92DBD4",
  },
  {
    id: "02",
    title: "Engage",
    description: "Connect with Invest Saudi advisors for tailored guidance.",
    gradient: "from-[#FFF1FA] via-[#FFF7FD] to-white/72",
    accentBar: "from-[#F08ACB] to-[#B43787]",
    numberColor: "#C5438F",
    underlineColor: "#E7B4D6",
  },
  {
    id: "03",
    title: "Invest",
    description:
      "Launch and scale your venture with full facilitation support.",
    gradient: "from-[#F3EDFF] via-[#FBF8FF] to-white/70",
    accentBar: "from-[#A487F5] to-[#5D39C5]",
    numberColor: "#7C4FD8",
    underlineColor: "#CBBDF6",
  },
];

interface ClusterImage {
  src: string;
  alt: string;
  size: number;
  className: string;
}

const circleImages: ClusterImage[] = [
  {
    src: "/opportunities/1.png",
    alt: "Invest Saudi advisors collaborating",
    className: "top-[-6%] left-1/2 -translate-x-1/2",
    size: 200,
  },
  {
    src: "/opportunities/2.png",
    alt: "Investor engaging with advisor",
    className: "top-[46%] right-[-6%] -translate-y-1/2",
    size: 182,
  },
  {
    src: "/opportunities/3.png",
    alt: "Saudi Arabia skyline with flag",
    className:
      "bottom-0 left-1/2 -translate-x-1/2 translate-y-[35%] lg:translate-y-[45%]",
    size: 200,
  },
];

function PathInvestingImageCluster({ images }: { images: ClusterImage[] }) {
  return (
    <div className="relative mx-auto flex h-[360px] w-[320px] items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-full w-full">
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(148,163,184,0.24)_1px,transparent_1px)] bg-size-[14px_14px]" />
          <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border-18 border-white/65" />
        </div>
      </div>
      {images.map(({ src, alt, className, size }, index) => (
        <div
          key={index}
          className={`absolute flex items-center justify-center rounded-full border-12 border-white bg-white shadow-[0_28px_48px_-26px_rgba(15,23,42,0.45)] ${className}`}
          style={{ width: size, height: size }}
        >
          <Image
            alt={alt}
            src={src}
            width={size}
            height={size}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

function StepCard({
  step,
  className = "",
}: {
  step: Step;
  className?: string;
}) {
  return (
    <div
      className={`relative max-w-[340px] rounded-[24px] border border-white/70 bg-linear-to-br px-8 py-7 text-left shadow-[0_24px_48px_-24px_rgba(15,23,42,0.35)] backdrop-blur-xl ${step.gradient} ${className}`}
    >
      <div
        className={`absolute inset-y-7 left-0 w-[6px] rounded-full bg-linear-to-b ${step.accentBar}`}
      />
      <div className="ml-6">
        <div className="mb-3 inline-flex items-center gap-2">
          <span
            className="text-[28px] font-semibold"
            style={{ color: step.numberColor }}
          >
            {step.id}
          </span>
          <div
            className="h-1 w-9 rounded-full"
            style={{ backgroundColor: step.underlineColor }}
          />
        </div>
        <h3 className="bukra-bold text-[32px] leading-tight text-[#1F2937]">
          {step.title}
        </h3>
        <p className="mt-3 text-base text-[#4A5568]">{step.description}</p>
      </div>
    </div>
  );
}

export default function PathInvesting() {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#E6D7F5] via-[#E9F1FB] to-[#DCF4EE] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-12%] top-[-10%] h-[360px] w-[360px] rounded-full bg-linear-to-br from-[#EAFBFF] to-transparent blur-3xl" />
        <div className="absolute left-[-15%] bottom-[-20%] h-[420px] w-[420px] rounded-full bg-linear-to-br from-[#F8EBFF] to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-14 px-6 text-center lg:px-8">
        <div className="space-y-4">
          <h2 className="bukra-bold text-3xl text-[#1B2134] md:text-4xl lg:text-[46px]">
            Your Path to Investing in Saudi Arabia
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-[#475467] md:text-xl">
            Discover, Invest, and Grow in the world’s most transformative
            economy.
          </p>
        </div>

        <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)_minmax(0,360px)] lg:items-center">
          <div className="flex flex-col items-center gap-7 lg:items-start">
            <StepCard step={steps[0]} />
            <StepCard step={steps[2]} className="lg:ml-12" />
          </div>

          <PathInvestingImageCluster images={circleImages} />

          <div className="flex items-center justify-center lg:items-start">
            <StepCard step={steps[1]} className="lg:self-start" />
          </div>
        </div>

        <button className="bukra-medium inline-flex items-center gap-3 rounded-full bg-linear-to-r from-[#0AB6A3] to-[#129B97] px-9 py-3 text-base text-white shadow-[0_18px_38px_-18px_rgba(10,182,163,0.75)] transition hover:opacity-90">
          Start Exploring Opportunities
          <span aria-hidden="true">↗</span>
        </button>
      </div>
    </section>
  );
}

