import Card from "./Card";
import Search from "./Search";

export default async function BusinessOpportunities() {
  const Projects = await fetch("http://localhost:3000/api/projects").then(res => res.json());

  if (!Projects) {
    return <p>Loading...</p>;
  }

  console.log(Projects);
  return (
    <section className="bg-darkBlue mx-auto p-8 ">
      <div className="max-w-7xl mx-auto flex flex-col gap-7 space-4">
        <h1 className="text-white text-5xl font-bold">Opportunities your business can capitalise on</h1>
        {/* <p className="text-white">Explore various business opportunities available.</p> */}
        <div className="my-4">
          <Search placeholder="Search business opportunities..." />
        </div>

        <div className="flex flex-col gap-7">

          {Projects && Projects.length > 0 ? (
            Projects.map((project: any, index: number) => (
              <Card key={project.id} {...project} order={index+1} />
            ))
          ) : (
            <p>No projects available at the moment.</p>
          )}
        </div>
      </div>
    </section>
  );
}