import type { Meta, StoryObj } from '@storybook/react';
import BusinessOpportunities from '../components/sections/opportunities/BusinessOpportunities';

const meta: Meta<typeof BusinessOpportunities> = {
  title: 'Sections/Opportunities/BusinessOpportunities',
  component: BusinessOpportunities,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};