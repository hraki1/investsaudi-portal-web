import React from 'react';
import { ICTWorkforceData, SectorReadySkillsData, TalentEcosystemData } from '@/data/talentData';
import { GoArrowUpRight } from 'react-icons/go';

// Generic DataGrid Component
interface DataGridProps<T> {
  data: T[];
  template: (item: T, index: number) => React.ReactNode;
  className?: string;
}

const DataGrid = <T,>({ data, template, className = "bukra-normal" }: DataGridProps<T>) => (
  <ul className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 ${className}`}>
    {data.map((item, index) => (
      <li
        key={index}
        className={`flex flex-row py-2 md:py-7 px-2 md:px-4 h-full items-center ${
          // Add bottom border on mobile for all except last item
          index < data.length - 2 ? 'md:border-b' : ''
          } ${
          // Add right border on desktop for first item in each row (even indices) - including bottom row
          index % 2 === 0 && index < data.length - 1 ? 'md:border-r' : ''
          } ${
          // Add bottom border on desktop for items that are not in the last row (exclude last two items)
          index < data.length - 2 ? 'md:border-b' : ''
          } border-neutral-300`}
      >
        {template(item, index)}
      </li>
    ))}
  </ul>
);

// Talent data components
const TechTalentData: React.FC = () => (
  <DataGrid
    data={ICTWorkforceData}
    template={(item) => (
      <dl className="flex justify-between flex-col-reverse text-center w-full">
        <dt className="text-base text-gray-600">{item.title}</dt>
        <dd className="text-2xl md:text-4xl font-semibold" style={{ color: item.color }}>{item.value}</dd>
      </dl>
    )}
  />
);

const FinanceTalentData: React.FC = () => (
  <DataGrid
    data={TalentEcosystemData}
    template={(item) => (
      <img src={`sectors/talent/${item}`} alt="Talent Ecosystem" className="object-cover w-full" />
    )}
  />
);

const SkillsData: React.FC = () => (
  <DataGrid
    data={SectorReadySkillsData}
    template={(item) => {
      const iconWidth = item.icons.length < 3 ? 'h-8' : 'h-6';
      
      return (
        <div className="h-full">
          <h1
          className="py-4 px-2 rounded-2xl text-center bukra-regular text-base"
          style={{background: `linear-gradient(180deg, ${item.color} 0%, #FFF 100%)` }}
          >
            {item.title}
          </h1>
          <ul className="flex flex-row flex-wrap gap-2 justify-center">
            {item.icons.map((icon, idx) => (
              <li key={idx} className={` flex items-center my-2`}>
                <img src={`sectors/talent/${icon}`} alt={icon} className={`${iconWidth} object-contain`} />              
              </li>
            ))}
          </ul>
        </div>
      );
    }}
  />
);

// Talent data interface and array
interface TalentData {
  title: string;
  image: string;
  color: string;
  data: React.ComponentType;
}

const talentData: TalentData[] = [
  {
    title: "A Large and Skilled ICT Workforce",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop",
    color: "#814A98",
    data: TechTalentData
  },
  {
    title: "A Talent Ecosystem Built for Emerging Technologies",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
    color: "#00A7A2",
    data: FinanceTalentData
  },
  {
    title: "Sector Ready Skills and Capability Programs",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
    color: "#001A2A",
    data: SkillsData
  }
];

interface TalentCardProps {
  talent: TalentData;
}

const TalentCard: React.FC<TalentCardProps> = ({ talent }) => {
  const DataComponent = talent.data;

  return (
    <div className="font-bukra flex flex-col overflow-hidden h-full">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden border-tr rounded-tr-4xl">
          <img
          src={talent.image}
          alt={talent.title}
          className="object-cover w-full h-full"
        />

      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1">
        {/* Title */}
        <h3
          className="flex flex-col items-center md:items-start py-4 px-6 text-xl md:text-2xl bukra-medium text-[#001A2A]"
          style={{ borderLeftColor: talent.color, borderLeftWidth: '4px' }}
        >
          {talent.title}
        </h3>

        {/* Data Component */}
        <div className="flex-1">
          <DataComponent />
        </div>
      </div>
    </div>
  );
};

const Footer: React.FC = () => (
  <footer className="bukra-regular rounded-3xl p-10 relative overflow-hidden flex flex-row items-center justify-between gap-4 w-[90%] mx-auto"
    style={{
      background: "linear-gradient(90deg, #003A5D 0%, #003A5D 50%, #003A5D 100%)"
    }}

  >
    <div className='relative z-20 text-white flex flex-col gap-2 justify-between'>
      <h3 className="bukra-mnedium text-3xl font-semibold">Ready to access Saudi’s ICT talent ecosystem</h3>
      <p className='text[21px]'>Talk to a talent advisor or explore training partnerships.</p>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-start gap-4 mt-8 text-[18px]">
        <button className="flex items-center justify-center gap-2 bg-teal-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 hover:bg-teal-700 shadow-lg hover:shadow-xl transform hover:scale-105 min-w-40">
          Register Now
          <GoArrowUpRight />
        </button>
        <button className="flex items-center justify-center gap-2 bg-white text-black border-2 px-8 py-3 rounded-full font-medium transition-all duration-200 hover:bg-teal-600 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 min-w-40">
          Explore Talent
          <GoArrowUpRight color="teal"/>
        </button>
      </div>

    </div>
    {/* Footer Background SVG */}
    <div className="absolute bottom-0 left-0 right-0 w-full h-[200px] overflow-hidden z-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/sectors/talent/footerBg.svg")',
          backgroundPosition: "bottom center",
        }}
      ></div>
    </div>

    <div className="absolute -right-9 z-0" style={{
      backgroundImage: 'url("/sectors/talent/footerBg-2.svg")',
      backgroundPosition: "bottom center",
      width: "399px",
      height: "239px",
      opacity: "0.4"
    }}>

    </div>


    {/* Colored blur divs - Right side */}

    <div
      className="absolute -right-20 top-0 z-0"
      style={{
        backgroundImage: 'url("/sectors/talent/footerBg-violet.svg")',
        backgroundPosition: "bottom center",
        width: "418.644px",
        height: "157.073px",
        transform: "rotate(-19.749deg)",
        borderRadius: "418.644px",
        background: "var(--Foundation-Violet-Normal, #814A98)",
        filter: "blur(45.971160888671875px)"
      }}
    ></div>
    <div className="absolute -right-20 -bottom-60 z-0" style={{
      backgroundColor: "#00A7A2",
      opacity: 0.4,
      filter: "blur(40.17637634277344px)",
      width: "471.334px",
      height: "310.801px",
      transform: "rotate(-25.562deg)"
    }}>
    </div>


    <div className="rounded-full w-36 h-36 bg-white hidden md:flex items-center justify-center p-12 relative z-20">
      <img src="/sectors/talent/whatsThisLogo.svg" alt="MCIT Logo" className="object-contain w-full h-full" />
    </div>
  </footer>
);

const TalentLayout: React.FC = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden bg-white">
      {/* Background SVG - Top Right */}
      <div className="absolute top-0 right-0 w-[300px] h-[400px] md:w-[400px] md:h-[550px] lg:w-[500px] lg:h-[600px] overflow-hidden opacity-60">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/sectors/talent/bg.svg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "top right",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
        {/* Section Header */}
        <div>
          <h2 className="text-4xl text-gray-900 mb-4 bukra-bold">
            World Class Digital Talent & Innovation Ecosystem
          </h2>
          <p className="text-xl text-neutral-800 max-w-3xl bukra-regular">
            A fast growing pool of ICT professionals supported by national academies, global
            partnerships and sector specific capability programs.
          </p>
        </div>

        {/* 3-Column Flex Layout */}
        <div className="flex flex-col lg:flex-row border border-neutral-300 rounded-4xl relative">


          {talentData.map((talent, index) => (
            <div key={index} className={`flex-1 border-neutral-300 p-7 relative z-10 ${index < talentData.length - 1 ? 'lg:pr-7 lg:border-r' : ''}`}>
              <TalentCard talent={talent} />
            </div>
          ))}
        </div>



        <Footer />
      </div>
    </section>
  );
};


export default TalentLayout;