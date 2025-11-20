

export interface PaginationParams {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
  location?: string;
  sector?: string;
}

export interface ProjectsResponse {
  data: any[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

export async function getProjects(params: PaginationParams = {}): Promise<ProjectsResponse> {
  const {
    page = 1,
    limit = 6,
    search,
    category,
    location,
    sector
  } = params;

  try {
    // Build query parameters
    const searchParams = new URLSearchParams();
    searchParams.append('page', page.toString());
    searchParams.append('limit', limit.toString());
    
    if (search) searchParams.append('search', search);
    if (category) searchParams.append('category', category);
    if (location) searchParams.append('location', location);
    if (sector) searchParams.append('sector', sector);

    const response = await fetch(
        getApiUrl(`/api/projects/paginated?${searchParams}`),
      {
        cache: 'no-store', // Ensure fresh data on each request
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch projects: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching projects:', error);
    
    // Return empty result on error
    return {
      data: [],
      pagination: {
        currentPage: 1,
        totalPages: 0,
        totalItems: 0,
        itemsPerPage: limit,
        hasNextPage: false,
        hasPreviousPage: false,
      },
    };
  }
}

export async function refreshProjects(params: PaginationParams = {}): Promise<ProjectsResponse> {
  // Add a cache-busting timestamp to force refresh
  const refreshParams = { ...params };
  const searchParams = new URLSearchParams();
  
  Object.entries(refreshParams).forEach(([key, value]) => {
    if (value !== undefined) {
      searchParams.append(key, value.toString());
    }
  });
  
  // Add timestamp for cache busting
  searchParams.append('_refresh', Date.now().toString());

  try {
    const response = await fetch(
      getApiUrl(`/api/projects/paginated?${searchParams}`),
      {
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to refresh projects: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error refreshing projects:', error);
    return getProjects(params); // Fallback to regular fetch
  }
}

function getApiUrl(arg0: string): RequestInfo | URL {
  throw new Error(`Function not implemented: ${arg0}`);
}
