import React, { useState } from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { SectionHeading } from '../components/SectionHeading';
import { FaqItem } from '../components/FaqItem';
import { FAQ_CONTENT } from '../data/content';

export const Faq: React.FC = () => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});
  const handleToggle = (id: string) => setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  const leftColItems = [FAQ_CONTENT.items[0], FAQ_CONTENT.items[2], FAQ_CONTENT.items[4]];
  const rightColItems = [FAQ_CONTENT.items[1], FAQ_CONTENT.items[3], FAQ_CONTENT.items[5]];

  return (
    <section id="faq" className="kinetics-grid-surface py-16 sm:py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 space-y-10 sm:space-y-12">
        <div className="text-center space-y-4">
          <Eyebrow centered>{FAQ_CONTENT.eyebrow}</Eyebrow>
          <SectionHeading title={FAQ_CONTENT.headline} centered maxWidthCh="max-w-[36ch]" />
          <p className="mx-auto max-w-[48ch] text-[15px] sm:text-[16px] text-[#556176] leading-[1.7]">Straightforward answers to help you feel prepared before you get in touch.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-start">
          <div className="flex flex-col gap-4 sm:gap-5">
            {leftColItems.map((item) => <FaqItem key={item.id} id={item.id} question={item.question} answer={item.answer} isOpen={!!openIds[item.id]} onToggle={() => handleToggle(item.id)} />)}
          </div>
          <div className="flex flex-col gap-4 sm:gap-5">
            {rightColItems.map((item) => <FaqItem key={item.id} id={item.id} question={item.question} answer={item.answer} isOpen={!!openIds[item.id]} onToggle={() => handleToggle(item.id)} />)}
          </div>
        </div>
      </div>
    </section>
  );
};
