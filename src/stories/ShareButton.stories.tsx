import type { Meta, StoryObj } from '@storybook/react';
import ShareButton from '../components/sections/opportunities/ShareButton';
import { FiShare2, FiTwitter, FiFacebook, FiLinkedin } from 'react-icons/fi';

const meta: Meta<typeof ShareButton> = {
  title: 'Components/ShareButton',
  component: ShareButton,
  parameters: {
    layout: 'centered',
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
    onClick: { action: 'clicked' },
    className: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <FiShare2 size={16}/>,
  },
};

export const Twitter: Story = {
  args: {
    children: <FiTwitter size={16} />,
  },
};

export const Facebook: Story = {
  args: {
    children: <FiFacebook size={16} />,
  },
};

export const LinkedIn: Story = {
  args: {
    children: <FiLinkedin size={16} />,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <ShareButton>
        <FiShare2 size={16} />
      </ShareButton>
      <ShareButton>
        <FiTwitter size={16} />
      </ShareButton>
      <ShareButton>
        <FiFacebook size={16} />
      </ShareButton>
      <ShareButton>
        <FiLinkedin size={16} />
      </ShareButton>
    </div>
  ),
};