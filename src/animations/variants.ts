import { Variants } from "framer-motion";

// Premium easing curve
export const premiumEase = [0.16, 1, 0.3, 1] as const;

// Card animations
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.12,
      duration: 1,
      ease: premiumEase,
    },
  }),
  hover: {
    y: -10,
    scale: 1.02,
    transition: {
      duration: 0.6,
      ease: premiumEase,
    },
  },
};

// Card content animations
export const cardContentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (index: number) => ({
    opacity: 1,
    transition: {
      delay: index * 0.12 + 0.5,
      duration: 0.8,
    },
  }),
};

// Card number animations
export const cardNumberVariants: Variants = {
  hidden: { opacity: 0, y: 25, scale: 0.8 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.12 + 0.6,
      duration: 0.9,
      ease: premiumEase,
    },
  }),
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: premiumEase,
    },
  },
};

// Card suffix animations
export const cardSuffixVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: index * 0.12 + 0.8,
      duration: 0.6,
      ease: premiumEase,
    },
  }),
};

// Card title animations
export const cardTitleVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.12 + 0.7,
      duration: 0.7,
      ease: premiumEase,
    },
  }),
};

// Card description animations
export const cardDescriptionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (index: number) => ({
    opacity: 0.8,
    transition: {
      delay: index * 0.12 + 0.85,
      duration: 0.7,
      ease: premiumEase,
    },
  }),
};

// Title section animations
export const titleSectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: premiumEase,
    },
  },
};

export const titleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.8,
      ease: premiumEase,
    },
  },
};

export const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.8,
      ease: premiumEase,
    },
  },
};

// Quote section animations
export const quoteSectionVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: premiumEase,
    },
  },
};

export const quoteCardVariants: Variants = {
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.6,
      ease: premiumEase,
    },
  },
};

export const quoteTextVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.8,
    },
  },
};

export const quoteHighlightVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5 + index * 0.1,
      duration: 0.5,
    },
  }),
};

export const quoteFooterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      duration: 0.8,
      ease: premiumEase,
    },
  },
};

export const quoteImageVariants: Variants = {
  hover: {
    scale: 1.05,
    rotate: 1,
    transition: {
      duration: 0.5,
      ease: premiumEase,
    },
  },
};

export const quoteInfoVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.7,
      duration: 0.8,
      ease: premiumEase,
    },
  },
};

// Tab animations
export const tabButtonVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.6,
      ease: premiumEase,
    },
  }),
  hover: {
    x: 8,
    transition: {
      duration: 0.3,
      ease: premiumEase,
    },
  },
  tap: {
    scale: 0.98,
  },
};

export const tabIndicatorVariants: Variants = {
  active: {
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
};

// Content section animations
export const contentSectionVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: premiumEase,
    },
  },
};

export const contentItemVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.6,
      ease: premiumEase,
    },
  }),
};

export const contentIconVariants: Variants = {
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: {
      duration: 0.6,
      ease: premiumEase,
    },
  },
};

export const contentTextVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (index: number) => ({
    opacity: 1,
    transition: {
      delay: index * 0.1 + 0.2,
      duration: 0.5,
    },
  }),
};

export const contentDividerVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: (index: number) => ({
    scaleX: 1,
    transition: {
      delay: index * 0.1 + 0.3,
      duration: 0.4,
    },
  }),
};

// Tab content transition
export const tabContentVariants: Variants = {
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: premiumEase,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: premiumEase,
    },
  },
};

// Background shape animations (not variants, use with animate prop)
export const backgroundShapeAnimation = {
  rotate: [0, 360],
  scale: [1, 1.1, 1],
  transition: {
    rotate: {
      duration: 20,
      repeat: Infinity,
      ease: "linear" as const,
    },
    scale: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

// Shimmer animation (not a variant, use with animate prop)
export const shimmerAnimation = {
  x: ["-100%", "200%"],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatDelay: 3,
    ease: "linear" as const,
  },
};

// Pulse animation (not a variant, use with animate prop)
export const pulseAnimation = {
  opacity: [0.4, 0.75, 0.4],
  scale: [1, 1.05, 1],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

// Background image hover
export const backgroundImageHover = {
  scale: 1.08,
  transition: {
    duration: 1,
    ease: premiumEase,
  },
};

