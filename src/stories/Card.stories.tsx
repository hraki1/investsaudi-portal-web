import type { Meta, StoryObj } from '@storybook/react';
import Card from '../components/sections/opportunities/Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <Story />
        </div>
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

const sampleCardData = {
  coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=400&fit=crop&crop=building',
  coverImageAlt: 'Modern building complex',
  title: 'Smart City Development Project',
  category: 'Technology & Infrastructure',
  location: 'Riyadh, Saudi Arabia',
  description: 'A comprehensive smart city development project focusing on sustainable urban planning, advanced infrastructure, and innovative technology integration to create a modern living environment.',
  investment: '$2.5B USD',
  jobsCreated: '15,000+',
  GDPImpact: '+2.3%',
  IRR: '18.5%',
  paybackPeriod: '7-9 years',
  twitter: '@smartcity_ksa',
  phone: '+966 11 234 5678',
  email: 'info@smartcity.sa'
};

export const ImageLeft: Story = {
  args: {
    ...sampleCardData,
    order: 2, // Even number = image on left
  },
};

export const ImageRight: Story = {
  args: {
    ...sampleCardData,
    order: 1, // Odd number = image on right
  },
};

export const EnergyProject: Story = {
  args: {
    coverImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=400&fit=crop&crop=center',
    coverImageAlt: 'Solar panel installation',
    order: 4,
    title: 'Renewable Energy Hub',
    category: 'Energy & Sustainability',
    location: 'NEOM, Saudi Arabia',
    description: 'Large-scale renewable energy project combining solar, wind, and hydrogen production technologies to create a sustainable energy ecosystem for the future.',
    investment: '$5.8B USD',
    jobsCreated: '25,000+',
    GDPImpact: '+4.1%',
    IRR: '22.3%',
    paybackPeriod: '5-7 years',
    twitter: '@neom_energy',
    phone: '+966 50 987 6543',
    email: 'energy@neom.sa'
  },
};

export const ManufacturingProject: Story = {
  args: {
    coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop&crop=center',
    coverImageAlt: 'Industrial manufacturing facility',
    order: 3,
    title: 'Advanced Manufacturing Complex',
    category: 'Manufacturing & Industry',
    location: 'King Abdullah Economic City',
    description: 'State-of-the-art manufacturing facility focusing on automotive components, electronics, and advanced materials production with Industry 4.0 technologies.',
    investment: '$1.2B USD',
    jobsCreated: '8,500+',
    GDPImpact: '+1.8%',
    IRR: '16.7%',
    paybackPeriod: '6-8 years',
    twitter: '@kaec_manufacturing',
    phone: '+966 12 345 6789',
    email: 'manufacturing@kaec.sa'
  },
};

export const WithCustomContent: Story = {
  args: {
    ...sampleCardData,
    order: 2,
  },
  render: (args) => (
    <Card {...args}>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-blue-600">Custom Card Content</h3>
        <p className="text-gray-600">
          This card demonstrates how you can pass custom children content instead of 
          using the default CardDetails component.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-blue-800 font-medium">
            Custom content can include any React components, styled sections, 
            or interactive elements.
          </p>
        </div>
      </div>
    </Card>
  ),
};

export const MultipleCards: Story = {
  render: () => (
    <div className="space-y-6">
      <Card {...sampleCardData} order={1} />
      <Card 
        coverImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=400&fit=crop&crop=center"
        coverImageAlt="Solar installation"
        order={2}
        title="Solar Energy Initiative"
        category="Renewable Energy"
        location="Al-Ula, Saudi Arabia"
        description="Innovative solar energy project designed to power local communities while preserving the natural landscape and heritage sites."
        investment="$890M USD"
        jobsCreated="5,200+"
        GDPImpact="+1.2%"
        IRR="19.8%"
        paybackPeriod="4-6 years"
        twitter="@alula_solar"
        phone="+966 14 555 0123"
        email="solar@alula.sa"
      />
      <Card 
        coverImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=400&fit=crop&crop=center"
        coverImageAlt="Tourism development"
        order={3}
        title="Heritage Tourism Development"
        category="Tourism & Entertainment"
        location="Diriyah, Saudi Arabia"
        description="Cultural tourism project that combines historical preservation with modern amenities to create world-class visitor experiences."
        investment="$3.2B USD"
        jobsCreated="12,000+"
        GDPImpact="+2.7%"
        IRR="15.4%"
        paybackPeriod="8-10 years"
        twitter="@diriyah_heritage"
        phone="+966 11 789 4561"
        email="tourism@diriyah.sa"
      />
    </div>
  ),
};