import React from 'react';

interface NumberedFeatureProps {
  number: string;
  title: string;
  text: string;
  isLast?: boolean;
}

export const NumberedFeature: React.FC<NumberedFeatureProps> = ({
  number,
  title,
  text,
  isLast = false,
}) => {
  return (
    <div
      className={`flex items-start gap-4 py-4 sm:py-5 ${
        !isLast ? 'border-b border-[#E7EAF0]' : ''
      }`}
    >
      {/* 26px pale-blue circle with number */}
      <div className="w-7 h-7 rounded-full bg-[#EAF1FF] text-[#2868F5] font-semibold text-[13px] flex items-center justify-center shrink-0 mt-0.5 select-none">
        {number}
      </div>
      <div className="space-y-1">
        <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#0D1B49] tracking-tight">
          {title}
        </h3>
        <p className="text-[14px] sm:text-[15px] text-[#687080] leading-[1.6]">
          {text}
        </p>
      </div>
    </div>
  );
};
