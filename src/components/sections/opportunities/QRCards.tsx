import { HiPhone, HiEnvelope } from "react-icons/hi2";
import Image from "next/image";

interface QRCardProps {
  iconUrl: string;
  title: string;
  description: string;
  phone: string;
  email: string;
  accentColor: string;
  qrUrl?: string;
}

const QRCardItem = ({
  iconUrl,
  title,
  description,
  phone,
  email,
  accentColor,
  qrUrl,
}: QRCardProps) => {
  return (
    <div className="relative rounded-3xl p-[2.5px]">
      <div
        className="rounded-2xl p-3 md:p-5 h-full bg-white border border-[#E5E5E5] relative overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom right, #D9F2F1, #ECE4F0 23%, #FBFBFB, #FEFEFE)",
          boxShadow: "0px 1px 2px -1px #0A0D121A",
        }}
      >
        {/* background image down right */}
        <div className="absolute bottom-1 right-1 w-[300px] h-[400px] md:w-[400px] md:h-[550px] lg:w-[362px] lg:h-[535px] overflow-hidden">
          <div
            className="absolute inset-0 opacity-80"
            style={{
              backgroundImage: 'url("/QRCodes/bg-card.png")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "bottom right",
            }}
          ></div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-[1fr_1fro] gap-4">
          {/* Left: content */}
          <div className=" h-full flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div
                className={` w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white shadow-md p-3`}
                style={{
                  background:
                    "linear-gradient(to bottom right, #FEFEFE, #FBFBFB, #F1F1F1, #E7E7E7)",
                }}
              >
                <Image
                  src={iconUrl}
                  alt={title}
                  width={64}
                  height={64}
                  className="w-12 h-12 object-contain"
                  unoptimized
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

              <div className="w-28 h-28 md:w-32 md:h-32 bg-white rounded-lg shadow-lg relative z-10 overflow-hidden">
                {qrUrl && (
                  <Image
                    src={qrUrl}
                    alt={`${title} QR`}
                    width={128}
                    height={128}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    unoptimized
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function QRCard() {
  const ayyar: Array<{
    title: string;
    description: string;
    phone: string;
    email: string;
    accentColor: string;
    qrUrl?: string;
    iconUrl: string;
  }> = [
    {
      title: "MISA One-Stop Shop",
      description:
        "MISA's One Stop Shop provides general business support and allows General Managers to handle commercial registration there, eliminating the need to go to the Saudi Chamber ",
      phone: "966115065777 / 8002449990",
      email: "InvestorCare@misa.gov.sa",
      accentColor: "#00A7A2", // Teal/green
      qrUrl: "/QRCodes/code-1.png",
      iconUrl: "/QRCodes/icons/icon-1.png",
    },
    {
      title: "RHQ Care",
      description:
        "RHQ Care services focus on simplifying business operations for companies, providing expert advice, continuous support, and solutions that save time and money",
      phone: "966115065777 / 8002449990",
      email: "RHQCare@misa.gov.sa",
      accentColor: "#017BBA", // Blue
      qrUrl: "/QRCodes/code-2.png",
      iconUrl: "/QRCodes/icons/icon-2.png",
    },
    {
      title: "MIZA Support",
      description:
        "MIZA provides key support and resources, facilitating the establishment and growth of businesses within the RHQ Program",
      phone: "966115065777 / 8002449990",
      email: "MIZA@investsaudi.sa",
      accentColor: "#00A7A2", // Teal/green
      qrUrl: "/QRCodes/code-3.png",
      iconUrl: "/QRCodes/icons/icon-3.png",
    },
    {
      title: "MISA Call Center",
      description:
        "The MISA Call Center offers dedicated support and expert advice for your business needs in the RHQ Program, ensuring you have the required help and information at every stage",
      phone: "966115065777 / 8002449990",
      email: "InvestorCare@Misa.Gov.Sa",
      accentColor: "#814A98", // Purple
      qrUrl: "/QRCodes/code-4.png",
      iconUrl: "/QRCodes/icons/icon-4.png",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ayyar.map((item, index) => (
            <QRCardItem
              key={index}
              iconUrl={item.iconUrl}
              title={item.title}
              description={item.description}
              phone={item.phone}
              email={item.email}
              accentColor={item.accentColor}
              qrUrl={item.qrUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
