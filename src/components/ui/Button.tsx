import React from 'react';

// Simple className utility function
const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'success' | 'clearOutline';
  size?: 'sm' | 'default' | 'lg' | 'xl';
  fullWidth?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'default',
  size = 'default',
  fullWidth = false,
  loading = false,
  disabled,
  children,
  ...props
}) => {
  const baseClasses = 'bukra-regular rounded-full inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const variants = {
    default: 'bg-violet text-white hover:bg-opacity-90 focus:ring-violet/50 shadow-sm',
    primary: 'bg-foundation-green text-white hover:bg-opacity-90 focus:ring-foundation-green/50 shadow-sm',
    secondary: 'bg-teal-500 text-white hover:bg-opacity-90 focus:ring-teal/50 shadow-sm',
    outline: 'border-px bg-neutral-100 border-neutral-200 hover:bg-neutral-50',
    clearOutline: 'bg-white border border-neutral-200 hover:bg-white/10 focus:ring-white/50 px-2',
    ghost: 'text-violet bg-transparent hover:bg-violet/10 focus:ring-violet/50',
    destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500/50 shadow-sm',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500/50 shadow-sm',
  };

  const sizes = {
    sm: 'h-9 px-3 text-sm',
    default: 'h-11 px-3 md:px-6 text-base text-xs md:text-base',
    lg: 'h-12 px-8 text-lg',
    xl: 'h-14 px-10 text-xl',
  };

  const widthClasses = fullWidth ? 'w-full' : '';

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        widthClasses,
        loading && 'cursor-not-allowed',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
