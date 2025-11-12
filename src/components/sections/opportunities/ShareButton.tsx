import React from 'react';

interface ShareButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ children, onClick, className = '' }) => {
    return (
        <div
            onClick={onClick}
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
                ${className}
            `}
        >
            {children}
        </div>
    );
};

export default ShareButton;