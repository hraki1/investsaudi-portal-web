import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { CgArrowTopRight } from "react-icons/cg";

type TrustedCompany = {
  name: string;
  logo: string;
  alt?: string;
};

const topRowCompanies: TrustedCompany[] = [
  { name: "Target", logo: "investment-opportunities/companies/1.png" },
  { name: "Amazon", logo: "investment-opportunities/companies/2.png" },
  { name: "Shell", logo: "investment-opportunities/companies/3.png" },
  { name: "Intel", logo: "investment-opportunities/companies/4.png" },
  { name: "Apple", logo: "investment-opportunities/companies/5.png" },
  { name: "Google", logo: "investment-opportunities/companies/6.png" },
  { name: "Huawei", logo: "investment-opportunities/companies/7.png" },
  { name: "Cisco", logo: "investment-opportunities/companies/8.png" },
];

const bottomRowCompanies: TrustedCompany[] = [
  { name: "IBM", logo: "investment-opportunities/companies/9.png" },
  { name: "Samsung", logo: "investment-opportunities/companies/10.png" },
  { name: "Microsoft", logo: "investment-opportunities/companies/11.png" },
  { name: "Hexagon", logo: "investment-opportunities/companies/12.png" },
  { name: "NVIDIA", logo: "investment-opportunities/companies/13.png" },
  { name: "Tesla", logo: "investment-opportunities/companies/14.png" },
  { name: "Meta", logo: "investment-opportunities/companies/15.png" },
  { name: "McDonald's", logo: "investment-opportunities/companies/16.png" },
];

export default function TrustedCompanies() {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-b from-[#e0f5f7] via-[#eef9f9] to-white py-16 sm:py-20 lg:py-24">
      <div
        className="absolute top-0 left-0 opacity-45"
        style={{
          backgroundImage: 'url("/bg-back.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "720px",
          backgroundPosition: "top left",
        }}
      />
      {/* <div className="pointer-events-none absolute -top-36 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#5dd5ce]/30 blur-3xl" /> */}

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bukra-bold text-3xl sm:text-4xl lg:text-5xl text-[#0f172a]">
            Companies Who Trust Us
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1f2937]/80">
            Discover, Invest, and Grow in the world&apos;s most transformative
            economy
          </p>
        </div>

        <div className="mt-12 flex w-full flex-col gap-8">
          <LogoRow companies={topRowCompanies} />
          <LogoRow companies={bottomRowCompanies} reverse />
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="flex items-center gap-2 rounded-full border border-[#019883] bg-white px-6 py-3 text-sm sm:text-base font-medium text-[#019883] transition-colors duration-200 hover:bg-[#019883]/5"
          >
            Register Now
            <CgArrowTopRight className="text-lg" />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-full bg-[#019883] px-6 py-3 text-sm sm:text-base font-medium text-white transition-colors duration-200 hover:bg-[#017f6e]"
          >
            Explore More
            <CgArrowTopRight className="text-lg" />
          </a>
        </div>
      </div>
    </section>
  );
}

type LogoRowProps = {
  companies: TrustedCompany[];
  reverse?: boolean;
};

function LogoRow({ companies, reverse = false }: LogoRowProps) {
  return (
    <div className="w-full">
      <div className="relative left-1/2 w-screen -translate-x-1/2 cursor-pointer select-none overflow-hidden">
        <Swiper
          className="px-4 sm:px-6 lg:px-8"
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={24}
          loop
          allowTouchMove
          freeMode={{ enabled: true, momentum: false }}
          speed={10000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: reverse,
          }}
          breakpoints={{
            320: { slidesPerView: 3.2, spaceBetween: 12 },
            480: { slidesPerView: 3.2, spaceBetween: 12 },
            640: { slidesPerView: 3.2, spaceBetween: 14 },
            768: { slidesPerView: 4, spaceBetween: 16 },
            1024: { slidesPerView: 5, spaceBetween: 16 },
            1280: { slidesPerView: 6, spaceBetween: 16 },
            1536: { slidesPerView: 8, spaceBetween: 16 },
          }}
        >
          {[...companies, ...companies].map((company, idx) => (
            <SwiperSlide
              key={`${company.name}-${idx}`}
              style={{ width: "240px", maxWidth: "260px" }}
            >
              <div className="flex h-28 items-center justify-center rounded-3xl  bg-white">
                <img
                  src={company.logo}
                  alt={company.alt ?? `${company.name} logo`}
                  className="max-h-16 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
