"use client";

import WhySaudiInvest from "./WhyInvestInSaudi/WhySaudiInvest";
import { useState } from "react";
import WhereVisionBecomesInvestment from "./WhereVisionBecomesInvestment.";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { fadeUp } from "@/animations/motionVariants";
// import BackgroundVideo from "@/components/ui/BackgroundVideo";

export default function HeroContainer() {
  const isRTL = false;

  const [activeTab, setActiveTab] = useState<
    "Competitiveness" | "Macroeconomic  Overview"
  >("Competitiveness");
  return (
    <main>
      {/* why invest in saudi arabia section */}
      <section className="min-h-screen relative bg-[#002B2A]">
        {/* background image */}
        {/* <div className="absolute inset-0 z-0">
          <img
            src="/investmentDestination-hero.png"
            alt="Hero Background"
            className="object-cover w-full h-full"
          />
        </div> */}
        {/* overlay */}
        <div className="absolute inset-0 z-10 bg-linear-to-b from-[#031A18] to-black/0"></div>
        {/* strategic direction section */}
        <div className="container mx-auto px-3 relative z-50">
          <WhySaudiInvest />
        </div>
        {/* title and tabs section */}
        <div className="container mx-auto px-3 relative z-50 mt-26">
          <LazyMotion features={domAnimation}>
            <m.div
              className=" space-y-3  mb-6 md:mb-8 mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2, margin: "-50px" }}
              variants={fadeUp}
            >
              <m.h2
                variants={fadeUp}
                className={`text-3xl md:text-4xl text-center md:text-left bukra-bold ${
                  isRTL ? " md:text-right" : "md:text-left"
                }lg:text-[42px] bukra-bold text-[#001A2A]`}
              >
                Saudi Arabia, where vision becomes investment
              </m.h2>
              <m.p
                variants={fadeUp}
                className={`text-base md:text-base text-center lg:text-[24px] text-[#171717] bukra-regular ${
                  isRTL ? "md:text-right" : "md:text-left"
                }`}
              >
                The world's most trusted and future-ready investment
                destination.
              </m.p>
            </m.div>
          </LazyMotion>

          {/* Tabs */}
          <LazyMotion features={domAnimation}>
            <m.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2, margin: "-50px" }}
              className="max-w-5xl flex flex-col md:flex-row gap-2 border-b border-gray-300 mb-3 md:mb-5"
            >
              <button
                onClick={() => setActiveTab("Competitiveness")}
                className={`py-4 md:py-[20px] px-3 md:px-[30px] rounded-t-2xl text-base md:text-lg font-normal transition-colors duration-200 relative flex gap-2 items-center cursor-pointer ${
                  activeTab === "Competitiveness"
                    ? "text-[#009692] bg-[#E6F6F6] bukra-medium"
                    : "text-[#171717] hover:text-[#009692] hover:bg-[#E6F6F6]/60 bukra-regular"
                }`}
              >
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.3281 1.33215C16.7165 1.24991 15.9527 1.24995 15.0662 1.25H8.93451C8.04802 1.24995 7.28421 1.24991 6.67255 1.33215C6.01703 1.42028 5.38868 1.61902 4.87902 2.12868C4.36936 2.63835 4.17061 3.2667 4.08248 3.92221C4.00025 4.53387 4.00029 5.29769 4.00034 6.18417L4.00017 8.56442C3.9989 9.31482 3.99778 9.9814 4.2748 10.5837C4.55182 11.186 5.05866 11.619 5.62922 12.1064L6.18019 12.5785C5.58908 13.5818 5.25 14.7513 5.25 16C5.25 19.7279 8.27208 22.75 12 22.75C15.7279 22.75 18.75 19.7279 18.75 16C18.75 14.7514 18.411 13.5821 17.82 12.5789L18.3714 12.1064C18.942 11.619 19.4489 11.186 19.7259 10.5837C20.0029 9.9814 20.0018 9.31483 20.0005 8.56444L20.0003 6.18417C20.0004 5.2977 20.0004 4.53386 19.9182 3.92221C19.8301 3.2667 19.6313 2.63835 19.1217 2.12868C18.612 1.61902 17.9836 1.42028 17.3281 1.33215ZM16.5609 11.0239L16.9527 10.688C17.7094 10.0394 17.8388 9.9004 17.9089 9.74799C17.979 9.59558 18.0003 9.40695 18.0003 8.41026V6.25C18.0003 5.27893 17.9982 4.65122 17.936 4.18871C17.8777 3.75497 17.7836 3.61902 17.7074 3.5429C17.6313 3.46677 17.4954 3.37263 17.0616 3.31431C16.5991 3.25213 15.9714 3.25 15.0003 3.25H13.0003V9.32361C14.3625 9.52597 15.5918 10.1353 16.5609 11.0239ZM11.0003 9.32351V3.25H9.00034C8.02926 3.25 7.40155 3.25213 6.93905 3.31431C6.50531 3.37263 6.36936 3.46677 6.29323 3.5429C6.21711 3.61902 6.12296 3.75497 6.06465 4.18871C6.00247 4.65122 6.00034 5.27893 6.00034 6.25V8.41026C6.00034 9.40695 6.02173 9.59558 6.09183 9.74799C6.16193 9.9004 6.29123 10.0394 7.04797 10.688L7.43946 11.0236C8.4086 10.135 9.63809 9.52574 11.0003 9.32351ZM8.75098 16C8.75098 14.2051 10.2061 12.75 12.001 12.75C13.7959 12.75 15.251 14.2051 15.251 16C15.251 17.7949 13.7959 19.25 12.001 19.25C10.2061 19.25 8.75098 17.7949 8.75098 16Z"
                      fill={
                        activeTab === "Competitiveness"
                          ? "#009692"
                          : "currentColor"
                      }
                    />
                  </svg>
                </span>
                <span
                  className={`${
                    activeTab === "Competitiveness" ? "translate-y-[2px]" : ""
                  }`}
                >
                  Competitiveness
                </span>
                {activeTab === "Competitiveness" && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00A7A2]"></div>
                )}
              </button>
              <button
                onClick={() => setActiveTab("Macroeconomic  Overview")}
                className={`py-4 md:py-[20px] px-3 md:px-[30px] rounded-t-2xl text-base md:text-lg font-normal transition-colors relative  flex gap-2 items-center ${
                  activeTab === "Macroeconomic  Overview"
                    ? "text-[#009692] bg-[#E6F6F6] bukra-medium"
                    : "text-[#171717] hover:text-[#009692] hover:bg-[#E6F6F6]/60 bukra-regular"
                }`}
              >
                <span>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 10.75C0 16.678 4.822 21.5 10.75 21.5C16.678 21.5 21.5 16.678 21.5 10.75C21.5 4.82213 16.6782 0.000213623 10.7504 0C4.8224 0 0 4.822 0 10.75ZM19.7232 8.5C19.904 9.22051 20 9.97427 20 10.75C20 11.5257 19.904 12.2795 19.7232 13H15.3246C15.437 12.2859 15.501 11.5346 15.501 10.7497C15.501 9.96508 15.437 9.21395 15.3247 8.5H19.7232ZM19.2053 7H15.0085C14.3895 4.66321 13.3064 2.82877 12.4658 1.65957C15.4831 2.22793 17.9882 4.26661 19.2053 7ZM13.799 8.5C13.9261 9.21126 14 9.96304 14 10.7497C14 11.5366 13.9261 12.2886 13.799 13H7.70105C7.57391 12.2886 7.5 11.5366 7.5 10.7497C7.5 9.96307 7.57386 9.21129 7.70094 8.5H13.799ZM8.05904 7H13.4409C12.716 4.57798 11.4608 2.77825 10.75 1.8927C10.0392 2.77759 8.78391 4.57765 8.05904 7ZM6.17628 8.5C6.06401 9.21395 6 9.96508 6 10.7497C6 11.5346 6.06406 12.2859 6.1764 13H1.77678C1.59601 12.2795 1.5 11.5257 1.5 10.75C1.5 9.97427 1.59601 9.22051 1.77678 8.5H6.17628ZM2.29465 7H6.49243C7.1113 4.66313 8.19419 2.82864 9.03485 1.65945C6.01725 2.22764 3.51193 4.26642 2.29465 7ZM12.4659 19.8404C15.4831 19.272 17.9882 17.2334 19.2053 14.5H15.0084C14.3895 16.8369 13.3065 18.6713 12.4659 19.8404ZM10.75 19.6068C11.4607 18.7219 12.7159 16.9221 13.4408 14.5H8.05927C8.78417 16.9217 10.0393 18.7213 10.75 19.6068ZM9.03581 19.8407C8.19515 18.6717 7.11184 16.8371 6.49269 14.5H2.29465C3.51206 17.2339 6.01778 19.2728 9.03581 19.8407Z"
                      fill={
                        activeTab === "Macroeconomic  Overview"
                          ? "#009692"
                          : "currentColor"
                      }
                    />
                  </svg>
                </span>
                <span
                  className={`${
                    activeTab === "Macroeconomic  Overview"
                      ? "translate-y-[2px]"
                      : ""
                  }`}
                >
                  Macroeconomic Overview
                </span>
                {activeTab === "Macroeconomic  Overview" && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00A7A2]"></div>
                )}
              </button>
            </m.div>
          </LazyMotion>
        </div>
        {/* white background */}
        {/* white background 1 */}
        <div className="absolute h-[622px] w-full bottom-0  z-1">
          <img
            src="/strategic/white-1.png"
            alt="Hero Background"
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
        {/* white background 2 */}
        <div className="absolute h-[463px] w-full bottom-0  z-2">
          <img
            src="/strategic/white-2.png"
            alt="Hero Background"
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
      </section>

      {/* where vision becomes investment section */}
      <section>
        <WhereVisionBecomesInvestment activeTab={activeTab} />
      </section>
    </main>
  );
}
