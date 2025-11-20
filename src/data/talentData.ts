import { title } from "process";

export interface TalentData {
  title: string;
  image: string;
  color: string;
}

export const talentStaticData = [
  {
    title: "Technology & Innovation",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop",
    color: "#814A98"
  },
  {
    title: "Finance & Investment", 
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
    color: "#00A7A2"
  },
  {
    title: "Engineering & Infrastructure",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop", 
    color: "#001A2A"
  }
];

export const ICTWorkforceData = [
    {
        title: "ICT Professionals",
        value: "384,000",
        color: "#00A7A2"
    },
    {
        title: "Graduates annually",
        value: "45,000+",
        color: "#814A98"
    },
    {
        title: "Female participation in ICT",
        value: "35%",
        color: "#A01E64"
    },
    {
        title: "regional software engineering and cyber workforce",
        value: "Top",
        color: "#393284"
    }
]

export const TalentEcosystemData = ["kcast.png", "21384768 1.png", "dgaLogo.svg", "tuwaiqAcademy.svg", "sdaia.png", "devac.png"]

export const SectorReadySkillsData = [
    {
        title: "Cloud engineering programs",
        icons: ["gcloud.png", "aws.png", "oracle.png"],
        color: "#D9F2F1"
    },
    {
      title: "Cybersecurity certifications ",
      icons: ["sans.png", "DGA2.png"],
      color: "#ECE4F0",
    },
    {
      title: "Telecom and networking programs",
      icons: ["stc.png", "stca.png"],
      color: "#D9E1E7",
    },
    {
      title: "Electronics and hardware tracks",
      icons: ["21384768 1.png", "kacst.png"],
      color: "#F1DDE8",
    },
];