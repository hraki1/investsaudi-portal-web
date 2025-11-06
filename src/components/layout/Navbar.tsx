import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { getTranslations } from "@/lib/translations";
import { cookies } from "next/headers";
import NavbarLanguageSwitcher from "./NavbarLanguageSwitcher";

export default async function Navbar() {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("locale")?.value || "en") as "en" | "ar";
  const { t } = getTranslations(locale);

  const navigationLinks = [
    { href: "#home", label: t("navbar.awareness") },
    { href: "#about", label: t("navbar.explore_saudi") },
    { href: "#opportunities", label: t("navbar.our_setup") },
    { href: "#sectors", label: t("navbar.news_events") },
    { href: "#contact", label: t("navbar.contact_us") },
  ];

  return (
    <nav className="fixed top-0 w-full z-9999 bg-linear-to-b from-black/80 to-transparent backdrop-blur-lg">
      <div className="border-b border-white/10">
        <div className=" mx-auto px-4 sm:px-4 lg:px-5 py-3 md:py-3">
          <div className="flex items-center justify-between lg:my-2">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/Navbar/logo.png"
                alt="logo"
                width={120}
                height={50}
                className="h-8 md:h-[50px] w-auto object-contain"
              />
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-8 rtl:space-x-reverse">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white text-base font-light space hover:text-gray-300 transition-colors uppercase tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2 sm:gap-2 md:gap-4">
              <button className="hidden md:block text-white hover:text-gray-300 transition-colors">
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
              </button>
              <NavbarLanguageSwitcher />
              <div className="hidden md:block text-white text-xs">
                <div className="text-right leading-tight">
                  <Image
                    src="/Navbar/logo-vision.png"
                    alt="Vision 2030"
                    width={88}
                    height={40}
                    className="w-22  object-contain"
                  />
                </div>
              </div>

              <MobileMenu
                navigationLinks={navigationLinks}
                searchText={t("navbar.search")}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
