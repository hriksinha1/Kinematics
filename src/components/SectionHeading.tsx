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
    <div className={`space-y-3.5 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      <Component
        id={id}
        className={`font-display text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] leading-[1.0] tracking-[0.01em] ${
          isDark ? 'text-white' : 'text-[#0D1B49]'
        }`}
        style={{ textWrap: 'balance' }}
      >
        {title}
      </Component>
      {description && (
        <p
          className={`text-[15px] sm:text-[16px] leading-[1.6] ${
            isDark ? 'text-slate-300' : 'text-[#687080]'
          } ${maxWidthCh} ${centered ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
