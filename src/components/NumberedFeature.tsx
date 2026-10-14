import React from 'react';

interface NumberedFeatureProps {
  number: string;
  title: string;
  text: string;
  isLast?: boolean;
}

export const NumberedFeature: React.FC<NumberedFeatureProps> = ({ number, title, text, isLast = false }) => (
  <div className={`flex items-start gap-4 sm:gap-5 py-5 sm:py-6 ${!isLast ? 'border-b border-[#DDE4EF]' : ''}`}>
    <div className="mt-0.5 flex h-9 w-9 shrink-0 select-none items-center justify-center rounded-[12px] bg-[#C8F36A] text-[14px] font-extrabold text-[#101A3A] shadow-[0_4px_12px_rgba(200,243,106,0.25)]">
      {number.padStart(2, '0')}
    </div>
    <div className="space-y-1.5">
      <h3 className="text-[17px] sm:text-[18px] font-bold text-[#101A3A] tracking-[-0.015em]">{title}</h3>
      <p className="text-[15px] sm:text-[16px] text-[#556176] leading-[1.7]">{text}</p>
    </div>
  </div>
);
