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
      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-medium tracking-tight ${
          variant === 'light'
            ? 'bg-[#EAF1FF] text-[#2868F5]'
            : 'bg-white/10 text-white/90 border border-white/20 backdrop-blur-xs'
        }`}
      >
        <span
          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
            variant === 'light' ? 'bg-[#2868F5]' : 'bg-[#5289F7]'
          }`}
          aria-hidden="true"
        />
        <span>{children}</span>
      </span>
    </div>
  );
};
