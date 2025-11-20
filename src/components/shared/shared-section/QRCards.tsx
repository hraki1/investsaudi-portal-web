import { HiPhone, HiEnvelope } from "react-icons/hi2";
import { defaultQRCardsData } from "@/data/qrCardsData";

export interface QRCardData {
  iconUrl: string;
  title: string;
  description: string;
  phone: string;
  email: string;
  accentColor: string;
  qrUrl?: string;
}

export interface QRCardItemProps {
  iconUrl: string;
  title: string;
  description: string;
  phone: string;
  email: string;
  accentColor: string;
  qrUrl?: string;
  cardBackgroundGradient?: string;
  cardBackgroundImage?: string;
  iconBackgroundGradient?: string;
  cardClassName?: string;
}

export const QRCardItem = ({
  iconUrl,
  title,
  description,
  phone,
  email,
  accentColor,
  qrUrl,
  cardBackgroundGradient = "linear-gradient(to bottom right, #D9F2F1, #ECE4F0 23%, #FBFBFB, #FEFEFE)",
  cardBackgroundImage = "/QRCodes/bg-card.png",
  iconBackgroundGradient = "linear-gradient(to bottom right, #FEFEFE, #FBFBFB, #F1F1F1, #E7E7E7)",
  cardClassName = "",
}: QRCardItemProps) => {
  return (
    <div className={`relative rounded-3xl p-[2.5px] ${cardClassName}`}>
      <div
        className="rounded-2xl p-3 md:p-5 h-full bg-white border border-[#E5E5E5] relative overflow-hidden"
        style={{
          background: cardBackgroundGradient,
          boxShadow: "0px 1px 2px -1px #0A0D121A",
        }}
      >
        {/* background image down right */}
        {cardBackgroundImage && (
          <div className="absolute bottom-1 right-1 w-[300px] h-[400px] md:w-[400px] md:h-[550px] lg:w-[362px] lg:h-[535px] overflow-hidden">
            <div
              className="absolute inset-0 opacity-80"
              style={{
                backgroundImage: `url("${cardBackgroundImage}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "bottom right",
              }}
            ></div>
          </div>
        )}

        <div className="relative grid grid-cols-1 md:grid-cols-[1fr_1fro] gap-4">
          {/* Left: content */}
          <div className="h-full flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white shadow-md p-3"
                style={{
                  background: iconBackgroundGradient,
                }}
              >
                <img
                  src={iconUrl}
                  alt={title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 bukra-bold leading-tight">
                {title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-700 bukra-regular mb-6 leading-relaxed">
              {description}
            </p>

            {/* down section */}
            <div className="flex items-center justify-between">
              {/* Contacts */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${accentColor}15` }}
                  >
                    <HiPhone
                      className="text-base"
                      style={{ color: accentColor }}
                    />
                  </div>
                  <span className="text-sm md:text-base text-gray-800 bukra-regular">
                    {phone}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${accentColor}15` }}
                  >
                    <HiEnvelope
                      className="text-base"
                      style={{ color: accentColor }}
                    />
                  </div>
                  <span className="text-sm md:text-base text-gray-800 bukra-regular break-all">
                    {email}
                  </span>
                </div>
              </div>

              {qrUrl && (
                <div className="w-28 h-28 md:w-32 md:h-32 bg-white rounded-lg shadow-lg relative z-10 overflow-hidden">
                  <img
                    src={qrUrl}
                    alt={`${title} QR`}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface QRCardsProps {
  cards: QRCardData[];
  sectionClassName?: string;
  containerClassName?: string;
  gridClassName?: string;
  cardBackgroundGradient?: string;
  cardBackgroundImage?: string;
  iconBackgroundGradient?: string;
  cardClassName?: string;
}

export default function QRCards({
  cards,
  sectionClassName = "w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gray-50",
  containerClassName = "container mx-auto max-w-7xl",
  gridClassName = "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8",
  cardBackgroundGradient,
  cardBackgroundImage,
  iconBackgroundGradient,
  cardClassName,
}: QRCardsProps) {
  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <div className={gridClassName}>
          {cards.map((item, index) => (
            <QRCardItem
              key={index}
              iconUrl={item.iconUrl}
              title={item.title}
              description={item.description}
              phone={item.phone}
              email={item.email}
              accentColor={item.accentColor}
              qrUrl={item.qrUrl}
              cardBackgroundGradient={cardBackgroundGradient}
              cardBackgroundImage={cardBackgroundImage}
              iconBackgroundGradient={iconBackgroundGradient}
              cardClassName={cardClassName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Default export with default data for backward compatibility
export function DefaultQRCards() {
  return <QRCards cards={defaultQRCardsData} />;
}
