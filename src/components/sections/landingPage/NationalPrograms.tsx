import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import type { Swiper as SwiperType } from "swiper";

export default function NationalPrograms() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Program logos data - create enough slides for smooth infinite loop
  const baseLogos = [
    {
      id: 1,
      image: "/national-transformation/invest-saudi.png",
      alt: "Invest Saudi",
    },
    { id: 2, image: "/national-transformation/ignite.png", alt: "Ignite" },
    {
      id: 3,
      image: "/national-transformation/private-program.png",
      alt: "Saudi Arabia Startup Program",
    },
    { id: 4, image: "/national-transformation/ntdp.png", alt: "NTDP" },
    {
      image: "/national-transformation/financial-program.png",
      id: 5,
      alt: "Financial Sector Development Program",
    },
    {
      id: 6,
      image: "/national-transformation/saudi-arabia.png",
      alt: "Saudi Arabia Startup Program",
    },
    {
      id: 7,
      image: "/national-transformation/air-program.png",
      alt: "air connectivity program",
    },
    {
      id: 8,
      image: "/national-transformation/quality-program.png",
      alt: "Quality of Life Program SDG",
    },
    {
      id: 9,
      image: "/national-transformation/saudi-arabia.png",
      alt: "Invest Saudi + Regional Headquarters Program",
      highlight: true,
    },
    {
      id: 10,
      image: "/national-transformation/national-investment.png",
      alt: "National Investment Strategy",
    },
  ];

  // Duplicate logos 3 times for seamless looping (30 slides total)
  const programLogos = [
    ...baseLogos,
    ...baseLogos.map((logo) => ({ ...logo, id: logo.id + 10 })),
    ...baseLogos.map((logo) => ({ ...logo, id: logo.id + 20 })),
  ];

  // RHQ stages data
  const rhqStages = [
    {
      id: 1,
      iconBg: "#00A7A2",
      shapeColor: "#00A7A2",
      title: "Pre Location",
      description:
        "Saudi Arabia is actively recognizing its potential, seizing opportunities, and driving economic growth both domestically and internationally",
      image: "/nation-program/card-1.png",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.66669 15.8647C1.66669 23.842 8.15732 30.3327 16.1347 30.3327C22.9893 30.3327 28.952 25.4647 30.3133 18.7567C30.4226 18.2154 30.0734 17.6874 29.532 17.5781C28.9907 17.4687 28.4627 17.818 28.3534 18.3594C28.0507 19.85 27.4843 21.2351 26.7088 22.4701C26.5296 22.4625 26.3462 22.5029 26.1784 22.5968C25.8344 22.7888 25.4517 22.9314 25.0397 23.0208C24.4997 23.1381 24.1557 23.6701 24.2731 24.2101C24.3353 24.4983 24.5151 24.7302 24.7515 24.8662C22.4891 27.0259 19.4315 28.3327 16.1347 28.3327C10.4933 28.3327 5.71482 24.5663 4.18185 19.4161C4.26824 19.4 4.35402 19.3722 4.43706 19.3315C4.51973 19.2915 4.60374 19.2501 4.68908 19.2075L4.70809 19.1981C5.05019 19.029 5.40412 18.854 5.78244 18.7048C6.29577 18.5021 6.54773 17.9208 6.34507 17.4075C6.1424 16.8928 5.56107 16.6421 5.04774 16.8448C4.58765 17.0265 4.17501 17.2305 3.80986 17.4111L3.80373 17.4141L3.76493 17.4338C3.7001 16.9197 3.66669 16.396 3.66669 15.8647C3.66669 9.95805 7.86133 4.8194 13.64 3.64606C14.1813 3.53673 14.5307 3.00872 14.4214 2.46739C14.312 1.92605 13.7854 1.5767 13.2427 1.68604C6.53473 3.04737 1.66669 9.01005 1.66669 15.8647Z"
            fill="white"
          />
          <path
            d="M21.6478 24.8688C21.7238 24.8875 21.7997 24.8955 21.8744 24.8955L21.8731 24.8941C22.3277 24.8941 22.7397 24.5808 22.8464 24.1194C22.9717 23.5821 22.6371 23.0448 22.0985 22.9194C21.4211 22.7621 20.7104 22.5221 19.985 22.2035C19.4797 21.9821 18.8891 22.2128 18.6677 22.7181C18.4464 23.2234 18.6771 23.8141 19.1824 24.0355C20.0211 24.4035 20.8505 24.6835 21.6478 24.8688Z"
            fill="white"
          />
          <path
            d="M15.6145 22.0008C15.7878 22.1221 15.9877 22.1808 16.185 22.1808V22.1781C16.501 22.1781 16.8117 22.0288 17.0064 21.7501C17.3224 21.2968 17.2118 20.6741 16.7585 20.3581C16.475 20.1612 16.1769 19.939 15.8894 19.7247L15.8878 19.7235L15.7712 19.637C15.5309 19.4589 15.2864 19.2776 15.0478 19.1101C14.5958 18.7928 13.9718 18.9021 13.6544 19.3541C13.3371 19.8061 13.4465 20.4301 13.8985 20.7475C14.1476 20.9223 14.4044 21.1136 14.675 21.3153L14.6931 21.3288C14.9931 21.5528 15.3051 21.7848 15.6145 22.0008Z"
            fill="white"
          />
          <path
            d="M10.7557 18.9514C10.8824 19.0048 11.0131 19.0301 11.1424 19.0301C11.5331 19.0301 11.9038 18.7994 12.0651 18.4168C12.2785 17.9074 12.0398 17.3208 11.5304 17.1075C10.5491 16.6955 9.60107 16.4368 8.71173 16.3381C8.1624 16.2768 7.6691 16.6728 7.60776 17.2221C7.54643 17.7714 7.94241 18.2661 8.49175 18.3261C9.19041 18.4035 9.95174 18.6141 10.7557 18.9514Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 12.9993C20.3454 12.9993 19 11.654 19 9.99935C19 8.34468 20.3454 6.99935 22 6.99935C23.6547 6.99935 25 8.34468 25 9.99935C25 11.654 23.6547 12.9993 22 12.9993ZM22 8.99935C21.448 8.99935 21 9.44735 21 9.99935C21 10.5513 21.448 10.9993 22 10.9993C22.552 10.9993 23 10.5513 23 9.99935C23 9.44735 22.552 8.99935 22 8.99935Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.0054 18.8953C20.5454 19.3926 21.2534 19.666 22 19.666C22.7467 19.666 23.456 19.3926 23.996 18.8953C24.2172 18.6921 24.4428 18.4879 24.6717 18.2806L24.7467 18.2127C27.948 15.3153 31.9321 11.7087 29.6934 6.57132C28.4147 3.63799 25.324 1.66732 22.0013 1.66732C18.6787 1.66732 15.5881 3.63799 14.3094 6.57132C12.0801 11.6887 16.0307 15.2793 19.2067 18.1646C19.2594 18.2127 19.3122 18.2607 19.3648 18.3086C19.5808 18.5051 19.7952 18.7002 20.0054 18.8953ZM16.1427 7.36999C17.1067 5.15399 19.4614 3.66598 22 3.66598L22.0013 3.66732C24.54 3.66732 26.8934 5.15665 27.8588 7.37132C29.5234 11.1897 26.4146 14.005 23.4078 16.7279L23.4041 16.7313C23.1454 16.9646 22.8906 17.1953 22.6413 17.4246C22.4746 17.5793 22.2413 17.6673 22.0013 17.6673C21.7613 17.6673 21.528 17.578 21.3627 17.426C21.1092 17.1904 20.8484 16.9537 20.5849 16.7145L20.552 16.6846C17 13.4566 14.6041 10.8993 16.1427 7.36999Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      id: 2,
      shapeColor: "#814A984D",
      iconBg: "#814A98",
      title: "Preparation For The Relocation",
      description:
        "Vision 2030 has driven a surge in demand for skilled professionals, with diversification and innovation attracting...",
      image: "/nation-program/card-2.png",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 19.6621C10.508 19.6621 7.66669 16.8208 7.66669 13.3288C7.66669 9.83678 10.508 6.99544 14 6.99544C17.492 6.99544 20.3334 9.83678 20.3334 13.3288C20.3334 16.8208 17.492 19.6621 14 19.6621ZM14 9.03809C13.652 9.36742 13 10.8221 13 13.3288C13 15.8354 13.652 17.2901 14 17.6195C14.348 17.2901 15 15.8354 15 13.3288C15 10.8221 14.348 9.36742 14 9.03809ZM16.5507 9.82747C16.8533 10.8875 17 12.1261 17 13.3288C17 14.5314 16.8547 15.7701 16.5507 16.8301C17.6307 16.0407 18.3334 14.7661 18.3334 13.3288C18.3334 11.8914 17.6307 10.6168 16.5507 9.82747ZM11.4494 9.82747C10.3694 10.6168 9.66669 11.8914 9.66669 13.3288C9.66669 14.7661 10.3694 16.0407 11.4494 16.8301C11.1467 15.7701 11 14.5314 11 13.3288C11 12.1261 11.1454 10.8875 11.4494 9.82747Z"
            fill="white"
          />
          <path
            d="M9.33335 23.6621H18.6667C19.2187 23.6621 19.6667 23.2141 19.6667 22.6621C19.6667 22.1101 19.2187 21.6621 18.6667 21.6621H9.33335C8.78135 21.6621 8.33335 22.1101 8.33335 22.6621C8.33335 23.2141 8.78135 23.6621 9.33335 23.6621Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 30.3288C16.4226 30.3288 16.8274 30.3288 17.2155 30.3274C17.2321 30.3282 17.2488 30.3287 17.2656 30.3287V30.3313C20.9016 30.3313 22.9043 30.3313 24.4456 29.1046C25.9829 27.878 26.4416 25.9193 27.2736 22.362L29.831 11.4274C30.3217 9.33136 30.5909 8.17664 29.9843 7.14064C29.0825 5.60327 27.2269 5.61059 25.9396 5.6477C25.6973 4.70764 25.3058 3.9546 24.6733 3.32214C23.0147 1.66214 20.5227 1.66211 16 1.66211H12C7.47735 1.66211 4.98671 1.66214 3.32671 3.32214C1.66671 4.9808 1.66669 7.47278 1.66669 11.9954V19.9954C1.66669 24.5181 1.66671 27.0087 3.32671 28.6687C4.98538 30.3287 7.47735 30.3288 12 30.3288H16ZM26.2412 7.64018C26.3333 8.84071 26.3334 10.2702 26.3334 11.9954V17.5963L27.8843 10.9652C28.2322 9.47696 28.4612 8.49709 28.2577 8.15131C27.9698 7.66147 27.0715 7.62336 26.2412 7.64018ZM11.9997 3.66211H16C20.1185 3.66211 22.1867 3.66211 23.26 4.73542C24.3334 5.81006 24.3334 7.87668 24.3334 11.9952V19.9954C24.3334 24.1139 24.3334 26.1822 23.26 27.2555C22.1854 28.3288 20.1188 28.3288 16.0003 28.3288H12C7.88155 28.3288 5.8133 28.3288 4.73999 27.2555C3.66669 26.1808 3.66669 24.1142 3.66669 19.9957V11.9954C3.66669 7.87698 3.66669 5.80872 4.73999 4.73542C5.81463 3.66211 7.88125 3.66211 11.9997 3.66211Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      id: 3,
      shapeColor: "#A01E6433",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.785 19.622C13.8503 19.6407 13.9623 19.666 14.145 19.666L14.1477 19.6673C14.4277 19.6673 14.8757 19.6073 15.5863 19.37C15.6466 19.3499 15.8324 19.3022 16.0277 19.2521C16.0789 19.239 16.1307 19.2257 16.181 19.2127C16.2088 19.2055 16.2372 19.1983 16.266 19.1908C16.8008 19.0534 17.4986 18.8739 17.9983 18.6994L18.0117 18.694C19.0223 18.3273 19.765 17.4594 20.0757 16.7314C20.229 16.4634 20.4703 15.9793 20.8303 15.25C21.0757 14.7527 21.437 14.0207 21.565 13.8007C21.597 13.766 21.637 13.7327 21.6983 13.71C22.5083 13.4841 23.8907 13.1098 25.1606 12.7659C25.4043 12.7 25.6438 12.6351 25.8743 12.5727L26.212 12.4812C27.5243 12.1259 28.2759 11.9223 28.4237 11.878L28.477 11.862L28.4786 11.8616C28.8598 11.7492 29.8668 11.4524 30.2263 10.2794L30.241 10.2287C30.525 9.09271 30.1343 8.52471 29.473 7.69805C29.0557 7.15005 27.7917 5.926 25.901 5.114C23.4703 4.06866 20.8477 4.07401 18.3183 5.13001L18.293 5.14069C17.963 5.28928 16.1935 6.14334 14.3005 7.05699L14.221 7.09538C13.975 7.21403 13.7205 7.33676 13.4643 7.46037C11.8837 8.22289 10.2341 9.01866 10.0517 9.09668C9.75568 9.21935 9.54634 9.27004 9.39301 9.25671C9.29168 9.24737 9.08501 9.1207 8.94368 8.97936L8.87434 8.91003L8.83568 8.8847C8.75701 8.8047 8.57967 8.59265 8.44767 8.43398C7.67167 7.50598 7.10635 6.87534 6.46101 6.71934C5.89168 6.54867 5.32234 6.64333 5.02768 6.71667L4.98635 6.72734C3.36901 7.13001 3.04235 7.28202 2.84635 7.40202C2.28768 7.74602 1.97568 8.09799 1.77835 8.60866C1.55035 9.14999 1.70101 9.85402 2.17035 11.6407C2.49035 12.858 2.91835 14.3927 3.06235 14.7887C3.51301 16.102 3.95301 16.6194 4.51567 17.0287L4.58901 17.078C5.29301 17.5007 5.85035 17.5874 6.47035 17.5874C6.84235 17.5874 8.073 17.4114 10.3277 16.754C10.869 16.622 11.6583 16.4127 12.449 16.19C12.6237 16.15 12.7903 16.1087 12.945 16.0673C12.8543 16.526 12.705 17.2514 12.621 17.546C12.4877 18.014 12.541 18.4873 12.7744 18.878C12.9944 19.2487 13.3623 19.518 13.785 19.622ZM14.6757 17.5567C14.8077 16.97 14.9503 16.226 14.9837 16.0393L14.989 16.0367C14.9947 16.0139 15.0023 15.9874 15.011 15.957C15.0125 15.9517 15.0141 15.9462 15.0157 15.9407L15.0163 15.9383C15.1417 15.4996 15.331 14.8371 14.9557 14.29C14.837 14.1167 14.6743 13.9807 14.4863 13.894C14.0651 13.658 13.5385 13.814 13.0612 13.9553C12.7692 14.0419 12.405 14.15 11.985 14.2447L11.9343 14.258C11.1463 14.4807 10.3623 14.6887 9.83701 14.8154L9.79168 14.8273C7.70634 15.4367 6.63834 15.582 6.47301 15.5874C6.13434 15.5874 5.95301 15.5554 5.65834 15.3847C5.48501 15.2554 5.26901 15.0514 4.95301 14.1287L4.94368 14.102C4.86901 13.902 4.49701 12.6167 4.10768 11.1327C3.96634 10.5967 3.71435 9.63665 3.67968 9.26732C3.70635 9.23265 3.75835 9.19137 3.87035 9.1207C3.94768 9.0887 4.27968 8.96465 5.47168 8.66732L5.51434 8.65671C5.68501 8.61404 5.83834 8.61935 5.88901 8.63535L5.91968 8.64603C6.15435 8.80869 6.66235 9.41667 6.91301 9.71667C7.22368 10.0887 7.40501 10.3034 7.58234 10.446C7.84901 10.6994 8.44768 11.1807 9.21301 11.25C9.84901 11.3073 10.4063 11.1167 10.8197 10.9447C11.0143 10.8633 12.3343 10.2287 15.0904 8.89805C16.893 8.02738 18.757 7.12735 19.101 6.97135C24.357 4.78735 27.8503 8.87133 27.8823 8.914L27.9023 8.93932C28.0237 9.08999 28.3063 9.44199 28.3357 9.53932C28.3358 9.5452 28.337 9.59034 28.3063 9.71803C28.2743 9.81403 28.2303 9.85266 27.9143 9.94466L27.849 9.96335C27.7229 10.0011 26.8138 10.2473 25.768 10.5306C25.6311 10.5677 25.4918 10.6054 25.3517 10.6434C23.8277 11.0554 22.101 11.5233 21.1343 11.7913L21.093 11.8033C20.5117 11.9927 20.1797 12.3487 20.0543 12.4874L20.0037 12.5367L19.949 12.614C19.797 12.83 19.5543 13.3127 19.0357 14.362L19.0242 14.3852C18.7457 14.9475 18.4341 15.5767 18.317 15.7727L18.273 15.846L18.2424 15.926C18.1384 16.194 17.7877 16.6447 17.3317 16.8127C16.885 16.9674 16.1917 17.1447 15.6837 17.274C15.297 17.3727 15.089 17.4273 14.9517 17.4727C14.861 17.5033 14.7664 17.5314 14.6757 17.5567ZM8.79034 8.85534L8.79701 8.85938C8.79701 8.85938 8.79301 8.85667 8.79034 8.85534Z"
            fill="white"
          />
          <path
            d="M2.66718 27.666H24.0005C24.5525 27.666 25.0005 27.218 25.0005 26.666C25.0005 26.114 24.5525 25.666 24.0005 25.666H2.66718C2.11518 25.666 1.66718 26.114 1.66718 26.666C1.66718 27.218 2.11518 27.666 2.66718 27.666Z"
            fill="white"
          />
        </svg>
      ),
      iconBg: "#D6358D",
      title: "Arrival In KSA",
      description:
        "Discover essential resources and guidance to ease your transition to life in Saudi Arabia. From housing and education...",
      image: "/nation-program/card-3.png",
    },
    {
      id: 4,
      shapeColor: "#003A5D",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 9.66862C17.4477 9.66862 17 10.1163 17 10.6686C17 11.2209 17.4477 11.6686 18 11.6686H20.6667C21.219 11.6686 21.6667 11.2209 21.6667 10.6686C21.6667 10.1163 21.219 9.66862 20.6667 9.66862H18Z"
            fill="white"
          />
          <path
            d="M18 13.6686C17.4477 13.6686 17 14.1163 17 14.6686C17 15.2209 17.4477 15.6686 18 15.6686H20.6667C21.219 15.6686 21.6667 15.2209 21.6667 14.6686C21.6667 14.1163 21.219 13.6686 20.6667 13.6686H18Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.0044 27.6686H22.6623L22.6667 27.6686L22.6711 27.6686H29.3334C29.8856 27.6686 30.3334 27.2209 30.3334 26.6686C30.3334 26.1163 29.8856 25.6686 29.3334 25.6686H28.3334V12.4493L28.6669 12.7475C29.0786 13.1156 29.7108 13.0802 30.0789 12.6684C30.447 12.2567 30.4116 11.6245 29.9998 11.2564L23.5903 5.5265C22.7691 4.79234 22.0816 4.17774 21.4653 3.75542C20.8122 3.30788 20.1365 3.00195 19.3334 3.00195C18.5302 3.00195 17.8545 3.30788 17.2014 3.75542C16.5851 4.17774 15.8977 4.79232 15.0765 5.52647L8.66689 11.2564C8.25515 11.6245 8.21975 12.2567 8.58784 12.6684C8.95592 13.0802 9.5881 13.1156 9.99984 12.7475L10.3334 12.4493V25.6686H5.66669V19.4636C6.15734 19.2542 6.57017 18.9019 6.8809 18.4876C7.38467 17.8159 7.66669 16.9338 7.66669 16.002C7.66669 15.0701 7.38467 14.188 6.8809 13.5163C6.3769 12.8443 5.6043 12.3353 4.66669 12.3353C3.72907 12.3353 2.95647 12.8443 2.45247 13.5163C1.94871 14.188 1.66669 15.0701 1.66669 16.002C1.66669 16.9338 1.94871 17.8159 2.45247 18.4876C2.7632 18.9019 3.17603 19.2542 3.66669 19.4636V25.6686H2.66669C2.1144 25.6686 1.66669 26.1163 1.66669 26.6686C1.66669 27.2209 2.1144 27.6686 2.66669 27.6686H15.9956L16 27.6686L16.0044 27.6686ZM18.607 17.6686H20.0597C20.6368 17.6686 21.1659 17.6685 21.5963 17.7264C22.0703 17.7901 22.5712 17.94 22.9833 18.352C23.3953 18.7641 23.5452 19.265 23.609 19.739C23.6668 20.1694 23.6668 20.6985 23.6667 21.2756L23.6667 25.6686H26.3334V10.6686L26.3334 10.6614L22.3059 7.061C21.4233 6.27201 20.8318 5.74579 20.3348 5.40525C19.8625 5.08161 19.5813 5.00195 19.3334 5.00195C19.0854 5.00195 18.8042 5.08161 18.3319 5.40525C17.835 5.74579 17.2434 6.27201 16.3608 7.061L12.3333 10.6614L12.3334 10.6686V25.6686H15L15 21.2753C15 20.6983 14.9999 20.1693 15.0578 19.7389C15.1215 19.265 15.2714 18.7641 15.6834 18.352C16.0955 17.94 16.5964 17.7901 17.0704 17.7264C17.5008 17.6685 18.0299 17.6686 18.607 17.6686ZM21.6667 21.3353V25.6686H17V21.3349C17 20.6782 17.0022 20.2863 17.0399 20.0054C17.0572 19.8767 17.0776 19.8123 17.0896 19.7833C17.0923 19.7765 17.0945 19.7721 17.0958 19.7695L17.0977 19.7663C17.0981 19.7659 17.0982 19.7657 17.0977 19.7663L17.1009 19.7644C17.1035 19.7631 17.1079 19.7609 17.1146 19.7582C17.1437 19.7462 17.2082 19.7258 17.3369 19.7085C17.6179 19.6708 18.0099 19.6686 18.6667 19.6686H20C20.6568 19.6686 21.0488 19.6708 21.3298 19.7085C21.4586 19.7258 21.523 19.7462 21.5521 19.7582C21.5588 19.7609 21.5632 19.7631 21.5658 19.7644L21.569 19.7663L21.5709 19.7695C21.5722 19.7721 21.5744 19.7765 21.5772 19.7832C21.5891 19.8123 21.6095 19.8768 21.6268 20.0055C21.6646 20.2865 21.6667 20.6785 21.6667 21.3353ZM3.66669 16.002C3.66669 15.461 3.83238 15.0098 4.05247 14.7163C4.27233 14.4232 4.49973 14.3353 4.66669 14.3353C4.83364 14.3353 5.06104 14.4232 5.2809 14.7163C5.50099 15.0098 5.66669 15.461 5.66669 16.002C5.66669 16.5429 5.50099 16.9941 5.2809 17.2876C5.06104 17.5807 4.83364 17.6686 4.66669 17.6686C4.49973 17.6686 4.27233 17.5807 4.05247 17.2876C3.83238 16.9941 3.66669 16.5429 3.66669 16.002Z"
            fill="white"
          />
        </svg>
      ),
      iconBg: "#01778F",
      title: "Living In KSA",
      description:
        "Saudi Arabia is a treasure trove of history and culture, offering a glimpse into a rich and storied past",
      image: "/nation-program/card-4.png",
    },
  ];

  return (
    <section className="relative w-full  py-12 md:py-20 bg-linear-to-l from-[#E6F6F6] to-[#ECE4F0] overflow-hidden ">
      {/* Background with gradient */}
      {/* <div className="absolute z-0 inset-0 "></div> */}

      <div className="absolute top-1 right-1 w-[300px] h-[400px] md:w-3/2 md:h-[550px] lg:w-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/national-transformation/bg.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "top right",
          }}
        ></div>
      </div>

      <div className="container relative mx-auto px-2 md:px-12 lg:px-20  sm:px-6 z-10">
        {/* Header */}
        <div className="text-center md:text-left mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-[46px] bukra-bold text-[#002E4A] mb-2 leading-tight">
            National Programs Driving Transformation
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl bukra-regular text-[#171717] leading-relaxed">
            Coordinated initiatives accelerating growth and localization
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Side - Logo Carousel */}
          <div className="lg:col-span-3 flex flex-col items-center">
            {/* Up Arrow */}
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center mb-6 transition-all duration-300 hover:bg-gray-50"
              aria-label="Previous logo"
            >
              <BsChevronUp className="text-xl text-gray-700" />
            </button>

            {/* Logo Swiper */}
            <div className="w-full max-w-[300px] sm:max-w-[500px] relative">
              <Swiper
                direction="vertical"
                slidesPerView={9}
                spaceBetween={15}
                loop={true}
                loopAdditionalSlides={5}
                centeredSlides={true}
                modules={[Navigation]}
                onSwiper={setSwiperInstance}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="h-[500px] sm:h-[750px] logo-swiper"
                breakpoints={{
                  320: {
                    slidesPerView: 5,
                    spaceBetween: 5,
                  },
                  480: {
                    slidesPerView: 5,
                  },
                  640: {
                    slidesPerView: 95,
                  },
                  768: {
                    slidesPerView: 9,
                  },
                  1024: {
                    slidesPerView: 9,
                  },
                }}
              >
                {programLogos.map((logo, index) => {
                  // Calculate distance from center
                  const getDistanceFromCenter = () => {
                    if (!swiperInstance) return 0;
                    const totalSlides = programLogos.length;
                    if (totalSlides === 0) return 0;
                    const currentIndex = activeIndex ?? 0;
                    let distance = Math.abs(currentIndex - index);
                    // Handle loop distance calculation
                    if (distance > totalSlides / 2) {
                      distance = totalSlides - distance;
                    }
                    return isNaN(distance) ? 0 : distance;
                  };

                  const distance = getDistanceFromCenter();

                  // Calculate perspective transform based on distance
                  let translateZ = 0;
                  // let opacity = 1.0;
                  let zIndex = 0;

                  if (distance === 0) {
                    // Center slide - at front
                    translateZ = 0;
                    // opacity = 1.0;
                    zIndex = 10;
                  } else {
                    // All other slides recede into distance with perspective
                    translateZ = -distance * 100; // Moves back in 3D space
                    // opacity = Math.max(0.25, 1 - distance * 0.18);
                    zIndex = 10 - distance; // Lower z-index for farther slides
                  }

                  const isCenter = distance === 0;

                  return (
                    <SwiperSlide
                      key={logo.id}
                      className="flex items-center justify-center"
                      style={{
                        perspective: "1000px",
                        // transformStyle: "preserve-3d",
                        zIndex: zIndex,
                        position: "relative",
                      }}
                    >
                      {isCenter ? (
                        <div
                          className="rounded-[22px] p-1.5 transition-all duration-300"
                          style={{
                            background:
                              "linear-gradient(269.96deg, #00A7A2 -0.73%, #0179C2 37.74%, #814A98 76.21%)",
                            height: "85px",
                            width: "100%",
                            transform: `translateZ(${translateZ}px)`,
                            // transformStyle: "preserve-3d",
                            pointerEvents: "auto",
                            position: "relative",
                            zIndex: zIndex,
                          }}
                        >
                          <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                            <div className="relative w-full h-full flex items-center justify-center">
                              <img
                                src={logo.image}
                                alt={logo.alt}
                                className="object-contain w-full h-full"
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div
                          className="flex items-center justify-center rounded-2xl transition-all duration-300 bg-white shadow-sm -mb-5 cursor-pointer hover:scale-105"
                          style={{
                            height: "85px",
                            width: "100%",
                            // marginTop: `-${distance * 950}px`,
                            transform: `translateZ(${translateZ}px)`,
                            transformStyle: "preserve-3d",
                            pointerEvents: "auto",
                            position: "relative",
                            zIndex: zIndex,
                            // opacity: opacity,
                          }}
                        >
                          <div className="relative w-full h-full flex items-center justify-center">
                            <img
                              src={logo.image}
                              alt={logo.alt}
                              className="object-contain w-full h-full"
                            />
                          </div>
                        </div>
                      )}
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            {/* Down Arrow */}
            <button
              onClick={() => swiperInstance?.slideNext()}
              className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center mt-6 transition-all duration-300 hover:bg-gray-50"
              aria-label="Next logo"
            >
              <BsChevronDown className="text-xl text-gray-700" />
            </button>
          </div>

          {/* Right Side - RHQ Program Card */}
          <div className="lg:col-span-9 bg-[#FFFFFFB2]/70 p-2 md:p-2 rounded-4xl">
            <div
              className="rounded-3xl p-4 md:p-8 bg-white shadow-xl"
              style={{
                background:
                  "linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 50%, #F3F4F6 100%)",
              }}
            >
              {/* Card Header */}
              <h3 className="text-2xl md:text-3xl lg:text-[37px] bukra-medium text-[#001A2A] mb-4">
                Regional Headquarters Program (RHQ)
              </h3>
              <p className="text-base md:text-lg lg:text-[20px] bukra-regular text-black mb-8 leading-relaxed">
                Saudi Arabia is a dynamic, globally influential economic
                powerhouse in the Middle East, offering diverse landscapes,
                climates, and a rich cultural heritage that blends tradition
                with modernity.
              </p>

              {/* Stages Grid */}
              <div className="space-y-2">
                {rhqStages.map((stage) => (
                  <div
                    key={stage.id}
                    className="relative overflow-hidden flex flex-col md:flex-row items-start md:items-center gap-4 p-5 rounded-2xl transition-all duration-300 hover:shadow-md"
                  >
                    {/* left side content */}
                    <div>
                      {/* title and icon */}
                      <div className="flex items-center gap-4 mb-3">
                        {/* Icon */}
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shrink-0 shadow-md"
                          style={{ backgroundColor: stage.iconBg }}
                        >
                          {stage.icon}
                        </div>

                        <h4 className="text-lg md:text-xl lg:text-[24px] bukra-medium text-[#002338]">
                          {stage.title}
                        </h4>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <p className="text-sm md:text-base lg:text-lg text-[#262626] leading-relaxed bukra-regular">
                          {stage.description}
                        </p>
                      </div>
                    </div>

                    {/* right side Image */}
                    <div className="w-[241px] h-[151px] overflow-hidden shadow-md rounded-xl shrink-0">
                      <div className="w-full h-full overflow-hidden rounded-xl border border-white/42 flex items-center justify-center">
                        <img
                          src={stage.image}
                          alt={stage.title}
                          className="object-cover mx-auto"
                        />
                      </div>
                    </div>

                    {/* shape up left */}

                    {/* shape background */}
                    <div className=" absolute -top-5 -left-22 w-[697.75px] h-[361px] rounded-full overflow-hidden">
                      <svg
                        width="900"
                        height="211"
                        viewBox="0 0 900 211"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_f_20396_20728)">
                          <ellipse
                            cx="34.4166"
                            cy="-233.587"
                            rx="683"
                            ry="256.257"
                            transform="rotate(-19.7487 34.4166 -233.587)"
                            fill={stage.shapeColor}
                            fillOpacity="0.3"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_20396_20728"
                            x="-914.294"
                            y="-867.4"
                            width="1897.42"
                            height="1267.62"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="150"
                              result="effect1_foregroundBlur_20396_20728"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              {/* Visit RHQ Button */}
              <div className="flex justify-end mt-3">
                <button className="flex gap-5 items-center md:text-lg bukra-medium px-6 py-3  border border-[#A3A3A3] rounded-full text-black transition-all duration-300 hover:scale-105 cursor-pointer">
                  <span>Visit RHQ</span>
                  <div>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.7485 0.715242C12.502 0.486636 12.1767 0.359835 11.8998 0.280065C11.6044 0.194969 11.2665 0.136948 10.9186 0.0963197C10.2213 0.0148975 9.40365 -0.00545164 8.63838 0.00115929C7.86878 0.00780759 7.13161 0.0419995 6.58826 0.0743469C6.31612 0.0905484 6.09152 0.106353 5.93445 0.118151C5.8559 0.124051 5.79417 0.128953 5.75177 0.132408L5.70295 0.13645L5.68999 0.137552L5.68495 0.137986C5.2723 0.173934 4.96693 0.537596 5.00287 0.950246C5.03882 1.36288 5.40303 1.6682 5.81565 1.63228L5.81817 1.63207L5.82907 1.63114L5.87358 1.62745C5.91303 1.62424 5.9716 1.61959 6.0468 1.61394C6.19725 1.60264 6.41405 1.58737 6.67741 1.5717C7.20506 1.54028 7.91529 1.50746 8.65134 1.5011C9.39171 1.49471 10.1379 1.51536 10.7446 1.5862C10.7787 1.59017 10.812 1.59428 10.8447 1.59852L0.21967 12.2236C-0.0732233 12.5165 -0.0732233 12.9913 0.21967 13.2842C0.512563 13.5771 0.987437 13.5771 1.28033 13.2842L11.9078 2.65672C11.9096 2.67107 11.9114 2.68557 11.9131 2.70021C11.9834 3.30004 12.0044 4.05047 11.9986 4.80046C11.9929 5.54576 11.961 6.26955 11.9303 6.80855C11.9151 7.07757 11.9001 7.29947 11.8891 7.45364C11.8836 7.5307 11.879 7.59078 11.8758 7.6313L11.8722 7.67705L11.871 7.69154C11.8368 8.10431 12.1436 8.46673 12.5563 8.50104C12.9691 8.53536 13.3316 8.22805 13.3659 7.81526L13.3663 7.81067L13.3674 7.79746L13.3713 7.74761C13.3747 7.70428 13.3795 7.64119 13.3852 7.56094C13.3967 7.40046 13.4122 7.1711 13.4279 6.89367C13.4594 6.33976 13.4926 5.58985 13.4985 4.81198C13.5045 4.0388 13.4838 3.21659 13.4029 2.52563C13.3625 2.18136 13.3047 1.84687 13.2189 1.55777C13.1407 1.29431 13.008 0.95593 12.7485 0.715242Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Button */}
        <div className="flex justify-center md:justify-end mt-6 md:mt-10">
          <button className="flex items-center md:text-lg gap-2.5 px-8 py-4 bg-[#00A7A2] rounded-full text-white font-semibold text-base hover:bg-[#008B8B] transition-all bukra-medium duration-300 shadow-lg hover:shadow-xl">
            <span>Explore National Programs</span>
            <div>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.4196 5.43766C16.1947 5.2291 15.898 5.11343 15.6454 5.04065C15.3759 4.96302 15.0677 4.91009 14.7502 4.87303C14.1141 4.79875 13.3682 4.78018 12.6701 4.78621C11.968 4.79228 11.2955 4.82347 10.7998 4.85298C10.5515 4.86776 10.3466 4.88218 10.2033 4.89294C10.1317 4.89833 10.0753 4.9028 10.0367 4.90595L9.99212 4.90964L9.98029 4.91064L9.9757 4.91104C9.59925 4.94383 9.32066 5.27559 9.35345 5.65205C9.38625 6.02848 9.7185 6.30702 10.0949 6.27426L10.0972 6.27406L10.1072 6.27321L10.1478 6.26985C10.1838 6.26692 10.2372 6.26267 10.3058 6.25752C10.4431 6.24721 10.6408 6.23329 10.8811 6.21898C11.3625 6.19033 12.0104 6.16038 12.6819 6.15458C13.3573 6.14875 14.0381 6.16759 14.5915 6.23221C14.6226 6.23584 14.6531 6.23959 14.6829 6.24346L4.98983 15.9365C4.72263 16.2037 4.72263 16.6369 4.98983 16.9041C5.25703 17.1713 5.69025 17.1713 5.95745 16.9041L15.6527 7.20883C15.6543 7.22192 15.6559 7.23515 15.6575 7.2485C15.7216 7.79572 15.7408 8.48032 15.7355 9.16452C15.7303 9.84444 15.7012 10.5047 15.6732 10.9965C15.6593 11.2419 15.6457 11.4443 15.6356 11.585C15.6306 11.6553 15.6264 11.7101 15.6235 11.747L15.6202 11.7888L15.6192 11.802C15.5879 12.1786 15.8678 12.5092 16.2443 12.5405C16.6209 12.5718 16.9516 12.2914 16.9829 11.9149L16.9833 11.9107L16.9842 11.8986L16.9878 11.8531C16.9909 11.8136 16.9953 11.7561 17.0005 11.6829C17.011 11.5365 17.0251 11.3272 17.0395 11.0741C17.0682 10.5688 17.0984 9.88467 17.1039 9.17503C17.1093 8.46967 17.0905 7.71959 17.0166 7.08924C16.9798 6.77517 16.9271 6.47002 16.8488 6.20628C16.7774 5.96593 16.6564 5.65723 16.4196 5.43766Z"
                  fill="white"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
