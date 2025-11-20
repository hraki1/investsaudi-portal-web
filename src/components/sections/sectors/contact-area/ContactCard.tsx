"use client";

import React from 'react';
import { IconType } from 'react-icons';
import { IoCall, IoMail } from 'react-icons/io5';
import Image from 'next/image';

interface ContactCardProps {
    title: string;
    icon: string;
    description: string;
    color: string;
    phone: string;
    email: string;
    qrCode: string; // Path to QR code image
}

const ContactCard: React.FC<ContactCardProps> = ({
    title,
    icon,
    description,
    color,
    phone,
    email,
    qrCode
}) => {
    return (
        <div className="rounded-lg p-6 shadow-lg relative overflow-hidden" style={{
            background: 'linear-gradient(113deg, #D9F2F1 2.33%, #ECE4F0 20.65%, #FBFBFB 50.32%, #FEFEFE 89.59%)'

        }}>
            {/* Bottom right BG SVG */}
            <div className="absolute bottom-0 right-0 opacity-60">
                {BG}
            </div>
            {/* Header with Icon and Title */}
            <div className="flex items-center gap-4 mb-4 relative z-10">
                <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-md"
                    style={{
                        background: 'linear-gradient(135deg, #FEFEFE 14.73%, #FBFBFB 46.14%, #F1F1F1 69.88%, #E7E7E7 84.53%)',
                        boxShadow: '0 4px 6px -1px var(--Colors-Effects-Shadows-shadow-md_01, rgba(10, 13, 18, 0.10)), 0 2px 4px -2px var(--Colors-Effects-Shadows-shadow-md_02, rgba(10, 13, 18, 0.06))'
                    }}
                >
                    <Image src={icon} alt={`${title} icon`} width={24} height={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 bukra-bold">
                    {title}
                </h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6 bukra-regular relative z-10">
                {description}
            </p>

            {/* Contact Info and QR Code */}
            <div className="flex gap-6 relative z-10">
                {/* Contact Items */}
                <div className="flex-1 space-y-4">
                    {/* Phone */}
                    <div className="flex items-center gap-3">
                        <div
                            className="w-10 h-10 rounded-md flex items-center justify-center"
                            style={{ backgroundColor: color }}
                        >
                            <IoCall size={20} className="text-white" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 bukra-regular">Phone</p>
                            <p className="text-gray-900 font-medium bukra-regular">{phone}</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3">
                        <div
                            className="w-10 h-10 rounded-md flex items-center justify-center"
                            style={{ backgroundColor: color }}
                        >
                            <IoMail size={20} className="text-white" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 bukra-regular">Email</p>
                            <p className="text-gray-900 font-medium bukra-regular">{email}</p>
                        </div>
                    </div>
                </div>

                {/* QR Code */}
                <div className="flex-shrink-0">
                    <Image
                        src={qrCode}
                        alt="QR Code"
                        width={80}
                        height={80}
                        className="rounded-lg shadow-sm"
                    />
                </div>
            </div>
        </div>
    );
};

const BG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="250" height="150" viewBox="0 0 250 150" fill="none">
    <circle cx="200" cy="120" r="80" fill="url(#bgGradient)" opacity="0.3"/>
    <circle cx="220" cy="100" r="60" fill="url(#bgGradient2)" opacity="0.2"/>
    <defs>
      <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#814A98" stopOpacity="0.3"/>
        <stop offset="100%" stopColor="#00A7A2" stopOpacity="0.1"/>
      </linearGradient>
      <linearGradient id="bgGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00A7A2" stopOpacity="0.2"/>
        <stop offset="100%" stopColor="#814A98" stopOpacity="0.1"/>
      </linearGradient>
    </defs>
  </svg>
);

export default ContactCard;
