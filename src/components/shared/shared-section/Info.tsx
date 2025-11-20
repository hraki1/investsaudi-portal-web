import { memo } from "react";
import { BsArrowUpRight } from "react-icons/bs";

export interface ButtonConfig {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "outline" | "solid";
  className?: string;
}

export interface InfoProps {
  // Content
  title: string;
  paragraphs?: string[];
  description?: string;

  // Buttons
  primaryButton: ButtonConfig;
  secondaryButton?: ButtonConfig;

  // Styling
  backgroundGradient?: string;
  sectionClassName?: string;
  titleClassName?: string;
  textClassName?: string;

  // Images
  backgroundImage?: string;
  imageSrc?: string;
  imageAlt?: string;

  // SVG Shapes
  showBottomShape?: boolean;
  showTopShape?: boolean;
  bottomShapeId?: string;
  topShapeId?: string;
  bottomShapeColor?: string;
  topShapeColor?: string;
}

function Info({
  title,
  paragraphs = [],
  description,
  primaryButton,
  secondaryButton,
  backgroundGradient = "linear-gradient(245.07deg, #E6F6F6 11.73%, #ECE4F0 65.87%)",
  sectionClassName = "",
  titleClassName = "text-2xl sm:text-3xl md:text-3xl lg:text-[38px] bukra-bold text-gray-800 mb-2 sm:mb-2 md:mb-1",
  textClassName = "text-sm sm:text-base md:text-lg lg:text-lg bukra-regular text-gray-700 leading-relaxed",
  backgroundImage,
  imageSrc = "/investment-opportunities/info/chat.png",
  imageAlt = "Illustration",
  showBottomShape = true,
  showTopShape = true,
  bottomShapeId = "filter0_f_21434_22518",
  topShapeId = "filter0_f_21434_22517",
  bottomShapeColor = "#00A7A2",
  topShapeColor = "#814A98",
}: InfoProps) {
  const renderButton = (button: ButtonConfig, isPrimary: boolean) => {
    const baseClasses = `group flex items-center justify-between gap-3 px-5 sm:px-6 md:px-8 py-2.5 sm:py-2.5 md:py-3 rounded-full bukra-medium text-sm sm:text-base transition-colors w-full sm:w-auto ${
      button.className || ""
    }`;

    const variantClasses =
      button.variant === "outline" || (!button.variant && !isPrimary)
        ? `border-2 border-[#814A98] text-[#814A98] hover:bg-purple-50`
        : `bg-purple-600 text-white hover:bg-purple-700`;

    const buttonContent = (
      <>
        <span>{button.text}</span>
        <BsArrowUpRight className="size-4 sm:size-5 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </>
    );

    if (button.href) {
      return (
        <a href={button.href} className={`${baseClasses} ${variantClasses}`}>
          {buttonContent}
        </a>
      );
    }

    return (
      <button
        onClick={button.onClick}
        className={`${baseClasses} ${variantClasses}`}
      >
        {buttonContent}
      </button>
    );
  };

  return (
    <section
      className={`relative w-full overflow-hidden ${sectionClassName}`}
      style={{
        background: backgroundGradient,
      }}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute bottom-0 right-0 w-[390px] sm:w-[500px] h-full lg:h-full md:w: lg:w-1/2 md:top-0 lg:top-0 lg:right-0 overflow-hidden">
          <div
            className="hidden xl:block absolute inset-0"
            style={{
              backgroundImage: `url("${backgroundImage}")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "bottom right",
            }}
          ></div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row min-h-[600px] lg:min-h-full px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Left Side - Text and Buttons */}
        <div className="flex-1 py-8 sm:py-12 md:py-10 lg:py-12 flex flex-col justify-center relative z-10">
          <div className="max-w-2xl">
            <h2 className={titleClassName}>{title}</h2>

            {paragraphs.length > 0 && (
              <div className="space-y-3 sm:space-y-4 md:space-y-5 mb-6 sm:mb-5 md:mb-5">
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className={textClassName}>
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {description && (
              <p className="text-sm sm:text-base md:text-lg bukra-regular text-gray-600 mb-8 sm:mb-5 md:mb-5 leading-relaxed">
                {description}
              </p>
            )}

            {/* Buttons */}
            <div className="flex gap-3 sm:gap-4 md:gap-6">
              {renderButton(primaryButton, true)}
              {secondaryButton && renderButton(secondaryButton, false)}
            </div>
          </div>
        </div>

        {/* Right Side - Graphics */}
        {imageSrc && (
          <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:w-1/3 lg:h-auto relative overflow-hidden flex items-center justify-center z-10 mt-4 sm:mt-6 md:mt-8 lg:mt-0">
            <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px] lg:w-full lg:h-auto lg:max-w-[240px] xl:max-w-[284px] mx-auto">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </div>

      {/* Bottom Shape Background */}
      {showBottomShape && (
        <div className="hidden xl:block absolute -bottom-1 -right-30 w-[697.75px] h-[361px] rounded-full overflow-hidden">
          <svg
            width="602"
            height="473"
            viewBox="0 0 602 473"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3" filter={`url(#${bottomShapeId})`}>
              <path
                d="M1084 545.692C668.094 373.064 360.316 695.567 224.435 617.204C53.6234 518.697 258.168 175.948 467.821 108.355C714.944 28.6827 1365.86 662.679 1084 545.692Z"
                fill={bottomShapeColor}
              />
            </g>
            <defs>
              <filter
                id={bottomShapeId}
                x="3.05176e-05"
                y="-59.4112"
                width="1314.27"
                height="849.934"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="80.4078"
                  result={`effect1_foregroundBlur_${bottomShapeId}`}
                />
              </filter>
            </defs>
          </svg>
        </div>
      )}

      {/* Top Shape Background */}
      {showTopShape && (
        <div className="absolute -top-11 -right-22 w-[719.75px] h-[388px] rounded-full overflow-hidden">
          <svg
            width="720"
            height="388"
            viewBox="0 0 720 388"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3" filter={`url(#${topShapeId})`}>
              <ellipse
                cx="581.909"
                cy="-1.7383"
                rx="418.931"
                ry="157.18"
                transform="rotate(-19.7487 581.909 -1.7383)"
                fill={topShapeColor}
              />
            </g>
            <defs>
              <filter
                id={topShapeId}
                x="-3.05176e-05"
                y="-390.499"
                width="1163.82"
                height="777.521"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="92.0053"
                  result={`effect1_foregroundBlur_${topShapeId}`}
                />
              </filter>
            </defs>
          </svg>
        </div>
      )}
    </section>
  );
}

export default memo(Info);
