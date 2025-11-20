
import { useTranslation } from "react-i18next";
import { BsArrowUpRight } from "react-icons/bs";
import type { ReactNode } from "react";

// Interfaces for Hero section data
interface HeroBackgroundImage {
  src: string;
  alt: string;
}

interface HeroContent {
  titleKey: string;
  subtitleKey: string;
}

interface HeroSearch {
  placeholder: string;
}

interface HeroStat {
  iconName: string;
  title: string;
  description: string;
}

interface Hero {
  sectionId: string;
  backgroundImage: HeroBackgroundImage;
  content: HeroContent;
  search: HeroSearch;
  actions: readonly string[];
  stats: HeroStat[];
  iconMap: string[];
}

// Hero section data object - prepared for API integration
const hero: Hero = {
  sectionId: "home",
  backgroundImage: {
    src: "/sectors/hero/hero.png",
    alt: "Saudi Arabia landscape",
  },
  content: {
    titleKey: "Enabling Investment Growth across Promising Sector",
    subtitleKey:
      "Discover the diverse investment landscape of Saudi Arabia across key sectors, from technology to energy, driving economic growth and innovation.",
  },
  search: {
    placeholder: "i am looking for..",
  },
  actions: ["Explore Sectors", "Explore Regions"],
  stats: [
    {
      iconName: "MdOutlineTrendingUp",
      title: "World's Fastest Growing G20",
      description: "Economy positioned as a global logistic and trade hub",
    },
    {
      iconName: "MdOutlineRocketLaunch",
      title: "Transformational",
      description: "Economy positioned as a global logistic and trade hub",
    },
    {
      iconName: "PiGlobeStand",
      title: "Global Market Access",
      description: "Economy positioned as a global logistic and trade hub",
    },
    {
      iconName: "PiMoneyWavyThin",
      title: "A Pro Investor Eco-System",
      description: "Economy positioned as a global logistic and trade hub",
    },
    {
      iconName: "BsPersonVcard",
      title: "Unlock Government Contracts",
      description: "Economy positioned as a global logistic and trade hub",
    },
  ],
  // Icon mapping for API integration (icon names as strings)
  iconMap: [
    "MdOutlineTrendingUp",
    "MdOutlineRocketLaunch",
    "PiGlobeStand",
    "PiMoneyWavyThin",
    "BsPersonVcard",
  ],
};

const highlightCards: Array<{
  value: string;
  label: string;
  icon: ReactNode;
  borderGradient: string;
  backgroundColor: string;
  pattern?: string;
}> = [
  {
    value: "15",
    label: "Sectors",
    icon: (
      <svg
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3">
          <path
            opacity="0.4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6887 29.0129C13.616 29.0129 16.2888 28.4363 18.3235 27.4859C20.3582 26.5356 23.031 25.959 25.9583 25.959C27.5859 25.959 29.1348 26.1373 30.5391 26.4589C32.0049 26.7946 33.593 25.7618 33.593 24.258V7.80958C33.593 6.60179 33.593 5.9979 33.2966 5.37514C33.1276 5.01996 32.7426 4.53681 32.4341 4.29272C31.8932 3.86476 31.4419 3.76137 30.5391 3.55461C29.1348 3.23296 27.5859 3.05469 25.9583 3.05469C23.031 3.05469 20.3582 3.63132 18.3235 4.58164C16.2888 5.53196 13.616 6.10859 10.6887 6.10859C9.06111 6.10859 7.51218 5.93033 6.10786 5.60867C4.64203 5.27294 3.05396 6.30579 3.05396 7.80957V24.258C3.05396 25.4658 3.05396 26.0697 3.35036 26.6924C3.51941 27.0476 3.90441 27.5308 4.21289 27.7749C4.75375 28.2028 5.20512 28.3062 6.10786 28.513C7.51218 28.8346 9.06111 29.0129 10.6887 29.0129ZM18.3235 19.8512C20.4318 19.8512 22.1409 18.1421 22.1409 16.0338C22.1409 13.9255 20.4318 12.2164 18.3235 12.2164C16.2152 12.2164 14.5061 13.9255 14.5061 16.0338C14.5061 18.1421 16.2152 19.8512 18.3235 19.8512Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.3234 11.0699C15.5826 11.0699 13.3608 13.2918 13.3608 16.0325C13.3608 18.7733 15.5826 20.9951 18.3234 20.9951C21.0641 20.9951 23.2859 18.7733 23.2859 16.0325C23.2859 13.2918 21.0641 11.0699 18.3234 11.0699ZM15.6512 16.0325C15.6512 14.5567 16.8476 13.3604 18.3234 13.3604C19.7991 13.3604 20.9955 14.5567 20.9955 16.0325C20.9955 17.5083 19.7991 18.7047 18.3234 18.7047C16.8476 18.7047 15.6512 17.5083 15.6512 16.0325Z"
            fill="white"
          />
          <path
            d="M8.39816 16.0325C9.24147 16.0325 9.92511 16.7162 9.92511 17.5595V17.5732C9.92511 18.4165 9.24147 19.1001 8.39816 19.1001C7.55484 19.1001 6.8712 18.4165 6.8712 17.5732V17.5595C6.8712 16.7162 7.55484 16.0325 8.39816 16.0325Z"
            fill="white"
          />
          <path
            d="M29.7755 14.4936C29.7755 13.6503 29.0919 12.9667 28.2485 12.9667C27.4052 12.9667 26.7216 13.6503 26.7216 14.4936V14.5074C26.7216 15.3507 27.4052 16.0343 28.2485 16.0343C29.0919 16.0343 29.7755 15.3507 29.7755 14.5074V14.4936Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.8387 3.54275C20.0486 2.51065 22.8913 1.9082 25.9581 1.9082C27.6681 1.9082 29.3029 2.09536 30.7947 2.43703L30.8838 2.4574C31.7189 2.64816 32.3992 2.80355 33.1446 3.39337C33.5905 3.74622 34.0862 4.36824 34.3306 4.8817C34.7401 5.74209 34.7392 6.59327 34.7382 7.64715L34.7381 24.2567C34.7381 26.6498 32.3087 28.0379 30.2833 27.5739C28.9664 27.2723 27.5034 27.1029 25.9581 27.1029C23.1705 27.1029 20.6676 27.6538 18.808 28.5223C16.5982 29.5544 13.7555 30.1568 10.6886 30.1568C8.97866 30.1568 7.34379 29.9697 5.85206 29.628L5.76294 29.6076C4.92786 29.4169 4.24757 29.2615 3.50216 28.6717C3.05622 28.3188 2.56056 27.6968 2.31618 27.1833C1.90667 26.3229 1.90749 25.4718 1.90852 24.4179L1.90862 7.80831C1.90862 5.41528 4.33801 4.02719 6.36343 4.4911C7.68033 4.79273 9.14332 4.96211 10.6886 4.96211C13.4763 4.96211 15.9791 4.41129 17.8387 3.54275ZM25.9581 4.19863C23.1705 4.19863 20.6676 4.74945 18.808 5.61799C16.5982 6.65009 13.7555 7.25254 10.6886 7.25254C8.97866 7.25254 7.34379 7.06539 5.85206 6.72371C4.94582 6.51614 4.19905 7.19375 4.19905 7.80831V24.2567C4.19905 25.5432 4.22167 25.8573 4.38431 26.199C4.47803 26.3959 4.75237 26.7402 4.92338 26.8755C5.23335 27.1208 5.43414 27.1826 6.36343 27.3954C7.68033 27.697 9.14332 27.8664 10.6886 27.8664C13.4763 27.8664 15.9791 27.3156 17.8387 26.447C20.0486 25.4149 22.8913 24.8125 25.9581 24.8125C27.6681 24.8125 29.3029 24.9997 30.7947 25.3413C31.7009 25.5489 32.4477 24.8713 32.4477 24.2567V7.80831C32.4477 6.52187 32.4251 6.20774 32.2624 5.86605C32.1687 5.66913 31.8944 5.32485 31.7233 5.18953C31.4134 4.94426 31.2126 4.88249 30.2833 4.66965C28.9664 4.36802 27.5034 4.19863 25.9581 4.19863Z"
            fill="white"
          />
          <path
            d="M10.6886 32.4473C7.9009 32.4473 5.39806 31.8964 3.53843 31.0279C2.96537 30.7603 2.28384 31.0078 2.01619 31.5809C1.74854 32.154 1.99613 32.8355 2.56919 33.1032C4.77902 34.1353 7.6217 34.7377 10.6886 34.7377C13.7555 34.7377 16.5981 34.1353 18.808 33.1032C20.6676 32.2346 23.1704 31.6838 25.9581 31.6838C28.7458 31.6838 31.2486 32.2346 33.1083 33.1032C33.6813 33.3708 34.3628 33.1232 34.6305 32.5502C34.8981 31.9771 34.6506 31.2956 34.0775 31.0279C31.8677 29.9958 29.025 29.3934 25.9581 29.3934C22.8912 29.3934 20.0485 29.9958 17.8387 31.0279C15.9791 31.8964 13.4763 32.4473 10.6886 32.4473Z"
            fill="white"
          />
        </g>
      </svg>
    ),
    borderGradient:
      "linear-gradient(90deg, rgba(160,30,100,1) 0%, rgba(129,74,152,1) 38%, rgba(0,58,93,1) 68%, rgba(0,167,162,1) 100%)",
    backgroundColor: "rgba(0, 167, 162, .32)",
    pattern: "/investment-opportunities/hero/image.png",
  },
  {
    value: "4,100",
    label: "Opportunities",
    icon: (
      <svg
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3">
          <path
            opacity="0.4"
            d="M19.6554 8.86381C18.587 9.42829 16.9843 9.28699 15.3816 7.59352C14.5375 6.70164 14.0293 6.21533 13.1217 6.11944C11.1487 8.05865 9.92505 10.7579 9.92505 13.7429C9.92505 19.6407 14.7018 24.4228 20.5975 24.4316C19.9738 23.8208 20.116 22.4845 20.2651 21.8927C20.6357 21.2555 20.8333 20.9157 20.9387 20.5493C21.059 20.1309 21.059 19.6778 21.059 18.7072C21.059 16.8868 22.1407 16.0334 25.9581 16.7968C26.9142 16.9881 27.4897 16.592 28.1241 16.1554C28.6024 15.8602 29.886 15.2699 31.1941 15.2699C31.2655 14.7712 31.3024 14.2614 31.3024 13.7429C31.3024 8.5254 27.564 4.18101 22.6197 3.24219C23.1652 4.24704 22.9454 5.44339 21.7924 5.90024C20.8082 6.29022 20.7076 6.85162 20.6059 7.41958C20.5132 7.93712 20.4196 8.46011 19.6554 8.86381Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.4476 13.7421C32.4476 7.20642 27.1494 1.9082 20.6137 1.9082C14.078 1.9082 8.77983 7.20642 8.77983 13.7421C8.77983 20.2778 14.078 25.576 20.6137 25.576C27.1494 25.576 32.4476 20.2778 32.4476 13.7421ZM24.0052 4.81881C27.6016 6.18645 30.1572 9.66582 30.1572 13.7421C30.1572 13.875 30.1545 14.0072 30.1491 14.1388C28.8882 14.2371 28.074 14.7983 27.4986 15.1948L27.447 15.2303C26.8344 15.6518 26.6192 15.7603 26.1827 15.673C24.2509 15.2867 22.7031 15.2313 21.5966 15.7427C20.9941 16.0211 20.5431 16.4575 20.2621 17.0229C19.9946 17.5612 19.9138 18.1497 19.9138 18.7063C19.9138 19.6797 19.9055 19.9642 19.8486 20.1928C19.7974 20.3982 19.7012 20.5834 19.2751 21.3162C19.0017 21.7864 18.7185 22.4029 18.7055 23.0947C14.3492 22.2107 11.0703 18.3593 11.0703 13.7421C11.0703 11.3098 11.9802 9.08999 13.4782 7.40456C13.7332 7.55061 14.0313 7.83218 14.5496 8.37976C16.4059 10.3412 18.5505 10.7417 20.1902 9.87544C20.7832 9.56214 21.1819 9.15025 21.4268 8.65593C21.6215 8.26321 21.6931 7.85111 21.7335 7.61919L21.746 7.54839C21.7942 7.28365 21.8225 7.22386 21.8449 7.18998C21.8522 7.17863 21.9139 7.08287 22.214 6.96397C23.176 6.5828 23.7932 5.82542 23.9853 4.92144C23.9925 4.88728 23.9992 4.85306 24.0052 4.81881ZM28.7451 17.1174C29.1073 16.8682 29.4013 16.668 29.7387 16.5459C28.5806 20.3191 25.1466 23.0965 21.0381 23.2763C21.0337 23.2696 21.03 23.2636 21.0268 23.2582C21.0038 23.2189 20.9972 23.1907 20.9957 23.1576C20.9914 23.0593 21.0336 22.8485 21.2551 22.4676L21.3133 22.3676C21.6545 21.7819 21.9316 21.3063 22.071 20.7467C22.205 20.2091 22.2047 19.6196 22.2043 18.8394L22.2042 18.7063C22.2042 18.3528 22.2587 18.152 22.3132 18.0422C22.3543 17.9595 22.4124 17.8888 22.5574 17.8218C22.9461 17.6422 23.8479 17.5419 25.7335 17.919C27.1644 18.2052 28.0897 17.5684 28.7233 17.1324L28.7451 17.1174ZM21.7575 4.26646C21.3825 4.22167 21.0008 4.19863 20.6137 4.19863C18.6205 4.19863 16.77 4.80969 15.2393 5.85469C15.5796 6.1374 15.8912 6.46521 16.2131 6.80537C17.5622 8.23085 18.6229 8.113 19.1202 7.85026C19.3235 7.7429 19.3608 7.66693 19.3737 7.64074L19.3746 7.63885C19.4152 7.55692 19.4322 7.46932 19.4926 7.1377C19.5432 6.86056 19.631 6.38481 19.9352 5.92544C20.2569 5.43966 20.7371 5.08551 21.3703 4.8346C21.6343 4.73 21.7155 4.58356 21.7449 4.44547C21.7558 4.39417 21.7608 4.33382 21.7575 4.26646Z"
            fill="white"
          />
          <path
            d="M17.9416 29.942C10.153 28.6761 4.19897 21.9685 4.19897 13.8681C4.19897 9.30853 6.08825 5.18642 9.12674 2.23231C9.58023 1.79142 10.3053 1.80162 10.7462 2.25511C11.1871 2.7086 11.1768 3.43364 10.7234 3.87453C8.10796 6.41729 6.4894 9.95514 6.4894 13.8681C6.4894 21.5902 12.8041 27.8664 20.6137 27.8664C24.4667 27.8664 27.9559 26.339 30.5041 23.8616C30.9576 23.4207 31.6826 23.4309 32.1235 23.8844C32.5644 24.3379 32.5542 25.063 32.1007 25.5038C29.1404 28.382 25.084 30.1568 20.6137 30.1568C20.4861 30.1568 20.3589 30.1554 20.232 30.1525V32.4473H22.1407C22.7732 32.4473 23.2859 32.96 23.2859 33.5925C23.2859 34.225 22.7732 34.7377 22.1407 34.7377H16.0329C15.4004 34.7377 14.8876 34.225 14.8876 33.5925C14.8876 32.96 15.4004 32.4473 16.0329 32.4473H17.9416V29.942Z"
            fill="white"
          />
        </g>
      </svg>
    ),
    borderGradient:
      "linear-gradient(90deg, rgba(160,30,100,1) 0%, rgba(129,74,152,1) 38%, rgba(0,58,93,1) 68%, rgba(0,167,162,1) 100%)",
    backgroundColor: "rgba(129, 74, 152, 0.32)",
    pattern: "/investment-opportunities/hero/image.png",
  },
  {
    value: "13",
    label: "Regions",
    icon: (
      <svg
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3">
          <path
            opacity="0.4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.3251 33.5938C19.2463 33.5938 20.1314 33.2472 20.7936 32.6271C21.256 32.1942 21.7301 31.757 22.2098 31.3148C28.0362 25.9426 34.6786 19.8181 31.0215 11.2692C28.8786 6.26 23.7347 3.05469 18.3251 3.05469C12.9154 3.05469 7.77158 6.26 5.62871 11.2692C1.98641 19.7834 8.55547 25.8625 14.3504 31.2251C14.861 31.6976 15.3655 32.1646 15.8566 32.6271C16.5188 33.2472 17.4039 33.5938 18.3251 33.5938ZM18.3234 22.1416C21.275 22.1416 23.6677 19.7489 23.6677 16.7973C23.6677 13.8457 21.275 11.4529 18.3234 11.4529C15.3718 11.4529 12.9791 13.8457 12.9791 16.7973C12.9791 19.7489 15.3718 22.1416 18.3234 22.1416Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.3238 10.3064C14.7398 10.3064 11.8343 13.2119 11.8343 16.796C11.8343 20.3801 14.7398 23.2855 18.3238 23.2855C21.9079 23.2855 24.8134 20.3801 24.8134 16.796C24.8134 13.2119 21.9079 10.3064 18.3238 10.3064ZM14.1247 16.796C14.1247 14.4769 16.0047 12.5969 18.3238 12.5969C20.643 12.5969 22.523 14.4769 22.523 16.796C22.523 19.1151 20.643 20.9951 18.3238 20.9951C16.0047 20.9951 14.1247 19.1151 14.1247 16.796Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.3254 1.9082C12.4831 1.9082 6.9092 5.36374 4.57614 10.8175C2.40488 15.893 3.58031 20.2123 6.02763 23.9109C8.03414 26.9433 10.9607 29.6496 13.6009 32.0912C14.1043 32.5567 14.5975 33.0128 15.0717 33.4595L15.0742 33.4619C15.9523 34.2839 17.1186 34.7377 18.3254 34.7377C19.5323 34.7377 20.6986 34.2839 21.5767 33.4619C22.0249 33.0422 22.4895 32.6141 22.9635 32.1774C25.6324 29.7182 28.6001 26.9839 30.6276 23.9129C33.072 20.2105 34.2433 15.8867 32.0747 10.8175C29.7417 5.36374 24.1678 1.9082 18.3254 1.9082ZM6.68198 11.7183C8.63467 7.15372 13.3485 4.19863 18.3254 4.19863C23.3024 4.19863 28.0162 7.15372 29.9689 11.7183C31.7586 15.9018 30.8555 19.4107 28.7162 22.651C26.8571 25.4669 24.1337 27.9797 21.4566 30.4498C20.9715 30.8974 20.4879 31.3435 20.0113 31.7899C19.5648 32.2078 18.9609 32.4473 18.3254 32.4473C17.6905 32.4473 17.087 32.2082 16.6406 31.7908C16.133 31.3127 15.6174 30.8351 15.1003 30.3563C12.4573 27.9088 9.7771 25.4267 7.93776 22.647C5.79641 19.4108 4.89002 15.9072 6.68198 11.7183Z"
            fill="white"
          />
        </g>
      </svg>
    ),
    borderGradient:
      "linear-gradient(90deg, rgba(160,30,100,1) 0%, rgba(129,74,152,1) 38%, rgba(0,58,93,1) 68%, rgba(0,167,162,1) 100%)",
    backgroundColor: "rgba(160, 30, 100, 0.32)",
    pattern: "/investment-opportunities/hero/image.png",
  },
];

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id={hero.sectionId}
      className="relative min-h-screen flex items-end overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={hero.backgroundImage.src}
          alt={hero.backgroundImage.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#003A3900] to-[#003A39]"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 md:px-12 lg:px-12 pb-8 sm:pb-12 md:pb-20 lg:pb-[8vh]">
        {/* Content */}
        <div className="max-w-4xl mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl bukra-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight sm:leading-snug tracking-wide">
            {t(hero.content.titleKey)}
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] bukra-regular text-white/90 leading-relaxed">
            {t(hero.content.subtitleKey)}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:justify-between md:items-end">
          {/* Highlight cards */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            {highlightCards.map(
              ({
                value,
                label,
                icon,
                backgroundColor,
              }) => {
                return (
                  <div
                    key={label}
                    className="border border-white/20 relative overflow-hidden flex flex-col gap-2 sm:gap-3 rounded-[17px] px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6 backdrop-blur-3xl w-full sm:min-w-[180px] md:min-w-[200px] lg:min-w-[220px]"
                    style={{
                      background: `linear-gradient(to right, ${backgroundColor})`,
                    }}
                  >
                    {/* Background image */}
                    <div className="absolute h-full w-[80%] top-0 right-0 opacity-50 sm:opacity-100">
                      <img
                        src="/investment-opportunities/hero/image.png"
                        alt={label}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative z-10 flex items-start justify-between">
                      <div>
                        <span className="bukra-bold text-2xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-white">
                          {value}
                        </span>
                      </div>
                      {icon && (
                        <span className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center shrink-0">
                          {icon}
                        </span>
                      )}
                    </div>
                    <p className="relative z-10 bukra-regular text-xs sm:text-sm md:text-base lg:text-[17.25px] text-white/90">
                      {label}
                    </p>
                  </div>
                );
              }
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            {hero.actions.map((key) => (
              <button
                key={key}
                className="bg-black/40 flex justify-between gap-3 items-center px-4 sm:px-5 py-2.5 sm:py-3 rounded-4xl border border-white/40 text-white text-sm sm:text-base hover:bg-white/10 transition-colors w-full sm:w-auto"
              >
                <span className="bukra-regular">{t(key)}</span>
                <BsArrowUpRight className="size-4 shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
