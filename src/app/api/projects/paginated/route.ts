import { NextResponse } from 'next/server';

// This would typically come from a database, but for demo purposes, we'll use expanded sample data
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
    twitter: '@manufacturing_kaec',
    phone: '+966 12 345 6789',
    email: 'industry@kaec.sa'
  },
  {
    id: 4,
    coverImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=400&fit=crop&crop=center',
    coverImageAlt: 'Cultural heritage site',
    title: 'Cultural Tourism Development',
    category: 'Tourism & Hospitality',
    location: 'Al-Ula, Saudi Arabia',
    description: 'Development of world-class cultural and heritage tourism facilities showcasing Saudi Arabia\'s rich history and promoting sustainable tourism practices.',
    investment: '$3.2B USD',
    jobsCreated: '12,000+',
    GDPImpact: '+2.7%',
    IRR: '15.4%',
    paybackPeriod: '8-10 years',
    twitter: '@diriyah_heritage',
    phone: '+966 11 789 4561',
    email: 'tourism@diriyah.sa'
  },
  {
    id: 5,
    coverImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=400&fit=crop&crop=center',
    coverImageAlt: 'Healthcare facility',
    title: 'Medical City Complex',
    category: 'Healthcare & Life Sciences',
    location: 'Jeddah, Saudi Arabia',
    description: 'State-of-the-art medical complex featuring specialized hospitals, research facilities, and medical education centers to advance healthcare innovation.',
    investment: '$4.1B USD',
    jobsCreated: '18,500+',
    GDPImpact: '+3.2%',
    IRR: '19.8%',
    paybackPeriod: '6-8 years',
    twitter: '@medcity_jeddah',
    phone: '+966 12 567 8901',
    email: 'medical@jeddah.sa'
  },
  {
    id: 6,
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop&crop=center',
    coverImageAlt: 'Logistics center',
    title: 'International Logistics Hub',
    category: 'Logistics & Transportation',
    location: 'Dammam, Saudi Arabia',
    description: 'Major logistics and transportation hub connecting Asia, Europe, and Africa, featuring advanced cargo facilities and multimodal transportation systems.',
    investment: '$1.8B USD',
    jobsCreated: '11,200+',
    GDPImpact: '+2.1%',
    IRR: '17.3%',
    paybackPeriod: '5-7 years',
    twitter: '@logistics_dammam',
    phone: '+966 13 345 6789',
    email: 'logistics@dammam.sa'
  },
  {
    id: 7,
    coverImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=400&fit=crop&crop=center',
    coverImageAlt: 'Agricultural technology',
    title: 'AgriTech Innovation Center',
    category: 'Agriculture & Food Security',
    location: 'Hail, Saudi Arabia',
    description: 'Advanced agricultural technology center focused on sustainable farming, vertical agriculture, and food security solutions for the region.',
    investment: '$950M USD',
    jobsCreated: '6,800+',
    GDPImpact: '+1.4%',
    IRR: '16.1%',
    paybackPeriod: '7-9 years',
    twitter: '@agritech_hail',
    phone: '+966 16 234 5678',
    email: 'agriculture@hail.sa'
  },
  {
    id: 8,
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=400&fit=crop&crop=center',
    coverImageAlt: 'Space technology facility',
    title: 'Space Technology Complex',
    category: 'Aerospace & Defense',
    location: 'King Abdulaziz City for Science and Technology',
    description: 'Advanced aerospace and satellite technology development center supporting Saudi Arabia\'s space program and defense capabilities.',
    investment: '$2.9B USD',
    jobsCreated: '9,500+',
    GDPImpact: '+2.5%',
    IRR: '18.9%',
    paybackPeriod: '8-10 years',
    twitter: '@space_ksa',
    phone: '+966 11 890 1234',
    email: 'space@kacst.sa'
  },
  {
    id: 9,
    coverImage: 'https://images.unsplash.com/photo-1559733620-638a8b5610d8?w=500&h=400&fit=crop&crop=center',
    coverImageAlt: 'Financial district',
    title: 'Fintech Innovation District',
    category: 'Financial Services',
    location: 'King Abdullah Financial District, Riyadh',
    description: 'Modern financial technology hub fostering innovation in digital banking, blockchain, and financial services across the Middle East.',
    investment: '$1.7B USD',
    jobsCreated: '7,300+',
    GDPImpact: '+1.9%',
    IRR: '20.2%',
    paybackPeriod: '5-6 years',
    twitter: '@fintech_kafd',
    phone: '+966 11 456 7890',
    email: 'fintech@kafd.sa'
  },
  {
    id: 10,
    coverImage: 'https://images.unsplash.com/photo-1574482620138-c73b8d9d65c8?w=500&h=400&fit=crop&crop=center',
    coverImageAlt: 'Educational campus',
    title: 'Innovation University Campus',
    category: 'Education & Research',
    location: 'Tabuk, Saudi Arabia',
    description: 'World-class university campus focusing on STEM education, research excellence, and innovation to develop future leaders and entrepreneurs.',
    investment: '$1.4B USD',
    jobsCreated: '5,600+',
    GDPImpact: '+1.6%',
    IRR: '14.8%',
    paybackPeriod: '9-12 years',
    twitter: '@innovation_uni',
    phone: '+966 14 567 8901',
    email: 'education@tabuk.sa'
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  // Get pagination parameters
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '6');
  const search = searchParams.get('search');
  const category = searchParams.get('category');
  const location = searchParams.get('location');
  const sector = searchParams.get('sector');

  // Apply filters
  let filteredProjects = [...sampleProjects];

  if (search) {
    const searchTerm = search.toLowerCase();
    filteredProjects = filteredProjects.filter(project =>
      project.title.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm) ||
      project.category.toLowerCase().includes(searchTerm) ||
      project.location.toLowerCase().includes(searchTerm)
    );
  }

  if (category && category !== 'all') {
    filteredProjects = filteredProjects.filter(project =>
      project.category.toLowerCase().includes(category.toLowerCase())
    );
  }

  if (location && location !== 'all') {
    filteredProjects = filteredProjects.filter(project =>
      project.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  if (sector && sector !== 'all') {
    filteredProjects = filteredProjects.filter(project =>
      project.category.toLowerCase().includes(sector.toLowerCase())
    );
  }

  // Calculate pagination
  const totalItems = filteredProjects.length;
  const totalPages = Math.ceil(totalItems / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  const response = {
    data: paginatedProjects,
    pagination: {
      currentPage: page,
      totalPages,
      totalItems,
      itemsPerPage: limit,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    }
  };

  return NextResponse.json(response);
}