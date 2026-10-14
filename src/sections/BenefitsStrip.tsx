import React from 'react';
import { BENEFITS_CONTENT } from '../data/content';

export const BenefitsStrip: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 border-y border-[#E7EAF0] bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {BENEFITS_CONTENT.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col space-y-1 ${
                index !== 0 ? 'md:border-l md:border-[#E7EAF0] md:pl-6 lg:pl-8' : ''
              } ${index % 2 !== 0 ? 'pl-4 sm:pl-0' : ''}`}
            >
              <h3 className="text-[13px] sm:text-[14px] font-semibold text-[#0D1B49] tracking-tight">
                {item.title}
              </h3>
              <p className="text-[12px] sm:text-[13px] text-[#687080] leading-normal">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
