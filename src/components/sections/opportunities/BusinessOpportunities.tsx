import { Suspense } from 'react';
import Badge from "./ActiveBadge";
import Search from "./Search";
import ProjectsList from "./ProjectsList";
import { getProjects } from "../../../lib/actions/projects";

export default async function BusinessOpportunities() {
  // Get initial data for page 1
  const initialData = await getProjects({
    page: 1,
    limit: 6,
  });

  return (
    <section className="bg-darkBlue mx-auto p-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-7 space-4">
        <Badge />
        <h1 className="text-white text-5xl font-bold text-center">
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
          <ProjectsList initialData={initialData} />
        </Suspense>
      </div>
    </section>
  );
}