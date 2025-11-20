
import { LazyMotion, domAnimation, m } from "framer-motion";
import { fadeUp, staggered } from "@/animations/motionVariants";
import SaudiLogoGruop from "../../logos/SaudiLogoGruop";
import SaudiMediaLogo from "../../logos/SaudiMediaLogo";
import SaudiMinistryOfIndustry from "../../logos/SaudiMinistryOfIndustry";
import RHQLogo from "../../logos/RHQLogo";
import SpecialIntegratedLogisticsZoneCompanyLogo from "../../logos/SpecialIntegratedLogisticsZoneCompanyLogo";
import KAECLogo from "../../logos/KAECLogo";

interface StatItem {
  id: number;
  value: string;
  label: string;
  description: string;
  shapeColor: string;
}

interface CategoryCard {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  bgIconColor: string;
}

const statItems: StatItem[] = [
  {
    id: 1,
    value: "150+",
    label: "Incentives",
    description: "Government-Wide Support Mechanisms",
    shapeColor: "#814A98",
  },
  {
    id: 2,
    value: "30+",
    label: "Entities",
    description: "Government Entities Offering Tailored Programs",
    shapeColor: "#00A7A2",
  },
  {
    id: 3,
    value: "5+",
    label: "Sectors",
    description: "Key Sectors With Dedicated Incentives",
    shapeColor: "#003A5D",
  },
  {
    id: 4,
    value: "2",
    label: "Program Types",
    description: "Financial & Non-Financial",
    shapeColor: "#00778E",
  },
  {
    id: 5,
    value: "0%",
    label: "Tax Advantage",
    description: "Across RHQ And Special Economic Zone Programs",
    shapeColor: "#A01E64",
  },
];

const categoryCards: CategoryCard[] = [
  {
    id: 1,
    icon: (
      <svg
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.5 4.23926C12.6541 4.23926 7.62728 7.75701 5.42568 12.7959C5.17001 13.3811 4.48838 13.6482 3.90322 13.3925C3.31805 13.1369 3.05094 12.4552 3.30661 11.8701C5.86294 6.01926 11.7023 1.92676 18.5 1.92676C27.653 1.92676 35.0729 9.3467 35.0729 18.4997C35.0729 18.9004 34.8654 19.2726 34.5246 19.4832C34.1837 19.6939 33.758 19.7131 33.3996 19.5339L30.3162 17.9922C29.7451 17.7066 29.5136 17.0121 29.7992 16.4409C30.0847 15.8698 30.7793 15.6382 31.3504 15.9238L32.6301 16.5637C31.6854 9.60361 25.7192 4.23926 18.5 4.23926Z"
          fill="white"
        />
        <path
          d="M2.47547 17.5161C2.81635 17.3054 3.24201 17.2863 3.60043 17.4655L6.68377 19.0072C7.25493 19.2927 7.48644 19.9873 7.20086 20.5584C6.91528 21.1296 6.22075 21.3611 5.64959 21.0755L4.3699 20.4357C5.31459 27.3957 11.2808 32.7601 18.5 32.7601C24.3459 32.7601 29.3727 29.2423 31.5743 24.2034C31.83 23.6182 32.5116 23.3511 33.0968 23.6068C33.682 23.8625 33.9491 24.5441 33.6934 25.1293C31.1371 30.9801 25.2978 35.0726 18.5 35.0726C9.34704 35.0726 1.92709 27.6526 1.92709 18.4997C1.92709 18.0989 2.13459 17.7268 2.47547 17.5161Z"
          fill="white"
        />
        <path
          d="M16.9583 17.7288C16.9583 16.8774 17.6486 16.1872 18.5 16.1872H18.5139C19.3653 16.1872 20.0555 16.8774 20.0555 17.7288C20.0555 18.5803 19.3653 19.2705 18.5139 19.2705H18.5C17.6486 19.2705 16.9583 18.5803 16.9583 17.7288Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.5 9.63509C14.1214 9.63509 10.4063 13.2473 10.4063 17.6716C10.4063 19.9463 11.3719 21.8293 12.6788 23.3493C13.975 24.8569 15.6466 26.0563 17.1769 27.0036L17.1967 27.0159L17.2171 27.0274C17.6086 27.2484 18.0507 27.3643 18.5 27.3643C18.9493 27.3643 19.3914 27.2484 19.783 27.0274L19.8007 27.0173L19.8181 27.0067C21.3566 26.0653 23.0287 24.8618 24.3245 23.3496C25.63 21.826 26.5938 19.9391 26.5938 17.6716C26.5938 13.2473 22.8787 9.63509 18.5 9.63509ZM12.7188 17.6716C12.7188 14.5529 15.3699 11.9476 18.5 11.9476C21.6301 11.9476 24.2813 14.5529 24.2813 17.6716C24.2813 19.2357 23.6275 20.609 22.5685 21.8449C21.5057 23.0852 20.0764 24.1356 18.6349 25.0196C18.5937 25.0405 18.5474 25.0518 18.5 25.0518C18.4532 25.0518 18.4076 25.0408 18.3668 25.0204C16.9239 24.1252 15.4953 23.078 14.4323 21.8417C13.3733 20.61 12.7188 19.2417 12.7188 17.6716Z"
          fill="white"
        />
      </svg>
    ),
    title: "For RHQ & Foreign Investors",
    description: "0% corporate tax, fast-track licensing, visa facilitation",
    bgColor: "from-teal-500/20 to-teal-600/10",
    bgIconColor: "#00A7A2",
  },
  {
    id: 2,
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.6042 2.83301C21.6042 2.24621 22.0799 1.77051 22.6667 1.77051H24.0833C24.6701 1.77051 25.1458 2.24621 25.1458 2.83301C25.1458 3.41981 24.6701 3.89551 24.0833 3.89551H22.6667C22.0799 3.89551 21.6042 3.41981 21.6042 2.83301Z"
          fill="white"
        />
        <path
          d="M11.2699 1.77051C10.6568 1.77044 10.0946 1.77037 9.6373 1.83186C9.1337 1.89957 8.60142 2.05887 8.16364 2.49665C7.72586 2.93443 7.56656 3.46671 7.49885 3.97031C7.43737 4.42762 7.43743 4.9898 7.4375 5.60295L7.43751 5.66635C7.43751 6.25315 7.91321 6.72885 8.50001 6.72885C9.08681 6.72885 9.56251 6.25315 9.56251 5.66635C9.56251 4.96849 9.56477 4.55198 9.6049 4.25346C9.62329 4.11667 9.64496 4.04816 9.65765 4.0173C9.66059 4.01015 9.66288 4.00546 9.66431 4.00272L9.66626 3.99927L9.66971 3.99732C9.67245 3.99589 9.67715 3.9936 9.68429 3.99066C9.71515 3.97797 9.78366 3.9563 9.92045 3.93791C10.219 3.89777 10.6355 3.89552 11.3333 3.89552H18.4167C19.0035 3.89552 19.4792 3.41982 19.4792 2.83302C19.4792 2.24622 19.0035 1.77052 18.4167 1.77052L11.2699 1.77051Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.01995 8.85385H9.98007C10.5932 8.85377 11.1554 8.85371 11.6127 8.91519C12.1163 8.9829 12.6486 9.1422 13.0864 9.57998C13.5242 10.0178 13.6835 10.55 13.7512 11.0536C13.8127 11.511 13.8126 12.0731 13.8125 12.6863L13.8125 17.4055L17.0345 15.7945C17.7618 15.4308 18.3979 15.1127 18.9281 14.9275C19.4791 14.7351 20.1411 14.6013 20.8106 14.8885C21.0364 14.9853 21.2466 15.1152 21.4342 15.2739C21.9905 15.7443 22.1669 16.3962 22.2411 16.9751C22.259 17.1142 22.2724 17.263 22.2824 17.4206L25.2467 15.9384C26.1035 15.5099 26.8517 15.1358 27.4706 14.9332C28.1218 14.7202 28.9019 14.6038 29.6367 15.058C30.3716 15.5122 30.6164 16.2619 30.717 16.9396C30.8127 17.5837 30.8126 18.4202 30.8125 19.3782L30.8125 25.5733C30.8126 26.8462 30.8126 27.9076 30.6993 28.7502C30.5797 29.6396 30.3167 30.4425 29.6714 31.0878C29.0262 31.733 28.2232 31.9961 27.3339 32.1156C26.4912 32.2289 25.4299 32.2289 24.157 32.2289H9.84302C8.57017 32.2289 7.50877 32.2289 6.66616 32.1156C5.77679 31.9961 4.97382 31.733 4.32857 31.0878C3.68332 30.4425 3.42029 29.6396 3.30072 28.7502C3.18743 27.9076 3.18747 26.8462 3.18751 25.5733L3.18751 14.1709L3.1875 14.1663L3.18751 14.1617L3.1875 12.6863C3.18743 12.0731 3.18737 11.511 3.24885 11.0536C3.31656 10.55 3.47586 10.0178 3.91364 9.57998C4.35142 9.1422 4.8837 8.9829 5.3873 8.91519C5.84462 8.85371 6.40679 8.85377 7.01995 8.85385ZM5.31251 25.4997V15.2288H11.6875V30.1039H9.91668C8.55099 30.1039 7.63362 30.1016 6.94932 30.0096C6.29558 29.9217 6.01579 29.7698 5.83117 29.5852C5.64656 29.4006 5.49466 29.1208 5.40677 28.467C5.31477 27.7827 5.31251 26.8654 5.31251 25.4997ZM11.6875 12.7497V13.1038H5.31251V12.7497C5.31251 12.0518 5.31477 11.6353 5.3549 11.3368C5.37329 11.2 5.39496 11.1315 5.40765 11.1006C5.41059 11.0935 5.41288 11.0888 5.41431 11.0861L5.41626 11.0826L5.41971 11.0807C5.42245 11.0792 5.42715 11.0769 5.43429 11.074C5.46515 11.0613 5.53366 11.0396 5.67045 11.0212C5.96897 10.9811 6.38548 10.9789 7.08334 10.9789H9.91668C10.6145 10.9789 11.031 10.9811 11.3296 11.0212C11.4664 11.0396 11.5349 11.0613 11.5657 11.074C11.5729 11.0769 11.5776 11.0792 11.5803 11.0807L11.5838 11.0826L11.5857 11.0861C11.5871 11.0888 11.5894 11.0935 11.5924 11.1006C11.6051 11.1315 11.6267 11.2 11.6451 11.3368C11.6853 11.6353 11.6875 12.0518 11.6875 12.7497ZM13.8125 19.7813V30.1039H24.0833C25.449 30.1039 26.3664 30.1016 27.0507 30.0096C27.7044 29.9217 27.9842 29.7698 28.1688 29.5852C28.3535 29.4006 28.5054 29.1208 28.5933 28.467C28.6853 27.7827 28.6875 26.8654 28.6875 25.4997V19.4591C28.6875 18.3962 28.6847 17.7207 28.615 17.2517C28.582 17.029 28.542 16.9207 28.5184 16.874L28.5166 16.8704L28.5125 16.8704C28.4602 16.8701 28.3455 16.8829 28.1315 16.9529C27.6809 17.1003 27.0754 17.3999 26.1247 17.8752L21.7252 20.075C21.3958 20.2397 21.0047 20.2221 20.6914 20.0285C20.3782 19.8349 20.1875 19.4929 20.1875 19.1247C20.1875 18.223 20.1854 17.6508 20.1334 17.2456C20.1035 17.0123 20.0656 16.9168 20.0501 16.8868C20.0305 16.8716 20.0093 16.8585 19.9869 16.8478C19.9532 16.8473 19.8508 16.8561 19.6288 16.9337C19.2431 17.0684 18.7304 17.3224 17.9239 17.7257L13.8125 19.7813Z"
          fill="white"
        />
        <path
          d="M15.5833 6.02051C14.9965 6.02051 14.5208 6.4962 14.5208 7.08301C14.5208 7.66981 14.9965 8.14551 15.5833 8.14551L24.0833 8.14551C24.6701 8.14551 25.1458 7.66981 25.1458 7.08301C25.1458 6.49621 24.6701 6.02051 24.0833 6.02051L15.5833 6.02051Z"
          fill="white"
        />
      </svg>
    ),
    title: "Strategic Localization Projects",
    description:
      "Cost-sharing for capital projects and localization initiatives",
    bgColor: "from-purple-500/20 to-purple-600/10",
    bgIconColor: "#814A98CC",
  },
  {
    id: 3,
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.4167 1.77051C15.4827 1.77051 13.1042 4.149 13.1042 7.08301C13.1042 7.66981 13.5799 8.14551 14.1667 8.14551C14.7535 8.14551 15.2292 7.66981 15.2292 7.08301C15.2292 5.3226 16.6563 3.89551 18.4167 3.89551H24.0833C24.6701 3.89551 25.1458 3.41981 25.1458 2.83301C25.1458 2.24621 24.6701 1.77051 24.0833 1.77051H18.4167Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.14606 12.647C8.14606 11.3345 9.21003 10.2705 10.5225 10.2705H17.8113C19.1238 10.2705 20.1877 11.3345 20.1877 12.647C20.1877 16.4042 20.5989 20.1501 21.414 23.8179L22.8109 30.1038H24.0833C24.6701 30.1038 25.1458 30.5795 25.1458 31.1663C25.1458 31.7531 24.6701 32.2288 24.0833 32.2288H21.9796C21.9649 32.2291 21.9502 32.2291 21.9356 32.2288H6.39809C6.38355 32.2291 6.36897 32.2291 6.35436 32.2288H4.25C3.6632 32.2288 3.1875 31.7531 3.1875 31.1663C3.1875 30.5795 3.6632 30.1038 4.25 30.1038H5.52292L6.91981 23.8179C7.73486 20.1501 8.14606 16.4042 8.14606 12.647ZM19.3396 24.2788L20.634 30.1038H7.69976L8.9942 24.2788C9.84289 20.4597 10.2711 16.5592 10.2711 12.647C10.2711 12.5081 10.3836 12.3955 10.5225 12.3955H17.8113C17.9502 12.3955 18.0627 12.5081 18.0627 12.647C18.0627 16.5592 18.4909 20.4597 19.3396 24.2788Z"
          fill="white"
        />
        <path
          d="M27.2708 2.83301C27.2708 2.24621 27.7465 1.77051 28.3333 1.77051H29.75C30.3368 1.77051 30.8125 2.24621 30.8125 2.83301C30.8125 3.41981 30.3368 3.89551 29.75 3.89551H28.3333C27.7465 3.89551 27.2708 3.41981 27.2708 2.83301Z"
          fill="white"
        />
        <path
          d="M18.4167 6.02051C17.8299 6.02051 17.3542 6.4962 17.3542 7.08301C17.3542 7.66981 17.8299 8.14551 18.4167 8.14551H26.9167C27.5035 8.14551 27.9792 7.66981 27.9792 7.08301C27.9792 6.4962 27.5035 6.02051 26.9167 6.02051H18.4167Z"
          fill="white"
        />
      </svg>
    ),
    title: "Innovation & R&D",
    description: "R&D funding, technology transfer programs",
    bgColor: "from-blue-500/20 to-blue-600/10",
    bgIconColor: "#003A5D",
  },
  {
    id: 4,
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.77081 31.1663C1.77081 30.5795 2.24651 30.1038 2.83331 30.1038H5.58446L11.3219 10.9789H5.31248V12.7497C5.31248 13.3365 4.83678 13.8122 4.24998 13.8122C3.66318 13.8122 3.18748 13.3365 3.18748 12.7497V9.91637C3.18748 9.60104 3.32754 9.302 3.56978 9.10013L12.0625 2.02284C12.1312 1.96454 12.2073 1.9148 12.2893 1.87528C12.3076 1.86648 12.3261 1.85819 12.345 1.85043C12.4219 1.81868 12.5034 1.7957 12.5882 1.78275C12.6409 1.77469 12.695 1.77051 12.75 1.77051L21.2528 1.77051C21.2872 1.7706 21.3212 1.77233 21.3548 1.77561C21.5759 1.79726 21.7771 1.88669 21.9374 2.02286L30.4302 9.10013C30.6724 9.302 30.8125 9.60104 30.8125 9.91637V12.7497C30.8125 13.3365 30.3368 13.8122 29.75 13.8122C29.1632 13.8122 28.6875 13.3365 28.6875 12.7497V10.9789H22.678L28.4155 30.1038H31.1666C31.7535 30.1038 32.2291 30.5795 32.2291 31.1663C32.2291 31.7531 31.7535 32.2288 31.1666 32.2288H2.83331C2.24651 32.2288 1.77081 31.7531 1.77081 31.1663ZM11.6875 8.85387H7.18466L11.6875 5.10152V8.85387ZM22.3125 8.85387H26.8153L22.3125 5.10152V8.85387ZM20.4595 10.9789L21.0021 12.7876L17 15.1418L12.9979 12.7877L13.5405 10.9789L20.4595 10.9789ZM12.3692 14.8832L14.9044 16.3745L11.2827 18.5049L12.3692 14.8832ZM19.0956 16.3745L21.6308 14.8832L22.7173 18.505L19.0956 16.3745ZM23.732 21.8872L25.1623 26.6551L19.4626 23.9291L23.732 21.8872ZM17 22.7514L21.8234 20.4445L17 17.6072L12.1766 20.4445L17 22.7514ZM14.5374 23.9291L10.268 21.8873L8.83764 26.6551L14.5374 23.9291ZM17 25.1069L8.25031 29.2915C8.17619 29.327 8.1 29.3531 8.02309 29.3703L7.80302 30.1038H26.197L25.9769 29.3703C25.9 29.3531 25.8238 29.327 25.7496 29.2915L17 25.1069ZM20.1875 3.89551V8.85384H13.8125V3.89551H20.1875Z"
          fill="white"
        />
      </svg>
    ),
    title: "Manufacturer & Industrial Operator",
    description: "Subsidized utilities, factory lease, logistics support",
    bgColor: "from-teal-500/20 to-teal-600/10",
    bgIconColor: "#00778E",
  },
  {
    id: 5,
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.77075 31.1663C1.77075 30.5795 2.24645 30.1038 2.83325 30.1038H5.58439L11.3219 10.9789H5.31242V12.7497C5.31242 13.3365 4.83672 13.8122 4.24992 13.8122C3.66312 13.8122 3.18742 13.3365 3.18742 12.7497V9.91637C3.18742 9.60104 3.32748 9.302 3.56972 9.10013L12.0625 2.02284C12.1311 1.96454 12.2073 1.9148 12.2893 1.87528C12.3075 1.86648 12.3261 1.85819 12.3449 1.85043C12.4218 1.81868 12.5033 1.7957 12.5881 1.78275C12.6409 1.77469 12.6949 1.77051 12.7499 1.77051L21.2528 1.77051C21.2871 1.7706 21.3212 1.77233 21.3547 1.77561C21.5758 1.79726 21.7771 1.88669 21.9374 2.02286L30.4301 9.10013C30.6724 9.302 30.8124 9.60104 30.8124 9.91637V12.7497C30.8124 13.3365 30.3367 13.8122 29.7499 13.8122C29.1631 13.8122 28.6874 13.3365 28.6874 12.7497V10.9789H22.678L28.4155 30.1038H31.1666C31.7534 30.1038 32.2291 30.5795 32.2291 31.1663C32.2291 31.7531 31.7534 32.2288 31.1666 32.2288H2.83325C2.24645 32.2288 1.77075 31.7531 1.77075 31.1663ZM11.6874 8.85387H7.1846L11.6874 5.10152V8.85387ZM22.3124 8.85387H26.8152L22.3124 5.10152V8.85387ZM20.4594 10.9789L21.002 12.7876L16.9999 15.1418L12.9978 12.7877L13.5405 10.9789L20.4594 10.9789ZM12.3691 14.8832L14.9043 16.3745L11.2826 18.5049L12.3691 14.8832ZM19.0955 16.3745L21.6307 14.8832L22.7172 18.505L19.0955 16.3745ZM23.7319 21.8872L25.1623 26.6551L19.4625 23.9291L23.7319 21.8872ZM16.9999 22.7514L21.8233 20.4445L16.9999 17.6072L12.1765 20.4445L16.9999 22.7514ZM14.5373 23.9291L10.2679 21.8873L8.83758 26.6551L14.5373 23.9291ZM16.9999 25.1069L8.25025 29.2915C8.17613 29.327 8.09994 29.3531 8.02303 29.3703L7.80296 30.1038H26.1969L25.9768 29.3703C25.8999 29.3531 25.8237 29.327 25.7496 29.2915L16.9999 25.1069ZM20.1874 3.89551V8.85384H13.8124V3.89551H20.1874Z"
          fill="white"
        />
      </svg>
    ),
    title: "Talent & Human Capital",
    description: "Training, upskilling, and employment incentives",
    bgColor: "from-pink-500/20 to-pink-600/10",
    bgIconColor: "#A01E64",
  },
  {
    id: 6,
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.77087 31.1663C1.77087 30.5795 2.24657 30.1038 2.83337 30.1038H5.58452L11.322 10.9789H5.31254V12.7497C5.31254 13.3365 4.83684 13.8122 4.25004 13.8122C3.66324 13.8122 3.18754 13.3365 3.18754 12.7497V9.91637C3.18754 9.60104 3.3276 9.302 3.56984 9.10013L12.0626 2.02284C12.1312 1.96454 12.2074 1.9148 12.2894 1.87528C12.3077 1.86648 12.3262 1.85819 12.345 1.85043C12.422 1.81868 12.5035 1.7957 12.5882 1.78275C12.641 1.77469 12.695 1.77051 12.75 1.77051L21.2529 1.77051C21.2873 1.7706 21.3213 1.77233 21.3548 1.77561C21.576 1.79726 21.7772 1.88669 21.9375 2.02286L30.4302 9.10013C30.6725 9.302 30.8125 9.60104 30.8125 9.91637V12.7497C30.8125 13.3365 30.3368 13.8122 29.75 13.8122C29.1632 13.8122 28.6875 13.3365 28.6875 12.7497V10.9789H22.6781L28.4156 30.1038H31.1667C31.7535 30.1038 32.2292 30.5795 32.2292 31.1663C32.2292 31.7531 31.7535 32.2288 31.1667 32.2288H2.83337C2.24657 32.2288 1.77087 31.7531 1.77087 31.1663ZM11.6875 8.85387H7.18472L11.6875 5.10152V8.85387ZM22.3125 8.85387H26.8154L22.3125 5.10152V8.85387ZM20.4595 10.9789L21.0022 12.7876L17 15.1418L12.9979 12.7877L13.5406 10.9789L20.4595 10.9789ZM12.3693 14.8832L14.9045 16.3745L11.2828 18.5049L12.3693 14.8832ZM19.0956 16.3745L21.6308 14.8832L22.7174 18.505L19.0956 16.3745ZM23.732 21.8872L25.1624 26.6551L19.4626 23.9291L23.732 21.8872ZM17 22.7514L21.8235 20.4445L17 17.6072L12.1766 20.4445L17 22.7514ZM14.5374 23.9291L10.2681 21.8873L8.8377 26.6551L14.5374 23.9291ZM17 25.1069L8.25038 29.2915C8.17625 29.327 8.10006 29.3531 8.02315 29.3703L7.80308 30.1038H26.197L25.977 29.3703C25.9 29.3531 25.8238 29.327 25.7497 29.2915L17 25.1069ZM20.1875 3.89551V8.85384H13.8125V3.89551H20.1875Z"
          fill="white"
        />
      </svg>
    ),
    title: "Business Facilitation",
    description: "Streamlined registration, trade zone advantages",
    bgColor: "from-purple-500/20 to-purple-600/10",
    bgIconColor: "#393284",
  },
];

export default function Incentives() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-linear-to-l from-[#001421] via-[#002338] to-[#3A2144]">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        ></div>
      </div> */}

      {/* bg circle pattern */}
      <div className="absolute top-1 right-1 w-full h-[400px] md:w-[83%] md:h-[1403px] lg:w-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/incentives/circle-bg.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "top right",
          }}
        ></div>
      </div>

      {/* bg moubts down pattern */}
      {/* <div className="absolute bottom-0 right-0 w-full h-[400px] md:h-[800px] lg:h-[300px] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/incentives/mounts.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "top right",
          }}
        ></div>
      </div> */}

      <div className="relative z-10 container mx-auto px-4 md:px-12 lg:px-20">
        {/* Hero Section with Stats */}
        <div className="mb-16 md:mb-20">
          {/* Header */}
          <LazyMotion features={domAnimation}>
            <m.div
              className="mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2, margin: "-50px" }}
              variants={fadeUp}
            >
              <m.h1
                variants={fadeUp}
                className="text-3xl md:text-4xl lg:text-[46px] bukra-bold text-white mb-2"
              >
                Incentives that Accelerate Success
              </m.h1>
              <m.p
                variants={fadeUp}
                className="text-lg md:text-xl lg:text-[27px] text-gray-300 leading-relaxed bukra-regular"
              >
                Tailored incentives to support investment and de-risk entry
              </m.p>
            </m.div>
          </LazyMotion>

          {/* Hero Image with Stats Overlay */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl md:pb-0">
            {/* Background Image */}
            <div className="relative h-[280px] sm:h-[360px] md:h-[500px] lg:h-[657px]">
              <img
                src="/incentives/card.jpg"
                alt="Futuristic City Skyline"
                className="object-cover w-full h-full"                
              />
              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 bg-[linear-gradient(269.96deg,rgba(0,167,162,0.4)_-0.73%,rgba(1,121,194,0.4)_37.74%,rgba(129,74,152,0.4)_76.21%)]"
              ></div>
            </div>

            {/* Stats Cards Overlay */}
            <div className="relative mt-1 py-3 px-2 sm:px-6 sm:py-7 md:px-8 md:py-8 md:absolute md:bottom-0 md:left-0 md:right-0 md:mt-0">
              <LazyMotion features={domAnimation}>
                <m.div
                  className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
                  variants={staggered}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                >
                  {statItems.map((stat) => (
                    <m.div
                      key={stat.id}
                      variants={fadeUp}
                    className=" overflow-hidden backdrop-blur-md rounded-[20px] p-4 sm:p-5 md:p-[20px] border border-white/20 hover:bg-white/20 transition-all duration-300"
                    style={{
                      background: "#000000B2",
                    }}
                  >
                    {/* card content */}
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-2 items-center">
                        <div className="text-xl md:text-2xl lg:text-[33px] bukra-medium text-white">
                          {stat.value}
                        </div>
                        <div className="text-sm md:text-base bukra-regular text-white">
                          {stat.label}
                        </div>
                      </div>

                      {/* line */}
                      <div className="w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>

                      <div className="text-xs sm:text-sm md:text-base  bukra-regular text-gray-200 mt-2">
                        {stat.description}
                      </div>
                    </div>

                    {/* shape background */}
                    <div className=" absolute top-0 left-0 w-[697.75px] h-[361px] rounded-full overflow-hidden">
                      <svg
                        className="rounded-[20px]"
                        width="255"
                        height="174"
                        rx="50%"
                        ry="50%"
                        viewBox="0 0 255 154"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_f_116_12925)">
                          <ellipse
                            cx="484.596"
                            cy="137.716"
                            rx="100%"
                            ry="130.895"
                            transform="rotate(-19.7487 484.596 137.716)"
                            fill={stat.shapeColor}
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_116_12925"
                            x="-0.000228882"
                            y="-186.032"
                            width="969.193"
                            height="647.497"
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
                              stdDeviation="76.6193"
                              result="effect1_foregroundBlur_116_12925"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </m.div>
                ))}
              </m.div>
              </LazyMotion>
            </div>
          </div>
        </div>

        {/* Main Content with Vertical Dotted Line */}
        <div className="relative">
          {/* Vertical Dotted Line */}
          <div
            className="absolute left-8 md:left-12 top-0 w-0.5 hidden md:block"
            style={{ height: "calc(100% - 12rem)" }}
          >
            {" "}
            <div
              className="h-full w-full"
              style={{
                background: `repeating-linear-gradient(
                  to bottom,
                  rgba(255, 255, 255, 0.5) 0px,
                  rgba(255, 255, 255, 0.5) 2px,
                  transparent 2px,
                  transparent 10px
                )`,
              }}
            ></div>
          </div>

          {/* Incentive Categories Section */}
          <div className="relative mb-8 md:mb-20 pl-0 md:pl-24">
            {/* Section Icon - Lightbulb in Teal Circle */}
            <div className="absolute left-0 md:left-4 top-0 hidden md:block">
              <div className="relative">
                {/* Horizontal connector line */}
                {/* <div className="absolute left-12 top-6 w-6 h-0.5 bg-white/50"></div> */}
                {/* Icon circle */}
                <div className="w-16 h-16 p-2 rounded-full bg-black/50 shadow-2xl backdrop-blur-3xl flex items-center justify-center z-10">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.8544 26.8422C34.0762 26.9797 34.3237 27.0439 34.5675 27.0439L34.5712 27.042C35.035 27.042 35.4878 26.8073 35.7463 26.382C37.2478 23.9161 38.0417 21.0818 38.0417 18.1851C38.0417 9.42182 30.8458 2.29199 22 2.29199C13.1542 2.29199 5.95834 9.42182 5.95834 18.1851C5.95834 21.08 6.75218 23.9143 8.25368 26.382C8.64968 27.031 9.49486 27.2364 10.1439 26.8422C10.7929 26.4462 10.9982 25.601 10.604 24.952C9.36286 22.9152 8.70834 20.5758 8.70834 18.1851C8.70834 10.938 14.6703 5.04199 22 5.04199C29.3297 5.04199 35.2917 10.938 35.2917 18.1851C35.2917 20.5776 34.6354 22.917 33.396 24.952C33 25.601 33.2054 26.448 33.8544 26.8422Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M30.9204 33.8656C30.3788 34.7213 29.6103 35.3808 28.7061 35.7809L28.5976 36.3242L28.5921 36.3515C28.3188 37.7092 28.1678 38.4592 27.7708 39.1567C27.1529 40.2475 26.1556 41.0633 24.964 41.4557C24.1958 41.7105 23.413 41.7105 21.9921 41.7105H21.9976C20.575 41.7105 19.7921 41.7105 19.0221 41.4557C17.8341 41.0652 16.8368 40.2475 16.2171 39.1567C15.8193 38.4563 15.6671 37.6992 15.3921 36.326L15.2827 35.7778C14.3809 35.3776 13.6156 34.7202 13.0784 33.8711C12.7502 33.3486 12.565 32.7949 12.2314 31.7921L13.533 31.3502L12.2295 31.7848C12.0279 31.1816 11.8959 30.7838 11.916 30.3218C11.9655 29.3354 12.587 28.4774 13.4964 28.1272C13.9197 27.9604 14.3174 27.9604 14.9788 27.9604H29.0155C29.677 27.9604 30.0772 27.9604 30.5097 28.1309C31.4099 28.4774 32.0295 29.3336 32.079 30.3126C32.0992 30.782 31.9745 31.1596 31.7655 31.783C31.43 32.7931 31.2449 33.3468 30.9204 33.8656ZM25.8166 36.2104C25.648 37.041 25.5368 37.5267 25.382 37.8C25.1015 38.295 24.6486 38.6654 24.106 38.8451C23.7577 38.9605 23.1327 38.9605 21.9964 38.9605C20.8601 38.9605 20.2321 38.9605 19.882 38.8451C19.3411 38.6672 18.8883 38.2969 18.6078 37.8C18.4529 37.5266 18.3416 37.0406 18.1729 36.2104H25.8166ZM14.7911 30.7771L14.7687 30.7104L14.7705 30.7122H29.2245C29.2025 30.7801 29.1787 30.8534 29.1549 30.9231C28.889 31.7242 28.7424 32.1661 28.5957 32.3989C28.2785 32.8994 27.7909 33.2532 27.2225 33.3944C26.9512 33.4622 26.4855 33.4622 25.6422 33.4622H18.3529C17.5095 33.4622 17.0439 33.4622 16.7744 33.3944C16.2042 33.2532 15.7165 32.8994 15.403 32.4044C15.2527 32.1661 15.106 31.7242 14.8402 30.9231L14.8365 30.9139C14.8219 30.8689 14.8062 30.8222 14.7911 30.7771Z"
                      fill="white"
                    />
                    <path
                      d="M19.2337 22.0005C19.505 22.3048 19.8809 22.4607 20.2604 22.4607L20.2567 22.4588C20.583 22.4588 20.9094 22.3433 21.1715 22.1105L24.631 19.0287C25.2397 18.4897 25.4799 17.6702 25.2617 16.8874C25.0435 16.1027 24.4092 15.5252 23.608 15.3786L22.0094 15.087L24.0315 12.8357C24.5394 12.271 24.4917 11.402 23.927 10.8942C23.3624 10.3863 22.4934 10.434 21.9855 10.9987L19.197 14.1044C18.6874 14.6709 18.5242 15.4702 18.7699 16.1926C19.0174 16.9167 19.637 17.452 20.3887 17.5877L21.8242 17.8499L19.3455 20.059C18.779 20.565 18.7277 21.434 19.2337 22.0005Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* content container */}
            <div className="relative overflow-hidden p-5 md:p-6 lg:p-[34px] rounded-[30px] bg-[linear-gradient(90deg,rgba(0,0,0,0.41)_0%,rgba(0,0,0,0.41)_100%)]">
              {/* Section Header */}
              <LazyMotion features={domAnimation}>
                <m.div
                  className="mb-6 lg:mb-8 flex md:flex-row items-center justify-between gap-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                  variants={fadeUp}
                >
                  {/* content */}
                  <div className="flex-1">
                    <m.h2
                      variants={fadeUp}
                      className="text-2xl md:text-[32px] bukra-regular text-white mb-2 lg:mb-4"
                    >
                      Incentive Categories
                    </m.h2>
                    <m.p
                      variants={fadeUp}
                      className="text-[#F5F5F5] text-sm  md:text-base lg:text-lg max-w-3xl lg:max-w-none bukra-regular"
                    >
                      Foundational incentives designed to enhance competitiveness
                      through cost-effective infrastructure, financing, and
                      operational support.
                    </m.p>
                  </div>

                {/* link */}
                <div>
                  <a href="" className="text-white bukra-regular">
                    <svg
                      width="47"
                      height="47"
                      viewBox="0 0 47 47"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="47"
                        height="47"
                        rx="23.5"
                        fill="black"
                        fillOpacity="0.31"
                      />
                      <path
                        d="M28.8966 16.5865C29.4474 16.5865 29.9135 17.0526 29.9135 17.6034V27.7716C29.9135 28.3648 29.4474 28.7885 28.8966 28.7885C28.3035 28.7885 27.8798 28.3648 27.8798 27.7716V20.0607L18.0928 29.8477C17.6692 30.2713 17.0337 30.2713 16.6523 29.8477C16.2287 29.4663 16.2287 28.8308 16.6523 28.4495L26.4393 18.6626H18.7284C18.1352 18.6626 17.7115 18.1965 17.7115 17.6457C17.7115 17.0526 18.1352 16.6289 18.7284 16.6289H28.8966V16.5865Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </m.div>
              </LazyMotion>

              {/* Categories Grid */}
              <LazyMotion features={domAnimation}>
                <m.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6"
                  variants={staggered}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                >
                  {categoryCards.map((category) => (
                    <m.div
                      key={category.id}
                      variants={fadeUp}
                    className="z-10 group relative bg-[rgba(0,0,0,0.2)] rounded-2xl p-[15px] md:py-[29px]  md:px-[30px] transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    {/* Icon */}
                    <div
                      className="w-16 h-16 rounded-full backdrop-blur-sm flex items-center justify-center mb-4 md:mb-6 "
                      style={{
                        background: category.bgIconColor,
                      }}
                    >
                      <span className="text-3xl">{category.icon}</span>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg md:text-[24px] bukra-medium text-[#F5F5F5] mb-1">
                      {category.title}
                    </h3>
                    <p className="text-[#F5F5F5]/70 font-normal leading-relaxed text-sm md:text-base lg:text-[18px] bukra-regular">
                      {category.description}
                    </p>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-teal-400/0 to-blue-500/0 group-hover:from-teal-400/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
                  </m.div>
                ))}
              </m.div>
              </LazyMotion>

              {/* shape background */}
              <div className=" absolute -top-11 -left-11 w-[697.75px] h-[361px] rounded-full overflow-hidden">
                <svg
                  width="508"
                  height="333"
                  viewBox="0 0 508 333"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8" filter="url(#filter0_f_19118_23017)">
                    <ellipse
                      cx="22.5824"
                      cy="8.71612"
                      rx="348.873"
                      ry="130.895"
                      transform="rotate(-19.7487 22.5824 8.71612)"
                      fill="#814A98"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_19118_23017"
                      x="-462.014"
                      y="-315.032"
                      width="969.193"
                      height="647.497"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="76.6193"
                        result="effect1_foregroundBlur_19118_23017"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* Key Incentive Programs Section */}
          <div className="relative mb-12 md:mb-16 pl-0 md:pl-24">
            {/* Section Icon - Diamond in White Circle */}
            <div className="absolute left-0 md:left-4 top-0 hidden md:block">
              <div className="relative">
                {/* Horizontal connector line */}
                {/* <div className="absolute left-12 top-6 w-6 h-0.5 bg-white/50"></div> */}
                {/* Icon circle */}
                <div className="w-16 h-16 p-2 rounded-full bg-black/50 shadow-2xl backdrop-blur-3xl flex items-center justify-center z-10">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.3333 14.2083C17.5739 14.2083 16.9583 14.8239 16.9583 15.5833C16.9583 16.3427 17.5739 16.9583 18.3333 16.9583H25.6667C26.426 16.9583 27.0417 16.3427 27.0417 15.5833C27.0417 14.8239 26.426 14.2083 25.6667 14.2083H18.3333Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.9265 4.12502C15.5339 4.1247 14.6019 4.12448 13.7073 4.34286C13.3023 4.44175 12.9066 4.57372 12.5251 4.73759C11.6783 5.10131 10.9548 5.65861 9.89141 6.47769L9.70333 6.62251C7.78527 8.09908 6.26534 9.26915 5.14793 10.318C4.00601 11.3898 3.16416 12.4419 2.7226 13.726C2.36011 14.7802 2.22373 15.8921 2.32322 16.9983C2.44485 18.3506 3.01732 19.5577 3.87659 20.8408C4.71538 22.0934 5.91736 23.5449 7.42938 25.3709L14.8688 34.3552C16.2189 35.9859 17.329 37.3265 18.3478 38.245C19.4175 39.2094 20.5642 39.875 22 39.875C23.4358 39.875 24.5825 39.2094 25.6522 38.245C26.671 37.3265 27.781 35.9859 29.1312 34.3552L36.5707 25.3708C38.0827 23.5449 39.2846 22.0933 40.1234 20.8408C40.9827 19.5577 41.5551 18.3506 41.6768 16.9983C41.7762 15.8921 41.6399 14.7802 41.2774 13.726C40.8358 12.4419 39.994 11.3898 38.8521 10.318C37.7346 9.26916 36.2147 8.0991 34.2967 6.62256L34.1086 6.4777C33.0452 5.65861 32.3217 5.10131 31.4749 4.73759C31.0934 4.57372 30.6977 4.44175 30.2927 4.34286C29.3981 4.12448 28.4661 4.1247 27.0735 4.12502H16.9265ZM14.3595 7.01441C14.893 6.88416 15.4744 6.87505 17.092 6.87505H26.908C28.5256 6.87505 29.1069 6.88416 29.6405 7.01441C29.8988 7.07747 30.1495 7.16124 30.3895 7.26436C30.8798 7.47493 31.3201 7.80159 32.5605 8.75645C34.5503 10.2882 35.9624 11.3773 36.97 12.3231C37.9645 13.2565 38.4438 13.9427 38.6768 14.6203C38.9144 15.3112 39.0023 16.0347 38.9378 16.752C38.8751 17.4495 38.5787 18.2053 37.8384 19.3106C37.0867 20.4331 35.9755 21.7778 34.4036 23.676L27.0823 32.5178C25.6455 34.2529 24.6623 35.4348 23.8108 36.2025C22.9929 36.9398 22.4781 37.125 22 37.125C21.5219 37.125 21.007 36.9398 20.1892 36.2025C19.3377 35.4348 18.3544 34.2529 16.9177 32.5178L9.59635 23.676C8.02452 21.7778 6.91325 20.4331 6.16155 19.3106C5.42131 18.2053 5.1249 17.4495 5.06217 16.752C4.99765 16.0347 5.08555 15.3112 5.32315 14.6203C5.55615 13.9427 6.03547 13.2565 7.02996 12.3231C8.03759 11.3773 9.44972 10.2882 11.4395 8.75645C12.6799 7.80158 13.1202 7.47493 13.6104 7.26436C13.8505 7.16124 14.1012 7.07747 14.3595 7.01441Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* content container */}
            <div className="relative flex flex-col md:flex-row gap-5 justify-between items-center overflow-hidden p-6 md:p-6 lg:p-[34px] rounded-[30px] bg-[linear-gradient(90deg,rgba(0,0,0,0.41)_0%,rgba(0,0,0,0.41)_100%)] rounded-xl]">
              {/* left side */}
              <div>
                <div className="mb-4 md:mb-6">
                  <h2 className="text-2xl md:text-3xl lg:text-[32px] bukra-regular text-white">
                    Key Incentive Programs
                  </h2>
                </div>
                <div className="rounded-2xl transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex-1 md:max-w-2/3">
                      <h3 className="text-[#00A7A2] bukra-medium text-xl md:text-2xl mb-3">
                        MISA RHQ Program
                      </h3>
                      <p className="text-[#F5F5F5]/70 bukra-regular text-base md:text-lg">
                        0% corporate tax, fast-track licensing, and direct
                        government access for multinational regional
                        headquarters
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* right side */}
              <div className="flex items-center gap-5 md:gap-7">
                <div className="text-6xl md:text-7xl font-bold text-white">
                  {/* RHQ Logo */}
                  <RHQLogo />
                </div>
                <button className="p-3 rounded-full transition-all group-hover:scale-110">
                  <svg
                    width="47"
                    height="47"
                    viewBox="0 0 47 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="47"
                      height="47"
                      rx="23.5"
                      fill="black"
                      fillOpacity="0.31"
                    />
                    <path
                      d="M28.8966 16.5865C29.4474 16.5865 29.9135 17.0526 29.9135 17.6034V27.7716C29.9135 28.3648 29.4474 28.7885 28.8966 28.7885C28.3035 28.7885 27.8798 28.3648 27.8798 27.7716V20.0607L18.0928 29.8477C17.6692 30.2713 17.0337 30.2713 16.6523 29.8477C16.2287 29.4663 16.2287 28.8308 16.6523 28.4495L26.4393 18.6626H18.7284C18.1352 18.6626 17.7115 18.1965 17.7115 17.6457C17.7115 17.0526 18.1352 16.6289 18.7284 16.6289H28.8966V16.5865Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>

              {/* shape background */}
              <div className=" absolute -top-11 -left-11 w-[697.75px] h-[361px] rounded-full overflow-hidden">
                <svg
                  width="571"
                  height="219"
                  viewBox="0 0 571 219"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8" filter="url(#filter0_f_19118_23114)">
                    <ellipse
                      cx="85.5824"
                      cy="-74.7839"
                      rx="348.873"
                      ry="130.895"
                      transform="rotate(-19.7487 85.5824 -74.7839)"
                      fill="#00A7A2"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_19118_23114"
                      x="-399.014"
                      y="-398.532"
                      width="969.193"
                      height="647.497"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="76.6193"
                        result="effect1_foregroundBlur_19118_23114"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* National Competitiveness Programs Section */}
          <div className="relative mb-12 md:mb-16 pl-0 md:pl-24">
            {/* Section Icon - Diamond in White Circle */}
            <div className="absolute left-0 md:left-4 top-0 hidden md:block">
              <div className="relative">
                {/* Horizontal connector line */}
                {/* <div className="absolute left-12 top-6 w-6 h-0.5 bg-white/50"></div> */}
                {/* Icon circle */}
                <div className="w-16 h-16 p-2 rounded-full bg-black/50 shadow-2xl backdrop-blur-3xl flex items-center justify-center z-10">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.3333 14.2083C17.5739 14.2083 16.9583 14.8239 16.9583 15.5833C16.9583 16.3427 17.5739 16.9583 18.3333 16.9583H25.6667C26.426 16.9583 27.0417 16.3427 27.0417 15.5833C27.0417 14.8239 26.426 14.2083 25.6667 14.2083H18.3333Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.9265 4.12502C15.5339 4.1247 14.6019 4.12448 13.7073 4.34286C13.3023 4.44175 12.9066 4.57372 12.5251 4.73759C11.6783 5.10131 10.9548 5.65861 9.89141 6.47769L9.70333 6.62251C7.78527 8.09908 6.26534 9.26915 5.14793 10.318C4.00601 11.3898 3.16416 12.4419 2.7226 13.726C2.36011 14.7802 2.22373 15.8921 2.32322 16.9983C2.44485 18.3506 3.01732 19.5577 3.87659 20.8408C4.71538 22.0934 5.91736 23.5449 7.42938 25.3709L14.8688 34.3552C16.2189 35.9859 17.329 37.3265 18.3478 38.245C19.4175 39.2094 20.5642 39.875 22 39.875C23.4358 39.875 24.5825 39.2094 25.6522 38.245C26.671 37.3265 27.781 35.9859 29.1312 34.3552L36.5707 25.3708C38.0827 23.5449 39.2846 22.0933 40.1234 20.8408C40.9827 19.5577 41.5551 18.3506 41.6768 16.9983C41.7762 15.8921 41.6399 14.7802 41.2774 13.726C40.8358 12.4419 39.994 11.3898 38.8521 10.318C37.7346 9.26916 36.2147 8.0991 34.2967 6.62256L34.1086 6.4777C33.0452 5.65861 32.3217 5.10131 31.4749 4.73759C31.0934 4.57372 30.6977 4.44175 30.2927 4.34286C29.3981 4.12448 28.4661 4.1247 27.0735 4.12502H16.9265ZM14.3595 7.01441C14.893 6.88416 15.4744 6.87505 17.092 6.87505H26.908C28.5256 6.87505 29.1069 6.88416 29.6405 7.01441C29.8988 7.07747 30.1495 7.16124 30.3895 7.26436C30.8798 7.47493 31.3201 7.80159 32.5605 8.75645C34.5503 10.2882 35.9624 11.3773 36.97 12.3231C37.9645 13.2565 38.4438 13.9427 38.6768 14.6203C38.9144 15.3112 39.0023 16.0347 38.9378 16.752C38.8751 17.4495 38.5787 18.2053 37.8384 19.3106C37.0867 20.4331 35.9755 21.7778 34.4036 23.676L27.0823 32.5178C25.6455 34.2529 24.6623 35.4348 23.8108 36.2025C22.9929 36.9398 22.4781 37.125 22 37.125C21.5219 37.125 21.007 36.9398 20.1892 36.2025C19.3377 35.4348 18.3544 34.2529 16.9177 32.5178L9.59635 23.676C8.02452 21.7778 6.91325 20.4331 6.16155 19.3106C5.42131 18.2053 5.1249 17.4495 5.06217 16.752C4.99765 16.0347 5.08555 15.3112 5.32315 14.6203C5.55615 13.9427 6.03547 13.2565 7.02996 12.3231C8.03759 11.3773 9.44972 10.2882 11.4395 8.75645C12.6799 7.80158 13.1202 7.47493 13.6104 7.26436C13.8505 7.16124 14.1012 7.07747 14.3595 7.01441Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* content container */}
            <div className="relative flex flex-col md:flex-row gap-5 justify-between items-center overflow-hidden p-6 md:p-6 lg:p-[34px] rounded-[30px] bg-[linear-gradient(90deg,rgba(0,0,0,0.41)_0%,rgba(0,0,0,0.41)_100%)] rounded-xl]">
              {/* left side */}
              <div>
                <div className="mb-4 md:mb-6">
                  <h2 className="text-2xl md:text-3xl lg:text-[32px] bukra-regular text-white">
                    National Competitiveness Programs
                  </h2>
                </div>
                <div className="rounded-2xl transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex-1 md:max-w-6/7">
                      <h3 className="text-[#00A7A2] bukra-medium text-xl md:text-2xl mb-3">
                        NIDLP, NIM, Saudi Made
                      </h3>
                      <p className="text-[#F5F5F5]/70 bukra-regular text-base md:text-lg">
                        Financing, tax exemptions, and national branding
                        initiatives driving industrial competitiveness and
                        localization
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* right side */}
              <div className="flex flex-col md:flex-row items-center gap-5 md:gap-7">
                <div className="flex items-center flex-row-reverse gap-3 text-6xl md:text-7xl font-bold text-white">
                  {/* saudi Logo */}
                  <SaudiMediaLogo />

                  {/* saudi made logo */}
                  <SaudiLogoGruop />

                  {/* ministry of manufacturing and industry */}
                  <SaudiMinistryOfIndustry />
                </div>
                <button className="p-3 rounded-full transition-all group-hover:scale-110">
                  <svg
                    width="47"
                    height="47"
                    viewBox="0 0 47 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="47"
                      height="47"
                      rx="23.5"
                      fill="black"
                      fillOpacity="0.31"
                    />
                    <path
                      d="M28.8966 16.5865C29.4474 16.5865 29.9135 17.0526 29.9135 17.6034V27.7716C29.9135 28.3648 29.4474 28.7885 28.8966 28.7885C28.3035 28.7885 27.8798 28.3648 27.8798 27.7716V20.0607L18.0928 29.8477C17.6692 30.2713 17.0337 30.2713 16.6523 29.8477C16.2287 29.4663 16.2287 28.8308 16.6523 28.4495L26.4393 18.6626H18.7284C18.1352 18.6626 17.7115 18.1965 17.7115 17.6457C17.7115 17.0526 18.1352 16.6289 18.7284 16.6289H28.8966V16.5865Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>

              {/* shape background */}
              <div className=" absolute -top-11 -left-11 w-[697.75px] h-[361px] rounded-full overflow-hidden">
                <svg
                  width="571"
                  height="219"
                  viewBox="0 0 571 219"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8" filter="url(#filter0_f_20396_22247)">
                    <ellipse
                      cx="85.5824"
                      cy="-74.7839"
                      rx="348.873"
                      ry="130.895"
                      transform="rotate(-19.7487 85.5824 -74.7839)"
                      fill="#003A5D"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_20396_22247"
                      x="-399.014"
                      y="-398.532"
                      width="969.193"
                      height="647.497"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="76.6193"
                        result="effect1_foregroundBlur_20396_22247"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* Special Economic Zone Section */}
          <div className="relative mb-12 md:mb-16 pl-0 md:pl-24">
            {/* Section Icon - Diamond in White Circle */}
            <div className="absolute left-0 md:left-4 top-0 hidden md:block">
              <div className="relative">
                {/* Horizontal connector line */}
                {/* <div className="absolute left-12 top-6 w-6 h-0.5 bg-white/50"></div> */}
                {/* Icon circle */}
                <div className="w-16 h-16 p-2 rounded-full bg-black/50 shadow-2xl backdrop-blur-3xl flex items-center justify-center z-10">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.3333 14.2083C17.5739 14.2083 16.9583 14.8239 16.9583 15.5833C16.9583 16.3427 17.5739 16.9583 18.3333 16.9583H25.6667C26.426 16.9583 27.0417 16.3427 27.0417 15.5833C27.0417 14.8239 26.426 14.2083 25.6667 14.2083H18.3333Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.9265 4.12502C15.5339 4.1247 14.6019 4.12448 13.7073 4.34286C13.3023 4.44175 12.9066 4.57372 12.5251 4.73759C11.6783 5.10131 10.9548 5.65861 9.89141 6.47769L9.70333 6.62251C7.78527 8.09908 6.26534 9.26915 5.14793 10.318C4.00601 11.3898 3.16416 12.4419 2.7226 13.726C2.36011 14.7802 2.22373 15.8921 2.32322 16.9983C2.44485 18.3506 3.01732 19.5577 3.87659 20.8408C4.71538 22.0934 5.91736 23.5449 7.42938 25.3709L14.8688 34.3552C16.2189 35.9859 17.329 37.3265 18.3478 38.245C19.4175 39.2094 20.5642 39.875 22 39.875C23.4358 39.875 24.5825 39.2094 25.6522 38.245C26.671 37.3265 27.781 35.9859 29.1312 34.3552L36.5707 25.3708C38.0827 23.5449 39.2846 22.0933 40.1234 20.8408C40.9827 19.5577 41.5551 18.3506 41.6768 16.9983C41.7762 15.8921 41.6399 14.7802 41.2774 13.726C40.8358 12.4419 39.994 11.3898 38.8521 10.318C37.7346 9.26916 36.2147 8.0991 34.2967 6.62256L34.1086 6.4777C33.0452 5.65861 32.3217 5.10131 31.4749 4.73759C31.0934 4.57372 30.6977 4.44175 30.2927 4.34286C29.3981 4.12448 28.4661 4.1247 27.0735 4.12502H16.9265ZM14.3595 7.01441C14.893 6.88416 15.4744 6.87505 17.092 6.87505H26.908C28.5256 6.87505 29.1069 6.88416 29.6405 7.01441C29.8988 7.07747 30.1495 7.16124 30.3895 7.26436C30.8798 7.47493 31.3201 7.80159 32.5605 8.75645C34.5503 10.2882 35.9624 11.3773 36.97 12.3231C37.9645 13.2565 38.4438 13.9427 38.6768 14.6203C38.9144 15.3112 39.0023 16.0347 38.9378 16.752C38.8751 17.4495 38.5787 18.2053 37.8384 19.3106C37.0867 20.4331 35.9755 21.7778 34.4036 23.676L27.0823 32.5178C25.6455 34.2529 24.6623 35.4348 23.8108 36.2025C22.9929 36.9398 22.4781 37.125 22 37.125C21.5219 37.125 21.007 36.9398 20.1892 36.2025C19.3377 35.4348 18.3544 34.2529 16.9177 32.5178L9.59635 23.676C8.02452 21.7778 6.91325 20.4331 6.16155 19.3106C5.42131 18.2053 5.1249 17.4495 5.06217 16.752C4.99765 16.0347 5.08555 15.3112 5.32315 14.6203C5.55615 13.9427 6.03547 13.2565 7.02996 12.3231C8.03759 11.3773 9.44972 10.2882 11.4395 8.75645C12.6799 7.80158 13.1202 7.47493 13.6104 7.26436C13.8505 7.16124 14.1012 7.07747 14.3595 7.01441Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* content container */}
            <div className="relative flex flex-col md:flex-row gap-5 justify-between items-center overflow-hidden p-6 md:p-6 lg:p-[34px] rounded-[30px] bg-[linear-gradient(90deg,rgba(0,0,0,0.41)_0%,rgba(0,0,0,0.41)_100%)] rounded-xl]">
              {/* left side */}
              <div>
                <div className="mb-4 md:mb-6">
                  <h2 className="text-2xl md:text-3xl lg:text-[32px] bukra-regular text-white">
                    Special Economic Zone
                  </h2>
                </div>
                <div className="rounded-2xl transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex-1 md:max-w-6/7">
                      <h3 className="text-[#00A7A2] bukra-medium text-xl md:text-2xl mb-3">
                        KAEC, SILZ
                      </h3>
                      <p className="text-[#F5F5F5]/70 bukra-regular text-base md:text-lg">
                        0% customs, 100% foreign ownership, and integrated
                        logistics and export-ready infrastructure
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* right side */}
              <div className="flex flex-col md:flex-row items-center gap-5 md:gap-7">
                <div className="flex items-center flex-row-reverse gap-3 text-6xl md:text-7xl font-bold text-white">
                  {/* special integrated logistics zone company logo */}
                  <SpecialIntegratedLogisticsZoneCompanyLogo />

                  {/* kaec logo */}
                  <KAECLogo />
                </div>
                <button className="p-3 rounded-full transition-all group-hover:scale-110">
                  <svg
                    width="47"
                    height="47"
                    viewBox="0 0 47 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="47"
                      height="47"
                      rx="23.5"
                      fill="black"
                      fillOpacity="0.31"
                    />
                    <path
                      d="M28.8966 16.5865C29.4474 16.5865 29.9135 17.0526 29.9135 17.6034V27.7716C29.9135 28.3648 29.4474 28.7885 28.8966 28.7885C28.3035 28.7885 27.8798 28.3648 27.8798 27.7716V20.0607L18.0928 29.8477C17.6692 30.2713 17.0337 30.2713 16.6523 29.8477C16.2287 29.4663 16.2287 28.8308 16.6523 28.4495L26.4393 18.6626H18.7284C18.1352 18.6626 17.7115 18.1965 17.7115 17.6457C17.7115 17.0526 18.1352 16.6289 18.7284 16.6289H28.8966V16.5865Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>

              {/* shape background */}
              <div className=" absolute -top-11 -left-11 w-[697.75px] h-[361px] rounded-full overflow-hidden">
                <svg
                  width="571"
                  height="219"
                  viewBox="0 0 571 219"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8" filter="url(#filter0_f_20396_22247)">
                    <ellipse
                      cx="85.5824"
                      cy="-74.7839"
                      rx="348.873"
                      ry="130.895"
                      transform="rotate(-19.7487 85.5824 -74.7839)"
                      fill="#814A98"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_20396_22247"
                      x="-399.014"
                      y="-398.532"
                      width="969.193"
                      height="647.497"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="76.6193"
                        result="effect1_foregroundBlur_20396_22247"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* Sector-Specific Incentives Section */}
          <div className="relative mb-12 md:mb-16 pl-0 md:pl-24">
            {/* Section Icon - Diamond in White Circle */}
            <div className="absolute left-0 md:left-4 top-0 hidden md:block">
              <div className="relative">
                {/* Horizontal connector line */}
                {/* <div className="absolute left-12 top-6 w-6 h-0.5 bg-white/50"></div> */}
                {/* Icon circle */}
                <div className="w-16 h-16 p-2 rounded-full bg-black/50 shadow-2xl backdrop-blur-3xl flex items-center justify-center z-10">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.474 28.4373C16.7527 28.6389 17.211 28.8718 17.849 28.8718L17.8472 28.8698C18.3716 28.8698 19.0151 28.714 19.7796 28.2593L21.9411 26.976C21.9723 26.9723 22.0199 26.9705 22.051 26.976L24.2144 28.2613C25.9176 29.2714 27.0194 28.8058 27.5235 28.4373C28.0295 28.0669 28.8124 27.1575 28.3669 25.2105L27.8554 22.994C27.8572 22.9592 27.8719 22.9024 27.8884 22.8712L29.6796 21.0654C30.5688 20.1726 30.9024 19.1093 30.5963 18.1468C30.2901 17.1861 29.4046 16.5133 28.1597 16.2988L25.8735 15.9228C25.8387 15.9063 25.791 15.8715 25.7635 15.844L24.4967 13.2885C23.9247 12.1316 23.0154 11.4661 21.9997 11.4643H21.9943C20.9804 11.4643 20.0674 12.126 19.488 13.2865L18.2194 15.844C18.1937 15.8697 18.1442 15.9063 18.1112 15.9228L15.8232 16.2988C14.5931 16.5114 13.7094 17.1806 13.4032 18.1395C13.0952 19.1001 13.427 20.1652 14.3125 21.0599L16.1056 22.8694C16.1221 22.9006 16.1367 22.9574 16.1385 22.9922L15.6252 25.2123C15.1816 27.1575 15.9662 28.0688 16.474 28.4373ZM16.1821 19.0338C16.2074 19.0626 16.2345 19.0934 16.2669 19.1258L18.0838 20.9591C18.7181 21.6008 19.0243 22.6677 18.8318 23.5569C18.8318 23.5624 18.8299 23.5697 18.8281 23.5752L18.3074 25.8301C18.3035 25.8488 18.2996 25.8669 18.2959 25.8842C18.2908 25.9078 18.286 25.9301 18.2818 25.9512C18.2943 25.9441 18.3072 25.9367 18.3204 25.9291C18.3381 25.919 18.3563 25.9085 18.3752 25.898L20.5698 24.5946C21.4058 24.1014 22.6084 24.1032 23.4334 24.5982L25.6188 25.8962C25.6483 25.9142 25.6777 25.9308 25.7046 25.9459L25.714 25.9512C25.7085 25.9222 25.702 25.8912 25.6952 25.8589C25.693 25.8483 25.6907 25.8375 25.6884 25.8266L25.1677 23.5752C25.1677 23.5752 25.164 23.5624 25.164 23.5569C24.9715 22.6677 25.2796 21.6007 25.9102 20.9609L27.7307 19.1258C27.7543 19.1021 27.7752 19.0794 27.7946 19.0583C27.8022 19.05 27.8096 19.0419 27.8169 19.0341C27.8125 19.0331 27.8081 19.0321 27.8035 19.0311C27.7737 19.0244 27.7401 19.0168 27.7051 19.0121L25.3749 18.6289L25.3474 18.6234C24.5297 18.4712 23.6992 17.8533 23.3289 17.1218L22.0328 14.5093C22.0199 14.48 22.0071 14.4543 21.9943 14.4323C21.9814 14.4562 21.9668 14.4837 21.9521 14.5131L20.6632 17.1127C20.2892 17.8533 19.4643 18.4694 18.6521 18.6234C18.6411 18.6252 18.63 18.6271 18.6209 18.6289L16.2816 19.0139C16.2692 19.0163 16.2572 19.0186 16.2456 19.0208C16.2233 19.0251 16.2023 19.0291 16.1821 19.0338Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.6221 41.089C20.3353 41.4942 21.1585 41.7087 22 41.7087C22.8415 41.7087 23.6647 41.4942 24.3779 41.089L24.4182 41.0652C34.8187 34.6797 39.875 27.801 39.875 20.0386C39.875 15.338 37.9903 10.8867 34.5657 7.50607C31.1593 4.14374 26.697 2.29199 22 2.29199C17.303 2.29199 12.8407 4.14374 9.43433 7.50607C6.01149 10.8867 4.125 15.3361 4.125 20.0386C4.125 30.2906 12.9433 36.9474 19.5763 41.0614L19.6221 41.089ZM23.0029 38.7093C22.4089 39.0356 21.593 39.0374 20.999 38.7093V38.7112C14.9288 34.9419 6.875 28.9101 6.875 20.0404C6.875 11.9114 13.8013 5.04378 22 5.04378C30.1987 5.04378 37.125 11.9114 37.125 20.0404C37.125 26.7614 32.505 32.8683 23.0029 38.7093Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* content container */}
            <div className="relative flex flex-col md:flex-row gap-5 justify-between items-center overflow-hidden p-6 md:p-6 lg:p-[34px] rounded-[30px] bg-[linear-gradient(90deg,rgba(0,0,0,0.41)_0%,rgba(0,0,0,0.41)_100%)] rounded-xl]">
              {/* left side */}
              <div>
                <div className="mb-4 md:mb-6">
                  <h2 className="text-2xl md:text-3xl lg:text-[32px] bukra-regular text-white">
                    Sector-Specific Incentives
                  </h2>
                </div>
                <div className="rounded-2xl transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex-1 md:max-w-6/7">
                      <h3 className="text-[#00A7A2] bukra-medium text-xl md:text-2xl mb-3">
                        ICT, Pharma, Automotive, MedTech
                      </h3>
                      <p className="text-[#F5F5F5]/70 bukra-regular text-base md:text-lg">
                        Export credits, R&D grants, and targeted fiscal support
                        for priority industries
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* right side */}
              <div className="flex items-center gap-5 md:gap-7">
                <button className="p-3 rounded-full transition-all group-hover:scale-110">
                  <svg
                    width="47"
                    height="47"
                    viewBox="0 0 47 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="47"
                      height="47"
                      rx="23.5"
                      fill="black"
                      fillOpacity="0.31"
                    />
                    <path
                      d="M28.8966 16.5865C29.4474 16.5865 29.9135 17.0526 29.9135 17.6034V27.7716C29.9135 28.3648 29.4474 28.7885 28.8966 28.7885C28.3035 28.7885 27.8798 28.3648 27.8798 27.7716V20.0607L18.0928 29.8477C17.6692 30.2713 17.0337 30.2713 16.6523 29.8477C16.2287 29.4663 16.2287 28.8308 16.6523 28.4495L26.4393 18.6626H18.7284C18.1352 18.6626 17.7115 18.1965 17.7115 17.6457C17.7115 17.0526 18.1352 16.6289 18.7284 16.6289H28.8966V16.5865Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>

              {/* shape background */}
              <div className=" absolute -top-11 -left-11 w-[697.75px] h-[361px] rounded-full overflow-hidden">
                <svg
                  width="571"
                  height="219"
                  viewBox="0 0 571 219"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8" filter="url(#filter0_f_20396_22247)">
                    <ellipse
                      cx="85.5824"
                      cy="-74.7839"
                      rx="348.873"
                      ry="130.895"
                      transform="rotate(-19.7487 85.5824 -74.7839)"
                      fill="#003A5D"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_20396_22247"
                      x="-399.014"
                      y="-398.532"
                      width="969.193"
                      height="647.497"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="76.6193"
                        result="effect1_foregroundBlur_20396_22247"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-full text-base md:text-lg bukra-medium transition-all shadow-lg hover:shadow-xl hover:scale-105">
            <span>Explore Incentives</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9985 5.96231C17.752 5.73371 17.4267 5.60691 17.1498 5.52714C16.8544 5.44204 16.5165 5.38402 16.1686 5.34339C15.4713 5.26197 14.6536 5.24162 13.8884 5.24823C13.1188 5.25488 12.3816 5.28907 11.8383 5.32142C11.5661 5.33762 11.3415 5.35342 11.1845 5.36522C11.1059 5.37112 11.0442 5.37602 11.0018 5.37948L10.953 5.38352L10.94 5.38462L10.935 5.38506C10.5223 5.421 10.2169 5.78467 10.2529 6.19732C10.2888 6.60995 10.653 6.91527 11.0657 6.87935L11.0682 6.87914L11.0791 6.87821L11.1236 6.87452C11.163 6.87131 11.2216 6.86666 11.2968 6.86101C11.4473 6.84971 11.664 6.83444 11.9274 6.81877C12.4551 6.78735 13.1653 6.75453 13.9013 6.74817C14.6417 6.74178 15.3879 6.76243 15.9946 6.83327C16.0287 6.83724 16.062 6.84135 16.0947 6.84559L5.46967 17.4706C5.17678 17.7635 5.17678 18.2384 5.46967 18.5313C5.76256 18.8242 6.23744 18.8242 6.53033 18.5313L17.1578 7.90379C17.1596 7.91814 17.1614 7.93264 17.1631 7.94728C17.2334 8.54711 17.2544 9.29754 17.2486 10.0475C17.2429 10.7928 17.211 11.5166 17.1803 12.0556C17.1651 12.3246 17.1501 12.5465 17.1391 12.7007C17.1336 12.7778 17.129 12.8379 17.1258 12.8784L17.1222 12.9241L17.121 12.9386C17.0868 13.3514 17.3936 13.7138 17.8063 13.7481C18.2191 13.7824 18.5816 13.4751 18.6159 13.0623L18.6163 13.0577L18.6174 13.0445L18.6213 12.9947C18.6247 12.9514 18.6295 12.8883 18.6352 12.808C18.6467 12.6475 18.6622 12.4182 18.6779 12.1407C18.7094 11.5868 18.7426 10.8369 18.7485 10.0591C18.7545 9.28587 18.7338 8.46366 18.6529 7.7727C18.6125 7.42843 18.5547 7.09394 18.4689 6.80484C18.3907 6.54138 18.258 6.203 17.9985 5.96231Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
