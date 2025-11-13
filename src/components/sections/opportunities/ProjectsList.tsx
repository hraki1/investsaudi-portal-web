'use client'

import { useState, useTransition, useCallback } from 'react';
import Card from './Card';
import Pagination from '../../ui/Pagination';
import { getProjects, refreshProjects, type PaginationParams, type ProjectsResponse } from '../../../lib/actions/projects';

interface ProjectsListProps {
  initialData: ProjectsResponse;
}

const ProjectsList: React.FC<ProjectsListProps> = ({ initialData }) => {
  const [isPending, startTransition] = useTransition();
  
  const [data, setData] = useState<ProjectsResponse>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [currentFilters, setCurrentFilters] = useState<PaginationParams>({
    page: 1,
    limit: 6,
  });

  // Load data with specific parameters
  const loadData = useCallback(async (params: PaginationParams, useRefresh = false) => {
    setIsLoading(true);
    try {
      const result = useRefresh ? await refreshProjects(params) : await getProjects(params);
      setData(result);
      setCurrentFilters(params);
    } catch (error) {
      console.error('Error loading projects:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Function to update filters from Search component
  const updateFilters = useCallback(async (newFilters: Omit<PaginationParams, 'page' | 'limit'>) => {
    const params = {
      page: 1, // Reset to first page when filters change
      limit: 6,
      ...newFilters
    };
    
    await loadData(params);
  }, [loadData]);

  // Handle page change
  const handlePageChange = useCallback((page: number) => {
    const newParams = { ...currentFilters, page };
    
    startTransition(() => {
      loadData(newParams);
    });
  }, [currentFilters, loadData]);

  // Handle refresh
  const handleRefresh = useCallback(async () => {
    await loadData(currentFilters, true);
  }, [currentFilters, loadData]);

  return (
    <div className="space-y-6 relative">
      {/* Projects Grid */}
      <div className="flex flex-col gap-7 relative">
        {data.data && data.data.length > 0 ? (
          data.data.map((project: any, index: number) => (
            <Card 
              key={project.id} 
              {...project} 
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
  );
};

export default ProjectsList;