import React, { useState } from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { SectionHeading } from '../components/SectionHeading';
import { FaqItem } from '../components/FaqItem';
import { FAQ_CONTENT } from '../data/content';

export const Faq: React.FC = () => {
  // Track open state per item id
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': false,
  });

  const handleToggle = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Group into left and right columns matching reference screenshot
  // Left: items 0, 2, 4; Right: items 1, 3, 5
  const leftColItems = [FAQ_CONTENT.items[0], FAQ_CONTENT.items[2], FAQ_CONTENT.items[4]];
  const rightColItems = [FAQ_CONTENT.items[1], FAQ_CONTENT.items[3], FAQ_CONTENT.items[5]];

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 space-y-10 sm:space-y-12">
        {/* Centered Header */}
        <div className="text-center space-y-3.5">
          <Eyebrow centered>{FAQ_CONTENT.eyebrow}</Eyebrow>
          <SectionHeading
            title={FAQ_CONTENT.headline}
            centered
            maxWidthCh="max-w-[36ch]"
          />
        </div>

        {/* 2-Column Accordion Grid (align-items: start to prevent vertical stretching) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {leftColItems.map((item) => (
              <FaqItem
                key={item.id}
                id={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={!!openIds[item.id]}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {rightColItems.map((item) => (
              <FaqItem
                key={item.id}
                id={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={!!openIds[item.id]}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
