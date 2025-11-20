'use client'

import { useState, useTransition, useCallback, Activity } from 'react';
import Card from './Card';
import Pagination from '../../../ui/Pagination';
import { sampleProjects } from '../../../../data/projects';
import { type PaginationParams, type ProjectsResponse } from '../../../../lib/actions/projects';
import Modal from '@/components/ui/Modal';
import PDFModal from '@/components/ui/PDFModal';
import InterestForm from './InterestForm';

interface ProjectsListProps {
  initialData: ProjectsResponse;
  onPageChange?: () => void;
}

const ProjectsList: React.FC<ProjectsListProps> = ({ initialData, onPageChange }) => {
  const [isPending, startTransition] = useTransition();
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [showPDFModal, setShowPDFModal] = useState(false);

  const [data, setData] = useState<ProjectsResponse>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [currentFilters, setCurrentFilters] = useState<PaginationParams>({
    page: 1,
    limit: 5,
  });

  const handleInterestModal = (x: number) => {
    setSelectedProjectId(x);
  }

  const closeModal = () => {
    setSelectedProjectId(null);
  }

  const handlePDFModal = () => {
    setShowPDFModal(true);
  }

  const closePDFModal = () => {
    setShowPDFModal(false);
  }

  const handlePDFInterest = () => {
    // Close PDF modal and open interest form with first project (or you can track which project)
    setShowPDFModal(false);
    setSelectedProjectId(0); // Opens interest form for first project
  }

  // Load data with specific parameters
  const loadData = useCallback((params: PaginationParams) => {
    setIsLoading(true);
    try {
      // Get all projects from static data
      const allProjects = sampleProjects;
      
      // Apply filters
      let filteredProjects = allProjects;
      
      if (params.search) {
        const searchTerm = params.search.toLowerCase();
        filteredProjects = filteredProjects.filter(project =>
          project.title.toLowerCase().includes(searchTerm) ||
          project.description.toLowerCase().includes(searchTerm) ||
          project.category.toLowerCase().includes(searchTerm) ||
          project.location.toLowerCase().includes(searchTerm)
        );
      }
      
      if (params.category) {
        filteredProjects = filteredProjects.filter(project =>
          project.category.toLowerCase().includes(params.category!.toLowerCase())
        );
      }
      
      if (params.location) {
        filteredProjects = filteredProjects.filter(project =>
          project.location.toLowerCase().includes(params.location!.toLowerCase())
        );
      }
      
      // Apply pagination
      const page = params.page || 1;
      const limit = params.limit || 6;
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedProjects = filteredProjects.slice(startIndex, endIndex);
      
      // Create response structure
      const result: ProjectsResponse = {
        data: paginatedProjects,
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(filteredProjects.length / limit),
          totalItems: filteredProjects.length,
          itemsPerPage: limit,
          hasNextPage: endIndex < filteredProjects.length,
          hasPreviousPage: page > 1,
        }
      };
      
      setData(result);
      setCurrentFilters(params);
    } catch (error) {
      console.error('Error loading projects:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Handle page change
  const handlePageChange = useCallback((page: number) => {
    const newParams = { ...currentFilters, page };

    startTransition(() => {
      loadData(newParams);
      // Scroll to top after page change
      setTimeout(() => {
        onPageChange?.();
      }, 100); // Small delay to ensure content has updated
    });
  }, [currentFilters, loadData, onPageChange]);

  // Handle refresh
  const handleRefresh = useCallback(() => {
    loadData(currentFilters);
  }, [currentFilters, loadData]);


  return <>
    <div className="space-y-6 relative">
      {/* Projects Grid */}
      <div className="flex flex-col gap-7 relative">
        {data.data && data.data.length > 0 ? (
          data.data.map((project: any, index: number) => (
            <Card
              key={project.id}
              {...project}
              showInterest={() => handleInterestModal(index)}
              showPDF={handlePDFModal}
              order={((data.pagination.currentPage - 1) * data.pagination.itemsPerPage) + index + 1}
            />
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-white/70 text-lg">No projects found matching your criteria.</p>
            <p className="text-white/50 text-sm mt-2">Try adjusting your search or filters.</p>
          </div>
        )}

        {/* Loading overlay */}
        {(isLoading || isPending) && (
          <div className="absolute inset-0 bg-darkBlue/50 backdrop-blur-sm flex items-center justify-center rounded-lg min-h-[400px]">
            <div className="flex items-center gap-3 bg-darkBlue/90 px-6 py-4 rounded-lg border border-gray-100/20 shadow-xl">
              <div className="animate-spin rounded-full h-6 w-6 border-2 border-blue-500 border-t-transparent"></div>
              <span className="text-white">Loading projects...</span>
            </div>
          </div>
        )}
      </div>
      {/* Pagination */}
      {data.pagination.totalPages > 1 && (
        <Pagination
          currentPage={data.pagination.currentPage}
          totalPages={data.pagination.totalPages}
          totalItems={data.pagination.totalItems}
          onPageChange={handlePageChange}
          onRefresh={handleRefresh}
          isLoading={isLoading || isPending}
        />
      )}
    </div>
    
    {/* Interest Form Modal */}
    <Modal open={selectedProjectId !== null} classesName="bg-white overflow-y-auto max-h-screen">
      <div className="w-full relative">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <Activity mode={selectedProjectId !== null ? 'visible' : 'hidden'}>
          {selectedProjectId !== null && <InterestForm {...data.data[selectedProjectId]} handleCancel={closeModal} />}
        </Activity>
      </div>
    </Modal>

    {/* PDF Modal */}
    <PDFModal
      isOpen={showPDFModal}
      onClose={closePDFModal}
      pdfPath="/documents/invest-saudi-ai-powered-medical-imagining.pdf"
      title="AI-Powered Medical Imaging Investment Opportunity"
      onInterest={handlePDFInterest}
    />
  </>
};

export default ProjectsList;