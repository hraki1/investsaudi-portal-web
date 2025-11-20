import React from 'react';

interface ShareButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: 'default' | 'outline';
}

const ShareButton: React.FC<ShareButtonProps> = ({ children, onClick, className = '', variant = 'default' }) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.stopPropagation();
        if (onClick && typeof onClick === 'function') {
            onClick();
        }
    };

    const variantClasses = {
        default: `
            backdrop-blur-md                
            shadow-lg 
            hover:bg-white/30 
            text-white
            bg-black/30
            border border-white/20
        `,
        outline: `
            border-px 
            border-neutral-200
            hover:border-gray-400
            bg-white
            hover:bg-gray-50
            text-neutral-600
            hover:text-gray-800
            shadow-sm
            hover:shadow-md
        `
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className={`
                w-10 h-10 
                rounded-full 
                transition-all duration-200 
                flex items-center justify-center 
                hover:cursor-pointer
                focus:outline-none
                focus:ring-2
                ${variant === 'default' ? 'focus:ring-white/50' : 'focus:ring-blue-500/50'}
                ${variantClasses[variant]}
                ${className}
            `}
        >
            {children}
        </button>
    );
};

export default ShareButton;