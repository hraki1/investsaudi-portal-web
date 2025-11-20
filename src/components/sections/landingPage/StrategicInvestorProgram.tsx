
import { ImArrowUpRight2 } from "react-icons/im";
import { IoArrowForwardOutline } from "react-icons/io5";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { fadeUp } from "@/animations/motionVariants";

export default function StrategicInvestorProgram() {
  const keyMetrics = [
    {
      title: "Dedicated Relationship Manager",
      description:
        "A single, direct point of contact for all queries, services and support.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M22.1133 11.707H15.1758C10.8711 11.707 9.97266 12.6054 9.97266 16.9102V35.9883H27.3164V16.9102C27.3164 12.6054 26.418 11.707 22.1133 11.707Z"
            fill="url(#paint0_linear_19926_1063)"
          />
          <path
            d="M15.6094 18.6443C15.6094 17.9259 16.1918 17.3435 16.9102 17.3435H20.3789C21.0973 17.3435 21.6797 17.9259 21.6797 18.6443C21.6797 19.3627 21.0973 19.9451 20.3789 19.9451H16.9102C16.1918 19.9451 15.6094 19.3627 15.6094 18.6443Z"
            fill="url(#paint1_linear_19926_1063)"
          />
          <path
            d="M15.6094 23.8474C15.6094 23.129 16.1918 22.5467 16.9102 22.5467H20.3789C21.0973 22.5467 21.6797 23.129 21.6797 23.8474C21.6797 24.5658 21.0973 25.1482 20.3789 25.1482H16.9102C16.1918 25.1482 15.6094 24.5658 15.6094 23.8474Z"
            fill="url(#paint2_linear_19926_1063)"
          />
          <path
            d="M15.6094 29.0506C15.6094 28.3322 16.1918 27.7498 16.9102 27.7498H20.3789C21.0973 27.7498 21.6797 28.3322 21.6797 29.0506C21.6797 29.769 21.0973 30.3513 20.3789 30.3513H16.9102C16.1918 30.3513 15.6094 29.769 15.6094 29.0506Z"
            fill="url(#paint3_linear_19926_1063)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.30078 34.6873C0.58238 34.6873 0 35.2697 0 35.9881C0 36.7065 0.58238 37.2888 1.30078 37.2888H35.9883C36.7067 37.2888 37.2891 36.7065 37.2891 35.9881C37.2891 35.2697 36.7067 34.6873 35.9883 34.6873H35.5547V11.9656C35.5547 10.9542 35.5547 10.0996 35.4833 9.39409C35.4075 8.64525 35.2433 7.95573 34.8487 7.30376C34.4531 6.65016 33.9191 6.18804 33.2916 5.78027C32.703 5.39784 31.9519 5.01438 31.0679 4.56302L23.4804 0.688966C22.951 0.418635 22.4274 0.189106 21.9377 0.0770749C21.4523 -0.0339601 20.7845 -0.0775768 20.1724 0.31853C19.5715 0.707458 19.3314 1.32372 19.2214 1.79464C19.1085 2.27792 19.0781 2.84305 19.0781 3.4316V10.406H15.1758C14.0714 10.406 13.0962 10.4619 12.2676 10.644C11.4243 10.8292 10.6521 11.1624 10.0402 11.7743C9.42826 12.3862 9.09507 13.1585 8.90981 14.0018C8.72778 14.8304 8.67187 15.8056 8.67187 16.9099V17.3435H4.76953C4.38265 17.3435 3.98296 17.362 3.61408 17.443C3.23047 17.5273 2.80213 17.696 2.44446 18.0536C2.0868 18.4113 1.91816 18.8396 1.83388 19.2232C1.75285 19.5921 1.73437 19.9918 1.73437 20.3787V34.6873H1.30078ZM4.33594 34.6873V20.3787C4.33594 20.1953 4.34177 20.0596 4.35037 19.9595C4.45042 19.9509 4.58617 19.9451 4.76953 19.9451H8.67187V34.6873H4.33594ZM11.2734 34.6873V16.9099C11.2734 15.8619 11.3298 15.1106 11.4508 14.56C11.5685 14.0242 11.7289 13.7647 11.8797 13.6139C12.0305 13.4631 12.29 13.3027 12.8258 13.1849C13.3764 13.064 14.1278 13.0076 15.1758 13.0076H22.1133C23.1613 13.0076 23.9127 13.064 24.4632 13.1849C24.999 13.3027 25.2585 13.4631 25.4093 13.6139C25.5601 13.7647 25.7206 14.0242 25.8383 14.56C25.9592 15.1106 26.0156 15.8619 26.0156 16.9099V34.6873H11.2734ZM28.6172 34.6873V16.9099C28.6172 15.8056 28.5613 14.8304 28.3793 14.0018C28.194 13.1585 27.8608 12.3862 27.2489 11.7743C26.637 11.1624 25.8648 10.8292 25.0214 10.644C24.1928 10.4619 23.2176 10.406 22.1133 10.406H21.6797V3.4316C21.6797 3.13803 21.6892 2.90815 21.7049 2.72982C21.8603 2.79292 22.0552 2.8823 22.2974 3.00598L29.8274 6.85073C30.7843 7.33932 31.4129 7.6621 31.8741 7.96177C32.309 8.24436 32.5005 8.4484 32.623 8.65078C32.7465 8.8548 32.8413 9.12585 32.895 9.65616C32.9516 10.2152 32.9531 10.9374 32.9531 12.0287V34.6873H28.6172Z"
            fill="url(#paint4_linear_19926_1063)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_19926_1063"
              x1="25.4013"
              y1="12.4653"
              x2="12.2806"
              y2="16.8219"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0558172" stopColor="#E6F6F6" />
              <stop offset="1" stopColor="#ECE4F0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_19926_1063"
              x1="33.1716"
              y1="1.1645"
              x2="7.41724"
              y2="13.1365"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0558172" stopColor="#E6F6F6" />
              <stop offset="1" stopColor="#ECE4F0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_19926_1063"
              x1="33.1716"
              y1="1.1645"
              x2="7.41724"
              y2="13.1365"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0558172" stopColor="#E6F6F6" />
              <stop offset="1" stopColor="#ECE4F0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_19926_1063"
              x1="33.1716"
              y1="1.1645"
              x2="7.41724"
              y2="13.1365"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0558172" stopColor="#E6F6F6" />
              <stop offset="1" stopColor="#ECE4F0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_19926_1063"
              x1="33.1716"
              y1="1.1645"
              x2="7.41724"
              y2="13.1365"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0558172" stopColor="#E6F6F6" />
              <stop offset="1" stopColor="#ECE4F0" />
            </linearGradient>
          </defs>
        </svg>
      ),
      iconBg: " bg-gradient-to-b from-[#00A7A2] to-[#00413F]",
      gradientTo: "#009692",
    },
    {
      title: "Business Days",
      description:
        "Estimated time for processing TPN for new companies and projects.",
      icon: (
        <svg
          width="35"
          height="35"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.2187 22.9877C31.2187 17.0567 31.2187 14.0913 29.1868 12.2488C27.1549 10.4062 23.8845 10.4062 17.3437 10.4062C10.803 10.4062 7.53264 10.4062 5.5007 12.2488C3.46875 14.0913 3.46875 17.0567 3.46875 22.9877V25.5748C3.46875 31.5058 3.46875 34.4712 5.5007 36.3137C7.53264 38.1562 10.803 38.1562 17.3437 38.1562C23.8845 38.1562 27.1549 38.1562 29.1868 36.3137C31.2187 34.4712 31.2187 31.5058 31.2187 25.5748V22.9877ZM19.7632 20.8076L18.5423 18.3456C17.8833 17.0098 16.8012 17.0098 16.1353 18.3456L14.9144 20.8076C14.7479 21.1503 14.304 21.479 13.9363 21.5419L11.7235 21.9126C10.3084 22.1504 9.98237 23.1855 10.9951 24.2067L12.7154 25.9412C13.0068 26.2349 13.1663 26.8015 13.0762 27.2071L12.5836 29.3543C12.1952 31.0469 13.097 31.7113 14.5814 30.823L16.6555 29.5851C17.037 29.3613 17.6544 29.3613 18.029 29.5851L20.1031 30.823C21.5945 31.7113 22.4893 31.0539 22.1008 29.3543L21.6083 27.2071C21.5182 26.8015 21.6777 26.2349 21.969 25.9412L23.6894 24.2067C24.7091 23.1855 24.3761 22.1504 22.961 21.9126L20.7482 21.5419C20.3736 21.479 19.9296 21.1503 19.7632 20.8076Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.3428 16.043C18.508 16.043 19.2884 16.9159 19.7095 17.7686L19.7103 17.7702L20.9166 20.2027L20.9266 20.2123C20.9349 20.2199 20.9447 20.228 20.9555 20.236C20.9663 20.2441 20.9769 20.2511 20.9868 20.2571L21.0012 20.2652L23.178 20.6298C24.1149 20.7873 25.1342 21.2894 25.479 22.3708C25.8232 23.4505 25.2851 24.4502 24.6128 25.1242L24.6112 25.1258L22.9189 26.8322C22.913 26.8444 22.9052 26.8633 22.8984 26.8875C22.8907 26.9143 22.8872 26.9373 22.8859 26.9524L23.3703 29.0645C23.5889 30.0208 23.6099 31.3493 22.5787 32.1072C21.5422 32.8691 20.2794 32.4412 19.4378 31.94L17.397 30.7219L17.384 30.7201C17.3728 30.7188 17.36 30.718 17.3463 30.718C17.3325 30.718 17.3194 30.7188 17.3076 30.7202C17.3 30.721 17.2935 30.7221 17.2884 30.723L15.2502 31.9396C14.4057 32.4448 13.1459 32.8658 12.1108 32.1042C11.082 31.3474 11.097 30.0231 11.3172 29.0633L11.8014 26.9524C11.8002 26.9373 11.7966 26.9143 11.789 26.8875C11.7821 26.8633 11.7744 26.8444 11.7685 26.8322L10.073 25.1227C9.40481 24.449 8.86896 23.4506 9.21021 22.3731C9.55302 21.2907 10.5718 20.7874 11.51 20.6297L13.6794 20.2663L13.6917 20.2592C13.7016 20.2532 13.7124 20.246 13.7233 20.2378C13.7343 20.2296 13.7442 20.2214 13.7527 20.2136L13.7636 20.2032L14.9725 17.7653C15.3969 16.914 16.1793 16.043 17.3428 16.043ZM16.083 21.3818L17.3008 18.926C17.3141 18.8993 17.3277 18.8735 17.3405 18.8504C17.3525 18.8723 17.3647 18.8959 17.3772 18.9211L17.3784 18.9236L18.5974 21.3818C18.7962 21.788 19.1091 22.1049 19.4026 22.3233C19.6979 22.543 20.0917 22.7504 20.5347 22.8248L22.7475 23.1955C22.781 23.2012 22.8118 23.2073 22.84 23.2137C22.8194 23.2369 22.7963 23.2615 22.7703 23.2875L22.7672 23.2907L21.0469 25.0252C20.7074 25.3675 20.5037 25.7967 20.3957 26.1769C20.2875 26.558 20.2369 27.0258 20.3399 27.4894L20.8344 29.6451C20.8432 29.6838 20.8509 29.7206 20.8574 29.7555C20.8297 29.7403 20.8001 29.7233 20.7701 29.7055L18.6971 28.4681C18.2594 28.2068 17.7657 28.1165 17.3463 28.1165C16.9255 28.1165 16.4348 28.2073 15.9987 28.4631L13.9149 29.7068C13.8854 29.7245 13.857 29.7408 13.8297 29.7559C13.8363 29.7209 13.844 29.6839 13.8529 29.6451L14.3455 27.4979L14.3474 27.4894C14.4504 27.0258 14.3998 26.558 14.2916 26.1769C14.1837 25.7967 13.9799 25.3675 13.6404 25.0252L11.9201 23.2907C11.8931 23.2635 11.8692 23.2377 11.848 23.2135C11.876 23.2072 11.9073 23.201 11.9405 23.1954L14.1526 22.8248L14.1572 22.8241C14.5981 22.7486 14.989 22.5398 15.2811 22.3215C15.572 22.1039 15.8843 21.7876 16.083 21.3818Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.1916 2.16797H24.371C27.5654 2.16795 30.0832 2.16793 32.0511 2.40784C34.0628 2.65309 35.6972 3.16793 36.9982 4.34764C38.3174 5.54385 38.91 7.07476 39.189 8.95676C39.4572 10.7652 39.4571 13.0688 39.4571 15.9445V18.7429C39.4571 21.6186 39.4572 23.9223 39.189 25.7307C38.91 27.6127 38.3174 29.1437 36.9982 30.3399C35.7552 31.4669 34.206 31.9886 32.3096 32.2464C32.2922 32.3899 32.2733 32.5305 32.2529 32.6682C31.9738 34.5502 31.3812 36.0812 30.062 37.2774C28.761 38.4571 27.1266 38.9719 25.1149 39.2172C23.147 39.4571 20.6292 39.457 17.4349 39.457H17.2554C14.0611 39.457 11.5433 39.4571 9.57542 39.2172C7.56371 38.9719 5.92933 38.4571 4.62833 37.2774C3.30913 36.0812 2.71648 34.5502 2.43744 32.6682C2.1693 30.8598 2.16933 28.5562 2.16937 25.6805V22.8821C2.16933 20.0063 2.1693 17.7027 2.43744 15.8943C2.71648 14.0123 3.30913 12.4813 4.62833 11.2851C5.87311 10.1564 7.42308 9.63633 9.31673 9.37868C9.5688 7.30636 10.1453 5.63449 11.5645 4.34764C12.8655 3.16793 14.4999 2.65309 16.5116 2.40784C18.4795 2.16793 20.9973 2.16795 24.1916 2.16797ZM35.2506 28.4126C34.6288 28.9765 33.8019 29.3534 32.4871 29.5862C32.521 28.4218 32.521 27.1232 32.5209 25.6805V22.882C32.521 20.0063 32.521 17.7026 32.2529 15.8943C31.9738 14.0123 31.3812 12.4813 30.062 11.2851C28.761 10.1054 27.1266 9.59059 25.1149 9.34534C23.147 9.10543 20.6292 9.10545 17.4349 9.10547H17.2555C15.235 9.10546 13.4851 9.10545 11.9739 9.16615C12.2091 7.72473 12.6288 6.89446 13.312 6.27487C14.043 5.61207 15.0598 5.20566 16.8264 4.99029C18.6185 4.77181 20.9775 4.76953 24.2813 4.76953C27.5851 4.76953 29.9442 4.77181 31.7362 4.99029C33.5029 5.20566 34.5197 5.61207 35.2506 6.27487C35.9634 6.92117 36.3867 7.79424 36.6156 9.33833C36.8522 10.9339 36.8555 13.0443 36.8555 16.0502V18.6373C36.8555 21.6432 36.8522 23.7536 36.6156 25.3492C36.3867 26.8933 35.9634 27.7663 35.2506 28.4126ZM9.89025 11.9278C8.1236 12.1432 7.10682 12.5496 6.37588 13.2124C5.66313 13.8587 5.23981 14.7317 5.01086 16.2758C4.77428 17.8714 4.77094 19.9818 4.77094 22.9877V25.5748C4.77094 28.5807 4.77428 30.6911 5.01086 32.2867C5.23981 33.8308 5.66313 34.7038 6.37588 35.3501C7.10682 36.0129 8.1236 36.4193 9.89025 36.6347C11.6823 36.8532 14.0414 36.8555 17.3452 36.8555C20.649 36.8555 23.008 36.8532 24.8001 36.6347C26.5667 36.4193 27.5835 36.0129 28.3144 35.3501C29.0272 34.7038 29.4505 33.8308 29.6795 32.2867C29.916 30.6911 29.9194 28.5807 29.9194 25.5748V22.9877C29.9194 19.9818 29.916 17.8714 29.6795 16.2758C29.4505 14.7317 29.0272 13.8587 28.3144 13.2124C27.5835 12.5496 26.5667 12.1432 24.8001 11.9278C23.008 11.7093 20.649 11.707 17.3452 11.707C14.0414 11.707 11.6823 11.7093 9.89025 11.9278Z"
            fill="white"
          />
        </svg>
      ),
      iconBg: " bg-gradient-to-b from-[#814A98] to-[#2A1832]",
      gradientTo: "#814A89",
    },
    {
      title: "Foreign Ownership",
      description:
        "100% foreign ownership for companies operating in most sectors.",
      icon: (
        <svg
          width="35"
          height="35"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.2187 22.9877C31.2187 17.0567 31.2187 14.0913 29.1868 12.2488C27.1549 10.4062 23.8845 10.4062 17.3437 10.4062C10.803 10.4062 7.53264 10.4062 5.5007 12.2488C3.46875 14.0913 3.46875 17.0567 3.46875 22.9877V25.5748C3.46875 31.5058 3.46875 34.4712 5.5007 36.3137C7.53264 38.1562 10.803 38.1562 17.3437 38.1562C23.8845 38.1562 27.1549 38.1562 29.1868 36.3137C31.2187 34.4712 31.2187 31.5058 31.2187 25.5748V22.9877ZM19.7632 20.8076L18.5423 18.3456C17.8833 17.0098 16.8012 17.0098 16.1353 18.3456L14.9144 20.8076C14.7479 21.1503 14.304 21.479 13.9363 21.5419L11.7235 21.9126C10.3084 22.1504 9.98237 23.1855 10.9951 24.2067L12.7154 25.9412C13.0068 26.2349 13.1663 26.8015 13.0762 27.2071L12.5836 29.3543C12.1952 31.0469 13.097 31.7113 14.5814 30.823L16.6555 29.5851C17.037 29.3613 17.6544 29.3613 18.029 29.5851L20.1031 30.823C21.5945 31.7113 22.4893 31.0539 22.1008 29.3543L21.6083 27.2071C21.5182 26.8015 21.6777 26.2349 21.969 25.9412L23.6894 24.2067C24.7091 23.1855 24.3761 22.1504 22.961 21.9126L20.7482 21.5419C20.3736 21.479 19.9296 21.1503 19.7632 20.8076Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.3428 16.043C18.508 16.043 19.2884 16.9159 19.7095 17.7686L19.7103 17.7702L20.9166 20.2027L20.9266 20.2123C20.9349 20.2199 20.9447 20.228 20.9555 20.236C20.9663 20.2441 20.9769 20.2511 20.9868 20.2571L21.0012 20.2652L23.178 20.6298C24.1149 20.7873 25.1342 21.2894 25.479 22.3708C25.8232 23.4505 25.2851 24.4502 24.6128 25.1242L24.6112 25.1258L22.9189 26.8322C22.913 26.8444 22.9052 26.8633 22.8984 26.8875C22.8907 26.9143 22.8872 26.9373 22.8859 26.9524L23.3703 29.0645C23.5889 30.0208 23.6099 31.3493 22.5787 32.1072C21.5422 32.8691 20.2794 32.4412 19.4378 31.94L17.397 30.7219L17.384 30.7201C17.3728 30.7188 17.36 30.718 17.3463 30.718C17.3325 30.718 17.3194 30.7188 17.3076 30.7202C17.3 30.721 17.2935 30.7221 17.2884 30.723L15.2502 31.9396C14.4057 32.4448 13.1459 32.8658 12.1108 32.1042C11.082 31.3474 11.097 30.0231 11.3172 29.0633L11.8014 26.9524C11.8002 26.9373 11.7966 26.9143 11.789 26.8875C11.7821 26.8633 11.7744 26.8444 11.7685 26.8322L10.073 25.1227C9.40481 24.449 8.86896 23.4506 9.21021 22.3731C9.55302 21.2907 10.5718 20.7874 11.51 20.6297L13.6794 20.2663L13.6917 20.2592C13.7016 20.2532 13.7124 20.246 13.7233 20.2378C13.7343 20.2296 13.7442 20.2214 13.7527 20.2136L13.7636 20.2032L14.9725 17.7653C15.3969 16.914 16.1793 16.043 17.3428 16.043ZM16.083 21.3818L17.3008 18.926C17.3141 18.8993 17.3277 18.8735 17.3405 18.8504C17.3525 18.8723 17.3647 18.8959 17.3772 18.9211L17.3784 18.9236L18.5974 21.3818C18.7962 21.788 19.1091 22.1049 19.4026 22.3233C19.6979 22.543 20.0917 22.7504 20.5347 22.8248L22.7475 23.1955C22.781 23.2012 22.8118 23.2073 22.84 23.2137C22.8194 23.2369 22.7963 23.2615 22.7703 23.2875L22.7672 23.2907L21.0469 25.0252C20.7074 25.3675 20.5037 25.7967 20.3957 26.1769C20.2875 26.558 20.2369 27.0258 20.3399 27.4894L20.8344 29.6451C20.8432 29.6838 20.8509 29.7206 20.8574 29.7555C20.8297 29.7403 20.8001 29.7233 20.7701 29.7055L18.6971 28.4681C18.2594 28.2068 17.7657 28.1165 17.3463 28.1165C16.9255 28.1165 16.4348 28.2073 15.9987 28.4631L13.9149 29.7068C13.8854 29.7245 13.857 29.7408 13.8297 29.7559C13.8363 29.7209 13.844 29.6839 13.8529 29.6451L14.3455 27.4979L14.3474 27.4894C14.4504 27.0258 14.3998 26.558 14.2916 26.1769C14.1837 25.7967 13.9799 25.3675 13.6404 25.0252L11.9201 23.2907C11.8931 23.2635 11.8692 23.2377 11.848 23.2135C11.876 23.2072 11.9073 23.201 11.9405 23.1954L14.1526 22.8248L14.1572 22.8241C14.5981 22.7486 14.989 22.5398 15.2811 22.3215C15.572 22.1039 15.8843 21.7876 16.083 21.3818Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.1916 2.16797H24.371C27.5654 2.16795 30.0832 2.16793 32.0511 2.40784C34.0628 2.65309 35.6972 3.16793 36.9982 4.34764C38.3174 5.54385 38.91 7.07476 39.189 8.95676C39.4572 10.7652 39.4571 13.0688 39.4571 15.9445V18.7429C39.4571 21.6186 39.4572 23.9223 39.189 25.7307C38.91 27.6127 38.3174 29.1437 36.9982 30.3399C35.7552 31.4669 34.206 31.9886 32.3096 32.2464C32.2922 32.3899 32.2733 32.5305 32.2529 32.6682C31.9738 34.5502 31.3812 36.0812 30.062 37.2774C28.761 38.4571 27.1266 38.9719 25.1149 39.2172C23.147 39.4571 20.6292 39.457 17.4349 39.457H17.2554C14.0611 39.457 11.5433 39.4571 9.57542 39.2172C7.56371 38.9719 5.92933 38.4571 4.62833 37.2774C3.30913 36.0812 2.71648 34.5502 2.43744 32.6682C2.1693 30.8598 2.16933 28.5562 2.16937 25.6805V22.8821C2.16933 20.0063 2.1693 17.7027 2.43744 15.8943C2.71648 14.0123 3.30913 12.4813 4.62833 11.2851C5.87311 10.1564 7.42308 9.63633 9.31673 9.37868C9.5688 7.30636 10.1453 5.63449 11.5645 4.34764C12.8655 3.16793 14.4999 2.65309 16.5116 2.40784C18.4795 2.16793 20.9973 2.16795 24.1916 2.16797ZM35.2506 28.4126C34.6288 28.9765 33.8019 29.3534 32.4871 29.5862C32.521 28.4218 32.521 27.1232 32.5209 25.6805V22.882C32.521 20.0063 32.521 17.7026 32.2529 15.8943C31.9738 14.0123 31.3812 12.4813 30.062 11.2851C28.761 10.1054 27.1266 9.59059 25.1149 9.34534C23.147 9.10543 20.6292 9.10545 17.4349 9.10547H17.2555C15.235 9.10546 13.4851 9.10545 11.9739 9.16615C12.2091 7.72473 12.6288 6.89446 13.312 6.27487C14.043 5.61207 15.0598 5.20566 16.8264 4.99029C18.6185 4.77181 20.9775 4.76953 24.2813 4.76953C27.5851 4.76953 29.9442 4.77181 31.7362 4.99029C33.5029 5.20566 34.5197 5.61207 35.2506 6.27487C35.9634 6.92117 36.3867 7.79424 36.6156 9.33833C36.8522 10.9339 36.8555 13.0443 36.8555 16.0502V18.6373C36.8555 21.6432 36.8522 23.7536 36.6156 25.3492C36.3867 26.8933 35.9634 27.7663 35.2506 28.4126ZM9.89025 11.9278C8.1236 12.1432 7.10682 12.5496 6.37588 13.2124C5.66313 13.8587 5.23981 14.7317 5.01086 16.2758C4.77428 17.8714 4.77094 19.9818 4.77094 22.9877V25.5748C4.77094 28.5807 4.77428 30.6911 5.01086 32.2867C5.23981 33.8308 5.66313 34.7038 6.37588 35.3501C7.10682 36.0129 8.1236 36.4193 9.89025 36.6347C11.6823 36.8532 14.0414 36.8555 17.3452 36.8555C20.649 36.8555 23.008 36.8532 24.8001 36.6347C26.5667 36.4193 27.5835 36.0129 28.3144 35.3501C29.0272 34.7038 29.4505 33.8308 29.6795 32.2867C29.916 30.6911 29.9194 28.5807 29.9194 25.5748V22.9877C29.9194 19.9818 29.916 17.8714 29.6795 16.2758C29.4505 14.7317 29.0272 13.8587 28.3144 13.2124C27.5835 12.5496 26.5667 12.1432 24.8001 11.9278C23.008 11.7093 20.649 11.707 17.3452 11.707C14.0414 11.707 11.6823 11.7093 9.89025 11.9278Z"
            fill="white"
          />
        </svg>
      ),
      iconBg: " bg-gradient-to-b from-[#A01E64] to-[#3A0B24] ",
      gradientTo: "#A01E64",
    },
  ];

  const pillars = [
    {
      number: "01",
      title: "Priority Services",
      description:
        "A single, direct point of contact for all f contact for all queries, services and support.",
    },
    {
      number: "02",
      title: "Incentives & Funding",
      description:
        "A single, direct point of contact for all f contact for all queries, services and support.",
    },
    {
      number: "03",
      title: "Exclusive Access",
      description:
        "A single, direct point of contact for all f contact for all queries, services and support.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      <LazyMotion features={domAnimation}>
        {/* Dark Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-b from-[#003A39] to-[#006461]">
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Dot pattern overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 2px, transparent 2px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-3 md:px-12 lg:px-16 py-16 md:py-24">
          {/* Header Section */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, margin: "-50px" }}
            variants={fadeUp}
            className="mb-12 md:mb-16"
          >
          <div className="flex items-start gap-5 md:gap-9 mb-5">
            {/* KSA Logo/Icon */}
            <div className="shrink-0 mt-2">
              <div className=" flex items-center justify-center backdrop-blur-sm relative">
                <img
                  src="/SIP/saudi-logo.png"
                  alt=""
                  className="w-32 md:w-46 lg:w-[226px] h-full object-cover"
                />
              </div>
            </div>

            {/* Title and Subtitle */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-[46px] bukra-bold text-white mb-4">
                Strategic Investor Program (SIP)
              </h2>
              <p className="text-base md:text-lg lg:text-2xl text-white/70 max-w-3xl leading-relaxed">
                Accelerate your impact. Access Saudi Arabia`s premium investor
                support system designed for global leaders and strategic
                projects.
              </p>
            </div>
          </div>
          </m.div>

          {/* Key Data & Metrics Section */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, margin: "-50px" }}
            variants={fadeUp}
            className="mb-16 md:mb-20"
          >
          <div className="relative pb-4 mb-4">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Key Data & Metrics
            </h3>
            {/* Gradient border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-white/20 via-transparent to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyMetrics.map((metric, index) => (
              <div
                key={index}
                className={`relative  backdrop-blur-3xl rounded-xl p-6  transition-all duration-300 hover:scale-[1.02]`}
                style={{
                  background: `linear-gradient(to bottom right, rgba(0,0,0,0.6) 60%, ${metric.gradientTo})`,
                }}
              >
                <div className="flex flex-col md:pb-5 items-start gap-4">
                  {/* Icon Circle */}
                  <div
                    className={`w-14 h-14 rounded-full  ${metric.iconBg} flex items-center justify-center shrink-0 text-white`}
                  >
                    {metric.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-white font-semibold md:text-lg lg:text-[28px] bukra-medium mb-2">
                      {metric.title}
                    </h4>
                    <p className="text-white/70 text-sm lg:text-lg bukra-regular leading-relaxed">
                      {metric.description}
                    </p>
                  </div>
                </div>

                {/* background iamge right up */}
                <div className="absolute top-0 right-0  w-1/2 h-2/3 overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-80"
                    style={{
                      backgroundImage: 'url("SIP/bg-card.png")',
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      backgroundPosition: "top right",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          </m.div>

          {/* Program Pillars Section */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, margin: "-50px" }}
            variants={fadeUp}
            className="mb-12"
          >
          <div className="relative pb-4 mb-8">
            <h3 className="text-xl md:text-2xl lg:text-3xl bukra-bold text-white">
              Program Pillars
            </h3>
            {/* Gradient border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-white/20 via-transparent to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
            {/* Curly Brace - Center */}
            {/* <div className="hidden  -mr-[100px] lg:flex items-center justify-center relative h-full mh-[400px] md:h-[500px] lg:h-[609px] px-4"> */}
            {/* Curly Brace SVG - Provided design */}
            {/* <svg
                width="187"
                height="614"
                viewBox="0 0 187 614"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-auto shrink-0"
                preserveAspectRatio="none"
              >
                <g filter="url(#filter0_d_19079_3737)">
                  <path
                    d="M128.36 50.3311C129.84 49.5738 131.655 50.1597 132.412 51.6396C133.169 53.1196 132.583 54.9331 131.104 55.6904C105.026 69.0339 88.6191 95.8596 88.6191 125.152V274.269C88.619 284.791 83.4762 294.11 75.5684 299.855H121.562C123.224 299.856 124.571 301.204 124.571 302.866C124.571 304.529 123.224 305.877 121.562 305.877H75.5664C83.4755 311.622 88.619 320.943 88.6191 331.466V480.582C88.6191 509.875 105.026 536.7 131.104 550.044C132.583 550.801 133.169 552.615 132.412 554.095C131.655 555.575 129.84 556.161 128.36 555.403C100.271 541.03 82.5986 512.135 82.5986 480.582V331.466C82.5985 317.334 71.1425 305.878 57.0107 305.878C55.3484 305.878 54.0002 304.53 54 302.868C54 302.66 54.0214 302.458 54.0615 302.262C54.1017 302.065 54.1608 301.875 54.2373 301.694C54.3515 301.424 54.5035 301.174 54.6875 300.951C54.8102 300.803 54.947 300.666 55.0957 300.543C55.6161 300.113 56.2834 299.856 57.0107 299.855H57.084C71.1822 299.816 82.5985 288.376 82.5986 274.269V125.152C82.5986 93.5995 100.271 64.7042 128.36 50.3311Z"
                    fill="url(#paint0_linear_19079_3737)"
                    shapeRendering="crispEdges"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_19079_3737"
                    x="0"
                    y="0"
                    width="186.743"
                    height="613.734"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="27" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_19079_3737"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_19079_3737"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_19079_3737"
                    x1="132.743"
                    y1="302.867"
                    x2="54"
                    y2="302.867"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="#00A7A2" />
                  </linearGradient>
                </defs>
              </svg> */}
            {/* </div> */}

            {/* left Side - Pillars */}
            <div className="space-y-5 h-full flex flex-col justify-center items-center">
              {pillars.map((pillar, index) => {
                const formattedNumber = pillar.number.toString().padStart(2, "0");
                return (
                  <div
                    key={index}
                    className="group relative bg-linear-to-r from-[#00201F] to-[#002F2E00] backdrop-blur-sm rounded-4xl p-3 md:p-5 lg:p-6 2xl:p-[30px] transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-5 md:gap-6 lg:gap-[26px]">
                      {/* Number */}
                      <span className="relative mr-2 inline-flex items-center">
                        <span
                          className="text-6xl md:text-[70px] lg:text-[78px] font-extrabold leading-none tracking-tight text-white/40 group-hover:text-white/80 transition-colors duration-300"
                          style={{
                            WebkitTextFillColor: "transparent",
                            WebkitTextStrokeWidth: "1px",
                            WebkitTextStrokeColor: "currentColor",
                          }}
                        >
                          {formattedNumber}
                        </span>
                        <span className="absolute top-0 -right-3 w-px h-full rounded-full bg-linear-to-b from-transparent via-white/20 to-transparent"></span>
                      </span>

                      {/* Content */}
                      <div className="flex-1 pt-2 flex flex-col gap-2 md:gap-2">
                        <h4 className="text-white bukra-bold text-xl md:[28px]">
                          {pillar.title}
                        </h4>
                        <p className="text-white/70 text-sm md:text-base bukra-regular leading-relaxed max-w-[380px]">
                          {pillar.description}
                        </p>
                      </div>

                      {/* Arrow Icon */}
                      <div className="w-9 h-9 -rotate-45 group-hover:rotate-0 rounded-full bg-black/40 flex items-center justify-center border border-white/20 group-hover:bg-white/10 group-hover:border-white/30 transition-all shrink-0 mt-2">
                        <IoArrowForwardOutline className="text-white gr text-[20px]" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* right Side - Image */}
            <div className="relative h-[400px] md:h-[500px]  lg:h-[609px] rounded-2xl overflow-hidden">
              <img
                src="/SIP/pc.png"
                alt="Strategic Investor Program"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
          </m.div>

          {/* Call-to-Action Buttons */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, margin: "-50px" }}
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
          <button className="px-8 py-2.5 bg-black/40 hover:bg-black/60 text-white md:text-lg cursor-pointer font-semibold rounded-full transition-all duration-200 border border-white/20 hover:border-white/30 flex items-center justify-center gap-2 backdrop-blur-sm">
            <span>Learn More About Program Criteria</span>
            <ImArrowUpRight2 />
          </button>
          <button className="px-8 py-2.5 bg-[#00A7A2] hover:bg-[#00695C] text-white md:text-lg cursor-pointer font-semibold rounded-full transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
            <span>Review Eligibility & Apply Now</span>
            <ImArrowUpRight2 />
          </button>
          </m.div>
        </div>
      </LazyMotion>

      {/* Bottom decorative image */}
      <div className="absolute bottom-0 left-0 right-0 w-screen h-[50vh] overflow-hidden">
        <div
          className="inset-0 opacity-80 w-full h-full object-cover"
          style={{
            backgroundImage: 'url("SIP/bg-down.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto 100%",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      {/* background image right up */}
      <div className="absolute top-0 right-0 w-[300px] h-[400px] md:w-[400px] md:h-[550px] lg:w-[362px] lg:h-[535px] overflow-hidden">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: 'url("SIP/bg-up-right.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "top right",
          }}
        ></div>
      </div>
    </section>
  );
}
