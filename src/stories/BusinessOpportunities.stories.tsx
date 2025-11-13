import type { Meta, StoryObj } from '@storybook/react';
import BusinessOpportunities from '../components/sections/opportunities/BusinessOpportunities';

const meta: Meta<typeof BusinessOpportunities> = {
  title: 'Sections/Opportunities/BusinessOpportunities',
  component: BusinessOpportunities,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <Story />
        </div>
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InContainer: Story = {
  decorators: [
    (Story) => (
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <Story />
        </div>
      </div>
    ),
  ],
};

export const DarkBackground: Story = {
  decorators: [
    (Story) => (
      <div className="bg-gray-900 min-h-screen text-white">
        <div className="container mx-auto px-4 py-8">
          <Story />
        </div>
      </div>
    ),
  ],
};

export const WithCustomStyling: Story = {
  decorators: [
    (Story) => (
      <div className="from-blue-50 to-indigo-100 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
};