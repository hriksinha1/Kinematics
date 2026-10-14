import React from 'react';
import { Plus } from 'lucide-react';

export interface FaqItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const FaqItem: React.FC<FaqItemProps> = ({ id, question, answer, isOpen, onToggle }) => {
  const headingId = `faq-heading-${id}`;
  const contentId = `faq-content-${id}`;

  return (
    <div className={`overflow-hidden rounded-[18px] border bg-white transition-all duration-200 ${isOpen ? 'border-[#2F5BFF]/35 shadow-[0_10px_26px_rgba(16,26,58,0.07)]' : 'border-[#DDE4EF] hover:border-[#AEBBD1] hover:shadow-[0_6px_18px_rgba(16,26,58,0.045)]'}`}>
      <h3>
        <button
          type="button"
          id={headingId}
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
          className="flex min-h-[66px] w-full cursor-pointer items-center justify-between gap-4 px-4 py-4 sm:px-5 sm:py-5 text-left focus-visible:outline-2 focus-visible:outline-[#2F5BFF] focus-visible:outline-offset-[-3px]"
        >
          <span className="text-[15px] sm:text-[16px] font-bold text-[#101A3A] leading-snug tracking-[-0.01em]">{question}</span>
          <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] transition-all duration-200 ${isOpen ? 'rotate-45 bg-[#101A3A] text-[#C8F36A]' : 'bg-[#C8F36A] text-[#101A3A]'}`} aria-hidden="true">
            <Plus className="w-4 h-4" />
          </span>
        </button>
      </h3>

      <div id={contentId} role="region" aria-labelledby={headingId} className={`grid transition-all duration-200 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="mx-4 mt-0 border-t border-[#DDE4EF] px-0 pb-5 pt-3 sm:mx-5">
            <p className="text-[14px] sm:text-[15px] text-[#556176] leading-[1.75]">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
