import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import FooterLanguageSwitcher from "./FooterLanguageSwitcher";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();

  const navigationSections = [
    {
      title: t("footer.whoWeAre"),
      links: [
        t("footer.whoWeAreLinks.leadership"),
        t("footer.whoWeAreLinks.history"),
        t("footer.whoWeAreLinks.solutions"),
      ],
    },
    {
      title: t("footer.ourInvestments"),
      links: [
        t("footer.ourInvestmentsLinks.portfolio"),
        t("footer.ourInvestmentsLinks.gigaProjects"),
        t("footer.ourInvestmentsLinks.investmentPools"),
        t("footer.ourInvestmentsLinks.governance"),
      ],
    },
    {
      title: t("footer.strategyAndImpact"),
      links: [
        t("footer.strategyLinks.program"),
        t("footer.strategyLinks.investedBetter"),
      ],
    },
    {
      title: t("footer.investors"),
      links: [
        t("footer.investorsLinks.greenFinance"),
        t("footer.investorsLinks.capitalMarkets"),
        t("footer.investorsLinks.annualReports"),
        t("footer.investorsLinks.financialStatements"),
        t("footer.investorsLinks.creditRatings"),
      ],
    },
  ];

  const socialMediaLinks = [
    { icon: FaFacebookF, href: "#" },
    { icon: FaTwitter, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaLinkedinIn, href: "#" },
  ];

  return (
    <footer className="w-full">
      <div className=" container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row">
        {/* Left Section - White Background with Navigation Links */}
        <div className="w-full md:w-3/4 bg-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            {/* First Row - 4 columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
              {navigationSections.map((section, index) => (
                <div key={index}>
                  <h4
                    className="text-sm md:text-base font-bold mb-4 bukra-bold uppercase"
                    style={{ color: "#00A7A2" }}
                  >
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href="#"
                          className="text-sm md:text-base text-gray-700 bukra-regular hover:text-gray-900 transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Second Row - Same 4 columns (duplicated) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {navigationSections.map((section, index) => (
                <div key={`second-${index}`}>
                  <h4
                    className="text-sm md:text-base font-bold mb-4 bukra-bold uppercase"
                    style={{ color: "#00A7A2" }}
                  >
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href="#"
                          className="text-sm md:text-base text-gray-700 bukra-regular hover:text-gray-900 transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Light Grey Background */}
        <div className="w-full md:w-1/4 bg-gray-100 py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-6 md:gap-8">
              {/* Contact Section */}
              <div className="text-center">
                <h3 className="text-base md:text-lg font-bold text-gray-900 bukra-bold mb-4">
                  {t("footer.contactTitle")}
                </h3>
                <button
                  className="px-6 py-3 rounded-lg text-white font-semibold bukra-bold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#00A7A2" }}
                >
                  {t("footer.contactButton")}
                </button>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center gap-3">
                {socialMediaLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors border border-gray-300"
                      aria-label={`${social.icon.name} social media`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>

              {/* Language Selection */}
              <FooterLanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
