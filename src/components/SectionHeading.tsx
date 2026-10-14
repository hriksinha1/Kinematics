import React from 'react';

interface SectionHeadingProps {
  title: string;
  description?: string;
  isDark?: boolean;
  centered?: boolean;
  className?: string;
  maxWidthCh?: string;
  as?: 'h1' | 'h2' | 'h3';
  id?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  description,
  isDark = false,
  centered = false,
  className = '',
  maxWidthCh = 'max-w-[46ch]',
  as: Component = 'h2',
  id,
}) => {
  return (
    <div className={`space-y-4 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      <Component
        id={id}
        className={`font-display text-[38px] sm:text-[46px] md:text-[54px] lg:text-[60px] leading-[0.94] tracking-[0.005em] ${isDark ? 'text-white' : 'text-[#101A3A]'}`}
        style={{ textWrap: 'balance' }}
      >
        {title}
      </Component>
      {description && (
        <p
          className={`text-[16px] sm:text-[17px] leading-[1.7] font-normal ${isDark ? 'text-slate-300' : 'text-[#556176]'} ${maxWidthCh} ${centered ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
