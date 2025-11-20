import { CgArrowTopRight } from "react-icons/cg";

type Partner = {
  name: string;
  logo: string;
  description?: string;
};

const partners: Partner[] = [
  {
    name: "FURAS Investment Gate",
    logo: "/investment-opportunities/our-partner/1.png",
  },
  {
    name: "Ministry of Municipalities & Housing",
    logo: "/investment-opportunities/our-partner/2.png",
  },
  {
    name: "Ministry of Health",
    logo: "/investment-opportunities/our-partner/3.png",
  },
  {
    name: "Ministry of Industry & Mineral Resources",
    logo: "/investment-opportunities/our-partner/4.png",
  },
  {
    name: "Ministry of Environment Water & Agriculture",
    logo: "/investment-opportunities/our-partner/5.png",
  },
  {
    name: "Public Investment Fund",
    logo: "/investment-opportunities/our-partner/6.png",
  },
];

export default function TrustedPartners() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(115.4deg,#003A39_38.17%,#006461_111.55%)] py-16 text-white sm:py-20 lg:py-24">
      <BackgroundDecoration />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 2px, transparent 2px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="relative z-10 container mx-auto flex w-full  flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="bukra-bold text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Our Trusted Partner
          </p>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            Discover, Invest, and Grow in the world&apos;s most transformative
            economy
          </p>
        </div>

        <div className="mt-12 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-2">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex aspect-9/7 h-[146px] w-full flex-col items-center justify-center rounded-[28px] bg-white/85 px-4 py-6 shadow-[0_18px_40px_-20px_rgba(15,66,60,0.75)] transition-all duration-300 hover:-translate-y-2  hover:shadow-[0_22px_50px_-18px_rgba(15,66,60,0.8)] sm:px-5"
            >
              <div className="relative flex h-full w-full items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-auto w-[114px]  object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#024C44] transition-colors duration-200 hover:bg-white/90 sm:w-auto sm:text-base"
          >
            Explore Opportunities
            <CgArrowTopRight className="text-lg" />
          </a>
          <a
            href="#"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10 sm:w-auto sm:text-base"
          >
            Register Opportunities
            <CgArrowTopRight className="text-lg" />
          </a>
        </div>
      </div>

      {/* background image right up */}
      <div className="absolute top-0 right-0 w-[300px] h-[400px] md:w-[400px] md:h-[550px] lg:w-[362px] lg:h-[535px] overflow-hidden">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: 'url("investment-opportunities/our-partners/bg.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "top right",
          }}
        ></div>
      </div>
    </section>
  );
}

function BackgroundDecoration() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-linear-to-r from-[#003A39] to-[#006461]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 0, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
      />
      <div className="absolute -top-40 left-[18%] h-72 w-72 rounded-full bg-[#0BA58F]/30 blur-3xl sm:h-80 sm:w-80" />
      <div className="absolute -bottom-44 right-[15%] h-80 w-80 rounded-full bg-[#0BA58F]/20 blur-3xl sm:h-96 sm:w-96" />
    </div>
  );
}
