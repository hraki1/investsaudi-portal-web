/* eslint-disable @next/next/no-img-element */
"use client";

import { BsArrowUpRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export default function NeedMoreInfo() {
  const { t } = useTranslation();

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(245.07deg, #E6F6F6 11.73%, #ECE4F0 65.87%)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute bottom-0 right-0 w-[300px] h-full md:w-1/2 md:top-0 lg:top-0 lg:right-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/investment-opportunities/info/bg.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "bottom right",
          }}
        ></div>
      </div>

      <div className="flex flex-col lg:flex-row min-h-[600px] lg:min-h-[500px] px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Left Side - Text and Buttons */}
        <div className="flex-1 py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col justify-center relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[38px] bukra-bold text-gray-800 mb-2 sm:mb-2 md:mb-1">
              {t(
                "opportunities.need_more_info.title",
                "Need more information?"
              )}
            </h2>

            <div className="space-y-3 sm:space-y-4 md:space-y-5 mb-6 sm:mb-5 md:mb-5">
              <p className="text-sm sm:text-base md:text-lg lg:text-lg bukra-regular text-gray-700 leading-relaxed">
                {t(
                  "opportunities.need_more_info.question1",
                  "Curious about how investors succeed in Saudi Arabia?"
                )}
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg bukra-regular text-gray-700 leading-relaxed">
                {t(
                  "opportunities.need_more_info.question2",
                  "Wondering which incentives or partnerships can accelerate your entry into one of the world's fastest-growing economies?"
                )}
              </p>
            </div>

            <p className="text-sm sm:text-base md:text-lg bukra-regular text-gray-600 mb-8 sm:mb-5 md:mb-5 leading-relaxed">
              {t(
                "opportunities.need_more_info.description",
                "Saudi Arabia is where global capital meets future opportunity - powered by Vision 2030, world-class infrastructure, and investor-first policies."
              )}
            </p>

            {/* Buttons */}
            <div className="flex gap-3 sm:gap-4 md:gap-6">
              <button className="group flex items-center justify-between gap-3 px-5 sm:px-6 md:px-8 py-2.5 sm:py-2.5 md:py-3 bg-white border-2 border-purple-600 text-purple-600 rounded-full bukra-regular text-sm sm:text-base  hover:bg-purple-50 transition-colors w-full sm:w-auto">
                <span>
                  {t(
                    "opportunities.need_more_info.register_button",
                    "Register to Invest"
                  )}
                </span>
                <BsArrowUpRight className="size-4 sm:size-5 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <button className="group flex items-center justify-between gap-3 px-5 sm:px-6 md:px-8 py-2.5 sm:py-2.5 md:py-3 bg-purple-600 text-white rounded-full bukra-regular text-sm sm:text-base hover:bg-purple-700 transition-colors w-full sm:w-auto">
                <span>
                  {t(
                    "opportunities.need_more_info.advisor_button",
                    "Talk to MISA Advisor"
                  )}
                </span>
                <BsArrowUpRight className="size-4 sm:size-5 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Graphics */}
        <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:w-1/3 lg:h-auto relative overflow-hidden flex items-center justify-center z-10 mt-4 sm:mt-6 md:mt-8 lg:mt-0">
          <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px] lg:w-full lg:h-auto lg:max-w-[240px] xl:max-w-[284px] mx-auto">
            <img
              src="/investment-opportunities/info/chat.png"
              alt="Chat"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* bottom shape background */}
      <div className=" absolute -bottom-1 -right-30 w-[697.75px] h-[361px] rounded-full overflow-hidden">
        <svg
          width="602"
          height="473"
          viewBox="0 0 602 473"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.3" filter="url(#filter0_f_21434_22518)">
            <path
              d="M1084 545.692C668.094 373.064 360.316 695.567 224.435 617.204C53.6234 518.697 258.168 175.948 467.821 108.355C714.944 28.6827 1365.86 662.679 1084 545.692Z"
              fill="#00A7A2"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_21434_22518"
              x="3.05176e-05"
              y="-59.4112"
              width="1314.27"
              height="849.934"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="80.4078"
                result="effect1_foregroundBlur_21434_22518"
              />
            </filter>
          </defs>
        </svg>
      </div>

      {/* top shape background */}
      <div className=" absolute -top-11 -right-22 w-[719.75px] h-[388px] rounded-full overflow-hidden">
        <svg
          width="720"
          height="388"
          viewBox="0 0 720 388"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.3" filter="url(#filter0_f_21434_22517)">
            <ellipse
              cx="581.909"
              cy="-1.7383"
              rx="418.931"
              ry="157.18"
              transform="rotate(-19.7487 581.909 -1.7383)"
              fill="#814A98"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_21434_22517"
              x="-3.05176e-05"
              y="-390.499"
              width="1163.82"
              height="777.521"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="92.0053"
                result="effect1_foregroundBlur_21434_22517"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  );
}
