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
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-[#C8F36A] focus-visible:outline-offset-2';

  const sizeStyles = {
    sm: 'text-[14px] px-5 py-2.5 min-h-[40px] gap-1.5',
    md: 'text-[15px] px-6 py-3 min-h-[46px] gap-2',
    lg: 'text-[16px] px-7 py-3.5 min-h-[50px] gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[#2F5BFF] text-white hover:bg-[#2148E8] active:bg-[#1839C4] shadow-[0_6px_16px_rgba(47,91,255,0.22)] hover:shadow-[0_9px_22px_rgba(47,91,255,0.28)]',
    secondary:
      'bg-white text-[#101A3A] border border-[#CFD8EA] hover:border-[#2F5BFF]/50 hover:bg-[#F3F6FF] active:bg-[#EAF0FF]',
    'white-solid':
      'bg-white text-[#2148E8] hover:bg-[#C8F36A] hover:text-[#101A3A] active:bg-[#B9E858] font-bold shadow-[0_3px_10px_rgba(10,18,44,0.12)]',
    'white-outline':
      'bg-transparent text-white border border-white/50 hover:border-[#C8F36A] hover:text-[#C8F36A] hover:bg-white/[0.06] active:bg-white/10',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {withArrow && <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />}
    </>
  );

  if (href) {
    const isAnchor = href.startsWith('#');
    return (
      <a
        href={href}
        className={`group ${combinedClasses}`}
        {...(external && !isAnchor ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  return <button className={`group ${combinedClasses}`} {...props}>{content}</button>;
};
