interface KeyFigure {
  value: string;
  label: string;
  change: string;
  trend: string;
  suffix?: string;
}

interface KeyStrategicSector {
  title: string;
  icon: string;
}

interface Opportunity {
  title: string;
  category: string;
  categoryColor: string;
  gradient: string;
}

interface Region {
  key: string;
  name: string;
  keyFigures: KeyFigure[];
  keyStrategicSectors: KeyStrategicSector[];
  keyRegionalProjects: { title: string; image: string }[];
  opportunities: Opportunity[];
}

export const regionData: Region[] = [
  {
    key: "riyadh",
    name: "Riyadh",
    keyFigures: [
      {
        value: "936",
        suffix: "B",
        label: "GDP Ranking",
        change: "100%",
        trend: "up",
      },
      {
        value: "47",
        suffix: "%",
        label: "Private Sector",
        change: "100%",
        trend: "up",
      },
      {
        value: "38",
        suffix: "th",
        label: "Logistics",
        change: "100%",
        trend: "up",
      },
      {
        value: "2.4",
        suffix: "%",
        label: "FDI",
        change: "100%",
        trend: "up",
      },
      {
        value: "8.8",
        suffix: "M",
        label: "Population (2020)",
        change: "10%",
        trend: "up",
      },
      {
        value: "10.7",
        suffix: "%",
        label: "Population Growth (2016 – 2020)",
        change: "100%",
        trend: "up",
      },
      {
        value: "21",
        suffix: "",
        label: "Governorate",
        change: "5%",
        trend: "up",
      },
      {
        value: "380",
        suffix: "K",
        label: "Area In Square Kilometers",
        change: "15%",
        trend: "up",
      },
      {
        value: "1.2",
        suffix: "M",
        label: "Tourist Visits",
        change: "120%",
        trend: "up",
      },
      {
        value: "85",
        suffix: "%",
        label: "Urbanization Rate",
        change: "8%",
        trend: "up",
      },
      {
        value: "450",
        suffix: "K",
        label: "Workforce",
        change: "25%",
        trend: "up",
      },
    ],
    keyStrategicSectors: [
      { title: "Advanced Manufacturing", icon: "/opportunities/1.png" },
      { title: "Aerospace & Defense", icon: "/opportunities/2.png" },
      { title: "Agriculture & Food", icon: "/opportunities/4.png" },
      {
        title: "Environment Services",
        icon: "/opportunities/icons/saudi-tree.png",
      },
      {
        title: "Logistics & Transport",
        icon: "/opportunities/icons/globe.png",
      },
      { title: "Healthcare & Pharma", icon: "/opportunities/icons/imd.png" },
      { title: "ICT & Digital", icon: "/opportunities/icons/radio.png" },
      {
        title: "Financial Services",
        icon: "/opportunities/icons/coins-01.png",
      },
    ],
    keyRegionalProjects: [
      {
        title: "NEOM",
        image: "/opportunities/1.png",
      },
      {
        title: "Red Sea Global",
        image: "/opportunities/2.png",
      },
      {
        title: "Qiddiya",
        image: "/opportunities/3.png",
      },
      {
        title: "Saudi Arabia Emblem",
        image: "/opportunities/1.png",
      },
      {
        title: "Diriyah Gate",
        image: "/opportunities/2.png",
      },
      {
        title: "Riyadh Metro",
        image: "/opportunities/3.png",
      },
      {
        title: "King Salman Park",
        image: "/opportunities/1.png",
      },
      {
        title: "Sports Boulevard",
        image: "/opportunities/2.png",
      },
      {
        title: "Green Riyadh",
        image: "/opportunities/3.png",
      },
      {
        title: "ROSHN Riyadh",
        image: "/opportunities/1.png",
      },
    ],
    opportunities: [
      {
        title:
          "Development of a facility to manufacture steel pipes for water transmission",
        category: "Environmental Services",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#003d3a]",
      },
      {
        title:
          "Development of a facility to manufacture steel pipes for water transmission",
        category: "Environmental Services",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/40",
      },
      {
        title:
          "Development of a facility to manufacture steel pipes for water transmission",
        category: "Manufacturing",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#003d3a]/40",
      },
      {
        title:
          "Development of a facility to manufacture steel pipes for water transmission",
        category: "Aerospace",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/40",
      },
      {
        title: "Smart Mobility Solutions",
        category: "Mobility",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#0b3d3a]/40",
      },
      {
        title: "Digital Infrastructure Hubs",
        category: "Technology",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/30",
      },
      {
        title: "Sustainable Urban Communities",
        category: "Real Estate",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#015b58]/40",
      },
      {
        title: "Healthcare Innovation Parks",
        category: "Healthcare",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/35",
      },
    ],
  },
  {
    key: "makkah",
    name: "Makkah",
    keyFigures: [
      {
        value: "850 B",
        label: "GDP Ranking",
        change: "95%",
        trend: "up",
      },
      {
        value: "42%",
        label: "Private Sector",
        change: "88%",
        trend: "up",
      },
      {
        value: "35 th",
        label: "Logistics",
        change: "92%",
        trend: "up",
      },
      {
        value: "2.1%",
        label: "FDI",
        change: "85%",
        trend: "up",
      },
    ],
    keyStrategicSectors: [
      {
        title: "Tourism & Hospitality",
        icon: "/opportunities/icons/city-01.png",
      },
      { title: "Religious Tourism", icon: "/opportunities/icons/spa.png" },
      {
        title: "Real Estate Development",
        icon: "/opportunities/icons/tree/green.png",
      },
      { title: "Smart Cities", icon: "/opportunities/icons/saudi-tree.png" },
      { title: "Infrastructure", icon: "/opportunities/icons/globe.png" },
      { title: "Healthcare Services", icon: "/opportunities/icons/imd.png" },
      { title: "Retail & Commerce", icon: "/opportunities/icons/radio.png" },
      { title: "Transportation", icon: "/opportunities/icons/coins-01.png" },
    ],
    keyRegionalProjects: [
      {
        title: "Makkah Development",
        image: "/opportunities/1.png",
      },
      {
        title: "Madinah Expansion",
        image: "/opportunities/2.png",
      },
      {
        title: "Tourism Hub",
        image: "/opportunities/3.png",
      },
      {
        title: "Smart Infrastructure",
        image: "/opportunities/1.png",
      },
    ],
    opportunities: [
      {
        title: "Religious Tourism",
        category: "Tourism",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#003d3a]/40",
      },
      {
        title: "Real Estate",
        category: "Real Estate",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/40",
      },
      {
        title: "Smart Cities",
        category: "Technology",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#003d3a]/40",
      },
      {
        title: "Hospitality & Tourism Development",
        category: "Tourism",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/40",
      },
      {
        title: "Pilgrim Experience Centers",
        category: "Hospitality",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#0b3d3a]/40",
      },
      {
        title: "Heritage Preservation Districts",
        category: "Culture",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/30",
      },
      {
        title: "Integrated Retail Destinations",
        category: "Retail",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#015b58]/40",
      },
      {
        title: "Wellness & Health Resorts",
        category: "Healthcare",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/35",
      },
    ],
  },
  {
    key: "eastern",
    name: "Eastern Province",
    keyFigures: [
      {
        value: "920 B",
        label: "GDP Ranking",
        change: "105%",
        trend: "up",
      },
      {
        value: "52%",
        label: "Private Sector",
        change: "98%",
        trend: "up",
      },
      {
        value: "32 th",
        label: "Logistics",
        change: "102%",
        trend: "up",
      },
      {
        value: "3.1%",
        label: "FDI",
        change: "110%",
        trend: "up",
      },
    ],
    keyStrategicSectors: [
      {
        title: "Energy & Oil",
        icon: "/opportunities/opportunities/icons/city-01.png",
      },
      {
        title: "Petrochemicals",
        icon: "/opportunities/opportunities/icons/spa.png",
      },
      {
        title: "Logistics Hub",
        icon: "/opportunities/opportunities/icons/tree/green.png",
      },
      {
        title: "Industrial Parks",
        icon: "/opportunities/opportunities/icons/saudi-tree.png",
      },
      {
        title: "Port Development",
        icon: "/opportunities/opportunities/icons/globe.png",
      },
      {
        title: "Technology Sector",
        icon: "/opportunities/opportunities/icons/imd.png",
      },
      {
        title: "Mining & Minerals",
        icon: "/opportunities/opportunities/icons/radio.png",
      },
      {
        title: "Export Zones",
        icon: "/opportunities/opportunities/icons/coins-01.png",
      },
    ],
    keyRegionalProjects: [
      {
        title: "King Salman Energy Park",
        image: "/opportunities/1.png",
      },
      {
        title: "Port of Dammam",
        image: "/opportunities/2.png",
      },
      {
        title: "Petrochemical Complex",
        image: "/opportunities/3.png",
      },
      {
        title: "Industrial Zone",
        image: "/opportunities/1.png",
      },
    ],
    opportunities: [
      {
        title: "Industrial Parks",
        category: "Industrial",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#003d3a]/40",
      },
      {
        title: "Port Development",
        category: "Logistics",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/40",
      },
      {
        title: "Technology Sector",
        category: "Technology",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#003d3a]/40",
      },
      {
        title: "Petrochemical Manufacturing",
        category: "Energy",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/40",
      },
      {
        title: "Renewable Hydrogen Facilities",
        category: "Energy",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#0b3d3a]/40",
      },
      {
        title: "Advanced Logistics Corridors",
        category: "Logistics",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/30",
      },
      {
        title: "Marine Services Expansion",
        category: "Maritime",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#015b58]/40",
      },
      {
        title: "Digital Innovation Free Zones",
        category: "Technology",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/35",
      },
    ],
  },
  {
    key: "al-madinah",
    name: "Al-Madinah",
    keyFigures: [
      {
        value: "1.8",
        suffix: "M",
        label: "Population",
        change: "12%",
        trend: "up",
      },
      {
        value: "589",
        suffix: "B",
        label: "GDP Contribution",
        change: "95%",
        trend: "up",
      },
      {
        value: "45%",
        suffix: "",
        label: "Private Sector",
        change: "88%",
        trend: "up",
      },
      {
        value: "2.8%",
        suffix: "",
        label: "FDI Growth",
        change: "92%",
        trend: "up",
      },
    ],
    keyStrategicSectors: [
      { title: "Religious Tourism", icon: "/opportunities/icons/city-01.png" },
      { title: "Healthcare Services", icon: "/opportunities/icons/spa.png" },
      { title: "Real Estate", icon: "/opportunities/icons/tree/green.png" },
      { title: "Infrastructure", icon: "/opportunities/icons/saudi-tree.png" },
      { title: "Smart Cities", icon: "/opportunities/icons/globe.png" },
      { title: "Transportation", icon: "/opportunities/icons/imd.png" },
      { title: "Education", icon: "/opportunities/icons/radio.png" },
      { title: "Retail & Commerce", icon: "/opportunities/icons/coins-01.png" },
    ],
    keyRegionalProjects: [
      {
        title: "Madinah Metro",
        image: "/opportunities/1.png",
      },
      {
        title: "Knowledge Economic City",
        image: "/opportunities/2.png",
      },
      {
        title: "Al-Madinah Development",
        image: "/opportunities/3.png",
      },
      {
        title: "Smart Infrastructure",
        image: "/opportunities/1.png",
      },
    ],
    opportunities: [
      {
        title: "Religious Tourism Infrastructure",
        category: "Tourism",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#003d3a]/40",
      },
      {
        title: "Healthcare Facility Development",
        category: "Healthcare",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/40",
      },
      {
        title: "Real Estate Development",
        category: "Real Estate",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#003d3a]/40",
      },
      {
        title: "Education Hub Development",
        category: "Education",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/40",
      },
    ],
  },
  {
    key: "al-qassim",
    name: "Al-Qassim",
    keyFigures: [
      {
        value: "1.4",
        suffix: "M",
        label: "Population",
        change: "8%",
        trend: "up",
      },
      {
        value: "285",
        suffix: "B",
        label: "GDP Contribution",
        change: "88%",
        trend: "up",
      },
      {
        value: "38%",
        suffix: "",
        label: "Private Sector",
        change: "82%",
        trend: "up",
      },
      {
        value: "1.9%",
        suffix: "",
        label: "FDI Growth",
        change: "75%",
        trend: "up",
      },
    ],
    keyStrategicSectors: [
      { title: "Agriculture", icon: "/opportunities/icons/city-01.png" },
      { title: "Food Processing", icon: "/opportunities/icons/spa.png" },
      { title: "Livestock", icon: "/opportunities/icons/tree/green.png" },
      { title: "Agri-Tech", icon: "/opportunities/icons/saudi-tree.png" },
      { title: "Retail & Commerce", icon: "/opportunities/icons/globe.png" },
      { title: "Logistics", icon: "/opportunities/icons/imd.png" },
      { title: "Education", icon: "/opportunities/icons/radio.png" },
      { title: "Healthcare", icon: "/opportunities/icons/coins-01.png" },
    ],
    keyRegionalProjects: [
      {
        title: "Agricultural Development",
        image: "/opportunities/1.png",
      },
      {
        title: "Food Processing Zone",
        image: "/opportunities/2.png",
      },
      {
        title: "Livestock Hub",
        image: "/opportunities/3.png",
      },
      {
        title: "Agri-Tech Park",
        image: "/opportunities/1.png",
      },
    ],
    opportunities: [
      {
        title: "Agricultural Processing Facility",
        category: "Agriculture",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#003d3a]/40",
      },
      {
        title: "Food Export Zone",
        category: "Export",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/40",
      },
      {
        title: "Agri-Tech Innovation Center",
        category: "Technology",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#003d3a]/40",
      },
      {
        title: "Livestock Processing Plant",
        category: "Agriculture",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/40",
      },
    ],
  },
  {
    key: "hail",
    name: "Hail",
    keyFigures: [
      {
        value: "700",
        suffix: "K",
        label: "Population",
        change: "6%",
        trend: "up",
      },
      {
        value: "185",
        suffix: "B",
        label: "GDP Contribution",
        change: "85%",
        trend: "up",
      },
      {
        value: "35%",
        suffix: "",
        label: "Private Sector",
        change: "78%",
        trend: "up",
      },
      {
        value: "1.5%",
        suffix: "",
        label: "FDI Growth",
        change: "70%",
        trend: "up",
      },
    ],
    keyStrategicSectors: [
      { title: "Agriculture", icon: "/opportunities/icons/city-01.png" },
      { title: "Mining", icon: "/opportunities/icons/spa.png" },
      { title: "Tourism", icon: "/opportunities/icons/tree/green.png" },
      { title: "Livestock", icon: "/opportunities/icons/saudi-tree.png" },
      { title: "Manufacturing", icon: "/opportunities/icons/globe.png" },
      { title: "Logistics", icon: "/opportunities/icons/imd.png" },
      { title: "Real Estate", icon: "/opportunities/icons/radio.png" },
      { title: "Retail", icon: "/opportunities/icons/coins-01.png" },
    ],
    keyRegionalProjects: [
      {
        title: "Mining Development",
        image: "/opportunities/1.png",
      },
      {
        title: "Tourism Complex",
        image: "/opportunities/2.png",
      },
      {
        title: "Agricultural Zone",
        image: "/opportunities/3.png",
      },
      {
        title: "Industrial Park",
        image: "/opportunities/1.png",
      },
    ],
    opportunities: [
      {
        title: "Mining Operation Facility",
        category: "Mining",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#003d3a]/40",
      },
      {
        title: "Tourism Development Project",
        category: "Tourism",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/40",
      },
      {
        title: "Agricultural Processing Plant",
        category: "Agriculture",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#003d3a]/40",
      },
      {
        title: "Industrial Manufacturing Facility",
        category: "Manufacturing",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/40",
      },
    ],
  },
  {
    key: "tabouk",
    name: "Tabouk",
    keyFigures: [
      {
        value: "950",
        suffix: "K",
        label: "Population",
        change: "9%",
        trend: "up",
      },
      {
        value: "220",
        suffix: "B",
        label: "GDP Contribution",
        change: "90%",
        trend: "up",
      },
      {
        value: "40%",
        suffix: "",
        label: "Private Sector",
        change: "85%",
        trend: "up",
      },
      {
        value: "2.2%",
        suffix: "",
        label: "FDI Growth",
        change: "88%",
        trend: "up",
      },
    ],
    keyStrategicSectors: [
      { title: "Tourism", icon: "/opportunities/icons/city-01.png" },
      { title: "Logistics", icon: "/opportunities/icons/spa.png" },
      { title: "Agriculture", icon: "/opportunities/icons/tree/green.png" },
      { title: "Mining", icon: "/opportunities/icons/saudi-tree.png" },
      { title: "Real Estate", icon: "/opportunities/icons/globe.png" },
      { title: "Transportation", icon: "/opportunities/icons/imd.png" },
      { title: "Retail", icon: "/opportunities/icons/radio.png" },
      { title: "Healthcare", icon: "/opportunities/icons/coins-01.png" },
    ],
    keyRegionalProjects: [
      {
        title: "NEOM Gateway",
        image: "/opportunities/1.png",
      },
      {
        title: "Tourism Development",
        image: "/opportunities/2.png",
      },
      {
        title: "Logistics Hub",
        image: "/opportunities/3.png",
      },
      {
        title: "Agricultural Zone",
        image: "/opportunities/1.png",
      },
    ],
    opportunities: [
      {
        title: "Tourism Infrastructure Development",
        category: "Tourism",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#003d3a]/40",
      },
      {
        title: "Logistics Terminal",
        category: "Logistics",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/40",
      },
      {
        title: "Mining Operation",
        category: "Mining",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#003d3a]/40",
      },
      {
        title: "Real Estate Development",
        category: "Real Estate",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/40",
      },
    ],
  },
  {
    key: "al-baha",
    name: "Al-Baha",
    keyFigures: [
      {
        value: "480",
        suffix: "K",
        label: "Population",
        change: "5%",
        trend: "up",
      },
      {
        value: "125",
        suffix: "B",
        label: "GDP Contribution",
        change: "80%",
        trend: "up",
      },
      {
        value: "32%",
        suffix: "",
        label: "Private Sector",
        change: "75%",
        trend: "up",
      },
      {
        value: "1.3%",
        suffix: "",
        label: "FDI Growth",
        change: "68%",
        trend: "up",
      },
    ],
    keyStrategicSectors: [
      { title: "Tourism", icon: "/opportunities/icons/city-01.png" },
      { title: "Agriculture", icon: "/opportunities/icons/spa.png" },
      { title: "Real Estate", icon: "/opportunities/icons/tree/green.png" },
      { title: "Healthcare", icon: "/opportunities/icons/saudi-tree.png" },
      { title: "Education", icon: "/opportunities/icons/globe.png" },
      { title: "Retail", icon: "/opportunities/icons/imd.png" },
      { title: "Hospitality", icon: "/opportunities/icons/radio.png" },
      { title: "Transportation", icon: "/opportunities/icons/coins-01.png" },
    ],
    keyRegionalProjects: [
      {
        title: "Tourism Development",
        image: "/opportunities/1.png",
      },
      {
        title: "Mountain Resort",
        image: "/opportunities/2.png",
      },
      {
        title: "Agricultural Development",
        image: "/opportunities/3.png",
      },
      {
        title: "Healthcare Facility",
        image: "/opportunities/1.png",
      },
    ],
    opportunities: [
      {
        title: "Eco-Tourism Development",
        category: "Tourism",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#003d3a]/40",
      },
      {
        title: "Mountain Resort Development",
        category: "Hospitality",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/40",
      },
      {
        title: "Agricultural Processing",
        category: "Agriculture",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#003d3a]/40",
      },
      {
        title: "Healthcare Services",
        category: "Healthcare",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/40",
      },
    ],
  },
  {
    key: "northern-borders",
    name: "Northern Borders",
    keyFigures: [
      {
        value: "390",
        suffix: "K",
        label: "Population",
        change: "4%",
        trend: "up",
      },
      {
        value: "95",
        suffix: "B",
        label: "GDP Contribution",
        change: "75%",
        trend: "up",
      },
      {
        value: "30%",
        suffix: "",
        label: "Private Sector",
        change: "70%",
        trend: "up",
      },
      {
        value: "1.1%",
        suffix: "",
        label: "FDI Growth",
        change: "65%",
        trend: "up",
      },
    ],
    keyStrategicSectors: [
      { title: "Mining", icon: "/opportunities/icons/city-01.png" },
      { title: "Agriculture", icon: "/opportunities/icons/spa.png" },
      { title: "Logistics", icon: "/opportunities/icons/tree/green.png" },
      { title: "Tourism", icon: "/opportunities/icons/saudi-tree.png" },
      { title: "Real Estate", icon: "/opportunities/icons/globe.png" },
      { title: "Retail", icon: "/opportunities/icons/imd.png" },
      { title: "Transportation", icon: "/opportunities/icons/radio.png" },
      { title: "Healthcare", icon: "/opportunities/icons/coins-01.png" },
    ],
    keyRegionalProjects: [
      {
        title: "Mining Development",
        image: "/opportunities/1.png",
      },
      {
        title: "Border Trade Zone",
        image: "/opportunities/2.png",
      },
      {
        title: "Agricultural Zone",
        image: "/opportunities/3.png",
      },
      {
        title: "Logistics Hub",
        image: "/opportunities/1.png",
      },
    ],
    opportunities: [
      {
        title: "Mining Operation Facility",
        category: "Mining",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#003d3a]/40",
      },
      {
        title: "Border Trade Development",
        category: "Trade",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/40",
      },
      {
        title: "Agricultural Processing",
        category: "Agriculture",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#003d3a]/40",
      },
      {
        title: "Logistics Terminal",
        category: "Logistics",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/40",
      },
    ],
  },
  {
    key: "al-jouf",
    name: "Al-Jouf",
    keyFigures: [
      {
        value: "520",
        suffix: "K",
        label: "Population",
        change: "5%",
        trend: "up",
      },
      {
        value: "135",
        suffix: "B",
        label: "GDP Contribution",
        change: "78%",
        trend: "up",
      },
      {
        value: "33%",
        suffix: "",
        label: "Private Sector",
        change: "73%",
        trend: "up",
      },
      {
        value: "1.4%",
        suffix: "",
        label: "FDI Growth",
        change: "68%",
        trend: "up",
      },
    ],
    keyStrategicSectors: [
      { title: "Agriculture", icon: "/opportunities/icons/city-01.png" },
      { title: "Olive Production", icon: "/opportunities/icons/spa.png" },
      { title: "Livestock", icon: "/opportunities/icons/tree/green.png" },
      { title: "Food Processing", icon: "/opportunities/icons/saudi-tree.png" },
      { title: "Retail", icon: "/opportunities/icons/globe.png" },
      { title: "Real Estate", icon: "/opportunities/icons/imd.png" },
      { title: "Healthcare", icon: "/opportunities/icons/radio.png" },
      { title: "Education", icon: "/opportunities/icons/coins-01.png" },
    ],
    keyRegionalProjects: [
      {
        title: "Olive Production Zone",
        image: "/opportunities/1.png",
      },
      {
        title: "Agricultural Development",
        image: "/opportunities/2.png",
      },
      {
        title: "Food Processing Plant",
        image: "/opportunities/3.png",
      },
      {
        title: "Livestock Hub",
        image: "/opportunities/1.png",
      },
    ],
    opportunities: [
      {
        title: "Olive Processing Facility",
        category: "Agriculture",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#003d3a]/40",
      },
      {
        title: "Agricultural Export Zone",
        category: "Export",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/40",
      },
      {
        title: "Livestock Processing",
        category: "Agriculture",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#003d3a]/40",
      },
      {
        title: "Food Processing Plant",
        category: "Manufacturing",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/40",
      },
    ],
  },
  {
    key: "najran",
    name: "Najran",
    keyFigures: [
      {
        value: "650",
        suffix: "K",
        label: "Population",
        change: "7%",
        trend: "up",
      },
      {
        value: "175",
        suffix: "B",
        label: "GDP Contribution",
        change: "82%",
        trend: "up",
      },
      {
        value: "36%",
        suffix: "",
        label: "Private Sector",
        change: "80%",
        trend: "up",
      },
      {
        value: "1.7%",
        suffix: "",
        label: "FDI Growth",
        change: "77%",
        trend: "up",
      },
    ],
    keyStrategicSectors: [
      { title: "Agriculture", icon: "/opportunities/icons/city-01.png" },
      { title: "Mining", icon: "/opportunities/icons/spa.png" },
      { title: "Tourism", icon: "/opportunities/icons/tree/green.png" },
      { title: "Real Estate", icon: "/opportunities/icons/saudi-tree.png" },
      { title: "Logistics", icon: "/opportunities/icons/globe.png" },
      { title: "Retail", icon: "/opportunities/icons/imd.png" },
      { title: "Healthcare", icon: "/opportunities/icons/radio.png" },
      { title: "Education", icon: "/opportunities/icons/coins-01.png" },
    ],
    keyRegionalProjects: [
      {
        title: "Agricultural Development",
        image: "/opportunities/1.png",
      },
      {
        title: "Mining Operation",
        image: "/opportunities/2.png",
      },
      {
        title: "Tourism Complex",
        image: "/opportunities/3.png",
      },
      {
        title: "Real Estate Development",
        image: "/opportunities/1.png",
      },
    ],
    opportunities: [
      {
        title: "Agricultural Processing",
        category: "Agriculture",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#003d3a]/40",
      },
      {
        title: "Mining Facility",
        category: "Mining",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/40",
      },
      {
        title: "Tourism Development",
        category: "Tourism",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#003d3a]/40",
      },
      {
        title: "Real Estate Project",
        category: "Real Estate",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/40",
      },
    ],
  },
  {
    key: "asseer",
    name: "Asseer",
    keyFigures: [
      {
        value: "2.3",
        suffix: "M",
        label: "Population",
        change: "11%",
        trend: "up",
      },
      {
        value: "385",
        suffix: "B",
        label: "GDP Contribution",
        change: "92%",
        trend: "up",
      },
      {
        value: "43%",
        suffix: "",
        label: "Private Sector",
        change: "87%",
        trend: "up",
      },
      {
        value: "2.5%",
        suffix: "",
        label: "FDI Growth",
        change: "90%",
        trend: "up",
      },
    ],
    keyStrategicSectors: [
      { title: "Tourism", icon: "/opportunities/icons/city-01.png" },
      { title: "Agriculture", icon: "/opportunities/icons/spa.png" },
      { title: "Real Estate", icon: "/opportunities/icons/tree/green.png" },
      { title: "Healthcare", icon: "/opportunities/icons/saudi-tree.png" },
      { title: "Education", icon: "/opportunities/icons/globe.png" },
      { title: "Retail", icon: "/opportunities/icons/imd.png" },
      { title: "Hospitality", icon: "/opportunities/icons/radio.png" },
      { title: "Transportation", icon: "/opportunities/icons/coins-01.png" },
    ],
    keyRegionalProjects: [
      {
        title: "Mountain Tourism",
        image: "/opportunities/1.png",
      },
      {
        title: "Resort Development",
        image: "/opportunities/2.png",
      },
      {
        title: "Agricultural Zone",
        image: "/opportunities/3.png",
      },
      {
        title: "Healthcare Complex",
        image: "/opportunities/1.png",
      },
    ],
    opportunities: [
      {
        title: "Mountain Resort Development",
        category: "Tourism",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#003d3a]/40",
      },
      {
        title: "Eco-Tourism Project",
        category: "Tourism",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/40",
      },
      {
        title: "Agricultural Processing",
        category: "Agriculture",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#003d3a]/40",
      },
      {
        title: "Real Estate Development",
        category: "Real Estate",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/40",
      },
    ],
  },
  {
    key: "jazan",
    name: "Jazan",
    keyFigures: [
      {
        value: "1.6",
        suffix: "M",
        label: "Population",
        change: "10%",
        trend: "up",
      },
      {
        value: "320",
        suffix: "B",
        label: "GDP Contribution",
        change: "89%",
        trend: "up",
      },
      {
        value: "41%",
        suffix: "",
        label: "Private Sector",
        change: "85%",
        trend: "up",
      },
      {
        value: "2.3%",
        suffix: "",
        label: "FDI Growth",
        change: "88%",
        trend: "up",
      },
    ],
    keyStrategicSectors: [
      { title: "Port & Logistics", icon: "/opportunities/icons/city-01.png" },
      { title: "Agriculture", icon: "/opportunities/icons/spa.png" },
      { title: "Manufacturing", icon: "/opportunities/icons/tree/green.png" },
      { title: "Tourism", icon: "/opportunities/icons/saudi-tree.png" },
      { title: "Real Estate", icon: "/opportunities/icons/globe.png" },
      { title: "Export Zones", icon: "/opportunities/icons/imd.png" },
      { title: "Healthcare", icon: "/opportunities/icons/radio.png" },
      { title: "Education", icon: "/opportunities/icons/coins-01.png" },
    ],
    keyRegionalProjects: [
      {
        title: "Jazan Port",
        image: "/opportunities/1.png",
      },
      {
        title: "Economic City",
        image: "/opportunities/2.png",
      },
      {
        title: "Agricultural Zone",
        image: "/opportunities/3.png",
      },
      {
        title: "Export Hub",
        image: "/opportunities/1.png",
      },
    ],
    opportunities: [
      {
        title: "Port Development",
        category: "Logistics",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#003d3a]/40",
      },
      {
        title: "Economic Zone Development",
        category: "Economic",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/40",
      },
      {
        title: "Agricultural Processing",
        category: "Agriculture",
        categoryColor: "bg-[#00A7A2]",
        gradient: "to-[#003d3a]/40",
      },
      {
        title: "Export Manufacturing",
        category: "Manufacturing",
        categoryColor: "bg-purple-500",
        gradient: "to-purple-900/40",
      },
    ],
  },
];
