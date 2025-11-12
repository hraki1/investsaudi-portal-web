import React from 'react';

interface CardDetailsProps {
    title: string;
    category: string;
    location: string;
    description: string;
    investment: string;
    jobsCreated: string;
    GDPImpact: string;
    IRR: string;
    paybackPeriod: string;
    twitter: string;
    phone: string;
    email: string;
}

interface CardProps extends CardDetailsProps {
    coverImage: string;
    coverImageAlt?: string;
    order: number;
    children?: React.ReactNode;
    className?: string;    
}

const CardDetails: React.FC<CardDetailsProps> = ({
    title,
    category,
    location,
    description,
    investment,
    jobsCreated,
    GDPImpact,
    IRR,
    paybackPeriod,
    twitter,
    phone,
    email
}) => {
    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <div className="text-sm text-gray-600 uppercase tracking-wide">{category}</div>
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                <div className="text-sm text-gray-600">{location}</div>
            </div>
            
            <p className="text-gray-700 leading-relaxed">{description}</p>
            
            <div className="grid grid-cols-5 gap-4 text-sm">
                <div>
                    <span className="ml-1 text-gray-700 whitespace-nowrap text-overflow-ellipsis overflow-hidden">~{investment}</span>
                    <span className="font-medium text-gray-900">Expected investment size</span>
                </div>
                <div>
                    <span className="ml-1 text-gray-700 whitespace-nowrap text-overflow-ellipsis overflow-hidden">~{jobsCreated}</span>
                    <span className="font-medium text-gray-900">Jobs Created</span>
                </div>
                <div>
                    <span className="ml-1 text-gray-700 whitespace-nowrap text-overflow-ellipsis overflow-hidden">~{GDPImpact}</span>
                    <span className="font-medium text-gray-900">GDP Impact</span>
                </div>
                <div>
                    <span className="ml-1 text-gray-700 whitespace-nowrap text-overflow-ellipsis overflow-hidden">~{IRR}</span>
                    <span className="font-medium text-gray-900">Expected IRR</span>
                </div>
                <div>
                    <span className="ml-1 text-gray-700 whitespace-nowrap text-overflow-ellipsis overflow-hidden">~{paybackPeriod}</span>
                    <span className="font-medium text-gray-900">Payback Period</span>
                </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-600 space-y-1">
                    <div>📧 {email}</div>
                    <div>📞 {phone}</div>
                    <div>🐦 {twitter}</div>
                </div>
            </div>
        </div>
    );
};

const Card: React.FC<CardProps> = ({ 
    coverImage, 
    coverImageAlt = '', 
    order, 
    children, 
    className = '',
    title,
    category,
    location,
    description,
    investment,
    jobsCreated,
    GDPImpact,
    IRR,
    paybackPeriod,
    twitter,
    phone,
    email
}) => {
    

    const cardDetailsProps: CardDetailsProps = {
        title,
        category,
        location,
        description,
        investment,
        jobsCreated,
        GDPImpact,
        IRR,
        paybackPeriod,
        twitter,
        phone,
        email
    };

    const flexDirection = order % 2 === 0 ? 'flex-row' : 'flex-row-reverse';

    return (
        <div className={`flex rounded-md overflow-hidden bg-white shadow-sm ${className} ${flexDirection}`}>
            
                <div className="w-1/3 shrink-0">
                    <img 
                        src={coverImage} 
                        alt={coverImageAlt}
                        className="w-full h-full object-cover"
                    />
                </div>
            
            
            <div className="flex-1 p-6">
                {children ? children : <CardDetails {...cardDetailsProps} />}
            </div>
          
        </div>
    );
};

export default Card;