"use client";
import { Suspense, useRef } from 'react';
import Badge from "./ActiveBadge";
import Search from "./Search";
import ProjectsList from "./ProjectsList";
import { GoArrowUpRight } from 'react-icons/go';
import { sampleProjects } from '@/data/projects';


export default function BusinessOpportunities() {
  const sectionRef = useRef<HTMLElement>(null);
  // Get initial data from static projects
  const allProjects = sampleProjects;
  
  const initialData = {
    data: allProjects.slice(0, 5), // First page
    pagination: {
      currentPage: 1,
      totalPages: Math.ceil(allProjects.length / 5),
      totalItems: allProjects.length,
      itemsPerPage: 5,
      hasNextPage: allProjects.length > 5,
      hasPreviousPage: false,
    }
  };

  const scrollToTop = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section ref={sectionRef} className="bg-darkBlue mx-auto p-8 bukra-regular">
      <div className="max-w-7xl mx-auto flex flex-col gap-7 space-4">
        <Badge />
        <h1 className="text-white text-5xl font-bold text-center bukra-medium">
          Opportunities your business can capitalise on
        </h1>
        
        <div className="my-4">
          <Search placeholder="Search business opportunities..." />
        </div>

        <Suspense 
          fallback={
            <div className="flex items-center justify-center py-12">
              <div className="flex items-center gap-3 bg-darkBlue/90 px-6 py-4 rounded-lg border border-gray-100/20">
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-blue-500 border-t-transparent"></div>
                <span className="text-white">Loading opportunities...</span>
              </div>
            </div>
          }
        >
          <ProjectsList initialData={initialData} onPageChange={scrollToTop} />
        </Suspense>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button className="flex items-center cursor-pointer gap-2 capitalize text-[18px] font-medium bg-transparent border-white text-white border rounded-full px-5 py-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
            Explore investor services
            <GoArrowUpRight size={16} />
          </button>
          <button className="flex items-center cursor-pointer gap-2 capitalize text-[18px] font-medium bg-teal-600 text-white rounded-full px-5 py-2 transition-all duration-200 hover:bg-teal-400/80 shadow-lg hover:shadow-xl transform hover:scale-105">
            Explore sector
            <GoArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}