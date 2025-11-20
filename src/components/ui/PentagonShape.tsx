interface Prop {
  isActive: boolean;
  color: string;
}

export default function PentagonShape(prop: Prop) {
  return (
    <svg
      className="w-full h-full cursor-pointer"
      viewBox="0 0 373 357"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M239.413 60.3994H132.827C112.934 60.3994 94.5597 71.0074 84.6177 88.2371L31.3247 180.538C21.3827 197.759 21.3827 218.984 31.3247 236.204L84.6177 328.506C94.5597 345.726 112.943 356.343 132.827 356.343H239.413C259.307 356.343 277.681 345.736 287.623 328.506L340.916 236.204C350.858 218.984 350.858 197.759 340.916 180.538L287.623 88.2371C277.681 71.0167 259.297 60.3994 239.413 60.3994Z"
        fill={prop.isActive ? "url(#paint0_linear_116_10219)" : "white"}
      />
      <g filter={prop.isActive ? "url(#filter0_d_116_10219)" : undefined}>
        <path
          d="M233.72 69H138.539C118.195 69 99.3993 79.8518 89.2228 97.4755L41.6324 179.9C31.4559 197.515 31.4559 219.228 41.6324 236.842L89.2228 319.267C99.3993 336.881 118.195 347.742 138.539 347.742H233.72C254.063 347.742 272.859 336.891 283.036 319.267L330.626 236.842C340.803 219.228 340.803 197.515 330.626 179.9L283.036 97.4755C272.859 79.8612 254.063 69 233.72 69Z"
          fill="white"
        />
      </g>

      {prop.isActive && (
        <rect
          x="160.03"
          y="279.906"
          width="51.0826"
          height="51.08"
          rx="25.54"
          stroke={prop.color}
        />
      )}

      <rect
        x="163.53"
        y="283.404"
        width="44.0826"
        height="44.0826"
        rx="22.0413"
        fill={prop.color}
      />
      <path
        d="M184.486 314.439L177.81 307.445C177.452 307.048 177.452 306.451 177.849 306.094C178.247 305.736 178.843 305.736 179.201 306.134L184.247 311.419V297.868C184.247 297.351 184.645 296.914 185.201 296.914C185.718 296.914 186.155 297.351 186.155 297.868V311.419L191.162 306.134C191.519 305.736 192.155 305.736 192.513 306.094C192.91 306.451 192.91 307.048 192.552 307.445L185.877 314.439C185.678 314.637 185.439 314.717 185.201 314.717C184.923 314.717 184.684 314.637 184.486 314.439Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_116_10219"
          x="0"
          y="0"
          width="372.259"
          height="347.743"
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
          <feOffset dy="-35" />
          <feGaussianBlur stdDeviation="17" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.505882 0 0 0 0 0.290196 0 0 0 0 0.596078 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_116_10219"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_116_10219"
            result="shape"
          />
        </filter>

        <linearGradient
          id="paint0_linear_116_10219"
          x1="185.99"
          y1="59.9673"
          x2="191.99"
          y2="357.467"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0401177" stopColor="white" />
          <stop offset="0.3" stopColor="#F6F6F6" />
          <stop offset="0.77" stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_116_10219"
          x1="318.99"
          y1="216.967"
          x2="273.99"
          y2="216.967"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#D4D4D4" />
        </linearGradient>
      </defs>
    </svg>
  );
}


