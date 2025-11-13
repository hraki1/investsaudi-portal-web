import { NextResponse } from 'next/server';

const sampleProjects = [
  {
    id: 1,
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
  },
  {
    id: 2,
    coverImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=400&fit=crop&crop=center',
    coverImageAlt: 'Solar panel installation',
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
  {
    id: 3,
    coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop&crop=center',
    coverImageAlt: 'Industrial manufacturing facility',
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
  {
    id: 4,
    coverImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=400&fit=crop&crop=center',
    coverImageAlt: 'Solar installation',
    title: 'Solar Energy Initiative',
    category: 'Renewable Energy',
    location: 'Al-Ula, Saudi Arabia',
    description: 'Innovative solar energy project designed to power local communities while preserving the natural landscape and heritage sites.',
    investment: '$890M USD',
    jobsCreated: '5,200+',
    GDPImpact: '+1.2%',
    IRR: '19.8%',
    paybackPeriod: '4-6 years',
    twitter: '@alula_solar',
    phone: '+966 14 555 0123',
    email: 'solar@alula.sa'
  },
  {
    id: 5,
    coverImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=400&fit=crop&crop=center',
    coverImageAlt: 'Tourism development',
    title: 'Heritage Tourism Development',
    category: 'Tourism & Entertainment',
    location: 'Diriyah, Saudi Arabia',
    description: 'Cultural tourism project that combines historical preservation with modern amenities to create world-class visitor experiences.',
    investment: '$3.2B USD',
    jobsCreated: '12,000+',
    GDPImpact: '+2.7%',
    IRR: '15.4%',
    paybackPeriod: '8-10 years',
    twitter: '@diriyah_heritage',
    phone: '+966 11 789 4561',
    email: 'tourism@diriyah.sa'
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  // If ID is provided, return specific project
  if (id) {
    const project = sampleProjects.find(p => p.id === parseInt(id));
    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
    return NextResponse.json(project);
  }

  // Return all projects
  return NextResponse.json(sampleProjects);
}