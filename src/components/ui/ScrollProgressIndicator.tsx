
import { useEffect, useId, useState } from "react";

interface ScrollProgressIndicatorProps {
  className?: string;
}

const CIRCLE_SIZE = 80;
const STROKE_WIDTH = 10;
const RADIUS = (CIRCLE_SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

const hexToRgb = (hex: string): [number, number, number] => {
  const normalized = hex.replace("#", "");
  const expanded =
    normalized.length === 3
      ? normalized
          .split("")
          .map((char) => `${char}${char}`)
          .join("")
      : normalized;

  const r = parseInt(expanded.slice(0, 2), 16);
  const g = parseInt(expanded.slice(2, 4), 16);
  const b = parseInt(expanded.slice(4, 6), 16);

  return [r, g, b];
};

const rgbToHex = ([r, g, b]: [number, number, number]) =>
  `#${[r, g, b]
    .map((channel) => channel.toString(16).padStart(2, "0"))
    .join("")}`;

const interpolateColor = (start: string, end: string, factor: number) => {
  const [r1, g1, b1] = hexToRgb(start);
  const [r2, g2, b2] = hexToRgb(end);

  const clampedFactor = clamp(factor);

  const result: [number, number, number] = [
    Math.round(r1 + (r2 - r1) * clampedFactor),
    Math.round(g1 + (g2 - g1) * clampedFactor),
    Math.round(b1 + (b2 - b1) * clampedFactor),
  ];

  return rgbToHex(result);
};

export default function ScrollProgressIndicator({
  className = "",
}: ScrollProgressIndicatorProps) {
  const gradientId = useId();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollable <= 0) {
        setProgress(0);
        return;
      }

      const scrolled = window.scrollY / scrollable;
      setProgress(Math.min(1, Math.max(0, scrolled)));
    };

    calculateProgress();

    window.addEventListener("scroll", calculateProgress, { passive: true });
    window.addEventListener("resize", calculateProgress);

    return () => {
      window.removeEventListener("scroll", calculateProgress);
      window.removeEventListener("resize", calculateProgress);
    };
  }, []);

  const strokeDashoffset = CIRCUMFERENCE * (1 - progress);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const textColor = interpolateColor("#FFFFFF", "#1F2937", progress);

  return (
    <div
      className={`fixed right-6 rounded-full md:flex items-center justify-center top-28 z-50 hidden ${className}`}
      role="presentation"
    >
      <button
        type="button"
        onClick={handleClick}
        className="group relative h-[80px] w-[80px] rounded-full outline-none transition focus-visible:ring-4 focus-visible:ring-[#2AA5DE]/30"
        aria-label="Scroll back to top"
      >
        <div className="absolute inset-0 rounded-full  transition group-hover:scale-105 group-active:scale-95" />

        <svg
          width={CIRCLE_SIZE}
          height={CIRCLE_SIZE}
          viewBox={`0 0 ${CIRCLE_SIZE} ${CIRCLE_SIZE}`}
          className="absolute inset-0 -rotate-90"
        >
          <defs>
            <linearGradient
              id={gradientId}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#7A3BD8" />
              <stop offset="100%" stopColor="#2AA5DE" />
            </linearGradient>
          </defs>

          <circle
            cx={CIRCLE_SIZE / 2}
            cy={CIRCLE_SIZE / 2}
            r={RADIUS}
            stroke="#F4FBFB"
            strokeWidth={STROKE_WIDTH}
            fill="none"
          />

          <circle
            cx={CIRCLE_SIZE / 2}
            cy={CIRCLE_SIZE / 2}
            r={RADIUS}
            stroke={`url(#${gradientId})`}
            strokeWidth={STROKE_WIDTH}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>

        <div className="absolute inset-[14px] flex flex-col items-center justify-center rounded-full  text-center shadow-[0_16px_32px_-28px_rgba(15,23,42,0.4)] transition group-hover:scale-[1.03] group-active:scale-95">
          <span
            className="bukra-medium text-[12px] leading-tight transition-colors duration-300"
            style={{ color: textColor }}
          >
            Scroll to
            <br />
            Explore
          </span>
        </div>
      </button>
    </div>
  );
}

