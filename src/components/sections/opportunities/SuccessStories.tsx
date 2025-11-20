
import SwiperCards, { type CardContent } from "@/components/shared/shared-section/SwiperCards";

const successStories: CardContent[] = [
  {
    id: 1,
    brand: "LUCID",
    category: "Advanced Manufacturing",
    video: "investor-matchmaking/video.mp4",
    name: "Faisal Sultan",
    title: "VP and Manager Director in the Middle East",
    description:
      "The Lucid AMP-2 facility in Saudi Arabia opened its doors in September 2023 at King Abdullah Economic City (KAEC), marking a significant milestone in Saudi Vision 2030. This state-of-the-art manufacturing plant represents a key investment in the electric automotive industry, contributing to the Kingdom's ambitious goals of diversifying its economy and expanding its manufacturing supply chain.",
    image: "/Hero.png",
    hasVideo: true,
    color: "linear-gradient(270deg, #007D7A 0%, #00A7A2 100%)",
    gradient: "from-[#0F766E] via-[#14B8A6] to-[#2DD4BF]",
    img: "success-stories/card.png",
  },
  {
    id: 2,
    brand: "pwc",
    category: "Professional Services",
    name: "John Smith",
    title: "Managing Partner",
    description:
      "The Lucid AMP-2 facility in Saudi Arabia opened its doors in September 2023 at King Abdullah Economic City (KAEC), marking a significant milestone in Saudi Vision 2030. This state-of-the-art manufacturing plant represents a key investment in the electric automotive industry, contributing to the Kingdom's ambitious goals of diversifying its economy and expanding its manufacturing supply chain.",
    color: "#7C3AED",
    img: "success-stories/card.png",
  },
  {
    id: 3,
    brand: "HUAWEI",
    category: "Technology",
    name: "Li Ming",
    title: "Regional Director",
    description:
      "The Lucid AMP-2 facility in Saudi Arabia opened its doors in September 2023 at King Abdullah Economic City (KAEC), marking a significant milestone in Saudi Vision 2030. This state-of-the-art manufacturing plant represents a key investment in the electric automotive industry, contributing to the Kingdom's ambitious goals of diversifying its economy and expanding its manufacturing supply chain.",
    color: "#DB2777",
    img: "success-stories/card.png",
  },
  {
    id: 4,
    brand: "pwc",
    category: "Professional Services",
    name: "John Smith",
    title: "Managing Partner",
    description:
      "The Lucid AMP-2 facility in Saudi Arabia opened its doors in September 2023 at King Abdullah Economic City (KAEC), marking a significant milestone in Saudi Vision 2030. This state-of-the-art manufacturing plant represents a key investment in the electric automotive industry, contributing to the Kingdom's ambitious goals of diversifying its economy and expanding its manufacturing supply chain.",
    color: "#7C3AED",
    img: "success-stories/card.png",
  },
  {
    id: 5,
    brand: "HUAWEI",
    category: "Technology",
    name: "Li Ming",
    title: "Regional Director",
    description:
      "The Lucid AMP-2 facility in Saudi Arabia opened its doors in September 2023 at King Abdullah Economic City (KAEC), marking a significant milestone in Saudi Vision 2030. This state-of-the-art manufacturing plant represents a key investment in the electric automotive industry, contributing to the Kingdom's ambitious goals of diversifying its economy and expanding its manufacturing supply chain.",
    color: "#DB2777",
    img: "success-stories/card.png",
  },
  {
    id: 6,
    brand: "HUAWEI",
    category: "Technology",
    name: "Li Ming",
    title: "Regional Director",
    description:
      "The Lucid AMP-2 facility in Saudi Arabia opened its doors in September 2023 at King Abdullah Economic City (KAEC), marking a significant milestone in Saudi Vision 2030. This state-of-the-art manufacturing plant represents a key investment in the electric automotive industry, contributing to the Kingdom's ambitious goals of diversifying its economy and expanding its manufacturing supply chain.",
    color: "#DB2777",
    img: "success-stories/card.png",
  },
  {
    id: 7,
    brand: "LUCID",
    category: "Advanced Manufacturing",
    name: "Faisal Sultan",
    title: "VP and Manager Director in the Middle East",
    description:
      "The Lucid AMP-2 facility in Saudi Arabia opened its doors in September 2023 at King Abdullah Economic City (KAEC), marking a significant milestone in Saudi Vision 2030. This state-of-the-art manufacturing plant represents a key investment in the electric automotive industry, contributing to the Kingdom's ambitious goals of diversifying its economy and expanding its manufacturing supply chain.",
    image: "/Hero.png",
    hasVideo: true,
    color: "linear-gradient(270deg, #007D7A 0%, #00A7A2 100%)",
    gradient: "from-[#0F766E] via-[#14B8A6] to-[#2DD4BF]",
    img: "success-stories/card.png",
  },
  {
    id: 8,
    brand: "HUAWEI",
    category: "Technology",
    name: "Li Ming",
    title: "Regional Director",
    description:
      "The Lucid AMP-2 facility in Saudi Arabia opened its doors in September 2023 at King Abdullah Economic City (KAEC), marking a significant milestone in Saudi Vision 2030. This state-of-the-art manufacturing plant represents a key investment in the electric automotive industry, contributing to the Kingdom's ambitious goals of diversifying its economy and expanding its manufacturing supply chain.",
    color: "#DB2777",
    gradient: "from-[#0F766E] via-[#14B8A6] to-[#2DD4BF]",
    img: "success-stories/card.png",
  },
];

export default function SuccessStories() {
  return (
    <SwiperCards
      title="Success Stories"
      cards={successStories}
      backgroundImage="success-stories/bg.png"
      primaryButtonText="View All Stories"
      primaryButtonLink="/stories"
      secondaryButtonText="Join Us For Testimonials"
      secondaryButtonLink="/testimonials"
      backgroundShapeId="filter0_f_success_stories"
    />
  );
}
