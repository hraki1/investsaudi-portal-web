import type { Meta, StoryObj } from '@storybook/react';
import Search from '../components/sections/opportunities/Search';

const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    onSearch: { action: 'search' },
    onFilter: { action: 'filter' },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the search input',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
   decorators: [
    (Story) => (
      <div className="bg-darkBlue p-8 min-h-screen flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Search investment opportunities...",
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: "Find your perfect project...",
  },
};

export const WithCustomStyling: Story = {
  args: {
    placeholder: "Search opportunities...",
    className: "max-w-2xl mx-auto",
  },
};

export const InContainer: Story = {
  render: (args) => (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Investment Opportunities</h2>
      <Search {...args} />
      <p className="text-sm text-gray-600 mt-4">
        Search through our curated investment opportunities in Saudi Arabia
      </p>
    </div>
  ),
  args: {
    placeholder: "Search investment opportunities...",
  },
};

export const DarkTheme: Story = {
  decorators: [
    (Story) => (
      <div className="bg-gray-900 p-8 rounded-lg">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <Search 
      {...args}
      className="[&_input]:bg-gray-800 [&_input]:border-gray-600 [&_input]:text-white [&_input]:placeholder-gray-400 [&_button]:bg-gray-700 [&_button]:hover:bg-gray-600 [&_button]:text-white [&_button]:border-gray-600"
    />
  ),
  args: {
    placeholder: "Search in dark mode...",
  },
};

export const Playground: Story = {
  render: (args) => (
    <div className="space-y-6">
      <Search {...args} />
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h3 className="font-medium text-blue-900 mb-2">Interactive Demo</h3>
        <p className="text-blue-700 text-sm">
          Try typing in the search box or clicking the filter button. 
          Check the Actions panel below to see the callbacks firing.
        </p>
      </div>
    </div>
  ),
  args: {
    placeholder: "Type to search and see actions...",
  },
};