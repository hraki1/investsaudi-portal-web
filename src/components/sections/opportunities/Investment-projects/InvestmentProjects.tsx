/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  HiMagnifyingGlass,
  HiArrowRight,
  HiFunnel,
  HiArrowLeft,
} from "react-icons/hi2";
import {
  investmentProjectsData,
  getFilteredProjects,
} from "@/data/investmentProjects";
import InvestmentProjectCard from "./InvestmentProjectCard";
import SaudiMapInvestmentProjects from "./saudiMap-investment-projects";
import { CiFilter } from "react-icons/ci";
import { TbFilter } from "react-icons/tb";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

interface Project {
  id: number;
  title: string;
  type: string;
  location: string;
  description: string;
  investmentSize: string;
  jobCreation: string;
  gdpImpact: string;
  irr: string;
  paybackPeriod: string;
}

const categories = [
  "All",
  "Tourism Activities",
  "Vehicle Activities",
  "General Services Activities",
  "Financial Activities",
  "Manufacturing Activities",
  "Construction Activities",
];

export default function InvestmentProjects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedActivity, setSelectedActivity] = useState("");
  const [selectedSubActivity, setSelectedSubActivity] = useState("");
  const [selectedMunicipality, setSelectedMunicipality] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);

  // Transform data to component format
  const transformProjectData = (data: any): Project => {
    return {
      id: data.id,
      title: data.title,
      type: data.type,
      location: data.location,
      description: data.description,
      investmentSize: data.investmentSize,
      jobCreation: data.jobCreation,
      gdpImpact: data.gdpImpact,
      irr: data.irr,
      paybackPeriod: data.paybackPeriod,
    };
  };

  // Scroll projects container to top
  const scrollToTop = useCallback(() => {
    if (projectsContainerRef.current) {
      projectsContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);

  // Filter and paginate projects
  const fetchProjects = useCallback(() => {
    setIsLoading(true);

    // Scroll to top when filters change
    scrollToTop();

    // Simulate async operation for better UX
    setTimeout(() => {
      try {
        const filters = {
          search: searchQuery.trim() || undefined,
          category: activeCategory !== "All" ? activeCategory : undefined,
          activity: selectedActivity || undefined,
          subActivity: selectedSubActivity || undefined,
          municipality: selectedMunicipality || undefined,
        };

        const result = getFilteredProjects(
          investmentProjectsData,
          filters,
          currentPage,
          6
        );

        const transformedProjects = result.data.map(transformProjectData);
        setProjects(transformedProjects);
        setTotalPages(result.pagination.totalPages);
        setTotalItems(result.pagination.totalItems);
      } catch (error) {
        console.error("Error filtering projects:", error);
        setProjects([]);
        setTotalPages(1);
        setTotalItems(0);
      } finally {
        setIsLoading(false);
      }
    }, 300); // Small delay to show loading state
  }, [
    currentPage,
    searchQuery,
    activeCategory,
    selectedActivity,
    selectedSubActivity,
    selectedMunicipality,
    scrollToTop,
  ]);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPage(1); // Reset to page 1 when search changes
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fetch projects when filters or page changes
  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const handleRegionClick = (regionName: string) => {
    // Filter by location when region is clicked
    setSelectedMunicipality(regionName);
    setCurrentPage(1);
  };

  const scrollCategories = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const scrollTo =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleActivityChange = (activity: string) => {
    setSelectedActivity(activity);
    setCurrentPage(1);
  };

  const handleSubActivityChange = (subActivity: string) => {
    setSelectedSubActivity(subActivity);
    setCurrentPage(1);
  };

  const handleMunicipalityChange = (municipality: string) => {
    setSelectedMunicipality(municipality);
    setCurrentPage(1);
  };

  // Dropdown filters data
  const dropdownFilters = [
    {
      id: "activity",
      label: "By Activity",
      value: selectedActivity,
      onChange: handleActivityChange,
      options: [
        "Technology",
        "Manufacturing",
        "Energy",
        "Tourism",
        "Healthcare",
        "Finance",
      ],
      icon: (
        <svg
          className="w-5 h-5 text-[#00A7A2]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <circle cx="12" cy="12" r="3" />
          <line x1="6" y1="12" x2="8" y2="12" />
          <line x1="16" y1="12" x2="18" y2="12" />
        </svg>
      ),
    },
    {
      id: "subActivity",
      label: "By Sub Activity",
      value: selectedSubActivity,
      onChange: handleSubActivityChange,
      options: [
        "Software Development",
        "AI & Machine Learning",
        "Renewable Energy",
        "Advanced Manufacturing",
        "Logistics",
      ],
      icon: (
        <svg
          className="w-5 h-5 text-[#00A7A2]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <rect x="4" y="12" width="16" height="8" rx="1" />
          <rect x="6" y="8" width="12" height="4" rx="0.5" />
          <rect x="4" y="4" width="2" height="4" />
          <path
            d="M4 20 Q6 18 8 20 T12 20 T16 20 T20 20"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      id: "municipality",
      label: "By Municipality",
      value: selectedMunicipality,
      onChange: handleMunicipalityChange,
      options: [
        "Riyadh",
        "Jeddah",
        "Dammam",
        "Makkah",
        "Madinah",
        "Khobar",
        "Tabuk",
        "Abha",
      ],
      icon: (
        <svg
          className="w-5 h-5 text-[#00A7A2]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <rect x="4" y="12" width="16" height="8" rx="1" />
          <rect x="6" y="8" width="12" height="4" rx="0.5" />
          <rect x="4" y="4" width="2" height="4" />
          <path
            d="M4 20 Q6 18 8 20 T12 20 T16 20 T20 20"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-linear-to-bl from-[#E6F6F6] to-[#ddd0e4] min-h-screen">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Map */}
          <div className="relative z-10 my-5 md:my-10 lg:my-16 px-6">
            {/* Badge and Title */}
            <div className="mb-6 md:mb-12">
              <div className="flex w-fit items-center gap-2 p-[10px] pr-[20px] rounded-full bg-[#00A7A2] text-white text-base md:text-lg mb-4 md:mb-5">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="14.25" cy="14.25" r="7.125" fill="white" />
                  <circle
                    cx="14.25"
                    cy="14.25"
                    r="10.6875"
                    stroke="white"
                    strokeOpacity="0.39"
                    strokeWidth="7.125"
                  />
                </svg>
                <span className=" bukra-medium">
                  {totalItems.toLocaleString()}
                </span>{" "}
                <span className=" bukra-regular">Active Projects</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[46px] bukra-bold text-[#262626]">
                Investment Projects
              </h2>
            </div>

            {/* Map Container */}
            <div className="relative flex justify-center items-center rounded-lg p-4">
              <SaudiMapInvestmentProjects
                setActiveRegionByName={handleRegionClick}
              />
            </div>
          </div>

          {/* Right Column - Projects List */}
          <div className="relative bg-[#FFFFFF] p-6">
            {/* Search Bar */}
            <div className="flex gap-2">
              <div className="relative flex-1">
                <HiMagnifyingGlass className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-[#E5E5E5] rounded-lg px-12 py-3 text-[#404040] placeholder-[#A3A3A3] focus:outline-none focus:ring-2 focus:ring-[#00A7A2] focus:border-transparent"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`bg-white border border-[#E5E5E5] rounded-lg px-3 py-3 hover:bg-white/80 transition-colors shrink-0 ${
                  showFilters ? "bg-[#00A7A2] border-[#00A7A2]" : ""
                }`}
              >
                <TbFilter
                  className={`w-5 h-5 transition-colors text-gray-600"
                  }`}
                />
              </button>
            </div>

            {/* Category Filters - Horizontal Scrollable */}
            <div
              className={`mb-6 mt-4 relative overflow-hidden transition-all duration-500 ease-in-out ${
                showFilters
                  ? "max-h-[200px] opacity-100"
                  : "max-h-0 opacity-0 mb-0"
              }`}
            >
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollCategories("left")}
                  className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors shrink-0"
                >
                  <LuArrowLeft className="w-5 h-5" />
                </button>
                <div
                  ref={scrollContainerRef}
                  className="flex-1 overflow-x-auto scrollbar-hide flex items-center"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  <div className="flex gap-2 min-w-max items-center">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`px-4 py-2 rounded-full text-sm md:text-[14.66px] bukra-medium whitespace-nowrap transition-all shrink-0 ${
                          activeCategory === category
                            ? "bg-[#00A7A2] text-white"
                            : "bg-white text-[#525252] border border-[#E5E5E5] hover:bg-white/80"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => scrollCategories("right")}
                  className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors shrink-0"
                >
                  <LuArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Dropdown Filters */}
            <div
              className={`mb-4 transition-all duration-500 ease-in-out ${
                showFilters
                  ? "max-h-[200px] opacity-100 overflow-visible"
                  : "max-h-0 opacity-0 mb-0 overflow-hidden"
              }`}
            >
              <div className="flex flex-wrap gap-3">
                {dropdownFilters.map((filter) => (
                  <div key={filter.id} className="relative">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === filter.id ? null : filter.id
                      )
                    }
                    className="min-w-[180px] w-full bg-white border border-[#E5E5E5] rounded-lg pl-11 pr-9 py-2.5 text-left text-[#525252] text-sm bukra-regular focus:outline-none focus:ring-2 focus:ring-[#00A7A2]/20 focus:border-[#00A7A2] cursor-pointer hover:border-[#00A7A2]/50 transition-all duration-200 shadow-sm flex gap-2 items-center justify-between"
                  >
                    <span className="truncate">
                      {filter.value || filter.label}
                    </span>
                    <svg
                      className={`w-4 h-4 text-[#808080] transition-transform duration-200 ${
                        openDropdown === filter.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none">
                    {filter.icon}
                  </div>
                  {openDropdown === filter.id && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setOpenDropdown(null)}
                      />
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E5E5E5] rounded-lg shadow-lg z-50 max-h-[300px] overflow-y-auto">
                        <button
                          type="button"
                          onClick={() => {
                            filter.onChange("");
                            setOpenDropdown(null);
                          }}
                          className={`w-full px-4 py-2.5 text-left text-sm bukra-regular transition-colors ${
                            !filter.value
                              ? "bg-[#00A7A2]/10 text-[#00A7A2]"
                              : "text-[#525252] hover:bg-gray-50"
                          }`}
                        >
                          {filter.label}
                        </button>
                        <div className="border-t border-[#E5E5E5]" />
                        {filter.options.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => {
                              filter.onChange(option);
                              setOpenDropdown(null);
                            }}
                            className={`w-full px-4 py-2.5 text-left text-sm bukra-regular transition-colors ${
                              filter.value === option
                                ? "bg-[#00A7A2]/10 text-[#00A7A2]"
                                : "text-[#525252] hover:bg-gray-50"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                  </div>
                ))}
              </div>
            </div>

            {/* Project Cards */}
            <div
              ref={projectsContainerRef}
              className="space-y-6 mb-8 max-h-[800px] overflow-y-auto scrollbar-hide pr-2 relative"
              style={{
                scrollBehavior: "smooth",
                WebkitOverflowScrolling: "touch",
                overscrollBehavior: "contain",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                touchAction: "pan-y",
                willChange: "scroll-position",
              }}
            >
              {isLoading && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center rounded-lg z-10">
                  <div className="flex items-center gap-3">
                    <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#00A7A2] border-t-transparent"></div>
                    <span className="text-gray-700">Loading projects...</span>
                  </div>
                </div>
              )}
              {!isLoading && projects.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">
                    No projects found matching your criteria.
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Try adjusting your search or filters.
                  </p>
                </div>
              )}
              {projects.map((project) => (
                <InvestmentProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  type={project.type}
                  location={project.location}
                  description={project.description}
                  investmentSize={project.investmentSize}
                  jobCreation={project.jobCreation}
                  gdpImpact={project.gdpImpact}
                  irr={project.irr}
                  paybackPeriod={project.paybackPeriod}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className=" flex items-center justify-center gap-2 mt-8">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1 || isLoading}
                className={`rounded-full flex items-center justify-center transition-colors ${
                  currentPage === 1 || isLoading
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 0.5C30.7696 0.5 39.5 9.23045 39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20C0.5 9.23045 9.23045 0.5 20 0.5Z"
                    fill="white"
                  />
                  <path
                    d="M20 0.5C30.7696 0.5 39.5 9.23045 39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20C0.5 9.23045 9.23045 0.5 20 0.5Z"
                    stroke="#E5E5E5"
                  />
                  <path
                    d="M25.3472 19.9996H14.6527M14.6527 19.9996L19.9999 14.6523M14.6527 19.9996L19.9999 25.3468"
                    stroke="#525252"
                    strokeWidth="1.52778"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Page Numbers */}
              <div className="flex  items-center gap-2">
                {(() => {
                  const pages: (number | string)[] = [];

                  if (totalPages <= 7) {
                    // Show all pages if 7 or fewer
                    for (let i = 1; i <= totalPages; i++) {
                      pages.push(i);
                    }
                  } else if (currentPage <= 3) {
                    // Show first 5 pages
                    for (let i = 1; i <= 5; i++) {
                      pages.push(i);
                    }
                    pages.push("...");
                    pages.push(totalPages);
                  } else if (currentPage >= totalPages - 2) {
                    // Show last 5 pages
                    pages.push(1);
                    pages.push("...");
                    for (let i = totalPages - 4; i <= totalPages; i++) {
                      pages.push(i);
                    }
                  } else {
                    // Show pages around current
                    pages.push(1);
                    pages.push("...");
                    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                      pages.push(i);
                    }
                    pages.push("...");
                    pages.push(totalPages);
                  }

                  return pages.map((page, index) => {
                    if (page === "...") {
                      return (
                        <span
                          key={`ellipsis-${index}`}
                          className="text-gray-600"
                        >
                          ...
                        </span>
                      );
                    }
                    const pageNum = page as number;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        disabled={isLoading}
                        className={`text-[#525252] flex items-center justify-center text-xl bukra-regular transition-colors cursor-pointer ${
                          currentPage === pageNum
                            ? "w-10 h-10   rounded-full bg-[#E5E5E5]"
                            : "w-10 h-10 rounded-full"
                        } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        {pageNum}
                      </button>
                    );
                  });
                })()}
              </div>

              <button
                onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                }
                disabled={
                  currentPage === totalPages || isLoading || totalPages === 0
                }
                className={`rounded-full flex items-center justify-center transition-colors ${
                  currentPage === totalPages || isLoading || totalPages === 0
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 0.5C30.7696 0.5 39.5 9.23045 39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20C0.5 9.23045 9.23045 0.5 20 0.5Z"
                    fill="white"
                  />
                  <path
                    d="M20 0.5C30.7696 0.5 39.5 9.23045 39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20C0.5 9.23045 9.23045 0.5 20 0.5Z"
                    stroke="#E5E5E5"
                  />
                  <path
                    d="M14.6528 19.9996H25.3473M25.3473 19.9996L20.0001 14.6523M25.3473 19.9996L20.0001 25.3468"
                    stroke="#525252"
                    strokeWidth="1.52778"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
