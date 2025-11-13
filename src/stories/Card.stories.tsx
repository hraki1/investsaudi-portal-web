import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import Card from '../components/sections/opportunities/Card';
import { Project, getProject, getProjects, getStaticProjectData, getAllStaticProjectsData } from '../lib/data/projects';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="bg-darkBlue p-8 min-h-screen flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    order: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Card order - even numbers show image on left, odd on right',
    },
    coverImage: {
      control: 'text',
    },
    coverImageAlt: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// This simulates a Next.js server component that fetches data server-side
const ServerSideProjectCard = ({ projectId, order }: { projectId: number; order: number }) => {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real Next.js app, this data would be fetched server-side
    const fetchServerSideData = async () => {
      try {
        const data = await getStaticProjectData(projectId);
        setProject(data);
      } catch (error) {
        console.error('Failed to fetch project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServerSideData();
  }, [projectId]);

  if (loading) {
    return (
      <div className="bg-white rounded-xl p-8 animate-pulse">
        <div className="flex gap-6">
          <div className="w-1/3 h-48 bg-gray-200 rounded-lg"></div>
          <div className="flex-1 space-y-4">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded"></div>
              <div className="h-3 bg-gray-200 rounded"></div>
              <div className="h-3 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="bg-white rounded-xl p-8 text-center">
        <p className="text-gray-500">Failed to load project data</p>
      </div>
    );
  }

  return <Card {...project} order={order} />;
};

// This simulates a Next.js page that fetches multiple projects server-side
const ServerSideMultipleCards = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real Next.js app, this would happen server-side at build time or request time
    const fetchAllServerSideData = async () => {
      try {
        const data = await getAllStaticProjectsData();
        setProjects(data.slice(0, 3)); // Get first 3 projects
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllServerSideData();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-xl p-8 animate-pulse">
            <div className="flex gap-6">
              <div className="w-1/3 h-48 bg-gray-200 rounded-lg"></div>
              <div className="flex-1 space-y-4">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {projects.map((project, index) => (
        <Card key={project.id} {...project} order={index + 1} />
      ))}
    </div>
  );
};

export const SmartCityProject: Story = {
  render: () => <ServerSideProjectCard projectId={1} order={2} />,
  parameters: {
    docs: {
      description: {
        story: 'Smart City Development Project fetched server-side - Image positioned on left (even order)',
      },
    },
  },
};

export const EnergyProjectFromAPI: Story = {
  render: () => <ServerSideProjectCard projectId={2} order={1} />,
  parameters: {
    docs: {
      description: {
        story: 'Renewable Energy Hub fetched server-side - Image positioned on right (odd order)',
      },
    },
  },
};

export const ManufacturingProject: Story = {
  render: () => <ServerSideProjectCard projectId={3} order={4} />,
  parameters: {
    docs: {
      description: {
        story: 'Advanced Manufacturing Complex fetched server-side - Image positioned on left (even order)',
      },
    },
  },
};

export const WithCustomContent: Story = {
  render: () => {
    const [project, setProject] = useState<Project | null>(null);
    
    useEffect(() => {
      getStaticProjectData(1)
        .then(data => setProject(data))
        .catch(error => console.error('Failed to fetch project:', error));
    }, []);

    if (!project) {
      return <div className="bg-white rounded-xl p-8">Loading...</div>;
    }

    return (
      <Card {...project} order={2}>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-600">Custom Card Content</h3>
          <p className="text-gray-600">
            This card demonstrates how you can pass custom children content instead of
            using the default CardDetails component, while fetching data server-side.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800 font-medium">
              Project: {project.title} - {project.category}
            </p>
          </div>
        </div>
      </Card>
    );
  },
};

export const MultipleCards: Story = {
  render: () => <ServerSideMultipleCards />,
  parameters: {
    docs: {
      description: {
        story: 'Multiple investment project cards fetched server-side with alternating layouts',
      },
    },
  },
};