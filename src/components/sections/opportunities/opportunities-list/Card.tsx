import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineFactory, MdOutlinePhoneInTalk } from 'react-icons/md';
import ShareButton from '../../../ui/ShareButton';
import { FiMail } from 'react-icons/fi';
import { IoShareSocialOutline } from 'react-icons/io5';
import { FaXTwitter } from 'react-icons/fa6';
import { GoArrowUpRight } from 'react-icons/go';
import Button from '@/components/ui/Button';

export interface CardDetailsProps {
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
    showInterest?: (x: number) => void;
    showPDF?: () => void;
}

const Card: React.FC<CardProps> = ({
    coverImage,
    coverImageAlt = '',
    order,
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
    showInterest,
    showPDF
}) => {



    const responsiveClasses = order % 2 === 0
        ? 'flex-col md:flex-row'
        : 'flex-col md:flex-row-reverse';

    return (
        <div className={`bukra-regular flex ${responsiveClasses} rounded-xl md:rounded-4xl border border-gray-100/20 overflow-hidden bg-black/5 ${className}`}>
            <div className="w-full md:w-1/3 h-48 md:h-auto shrink-0">
                <img
                    src={coverImage}
                    alt={coverImageAlt}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex-1 relative">
                <GradientBackground pos={order} />

                <div className="p-4 md:p-10 relative z-10 text-white flex flex-col gap-5">
                    <div className="">
                        <h3 className="text-xl md:text-[28px] mb-2 bukra-bold">{title}</h3>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                            <div className="text-sm tracking-wide flex flex-row gap-2 items-center"><MdOutlineFactory size="1.70em" color="var(--foundation-green)" />{category}</div>
                            <div className="text-[15px] flex flex-row gap-2 items-center"><CiLocationOn size="1.70em" color="var(--foundation-green)" />{location}</div>
                        </div>
                    </div>

                    <p className="text-sm md:text-base leading-relaxed">{description}</p>

                    <div className="flex items-center flex-wrap md:flex-nowrap gap-2 md:gap-0">
                        <dl className='flex flex-col-reverse items-start gap-2'>
                            <dt className="bukra-light font-medium text-xs md:text-sm">Expected investment size</dt>
                            <dd className="bukra-medium font-semibold text-sm md:text-base whitespace-nowrap text-overflow-ellipsis overflow-hidden">~{investment}</dd>
                        </dl>
                        <span className="w-px h-8 mx-7 bg-white/20 hidden md:block" />
                        <dl className='flex flex-col-reverse items-start gap-2'>
                            <dt className="bukra-light font-medium text-xs md:text-sm">Jobs Created</dt>
                            <dd className="bukra-medium font-semibold text-sm md:text-base whitespace-nowrap text-overflow-ellipsis overflow-hidden">~{jobsCreated}</dd>
                        </dl>
                        <span className="w-px h-8 mx-7 bg-white/20 hidden md:block" />
                        <dl className='flex flex-col-reverse items-start gap-2'>
                            <dt className="bukra-light font-medium text-xs md:text-sm">GDP Impact</dt>
                            <dd className="bukra-medium font-semibold text-sm md:text-base whitespace-nowrap text-overflow-ellipsis overflow-hidden">~{GDPImpact}</dd>
                        </dl>
                        <span className="w-px h-8 mx-7 bg-white/20 hidden md:block" />
                        <dl className='flex flex-col-reverse items-start gap-2'>
                            <dt className="bukra-light font-medium text-xs md:text-sm">Expected IRR</dt>
                            <dd className="bukra-medium font-semibold text-sm md:text-base whitespace-nowrap text-overflow-ellipsis overflow-hidden">~{IRR}</dd>
                        </dl>
                        <span className="w-px h-8 mx-7 bg-white/20 hidden md:block" />
                        <dl className='flex flex-col-reverse items-start gap-2'>
                            <dt className="bukra-light font-medium text-xs md:text-sm">Payback Period</dt>
                            <dd className="bukra-medium font-semibold text-sm md:text-base whitespace-nowrap text-overflow-ellipsis overflow-hidden">~{paybackPeriod}</dd>
                        </dl>
                    </div>

                    <footer className="space-4 flex flex-col md:flex-row justify-between gap-4">

                        <ul className="flex flex-row gap-3 md:gap-4 pt-2 md:pt-4 justify-between md:justify-start">
                            <li>
                                <ShareButton
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
                        <span className="flex items-center justify-center md:justify-start gap-3">
                            <Button variant="secondary" onClick={() => showInterest?.(order)}>I'm interested</Button>
                            
                            <ShareButton onClick={showPDF}>
                                <GoArrowUpRight size={16} />
                            </ShareButton>
                        </span>
                    </footer>
                </div>
            </div>
        </div>
    );
};

const GradientBackground: React.FC<{ pos: number }> = ({ pos }) => {
    const grad1Pos = pos % 2 === 0 ? '-right-1/3' : '-left-1/3';
    const grad2Pos = pos % 2 === 0 ? '-right-1/2' : '-left-1/2';
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-1">
            <div className={`absolute -bottom-72 ${grad1Pos} w-full h-full rounded-full opacity-60 bg-teal-500 blur-3xl`} />
            <div className={`absolute -bottom-72 ${grad2Pos} w-full h-full rounded-full opacity-60 bg-violet-500 blur-3xl`} />
        </div>
    );
}

export default Card;