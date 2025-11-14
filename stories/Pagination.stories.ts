import type { Meta, StoryObj } from '@storybook/react';
import Pagination from '../src/components/ui/Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/UI/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1e3a5f' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Current active page number',
    },
    totalPages: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Total number of pages',
    },
    totalItems: {
      control: { type: 'number', min: 0, max: 200 },
      description: 'Total number of items across all pages',
    },
    isLoading: {
      control: 'boolean',
      description: 'Whether pagination is in loading state',
    },
    onPageChange: { action: 'page-changed' },
    onRefresh: { action: 'refresh-clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default pagination
export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 5,
    totalItems: 30,
    isLoading: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic rounded pagination component with 5 pages, showing page 1. All buttons are rounded and navigation buttons show only icons.',
      },
    },
  },
};

// Middle page
export const MiddlePage: Story = {
  args: {
    currentPage: 3,
    totalPages: 8,
    totalItems: 48,
    isLoading: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination showing a middle page with ellipsis on both sides',
      },
    },
  },
};

// Many pages
export const ManyPages: Story = {
  args: {
    currentPage: 5,
    totalPages: 15,
    totalItems: 90,
    isLoading: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Rounded pagination with many pages, demonstrating ellipsis behavior with circular buttons',
      },
    },
  },
};

// Loading state
export const Loading: Story = {
  args: {
    currentPage: 2,
    totalPages: 6,
    totalItems: 36,
    isLoading: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination in loading state with disabled buttons',
      },
    },
  },
};

// Single page
export const SinglePage: Story = {
  args: {
    currentPage: 1,
    totalPages: 1,
    totalItems: 3,
    isLoading: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with only one page (no pagination controls shown)',
      },
    },
  },
};

// First page
export const FirstPage: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    totalItems: 60,
    isLoading: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'First page with Previous button disabled',
      },
    },
  },
};

// Last page
export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
    totalItems: 60,
    isLoading: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Last page with Next button disabled',
      },
    },
  },
};

// With refresh functionality
export const WithRefresh: Story = {
  args: {
    currentPage: 3,
    totalPages: 7,
    totalItems: 42,
    isLoading: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with refresh button functionality',
      },
    },
  },
};