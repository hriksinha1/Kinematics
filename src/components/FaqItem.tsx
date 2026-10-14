import React from 'react';
import { Plus } from 'lucide-react';

export interface FaqItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const FaqItem: React.FC<FaqItemProps> = ({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  const headingId = `faq-heading-${id}`;
  const contentId = `faq-content-${id}`;

  return (
    <div className="bg-white rounded-[14px] border border-[#E7EAF0] transition-colors duration-200 hover:border-[#ccd4e0] overflow-hidden">
      <h3>
        <button
          type="button"
          id={headingId}
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
          className="w-full flex items-center justify-between text-left p-4 sm:p-5 gap-3.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#2868F5] focus-visible:outline-offset-[-2px]"
        >
          <span className="text-[14px] sm:text-[15px] font-medium text-[#0D1B49] leading-snug">
            {question}
          </span>
          <span
            className={`w-6 h-6 rounded-full bg-[#EAF1FF] text-[#2868F5] flex items-center justify-center shrink-0 transition-transform duration-200 ${
              isOpen ? 'rotate-45 bg-[#2868F5] text-white' : ''
            }`}
            aria-hidden="true"
          >
            <Plus className="w-3.5 h-3.5" />
          </span>
        </button>
      </h3>

      <div
        id={contentId}
        role="region"
        aria-labelledby={headingId}
        className={`grid transition-all duration-200 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-[13px] sm:text-[14px] text-[#687080] leading-[1.6] border-t border-[#F0F4FF] mt-1">
            <p className="pt-2">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
