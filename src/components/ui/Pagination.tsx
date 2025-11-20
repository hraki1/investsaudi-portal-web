'use client'

import { useState, useTransition } from 'react';
import { FiChevronLeft, FiChevronRight, FiRotateCw } from 'react-icons/fi';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  onRefresh?: () => void;
  isLoading?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  // totalItems,
  onPageChange,
  onRefresh,
  isLoading = false
}) => {
  const [isPending, startTransition] = useTransition();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      startTransition(() => {
        onPageChange(page);
      });
    }
  };

  const handleRefresh = async () => {
    if (onRefresh) {
      setIsRefreshing(true);
      try {
        await onRefresh();
      } finally {
        setIsRefreshing(false);
      }
    }
  };

  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      // Add ellipsis if needed
      if (start > 2) {
        pages.push('...');
      }
      
      // Add middle pages
      for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(i);
        }
      }
      
      // Add ellipsis if needed
      if (end < totalPages - 1) {
        pages.push('...');
      }
      
      // Always show last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="bukra-regular flex flex-col items-center justify-center gap-4 py-6">
      {/* Results info */}
      {/* <div className="text-white/70 text-sm">
        Showing <span className="font-medium text-white">{Math.min((currentPage - 1) * 6 + 1, totalItems)}</span> to{' '}
        <span className="font-medium text-white">{Math.min(currentPage * 6, totalItems)}</span> of{' '}
        <span className="font-medium text-white">{totalItems}</span> results
      </div> */}

      {/* Pagination controls */}
      <div className="flex items-center gap-2">
        {/* Refresh button */}
        {onRefresh && (
          <button
            onClick={handleRefresh}
            disabled={isRefreshing || isLoading}
            className={`
              flex hidden items-center justify-center w-10 h-10
              border border-gray-100/20 rounded-full
              hover:bg-gray-100/10 transition-all duration-200
              text-white/80 hover:text-white
              disabled:opacity-50 disabled:cursor-not-allowed
              ${isRefreshing ? 'animate-spin' : ''}
            `}
            title="Refresh data"
          >
            <FiRotateCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          </button>
        )}

        {/* Previous button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1 || isPending || isLoading}
          className={`
            flex items-center justify-center w-10 h-10
            border border-gray-100/20 rounded-full
            hover:bg-gray-100/10 transition-all duration-200
            text-white/80 hover:text-white
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          <FiChevronLeft className="h-4 w-4" />
        </button>

        {/* Page numbers */}
        <div className="flex items-center gap-1">
          {visiblePages.map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === 'number' ? handlePageChange(page) : undefined}
              disabled={page === '...' || isPending || isLoading}
              className={`
                w-10 h-10 flex items-center justify-center text-sm rounded-full
                transition-all duration-200
                ${page === currentPage
                  ? 'bg-violet-500 text-white border border-violet-500'
                  : page === '...'
                    ? 'text-white/50 cursor-default'
                    : 'text-white/80 hover:text-white border border-gray-100/0 hover:bg-gray-100/10 cursor-pointer'
                }
                disabled:opacity-50 disabled:cursor-not-allowed
              `}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= totalPages || isPending || isLoading}
          className={`
            flex items-center justify-center w-10 h-10
            border border-gray-100/20 rounded-full
            hover:bg-gray-100/10 transition-all duration-200
            text-white/80 hover:text-white
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          <FiChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Loading indicator */}
      {(isPending || isLoading) && (
        <div className="absolute inset-0 bg-darkBlue/50 backdrop-blur-sm flex items-center justify-center rounded-2xl">
          <div className="flex items-center gap-3 bg-darkBlue/90 px-6 py-3 rounded-full border border-gray-100/20">
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-500 border-t-transparent"></div>
            <span className="text-white text-sm">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pagination;