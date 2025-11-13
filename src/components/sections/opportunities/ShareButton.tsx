"use client"
import React from 'react';

interface ShareButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ children, onClick, className = '' }) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.stopPropagation();
        if (onClick && typeof onClick === 'function') {
            onClick();
        }
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className={`
                w-10 h-10 
                rounded-full 
                backdrop-blur-md                
                shadow-lg 
                hover:bg-white/30 
                transition-all duration-200 
                flex items-center justify-center 
                hover:cursor-pointer
                text-white
                bg-black/30
                focus:outline-none
                focus:ring-2
                focus:ring-white/50
                ${className}
            `}
        >
            {children}
        </button>
    );
};

export default ShareButton;