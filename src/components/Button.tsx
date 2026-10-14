import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'white-solid' | 'white-outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  withArrow?: boolean;
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  withArrow = false,
  children,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-[#2868F5] focus-visible:outline-offset-2';

  const sizeStyles = {
    sm: 'text-[13px] px-4 py-2 min-h-[38px] gap-1.5',
    md: 'text-[14px] px-5 py-2.5 min-h-[44px] gap-2',
    lg: 'text-[15px] px-6 py-3 min-h-[48px] gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[#2868F5] text-white hover:bg-[#1b56dc] active:bg-[#1546b5] shadow-[0_1px_2px_rgba(13,27,73,0.08)]',
    secondary:
      'bg-white text-[#151923] border border-[#E7EAF0] hover:border-[#ccd4e0] hover:bg-[#FAFCFF] active:bg-[#F0F4FF]',
    'white-solid':
      'bg-white text-[#2868F5] hover:bg-[#F0F4FF] active:bg-[#EAF1FF] font-semibold shadow-[0_1px_2px_rgba(13,27,73,0.08)]',
    'white-outline':
      'bg-transparent text-white border border-white/60 hover:border-white hover:bg-white/10 active:bg-white/20',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
    fullWidth ? 'w-full' : ''
  } ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    const isAnchor = href.startsWith('#');
    return (
      <a
        href={href}
        className={`group ${combinedClasses}`}
        {...(external && !isAnchor
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={`group ${combinedClasses}`} {...props}>
      {content}
    </button>
  );
};
