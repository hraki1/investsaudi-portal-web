import { useState } from "react";
import { useTranslation } from "react-i18next";
import NavbarLanguageSwitcher from "./NavbarLanguageSwitcher";

export default function Navbar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { href: "", label: "why Saudi" },
    { href: "/investment-opportunities", label: "Opportunities" },
    { href: "/sectors", label: "Sectors" },
    { href: "", label: "programs & incentives" },
    { href: "", label: "knowledge" },
    { href: "", label: "Support" },
  ];

  return (
    <nav className="fixed top-0 w-full z-1000 bg-linear-to-b from-black/80 to-transparent backdrop-blur-md">
      <div className="border-b border-white/10 md:py-2">
        <div className=" mx-auto px-4 sm:px-4 lg:px-5 py-3 md:py-3">
          <div className="flex items-center justify-between lg:my-2">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src="/Navbar/logo.png"
                alt="logo"
                className="h-8 md:h-[50px] w-auto object-contain"
              />
            </a>

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center gap-5 lg:gap-5 xl:gap-6 rtl:space-x-reverse">
              {navigationLinks.map((link, index) => (
                <div key={index} className="flex items-center gap-1">
                  {link.href ? (
                    <a
                      href={link.href}
                      className="text-white font-normal text-sm md:text-base bukra-regular tracking-wide capitalize"
                      style={{ textDecoration: "none !important" }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <span className="text-white font-normal text-sm md:text-base bukra-regular tracking-wide capitalize">
                      {link.label}
                    </span>
                  )}

                  <div>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0009 3.75H2.00085L6.00087 8.25L10.0009 3.75Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2 sm:gap-2 md:gap-3">
              <button className="hidden md:block text-white hover:text-gray-300 transition-colors">
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
                    d="M11 1.25C5.61522 1.25 1.25 5.61522 1.25 11C1.25 16.3848 5.61522 20.75 11 20.75C13.4224 20.75 15.6385 19.8666 17.3437 18.4043L21.4697 22.5303C21.7626 22.8232 22.2374 22.8232 22.5303 22.5303C22.8232 22.2374 22.8232 21.7626 22.5303 21.4697L18.4043 17.3437C19.8666 15.6385 20.75 13.4224 20.75 11C20.75 5.61522 16.3848 1.25 11 1.25ZM2.75 11C2.75 6.44365 6.44365 2.75 11 2.75C15.5563 2.75 19.25 6.44365 19.25 11C19.25 15.5563 15.5563 19.25 11 19.25C6.44365 19.25 2.75 15.5563 2.75 11Z"
                    fill="white"
                  />
                </svg>
              </button>
              <NavbarLanguageSwitcher />
              <div className="hidden md:block text-white text-xs">
                <div className="text-right leading-tight">
                  <img
                    src="/logo-vision.png"
                    alt="Vision 2030"
                    className="w-22  object-contain"
                  />
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-white hover:text-gray-300 transition-colors"
              >
                <svg
                  className="w-6 h-6 md:w-8 md:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-2 border-t border-white/10 pt-4">
              <div className="flex flex-col space-y-4">
                {navigationLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white text-base font-normal bukra-regular tracking-wide hover:text-gray-300 transition-colors capitalize no-underline"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-5 border-t border-white/10">
                  <button className="text-white hover:text-gray-300 transition-colors flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    {t("navbar.search")}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
