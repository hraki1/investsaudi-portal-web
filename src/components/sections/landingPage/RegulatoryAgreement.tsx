"use client";

import { FaBalanceScale, FaHandshake, FaFileAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { MdBusinessCenter } from "react-icons/md";
import { BiNetworkChart } from "react-icons/bi";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { fadeUp, staggered } from "@/animations/motionVariants";

const regulatoryData = [
  {
    title: "Investment Law",
    description:
      "Defines rights, guarantees, and dispute resolution for foreign investors.",
    icon: FaBalanceScale,
    iconBg: "bg-teal-600",
    image: "/RBA/1.png",
    tags: ["Law"],
  },
  {
    title: "Tax & Zakat Regulations",
    description: "Fiscal transparency and compliance under national standards.",
    icon: FaFileAlt,
    iconBg: "bg-blue-900",
    image: "/RBA/2.png",
    tags: ["Compliance"],
  },
  {
    title: "Special Economic Zones",
    description:
      "Incentive-based regulations driving regional and sectoral growth.",
    icon: MdBusinessCenter,
    iconBg: "bg-pink-600",
    image: "/RBA/3.png",
    tags: ["4 | SEZ"],
  },
  {
    title: "Trade & Investment Agreements",
    description:
      "Bilateral and multilateral frameworks protecting investors and enabling market access.",
    icon: FaHandshake,
    iconBg: "bg-purple-600",
    image: "/RBA/4.png",
    tags: ["58 | BIT", "38 | FTA"],
  },
  {
    title: "Public-Private Partnership Law",
    description:
      "Legal foundation for private participation in public projects.",
    icon: FaFileAlt,
    iconBg: "bg-blue-600",
    image: "/RBA/5.png",
    tags: ["PPP"],
  },
  {
    title: "Digital Governance & ESG",
    description:
      "Regulatory modernization aligned with sustainability and governance excellence.",
    icon: BiNetworkChart,
    iconBg: "bg-teal-600",
    image: "/RBA/6.png",
    tags: ["ESG", "Digital"],
  },
];

export default function RegulatoryAgreement() {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-linear-to-l from-[#E6F6F6] to-[#ECE4F0]">
      {/* background image down right */}
      <div className="absolute top-1 right-1 w-[300px] h-[400px] md:w-1/3 md:h-[550px] lg:w-1/2 lg:h-[588px] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/RBA/bg.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "top right",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <LazyMotion features={domAnimation}>
          <m.div
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, margin: "-50px" }}
            variants={fadeUp}
          >
            <m.p
              variants={fadeUp}
              className="text-[#814A98] md:[20px] bukra-medium mb-2"
            >
              Stable, Transparent and Future-Proof
            </m.p>
            <m.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 text-balance"
            >
              Regulatory & Bilateral Agreements
            </m.h2>
            <m.p
              variants={fadeUp}
              className="text-lg text-gray-700 max-w-4xl leading-relaxed"
            >
              Saudi Arabia's regulatory framework ensures investor clarity and
              confidence. Anchored in the Investment Law, PPP Law, and SEZ
              Regulations, guided by digital governance and ESG compliance.
            </m.p>
          </m.div>
        </LazyMotion>

        <LazyMotion features={domAnimation}>
          <m.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            variants={staggered}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, margin: "-50px" }}
          >
          {regulatoryData.map((item, index) => {
            const Icon = item.icon;
            return (
              <m.div
                key={index}
                variants={fadeUp}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* Hero Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 flex flex-col">
                  {/* Icon and Title - Inline */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-full ${item.iconBg} flex items-center justify-center shrink-0`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-base text-[#262626] bukra-regular mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags and Arrow Button */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex gap-2 flex-wrap">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center shrink-0 transition-colors">
                      <HiArrowRight className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </m.div>
            );
          })}
        </m.div>
        </LazyMotion>

        {/* CTA Buttons */}
        <LazyMotion features={domAnimation}>
          <m.div
            className="flex flex-wrap gap-4 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, margin: "-50px" }}
            variants={fadeUp}
          >
          <button className="bg-purple-700 hover:bg-purple-800 text-white rounded-full px-8 py-4 text-base font-medium flex items-center gap-2 transition-colors shadow-md">
            Explore Regulation & Agreements
            <HiArrowRight className="w-5 h-5" />
          </button>
          <button className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 rounded-full px-8 py-4 text-base font-medium bg-white flex items-center gap-2 transition-colors">
            Request Regulatory e-Advise
            <HiArrowRight className="w-5 h-5" />
          </button>
        </m.div>
        </LazyMotion>
      </div>
    </section>
  );
}
