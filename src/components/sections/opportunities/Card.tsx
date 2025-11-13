import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineFactory, MdOutlinePhoneInTalk } from 'react-icons/md';
import ShareButton from './ShareButton';
import { FiMail } from 'react-icons/fi';
import { IoShareSocialOutline } from 'react-icons/io5';
import { FaXTwitter } from 'react-icons/fa6';
import { GoArrowUpRight } from 'react-icons/go';

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


    const handleShareEmail = () => {
        const subject = encodeURIComponent(`Check out this investment opportunity: ${title}`);
        const body = encodeURIComponent(`Hi,\n\nI thought you might be interested in this investment opportunity:\n\nTitle: ${title}\nCategory: ${category}\nLocation: ${location}\nDescription: ${description}\nInvestment: ${investment}\nJobs Created: ${jobsCreated}\nGDP Impact: ${GDPImpact}\nIRR: ${IRR}\nPayback Period: ${paybackPeriod}\n\nYou can contact them at:\nEmail: ${email}\nPhone: ${phone}\nTwitter: ${twitter}\n\nBest regards.`);
        window.open(`mailto:?subject=${subject}&body=${body}`);
    };
    const handleSharePhone = () => {
        alert(`Contact Phone Number: ${phone}`);
    }
    const handleShareSocial = () => {
        const shareText = `Check out this investment opportunity: ${title} in ${location}. Description: ${description}`;
        const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(window.location.href)}`;
        window.open(shareUrl, '_blank');
    }
    const handleShareTwitter = () => {
        const tweetText = `Check out this investment opportunity: ${title} in ${location}. Description: ${description}`;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(window.location.href)}`;
        window.open(twitterUrl, '_blank');
    }

    const flexDirection = order % 2 === 0 ? 'flex-row' : 'flex-row-reverse';

    return (
        <div className={`flex rounded-xl md:rounded-4xl border border-gray-100/20 overflow-hidden bg-black/5 ${className} ${flexDirection}`}>

            <div className="w-1/3 shrink-0">
                <img
                    src={coverImage}
                    alt={coverImageAlt}
                    className="w-full h-full object-cover"
                />
            </div>


            <div className="flex-1 relative">
                <GradientBackground />
                <div className="p-6">
                    <div className="space-y-4 text-white">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-semibold ">{title}</h3>
                            <div className="flex flex-row gap-4">
                                <div className="text-sm tracking-wide flex flex-row gap-2 items-center"><MdOutlineFactory size="1.70em" color="var(--foundation-green)" />{category}</div>
                                <div className="text-sm flex flex-row gap-2 items-center"><CiLocationOn size="1.70em" color="var(--foundation-green)" />{location}</div>
                            </div>
                        </div>

                        <p className="text-base leading-relaxed">{description}</p>

                        <div className="grid grid-cols-5 gap-4 items-start">
                            <dl className='flex flex-col-reverse items-start gap-2'>
                                <dt className="font-medium text-sm">Expected investment size</dt>
                                <dd className="font-semibold text-base whitespace-nowrap text-overflow-ellipsis overflow-hidden">~{investment}</dd>
                            </dl>
                            <dl className='flex flex-col-reverse items-start gap-2'>
                                <dt className="font-medium text-sm">Jobs Created</dt>
                                <dd className="font-semibold text-base whitespace-nowrap text-overflow-ellipsis overflow-hidden">~{jobsCreated}</dd>
                            </dl>
                            <dl className='flex flex-col-reverse items-start gap-2'>
                                <dt className="font-medium text-sm">GDP Impact</dt>
                                <dd className="font-semibold text-base whitespace-nowrap text-overflow-ellipsis overflow-hidden">~{GDPImpact}</dd>
                            </dl>
                            <dl className='flex flex-col-reverse items-start gap-2'>
                                <dt className="font-medium text-sm">Expected IRR</dt>
                                <dd className="font-semibold text-base whitespace-nowrap text-overflow-ellipsis overflow-hidden">~{IRR}</dd>
                            </dl>
                            <dl className='flex flex-col-reverse items-start gap-2'>
                                <dt className="font-medium text-sm">Payback Period</dt>
                                <dd className="font-semibold text-base whitespace-nowrap text-overflow-ellipsis overflow-hidden">~{paybackPeriod}</dd>
                            </dl>
                        </div>

                        <footer className="space-4 flex flex-row justify-between">

                            <ul className="flex flex-row gap-4 pt-4 flex-wrap">
                                <li>
                                    <ShareButton
                                    // onClick={handleShareEmail}
                                    >
                                        <FiMail size={16} />
                                    </ShareButton>
                                </li>
                                <li>
                                    <ShareButton
                                    // onClick={handleSharePhone}
                                    >
                                        <MdOutlinePhoneInTalk size={16} />
                                    </ShareButton>
                                </li>
                                <li>
                                    <ShareButton
                                    // onClick={handleShareSocial}
                                    >
                                        <IoShareSocialOutline size={16} />
                                    </ShareButton>
                                </li>
                                <li>
                                    <ShareButton
                                    // onClick={handleShareTwitter}
                                    >
                                        <FaXTwitter size={16} />
                                    </ShareButton>
                                </li>

                            </ul>
                            <span className="flex items-center">

                                <button className="text-base font-medium bg-teal-500 rounded-full px-3 py-2">I'm interested</button>
                                <ShareButton className="ml-4">
                                    <GoArrowUpRight size={16} />
                                </ShareButton>
                            </span>
                        </footer>
                    </div>
                </div>
            </div>

        </div>
    );
};

const GradientBackground: React.FC = () => {
    return (
        <div className="absolute w-full h-full z-50 bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))] from-emerald-500  to-transparent"></div>
    );
}

export default Card;