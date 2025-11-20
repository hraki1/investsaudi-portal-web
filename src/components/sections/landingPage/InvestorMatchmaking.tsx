import { useState } from "react";
import { IoDownloadOutline, IoArrowForward } from "react-icons/io5";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaHandshake } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";
import VideoPlayer from "@/components/ui/VideoPlayer";

type TabType =
  | "partner_access"
  | "opportunity_listing"
  | "partnership_matching";

export default function InvestorMatchmaking() {
  const [activeTab, setActiveTab] = useState<TabType>("partner_access");

  const tabs: Array<{ id: TabType; label: string; icon: React.ReactNode }> = [
    {
      id: "partner_access",
      label: "Partner Access",
      icon: (
        <div className="relative">
          <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45">
            <HiUsers className="w-3 h-3 text-white" />
          </div>
        </div>
      ),
    },
    {
      id: "opportunity_listing",
      label: "Opportunity Listing",
      icon: <HiMagnifyingGlass className="w-5 h-5 md:w-6 md:h-6" />,
    },
    {
      id: "partnership_matching",
      label: "Partnership Matching",
      icon: (
        <div className="flex items-center gap-1">
          <FaHandshake className="w-4 h-4" />
        </div>
      ),
    },
  ];

  const tabContent = {
    partner_access: {
      title: "Partner Access",
      description:
        "This service allows you to explore registered companies that are actively seeking to form investment partnerships in Saudi Arabia. Through the Partner Directory—a smart tool within the Matchmaking Service - you can easily connect with potential local and international partners, and streamline the matchmaking process through a seamless and secure digital experience that enhances investment collaboration..",
      image: "/investor-matchmaking/tap-image.png",
    },
    opportunity_listing: {
      title: "Opportunity Listing",
      description:
        "Browse and discover investment opportunities tailored to your interests.",
      image: "/investor-matchmaking/tap-image.png",
    },
    partnership_matching: {
      title: "Partnership Matching",
      description:
        "Find the perfect partner for your investment journey through our intelligent matching system.",
      image: "/investor-matchmaking/tap-image.png",
    },
  };

  return (
    <section className="relative w-full bg-white py-12 md:py-20">
      {/* Background Pattern - Subtle geometric pattern in top-right */}
      {/* background image down right */}
      <div className="absolute top-1 right-1 w-[300px] h-[400px] md:w-1/3 md:h-[550px] lg:w-2/3 lg:h-[588px] overflow-hidden">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: 'url("/bg-back.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "top right",
          }}
        ></div>
      </div>

      <div className="absolute inset-0  overflow-hidden">
        
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-3 md:mb-5">
          {/* Logo - Cityscape with buildings */}
          <div className="mb-6 md:mb-8">
            <div className="w-20 h-16 sm:w-32 sm:h-24 md:w-[180px] md:h-[130px] lg:w-[245px] lg:h-[177px] relative">
              <img
                src="/investor-matchmaking/logo.png"
                alt="Investor Matchmaking"
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold text-gray-900 mb-2 md:mb-3 bukra-bold">
            Investor Matchmaking
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-600 max-w-5xl leading-relaxed bukra-regular">
            A digital service that empowers investors to explore opportunities
            and build partnerships through a smart matching journey designed to
            drive economic growth.
          </p>
        </div>

        {/* What Is Matchmaking Section */}
        <div className="mb-12 md:mb-16">
          <div className="bg-linear-to-br from-[#E0F7FA] to-[#B2EBF2] rounded-2xl md:rounded-3xl  shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-5">
              {/* Left Side - Text Content */}
              <div className="p-4 sm:p-6 md:p-8 lg:p-16 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-4 md:gap-5">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-bold text-gray-900 bukra-bold">
                    What is Investor Matchmaking?
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-[20px] text-gray-700 leading-relaxed bukra-regular">
                    It aims to consolidate public sector projects and potential
                    investment opportunities in one place, facilitating
                    communication between investors and project providers to
                    enhance growth and economic development.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-1">
                  <button className="flex items-center justify-center gap-2 border-2 border-[#00A7A2] bg-transparent hover:bg-[#E0F7FA] text-[#00695C] px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors bukra-regular">
                    <span>Download Guide</span>
                    <IoDownloadOutline className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-[#00A7A2] hover:bg-[#0179C2] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors bukra-regular shadow-sm">
                    <span>Apply for Service</span>
                    <IoArrowForward className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>

              {/* Right Side - Video Player */}
              <div className="p-2 sm:p-4 md:p-1 flex items-center justify-center lg:justify-end">
                <VideoPlayer
                  src="/investor-matchmaking/video.mp4"
                  poster="/investor-matchmaking/video.png"
                  className="w-full max-w-full lg:max-w-[702px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-32 -mb-px">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-4 rounded-xl text-xs sm:text-sm md:text-base lg:text-lg font-medium transition-all duration-300 bukra-regular flex-1 ${
                  activeTab === tab.id
                    ? "bg-[#814A98] text-white shadow-lg"
                    : "bg-[#F2EDF5] text-gray-600 hover:bg-gray-300"
                }`}
              >
                {tab.icon}
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Section */}
        <div className="border-2 border-gray-300/30 rounded-xl md:rounded-2xl overflow-hidden">
          {/* Image */}
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
            <img
              src={tabContent[activeTab].image}
              alt={tabContent[activeTab].title}
              className="object-cover w-full h-full"
            />
          </div>
          {/* content */}
          <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6 lg:pb-8 pt-5">
            {/* Title */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-bold text-gray-900 bukra-bold mb-1">
              {tabContent[activeTab].title}
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-[20px] text-gray-600 leading-relaxed bukra-regular">
              {tabContent[activeTab].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
