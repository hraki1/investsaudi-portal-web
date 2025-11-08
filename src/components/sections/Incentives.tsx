"use client";

import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";

interface StatItem {
  id: number;
  value: string;
  label: string;
  description: string;
}

interface CategoryCard {
  id: number;
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

const statItems: StatItem[] = [
  {
    id: 1,
    value: "150+",
    label: "Incentives",
    description: "Government-Wide Support Mechanisms",
  },
  {
    id: 2,
    value: "30+",
    label: "Entities",
    description: "Government Entities Offering Tailored Programs",
  },
  {
    id: 3,
    value: "5+",
    label: "Sectors",
    description: "Key Sectors With Dedicated Incentives",
  },
  {
    id: 4,
    value: "2",
    label: "Program Types",
    description: "Financial & Non-Financial",
  },
  {
    id: 5,
    value: "0%",
    label: "Tax Advantage",
    description: "Across RHQ And Special Economic Zone Programs",
  },
];

const categoryCards: CategoryCard[] = [
  {
    id: 1,
    icon: "🌍",
    title: "For RHQ & Foreign Investors",
    description: "0% corporate tax, fast-track licensing, visa facilitation",
    bgColor: "from-teal-500/20 to-teal-600/10",
  },
  {
    id: 2,
    icon: "🏢",
    title: "Strategic Localization Projects",
    description:
      "Cost-sharing for capital projects and localization initiatives",
    bgColor: "from-purple-500/20 to-purple-600/10",
  },
  {
    id: 3,
    icon: "🔬",
    title: "Innovation & R&D",
    description: "R&D funding, technology transfer programs",
    bgColor: "from-blue-500/20 to-blue-600/10",
  },
  {
    id: 4,
    icon: "🏭",
    title: "Manufacturer & Industrial Operator",
    description: "Subsidized utilities, factory lease, logistics support",
    bgColor: "from-teal-500/20 to-teal-600/10",
  },
  {
    id: 5,
    icon: "👥",
    title: "Talent & Human Capital",
    description: "Training, upskilling, and employment incentives",
    bgColor: "from-pink-500/20 to-pink-600/10",
  },
  {
    id: 6,
    icon: "📋",
    title: "Business Facilitation",
    description: "Streamlined registration, trade zone advantages",
    bgColor: "from-purple-500/20 to-purple-600/10",
  },
];

export default function Incentives() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-linear-to-l from-[#001421] via-[#002338] to-[#3A2144]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        {/* Hero Section with Stats */}
        <div className="mb-16 md:mb-20">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Incentives that Accelerate Success
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored incentives to support investment and de-risk entry
            </p>
          </div>

          {/* Hero Image with Stats Overlay */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl md:pb-0">
            {/* Background Image */}
            <div className="relative h-[280px] sm:h-[360px] md:h-[500px]">
              <Image
                src="/incentives/card.jpg"
                alt="Futuristic City Skyline"
                fill
                className="object-cover"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-purple-900/60 via-blue-900/40 to-teal-900/60"></div>
            </div>

            {/* Stats Cards Overlay */}
            <div className="relative -mt-12 px-4 py-6 sm:px-6 sm:py-7 md:px-8 md:py-8 md:absolute md:bottom-0 md:left-0 md:right-0 md:mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {statItems.map((stat, index) => (
                  <div
                    key={stat.id}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                    style={{
                      background:
                        index === 0
                          ? "rgba(139, 92, 246, 0.3)"
                          : index === 1
                          ? "rgba(59, 130, 246, 0.3)"
                          : index === 2
                          ? "rgba(16, 185, 129, 0.3)"
                          : index === 3
                          ? "rgba(236, 72, 153, 0.3)"
                          : "rgba(20, 184, 166, 0.3)",
                    }}
                  >
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base font-semibold text-white mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-200">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content with Vertical Dotted Line */}
        <div className="relative">
          {/* Vertical Dotted Line */}
          <div
            className="absolute left-8 md:left-12 top-0 w-0.5 hidden md:block"
            style={{ height: "calc(100% - 12rem)" }}
          >
            {" "}
            <div
              className="h-full w-full"
              style={{
                background: `repeating-linear-gradient(
                  to bottom,
                  rgba(255, 255, 255, 0.5) 0px,
                  rgba(255, 255, 255, 0.5) 2px,
                  transparent 2px,
                  transparent 10px
                )`,
              }}
            ></div>
          </div>

          {/* Incentive Categories Section */}
          <div className="relative mb-16 md:mb-20 pl-0 md:pl-24">
            {/* Section Icon - Lightbulb in Teal Circle */}
            <div className="absolute left-0 md:left-6 top-0 hidden md:block">
              <div className="relative">
                {/* Horizontal connector line */}
                {/* <div className="absolute left-12 top-6 w-6 h-0.5 bg-white/50"></div> */}
                {/* Icon circle */}
                <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center z-10 shadow-lg border-2 border-white/20">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.13 15.87 2 12 2ZM14 20H10V22H14V20Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Section Header */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Incentive Categories
              </h2>
              <p className="text-gray-300 text-base md:text-lg max-w-3xl">
                Foundational incentives designed to enhance competitiveness
                through cost-effective infrastructure, financing, and
                operational support.
              </p>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryCards.map((category) => (
                <div
                  key={category.id}
                  className="group relative bg-linear-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-teal-400/30 to-blue-500/30 backdrop-blur-sm flex items-center justify-center mb-4">
                    <span className="text-3xl">{category.icon}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {category.description}
                  </p>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-teal-400/0 to-blue-500/0 group-hover:from-teal-400/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Incentive Programs Section */}
          <div className="relative mb-12 md:mb-16 pl-0 md:pl-24">
            {/* Section Icon - Diamond in White Circle */}
            <div className="absolute left-0 md:left-6 top-0 hidden md:block">
              <div className="relative">
                {/* Horizontal connector line */}
                {/* <div className="absolute left-12 top-6 w-6 h-0.5 bg-white/50"></div> */}
                {/* Icon circle */}
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center z-10 shadow-lg border-2 border-white/20">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="#0a1628"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Key Incentive Programs
              </h2>
            </div>

            <div className="bg-linear-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 group">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-teal-400 text-xl md:text-2xl font-bold mb-3">
                    MISA RHQ Program
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg">
                    0% corporate tax, fast-track licensing, and direct
                    government access for multinational regional headquarters
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-6xl md:text-7xl font-bold text-white">
                    RHQ
                  </div>
                  <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all group-hover:scale-110">
                    <HiArrowRight className="w-6 h-6 text-white -rotate-45" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* National Competitiveness Programs Section */}
          <div className="relative mb-12 md:mb-16 pl-0 md:pl-24">
            {/* Section Icon - Diamond in White Circle */}
            <div className="absolute left-0 md:left-6 top-0 hidden md:block">
              <div className="relative">
                {/* Horizontal connector line */}
                {/* <div className="absolute left-12 top-6 w-6 h-0.5 bg-white/50"></div> */}
                {/* Icon circle */}
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center z-10 shadow-lg border-2 border-white/20">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="#0a1628"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                National Competitiveness Programs
              </h2>
            </div>

            <div className="bg-linear-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 group">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-teal-400 text-xl md:text-2xl font-bold mb-3">
                    NIDLP, NIM, Saudi Made
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg">
                    Financing, tax exemptions, and national branding initiatives
                    driving industrial competitiveness and localization
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    {/* Placeholder logos */}
                    <div className="w-16 h-16 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">
                        NIDLP
                      </span>
                    </div>
                    <div className="w-16 h-16 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">NIM</span>
                    </div>
                    <div className="w-16 h-16 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">MADE</span>
                    </div>
                  </div>
                  <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all group-hover:scale-110">
                    <HiArrowRight className="w-6 h-6 text-white -rotate-45" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Special Economic Zone Section */}
          <div className="relative mb-12 md:mb-16 pl-0 md:pl-24">
            {/* Section Icon - Diamond in White Circle */}
            <div className="absolute left-0 md:left-6 top-0 hidden md:block">
              <div className="relative">
                {/* Horizontal connector line */}
                {/* <div className="absolute left-12 top-6 w-6 h-0.5 bg-white/50"></div> */}
                {/* Icon circle */}
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center z-10 shadow-lg border-2 border-white/20">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="#0a1628"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Special Economic Zone
              </h2>
            </div>

            <div className="bg-linear-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 group">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-teal-400 text-xl md:text-2xl font-bold mb-3">
                    KAEC, SILZ
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg">
                    0% customs, 100% foreign ownership, and integrated logistics
                    and export-ready infrastructure
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    {/* Placeholder logos */}
                    <div className="w-20 h-16 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-sm font-bold text-white">KAEC</span>
                    </div>
                    <div className="w-20 h-16 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-sm font-bold text-white">SILZ</span>
                    </div>
                  </div>
                  <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all group-hover:scale-110">
                    <HiArrowRight className="w-6 h-6 text-white -rotate-45" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sector-Specific Incentives Section */}
          <div className="relative mb-12 md:mb-16 pl-0 md:pl-24">
            {/* Section Icon - Gear in White Circle */}
            <div className="absolute left-0 md:left-6 top-0 hidden md:block">
              <div className="relative">
                {/* Horizontal connector line */}
                {/* <div className="absolute left-12 top-6 w-6 h-0.5 bg-white/50"></div> */}
                {/* Icon circle */}
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center z-10 shadow-lg border-2 border-white/20">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
                      fill="#0a1628"
                    />
                    <path
                      d="M19.43 12.97C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.03L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.96 19.05 5.05L16.56 6.05C16.04 5.65 15.5 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H10C9.75 2 9.54 2.18 9.51 2.42L9.13 5.07C8.5 5.32 7.96 5.66 7.44 6.05L4.95 5.05C4.73 4.96 4.46 5.05 4.34 5.27L2.34 8.73C2.21 8.95 2.27 9.22 2.46 9.37L4.57 11.03C4.53 11.34 4.5 11.67 4.5 12C4.5 12.33 4.53 12.65 4.57 12.97L2.46 14.63C2.27 14.78 2.21 15.05 2.34 15.27L4.34 18.73C4.46 18.95 4.73 19.03 4.95 18.95L7.44 17.94C7.96 18.34 8.5 18.68 9.13 18.93L9.51 21.58C9.54 21.82 9.75 22 10 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.5 18.67 16.04 18.34 16.56 17.94L19.05 18.95C19.27 19.03 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.97Z"
                      fill="#0a1628"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Sector-Specific Incentives
              </h2>
            </div>

            <div className="bg-linear-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 group">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-teal-400 text-xl md:text-2xl font-bold mb-3">
                    ICT, Pharma, Automotive, MedTech
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg">
                    Export credits, R&D grants, and targeted fiscal support for
                    priority industries
                  </p>
                </div>
                <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all group-hover:scale-110">
                  <HiArrowRight className="w-6 h-6 text-white -rotate-45" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105">
            <span>Explore Incentives</span>
            <HiArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
