"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaIndustry,
  FaGem,
  FaTruck,
  FaBolt,
  FaPills,
  FaNetworkWired,
  FaLeaf,
  FaRocket,
  FaCalendar,
  FaArrowRight,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { LazyMotion, domAnimation, m } from "framer-motion";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  marginTop?: string;
  sectorIds: string[]; // Array of sector IDs this news belongs to
}

interface Sector {
  id: string;
  name: string;
  icon: IconType;
}

const newsItems: NewsItem[] = [
  // Sector 1 - Advanced Manufacturing (9 items)
  {
    id: "news-1",
    title: "Working Regulations",
    description:
      "Get ready to explore three unique zones that celebrate the cultural heritage of food through a rich, multisensory experience.",
    date: "Oct 2025, Riyadh, Saudi Arabia",
    image: "/blogs/1.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-1"],
  },
  {
    id: "news-8",
    title: "Technology Innovation Summit",
    description:
      "Get ready to explore three unique zones that celebrate the cultural heritage of food through a rich, multisensory experience.",
    date: "November 2025, Riyadh, Saudi Arabia",
    image: "/blogs/5.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-1"],
  },
  {
    id: "news-9",
    title: "Advanced Manufacturing Expo 2025",
    description:
      "Discover the latest innovations in manufacturing technology and industrial automation transforming the future of production.",
    date: "December 2025, Jeddah, Saudi Arabia",
    image: "/blogs/1.png",
    marginTop: "md:mt-[50px]",
    sectorIds: ["sector-1"],
  },
  {
    id: "news-10",
    title: "Industry 4.0 Conference",
    description:
      "Join leading manufacturers and technology experts to explore digital transformation in industrial sectors.",
    date: "January 2026, Riyadh, Saudi Arabia",
    image: "/blogs/2.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-1"],
  },
  {
    id: "news-11",
    title: "Smart Factory Solutions",
    description:
      "Learn about cutting-edge smart manufacturing solutions that optimize production efficiency and sustainability.",
    date: "February 2026, Dammam, Saudi Arabia",
    image: "/blogs/3.png",
    marginTop: "md:mt-[0px]",
    sectorIds: ["sector-1"],
  },
  {
    id: "news-12",
    title: "Robotics & Automation Forum",
    description:
      "Explore the future of robotics and automation in manufacturing processes and industrial applications.",
    date: "March 2026, Riyadh, Saudi Arabia",
    image: "/blogs/4.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-1"],
  },
  {
    id: "news-13",
    title: "Sustainable Manufacturing Initiative",
    description:
      "Discover eco-friendly manufacturing practices and green technology solutions for sustainable production.",
    date: "April 2026, Jeddah, Saudi Arabia",
    image: "/blogs/5.png",
    marginTop: "md:mt-[50px]",
    sectorIds: ["sector-1"],
  },
  {
    id: "news-14",
    title: "Precision Engineering Summit",
    description:
      "Connect with precision engineering experts and learn about advanced manufacturing techniques and quality control.",
    date: "May 2026, Riyadh, Saudi Arabia",
    image: "/blogs/1.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-1"],
  },
  {
    id: "news-15",
    title: "Manufacturing Excellence Awards",
    description:
      "Celebrate outstanding achievements in manufacturing innovation and recognize industry leaders driving transformation.",
    date: "June 2026, Riyadh, Saudi Arabia",
    image: "/blogs/2.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-1"],
  },

  // Sector 2 - Mining & Metals (9 items)
  {
    id: "news-6",
    title: "Riyadh Oases - FoodSphere",
    description:
      "Get ready to explore three unique zones that celebrate the cultural heritage of food through a rich, multisensory experience.",
    date: "Sep 2025, Riyadh, Saudi Arabia",
    image: "/blogs/3.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-2"],
  },
  {
    id: "news-16",
    title: "Mining Technology Conference 2025",
    description:
      "Explore the latest advancements in mining technology, extraction methods, and sustainable mining practices.",
    date: "November 2025, Riyadh, Saudi Arabia",
    image: "/blogs/4.png",
    marginTop: "md:mt-[50px]",
    sectorIds: ["sector-2"],
  },
  {
    id: "news-17",
    title: "Metals & Minerals Expo",
    description:
      "Discover opportunities in the metals and minerals sector, from extraction to processing and distribution.",
    date: "December 2025, Jeddah, Saudi Arabia",
    image: "/blogs/5.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-2"],
  },
  {
    id: "news-18",
    title: "Gold & Precious Metals Forum",
    description:
      "Join industry leaders to discuss trends in gold, precious metals trading, and market opportunities.",
    date: "January 2026, Riyadh, Saudi Arabia",
    image: "/blogs/1.png",
    marginTop: "md:mt-[0px]",
    sectorIds: ["sector-2"],
  },
  {
    id: "news-19",
    title: "Sustainable Mining Practices",
    description:
      "Learn about environmentally responsible mining operations and rehabilitation strategies for sustainable extraction.",
    date: "February 2026, Dammam, Saudi Arabia",
    image: "/blogs/2.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-2"],
  },
  {
    id: "news-20",
    title: "Iron & Steel Industry Summit",
    description:
      "Explore developments in the iron and steel sector, including production technology and market dynamics.",
    date: "March 2026, Riyadh, Saudi Arabia",
    image: "/blogs/3.png",
    marginTop: "md:mt-[50px]",
    sectorIds: ["sector-2"],
  },
  {
    id: "news-21",
    title: "Mineral Processing Innovation",
    description:
      "Discover cutting-edge mineral processing technologies and techniques for efficient resource extraction.",
    date: "April 2026, Jeddah, Saudi Arabia",
    image: "/blogs/4.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-2"],
  },
  {
    id: "news-22",
    title: "Mining Safety & Training",
    description:
      "Focus on mining safety standards, training programs, and best practices for safe mining operations.",
    date: "May 2026, Riyadh, Saudi Arabia",
    image: "/blogs/5.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-2"],
  },
  {
    id: "news-23",
    title: "Copper & Base Metals Forum",
    description:
      "Connect with experts in copper and base metals trading, processing, and global market opportunities.",
    date: "June 2026, Riyadh, Saudi Arabia",
    image: "/blogs/1.png",
    marginTop: "md:mt-[0px]",
    sectorIds: ["sector-2"],
  },

  // Sector 3 - Transport & Logistics (9 items)
  {
    id: "news-24",
    title: "Logistics Innovation Summit",
    description:
      "Explore the future of logistics and transportation, from smart warehousing to last-mile delivery solutions.",
    date: "October 2025, Riyadh, Saudi Arabia",
    image: "/blogs/2.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-3"],
  },
  {
    id: "news-25",
    title: "Port Infrastructure Development",
    description:
      "Learn about major port infrastructure projects and their impact on regional trade and logistics.",
    date: "November 2025, Jeddah, Saudi Arabia",
    image: "/blogs/3.png",
    marginTop: "md:mt-[50px]",
    sectorIds: ["sector-3"],
  },
  {
    id: "news-26",
    title: "Supply Chain Excellence",
    description:
      "Discover strategies for optimizing supply chains, reducing costs, and improving delivery performance.",
    date: "December 2025, Riyadh, Saudi Arabia",
    image: "/blogs/4.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-3"],
  },
  {
    id: "news-27",
    title: "Railway Infrastructure Conference",
    description:
      "Explore railway expansion projects and high-speed rail networks connecting major cities across the region.",
    date: "January 2026, Riyadh, Saudi Arabia",
    image: "/blogs/5.png",
    marginTop: "md:mt-[0px]",
    sectorIds: ["sector-3"],
  },
  {
    id: "news-28",
    title: "Air Cargo & Freight Forum",
    description:
      "Connect with air cargo operators and freight forwarders to discuss opportunities in air transportation.",
    date: "February 2026, Riyadh, Saudi Arabia",
    image: "/blogs/1.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-3"],
  },
  {
    id: "news-29",
    title: "E-commerce Logistics Solutions",
    description:
      "Learn about logistics solutions tailored for e-commerce businesses and online retail fulfillment.",
    date: "March 2026, Jeddah, Saudi Arabia",
    image: "/blogs/2.png",
    marginTop: "md:mt-[50px]",
    sectorIds: ["sector-3"],
  },
  {
    id: "news-30",
    title: "Cold Chain Management",
    description:
      "Explore temperature-controlled logistics and cold chain solutions for food, pharmaceuticals, and perishables.",
    date: "April 2026, Riyadh, Saudi Arabia",
    image: "/blogs/3.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-3"],
  },
  {
    id: "news-31",
    title: "Last-Mile Delivery Innovation",
    description:
      "Discover innovative last-mile delivery solutions, from drones to autonomous vehicles and delivery networks.",
    date: "May 2026, Riyadh, Saudi Arabia",
    image: "/blogs/4.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-3"],
  },
  {
    id: "news-32",
    title: "International Trade & Logistics",
    description:
      "Navigate international trade regulations, customs procedures, and cross-border logistics challenges.",
    date: "June 2026, Dammam, Saudi Arabia",
    image: "/blogs/5.png",
    marginTop: "md:mt-[0px]",
    sectorIds: ["sector-3"],
  },

  // Sector 4 - Energy (9 items)
  {
    id: "news-5",
    title: "Technology Innovation Summit",
    description:
      "Get ready to explore three unique zones that celebrate the cultural heritage of food through a rich, multisensory experience.",
    date: "November 2025, Riyadh, Saudi Arabia",
    image: "/blogs/5.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-4"],
  },
  {
    id: "news-33",
    title: "Renewable Energy Conference 2025",
    description:
      "Explore the future of renewable energy, from solar and wind power to sustainable energy solutions.",
    date: "November 2025, Riyadh, Saudi Arabia",
    image: "/blogs/1.png",
    marginTop: "md:mt-[50px]",
    sectorIds: ["sector-4"],
  },
  {
    id: "news-34",
    title: "Oil & Gas Innovation Forum",
    description:
      "Discover cutting-edge technologies in oil and gas exploration, extraction, and refining processes.",
    date: "December 2025, Jeddah, Saudi Arabia",
    image: "/blogs/2.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-4"],
  },
  {
    id: "news-35",
    title: "Solar Energy Expansion",
    description:
      "Learn about major solar energy projects and their impact on the national energy grid and sustainability goals.",
    date: "January 2026, Riyadh, Saudi Arabia",
    image: "/blogs/3.png",
    marginTop: "md:mt-[0px]",
    sectorIds: ["sector-4"],
  },
  {
    id: "news-36",
    title: "Energy Storage Solutions",
    description:
      "Explore battery technology, energy storage systems, and grid stability solutions for renewable energy integration.",
    date: "February 2026, Riyadh, Saudi Arabia",
    image: "/blogs/4.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-4"],
  },
  {
    id: "news-37",
    title: "Green Hydrogen Initiative",
    description:
      "Connect with green hydrogen producers and learn about opportunities in clean hydrogen energy.",
    date: "March 2026, Jeddah, Saudi Arabia",
    image: "/blogs/5.png",
    marginTop: "md:mt-[50px]",
    sectorIds: ["sector-4"],
  },
  {
    id: "news-38",
    title: "Nuclear Energy Development",
    description:
      "Explore nuclear energy programs, safety standards, and peaceful applications of nuclear technology.",
    date: "April 2026, Riyadh, Saudi Arabia",
    image: "/blogs/1.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-4"],
  },
  {
    id: "news-39",
    title: "Energy Efficiency Summit",
    description:
      "Discover strategies for improving energy efficiency in industries, buildings, and infrastructure.",
    date: "May 2026, Riyadh, Saudi Arabia",
    image: "/blogs/2.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-4"],
  },
  {
    id: "news-40",
    title: "Power Grid Modernization",
    description:
      "Learn about smart grid technologies, grid modernization projects, and digital energy infrastructure.",
    date: "June 2026, Dammam, Saudi Arabia",
    image: "/blogs/3.png",
    marginTop: "md:mt-[0px]",
    sectorIds: ["sector-4"],
  },

  // Sector 5 - Pharma & Biotech (9 items)
  {
    id: "news-2",
    title: "Global Health Exhibition 2025",
    description:
      "Get ready to explore three unique zones that celebrate the cultural heritage of food through a rich, multisensory experience.",
    date: "September 2025, Riyadh, Saudi Arabia",
    image: "/blogs/2.png",
    marginTop: "md:mt-[50px]",
    sectorIds: ["sector-5"],
  },
  {
    id: "news-41",
    title: "Pharmaceutical Innovation Summit",
    description:
      "Explore the latest developments in pharmaceutical research, drug discovery, and medical breakthroughs.",
    date: "October 2025, Riyadh, Saudi Arabia",
    image: "/blogs/4.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-5"],
  },
  {
    id: "news-42",
    title: "Biotechnology Research Forum",
    description:
      "Connect with biotech researchers and learn about advances in genetic engineering and biotechnology applications.",
    date: "November 2025, Riyadh, Saudi Arabia",
    image: "/blogs/5.png",
    marginTop: "md:mt-[0px]",
    sectorIds: ["sector-5"],
  },
  {
    id: "news-43",
    title: "Vaccine Development Conference",
    description:
      "Learn about vaccine research, development processes, and public health initiatives in immunization.",
    date: "December 2025, Jeddah, Saudi Arabia",
    image: "/blogs/1.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-5"],
  },
  {
    id: "news-44",
    title: "Clinical Trials & Research",
    description:
      "Discover opportunities in clinical research, trials management, and regulatory compliance in pharma.",
    date: "January 2026, Riyadh, Saudi Arabia",
    image: "/blogs/2.png",
    marginTop: "md:mt-[50px]",
    sectorIds: ["sector-5"],
  },
  {
    id: "news-45",
    title: "Medical Device Innovation",
    description:
      "Explore cutting-edge medical devices, diagnostic tools, and healthcare technology solutions.",
    date: "February 2026, Riyadh, Saudi Arabia",
    image: "/blogs/3.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-5"],
  },
  {
    id: "news-46",
    title: "Personalized Medicine Forum",
    description:
      "Learn about personalized medicine, genomics, and precision healthcare approaches tailored to individual patients.",
    date: "March 2026, Jeddah, Saudi Arabia",
    image: "/blogs/4.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-5"],
  },
  {
    id: "news-47",
    title: "Pharma Manufacturing Excellence",
    description:
      "Connect with pharmaceutical manufacturers and explore production technologies and quality assurance.",
    date: "April 2026, Riyadh, Saudi Arabia",
    image: "/blogs/5.png",
    marginTop: "md:mt-[0px]",
    sectorIds: ["sector-5"],
  },
  {
    id: "news-48",
    title: "Health Tech Innovation Hub",
    description:
      "Discover health technology startups, digital health solutions, and telemedicine innovations.",
    date: "May 2026, Riyadh, Saudi Arabia",
    image: "/blogs/1.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-5"],
  },

  // Sector 6 - Information & Communication Technology (9 items)
  {
    id: "news-4",
    title: "Global Cybersecurity Forum - GCF",
    description:
      "Get ready to explore three unique zones that celebrate the cultural heritage of food through a rich, multisensory experience.",
    date: "September 2025, Riyadh, Saudi Arabia",
    image: "/blogs/4.png",
    marginTop: "md:mt-[0px]",
    sectorIds: ["sector-6"],
  },
  {
    id: "news-7",
    title: "Global Cybersecurity Forum - GCF",
    description:
      "Get ready to explore three unique zones that celebrate the cultural heritage of food through a rich, multisensory experience.",
    date: "September 2025, Riyadh, Saudi Arabia",
    image: "/blogs/4.png",
    marginTop: "md:mt-[0px] ",
    sectorIds: ["sector-6"],
  },
  {
    id: "news-49",
    title: "Artificial Intelligence Summit",
    description:
      "Explore AI applications, machine learning technologies, and their impact on business and society.",
    date: "October 2025, Riyadh, Saudi Arabia",
    image: "/blogs/2.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-6"],
  },
  {
    id: "news-50",
    title: "Cloud Computing Conference",
    description:
      "Discover cloud infrastructure, SaaS solutions, and digital transformation strategies for businesses.",
    date: "November 2025, Riyadh, Saudi Arabia",
    image: "/blogs/3.png",
    marginTop: "md:mt-[50px]",
    sectorIds: ["sector-6"],
  },
  {
    id: "news-51",
    title: "5G & Connectivity Forum",
    description:
      "Learn about 5G network deployment, IoT connectivity, and next-generation telecommunications infrastructure.",
    date: "December 2025, Jeddah, Saudi Arabia",
    image: "/blogs/5.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-6"],
  },
  {
    id: "news-52",
    title: "Blockchain & Cryptocurrency",
    description:
      "Explore blockchain technology, cryptocurrency markets, and decentralized finance applications.",
    date: "January 2026, Riyadh, Saudi Arabia",
    image: "/blogs/1.png",
    marginTop: "md:mt-[0px]",
    sectorIds: ["sector-6"],
  },
  {
    id: "news-53",
    title: "Data Analytics & Big Data",
    description:
      "Connect with data scientists and learn about big data analytics, business intelligence, and data-driven insights.",
    date: "February 2026, Riyadh, Saudi Arabia",
    image: "/blogs/2.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-6"],
  },
  {
    id: "news-54",
    title: "Software Development Excellence",
    description:
      "Discover software engineering best practices, agile methodologies, and innovative development tools.",
    date: "March 2026, Jeddah, Saudi Arabia",
    image: "/blogs/3.png",
    marginTop: "md:mt-[50px]",
    sectorIds: ["sector-6"],
  },
  {
    id: "news-55",
    title: "E-commerce & Digital Commerce",
    description:
      "Learn about e-commerce platforms, digital payment systems, and online retail technologies.",
    date: "April 2026, Riyadh, Saudi Arabia",
    image: "/blogs/4.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-6"],
  },

  // Sector 7 - Environment Services (9 items)
  {
    id: "news-3",
    title: "Riyadh Oases - FoodSphere",
    description:
      "Get ready to explore three unique zones that celebrate the cultural heritage of food through a rich, multisensory experience.",
    date: "Sep 2025, Riyadh, Saudi Arabia",
    image: "/blogs/3.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-7"],
  },
  {
    id: "news-56",
    title: "Environmental Sustainability Summit",
    description:
      "Explore environmental protection initiatives, sustainability practices, and green business solutions.",
    date: "October 2025, Riyadh, Saudi Arabia",
    image: "/blogs/5.png",
    marginTop: "md:mt-[50px]",
    sectorIds: ["sector-7"],
  },
  {
    id: "news-57",
    title: "Waste Management Innovation",
    description:
      "Discover advanced waste management systems, recycling technologies, and circular economy solutions.",
    date: "November 2025, Riyadh, Saudi Arabia",
    image: "/blogs/1.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-7"],
  },
  {
    id: "news-58",
    title: "Water Conservation Forum",
    description:
      "Learn about water conservation technologies, desalination projects, and sustainable water management.",
    date: "December 2025, Jeddah, Saudi Arabia",
    image: "/blogs/2.png",
    marginTop: "md:mt-[0px]",
    sectorIds: ["sector-7"],
  },
  {
    id: "news-59",
    title: "Air Quality Management",
    description:
      "Connect with environmental experts to discuss air quality monitoring, pollution control, and clean air initiatives.",
    date: "January 2026, Riyadh, Saudi Arabia",
    image: "/blogs/3.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-7"],
  },
  {
    id: "news-60",
    title: "Climate Change Adaptation",
    description:
      "Explore climate resilience strategies, adaptation measures, and carbon reduction technologies.",
    date: "February 2026, Riyadh, Saudi Arabia",
    image: "/blogs/4.png",
    marginTop: "md:mt-[50px]",
    sectorIds: ["sector-7"],
  },
  {
    id: "news-61",
    title: "Green Building & Construction",
    description:
      "Discover sustainable building materials, green construction practices, and LEED certification standards.",
    date: "March 2026, Jeddah, Saudi Arabia",
    image: "/blogs/5.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-7"],
  },
  {
    id: "news-62",
    title: "Environmental Monitoring Systems",
    description:
      "Learn about environmental monitoring technologies, sensor networks, and real-time data collection systems.",
    date: "April 2026, Riyadh, Saudi Arabia",
    image: "/blogs/1.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-7"],
  },
  {
    id: "news-63",
    title: "Biodiversity Conservation",
    description:
      "Connect with conservation experts and learn about biodiversity protection, wildlife preservation, and ecosystem restoration.",
    date: "May 2026, Riyadh, Saudi Arabia",
    image: "/blogs/2.png",
    marginTop: "md:mt-[0px]",
    sectorIds: ["sector-7"],
  },

  // Sector 8 - Aerospace & Defense (9 items)
  {
    id: "news-64",
    title: "Aerospace Innovation Forum",
    description:
      "Explore the latest developments in aerospace technology, aircraft manufacturing, and aviation innovation.",
    date: "October 2025, Riyadh, Saudi Arabia",
    image: "/blogs/3.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-8"],
  },
  {
    id: "news-65",
    title: "Defense Technology Exhibition",
    description:
      "Discover advanced defense systems, military technology, and security solutions for national defense.",
    date: "November 2025, Riyadh, Saudi Arabia",
    image: "/blogs/4.png",
    marginTop: "md:mt-[50px]",
    sectorIds: ["sector-8"],
  },
  {
    id: "news-66",
    title: "Space Technology Conference",
    description:
      "Learn about space exploration programs, satellite technology, and commercial space opportunities.",
    date: "December 2025, Jeddah, Saudi Arabia",
    image: "/blogs/5.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-8"],
  },
  {
    id: "news-67",
    title: "Aviation Industry Summit",
    description:
      "Connect with aviation leaders to discuss aircraft maintenance, airline operations, and aviation infrastructure.",
    date: "January 2026, Riyadh, Saudi Arabia",
    image: "/blogs/1.png",
    marginTop: "md:mt-[0px]",
    sectorIds: ["sector-8"],
  },
  {
    id: "news-68",
    title: "Drone Technology & Applications",
    description:
      "Explore commercial drone applications, UAV technology, and innovative uses in various industries.",
    date: "February 2026, Riyadh, Saudi Arabia",
    image: "/blogs/2.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-8"],
  },
  {
    id: "news-69",
    title: "Military Aviation Development",
    description:
      "Learn about military aircraft programs, defense procurement, and strategic defense capabilities.",
    date: "March 2026, Jeddah, Saudi Arabia",
    image: "/blogs/3.png",
    marginTop: "md:mt-[50px]",
    sectorIds: ["sector-8"],
  },
  {
    id: "news-70",
    title: "Aerospace Manufacturing Excellence",
    description:
      "Discover aerospace manufacturing processes, precision engineering, and quality standards in aviation.",
    date: "April 2026, Riyadh, Saudi Arabia",
    image: "/blogs/4.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-8"],
  },
  {
    id: "news-71",
    title: "Cybersecurity in Defense",
    description:
      "Explore cybersecurity strategies for defense systems, critical infrastructure protection, and digital defense.",
    date: "May 2026, Riyadh, Saudi Arabia",
    image: "/blogs/5.png",
    marginTop: "md:mt-0",
    sectorIds: ["sector-8"],
  },
  {
    id: "news-72",
    title: "International Defense Partnerships",
    description:
      "Connect with international defense contractors and explore opportunities in defense collaboration and partnerships.",
    date: "June 2026, Riyadh, Saudi Arabia",
    image: "/blogs/1.png",
    marginTop: "md:mt-[0px]",
    sectorIds: ["sector-8"],
  },
];

const sectors: Sector[] = [
  { id: "sector-1", name: "Advanced Manufacturing", icon: FaIndustry },
  { id: "sector-2", name: "Mining & Metals", icon: FaGem },
  { id: "sector-3", name: "Transport & Logistics", icon: FaTruck },
  { id: "sector-4", name: "Energy", icon: FaBolt },
  { id: "sector-5", name: "Pharma & Biotech", icon: FaPills },
  {
    id: "sector-6",
    name: "Information & Communication Technology",
    icon: FaNetworkWired,
  },
  { id: "sector-7", name: "Environment Services", icon: FaLeaf },
  { id: "sector-8", name: "Aerospace & Defense", icon: FaRocket },
];

export default function Blogs() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedSector, setSelectedSector] = useState<string | null>(null);

  useEffect(() => {
    // Set initial scroll position to half a card (responsive)
    if (scrollContainerRef.current) {
      const isMobile = window.innerWidth < 768;
      const scrollPosition = isMobile ? 193 : 193; // Half of 386px card
      scrollContainerRef.current.scrollTop = scrollPosition;
    }
  }, []);

  // Reset scroll position when filter changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 500;
    }
  }, [selectedSector]);

  const handleSectorClick = (sectorId: string) => {
    // Toggle sector selection - if clicking the same sector, deselect it
    if (selectedSector === sectorId) {
      setSelectedSector(null);
    } else {
      setSelectedSector(sectorId);
    }
  };

  // Filter news items based on selected sector
  const filteredNewsItems = selectedSector
    ? newsItems.filter((item) => item.sectorIds.includes(selectedSector))
    : newsItems;

  const handleExploreNews = () => {
    // TODO: Implement navigation to news page
    console.log("Navigate to news page");
  };

  const handleNewsClick = (newsId: string) => {
    // TODO: Implement navigation to news detail page
    console.log("Navigate to news detail:", newsId);
  };

  return (
    <section
      className="px-4 sm:px-6 md:px-8 relative"
      style={{
        background:
          "linear-gradient(245.07deg, #E6F6F6 11.73%, #ECE4F0 65.87%)",
      }}
    >
      <div className="absolute bottom-0 left-0 w-[300px] h-[400px] md:w-full md:h-[550px] lg:w-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/blogs/bg.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "bottom left",
          }}
        ></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Left Column - Content */}
          <div className="py-4 sm:py-6 md:py-10 my-auto lg:py-12 flex flex-col justify-between min-h-[600px]">
            <LazyMotion features={domAnimation}>
              {/* title */}
              <m.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0
                }}
                viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2,
                }}
                className="mb-auto"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bukra-bold text-black  mb-4 sm:mb-5 md:mb-6 leading-tight">
                  news.
                </h2>
                <p className="text-[#171717] text-base sm:text-lg md:text-[22px] bukra-regular mb-6 sm:mb-7 md:mb-8 leading-relaxed">
                  Explore our collection of resources to guide you through the
                  investment opportunities in Saudi Arabia.
                </p>
              </m.div>

              {/* content */}
              <m.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0
                }}
                viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.4,
                }}
                className="mt-auto"
              >
                <div className="mb-6 sm:mb-7 md:mb-8">
                  <h3 className="text-[#171717] bukra-regular mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">
                    Browse by sector:
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {sectors.map((sector) => {
                      const Icon = sector.icon;
                      const isActive = selectedSector === sector.id;
                      return (
                        <button
                          key={sector.id}
                          onClick={() => handleSectorClick(sector.id)}
                          aria-label={`Filter by ${sector.name} sector`}
                          aria-pressed={isActive}
                          className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full transition-all duration-200 ${
                            isActive
                              ? "bg-[#814A98] text-white shadow-md"
                              : "bg-white text-[#404040] hover:bg-gray-50"
                          }`}
                        >
                          <Icon
                            className={`text-xs sm:text-sm md:text-base shrink-0 ${
                              isActive ? "text-white" : ""
                            }`}
                            aria-hidden="true"
                          />
                          <span
                            className={`whitespace-nowrap bukra-regular text-sm sm:text-base ${
                              isActive ? "text-white" : "text-[#404040]"
                            }`}
                          >
                            {sector.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                <button
                  onClick={handleExploreNews}
                  aria-label="Explore all news"
                  className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#814A98] text-white rounded-full text-sm sm:text-base  transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 w-full sm:w-auto justify-center"
                >
                  Explore News
                  <FaArrowRight
                    className="text-xs -rotate-45 sm:text-sm text-white"
                    aria-hidden="true"
                  />
                </button>
              </m.div>
            </LazyMotion>
          </div>

          {/* Right Column - Scrollable News Cards */}
          <div className="relative w-full ">
            <div
              ref={scrollContainerRef}
              className="h-[500px] sm:h-[600px] md:h-[700px] lg:h-[900px] overflow-y-auto pr-2 sm:pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
                {/* Left Column */}
                <div className="flex-1 flex flex-col gap-3 sm:gap-4">
                  {filteredNewsItems
                    .filter((_, index) => index % 2 === 0)
                    .map((item) => (
                      <article
                        key={item.id}
                        onClick={() => handleNewsClick(item.id)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleNewsClick(item.id);
                          }
                        }}
                        tabIndex={0}
                        role="button"
                        aria-label={`Read more about ${item.title}`}
                        className={`h-[250px] sm:h-[300px] md:h-[350px] lg:h-[386px] relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2`}
                      >
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="object-cover group-hover:scale-105 transition-transform duration-300 w-full h-full"
                        />
                        {/* Gradient overlay from bottom to top */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent" />

                        {/* Content overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white z-10">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-white/90 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                            {item.description}
                          </p>
                          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/90">
                            <FaCalendar
                              className="text-white/80 shrink-0 text-xs sm:text-sm"
                              aria-hidden="true"
                            />
                            <span className="text-white/90 truncate">
                              {item.date}
                            </span>
                          </div>
                        </div>
                      </article>
                    ))}
                </div>
                {/* Right Column */}
                <div className="flex-1 mt-[50px] flex flex-col gap-3 sm:gap-4">
                  {filteredNewsItems
                    .filter((_, index) => index % 2 === 1)
                    .map((item) => (
                      <article
                        key={item.id}
                        onClick={() => handleNewsClick(item.id)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleNewsClick(item.id);
                          }
                        }}
                        tabIndex={0}
                        role="button"
                        aria-label={`Read more about ${item.title}`}
                        className={`${
                          item.marginTop || ""
                        } h-[250px] sm:h-[300px] md:h-[350px] lg:h-[386px] relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2`}
                      >
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="object-cover group-hover:scale-105 transition-transform duration-300 w-full h-full"
                        />
                        {/* Gradient overlay from bottom to top */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent" />

                        {/* Content overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white z-10">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-white/90 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                            {item.description}
                          </p>
                          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/90">
                            <FaCalendar
                              className="text-white/80 shrink-0 text-xs sm:text-sm"
                              aria-hidden="true"
                            />
                            <span className="text-white/90 truncate">
                              {item.date}
                            </span>
                          </div>
                        </div>
                      </article>
                    ))}
                </div>
              </div>
            </div>
            {/* Fade effect at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24  to-transparent pointer-events-none z-20"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
