import React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
  className?: string;
  centered?: boolean;
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  variant = 'light',
  className = '',
  centered = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-2 ${centered ? 'mx-auto' : ''} ${className}`}>
      <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-[12px] font-bold tracking-[0.09em] uppercase ${variant === 'light' ? 'bg-[#EAF0FF] text-[#234CE8] border border-[#D9E3FF]' : 'bg-white/[0.08] text-white border border-white/15'}`}>
        <span className={`w-2 h-2 rounded-full shrink-0 ${variant === 'light' ? 'bg-[#2F5BFF] ring-4 ring-[#2F5BFF]/10' : 'bg-[#C8F36A] shadow-[0_0_0_4px_rgba(200,243,106,0.14)]'}`} aria-hidden="true" />
        <span>{children}</span>
      </span>
    </div>
  );
};
