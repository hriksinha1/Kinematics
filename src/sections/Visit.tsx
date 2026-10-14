import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { SectionHeading } from '../components/SectionHeading';
import { SmartImage } from '../components/SmartImage';
import { VisitCard } from '../components/VisitCard';
import { VISIT_CONTENT } from '../data/content';

export const Visit: React.FC = () => {
  return (
    <section id="visit" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 space-y-8 sm:space-y-10">
        {/* Header Row: Left Title & Right Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-transparent">
          <div className="space-y-3">
            <Eyebrow>{VISIT_CONTENT.eyebrow}</Eyebrow>
            <SectionHeading title={VISIT_CONTENT.headline} />
          </div>
          <p className="text-[14px] sm:text-[15px] text-[#687080] md:pb-2">
            {VISIT_CONTENT.subtitle}
          </p>
        </div>

        {/* Treatment Room Photo Container with Overlay Card on Desktop */}
        <div className="relative w-full rounded-[22px] sm:rounded-[26px] overflow-hidden border border-[#E7EAF0] shadow-[0_2px_12px_rgba(13,27,73,0.06)]">
          {/* Photo */}
          <div className="w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[16/7] min-h-[300px]">
            <SmartImage
              src={VISIT_CONTENT.image.src}
              alt={VISIT_CONTENT.image.alt}
              width={VISIT_CONTENT.image.width}
              height={VISIT_CONTENT.image.height}
              aspectRatioClass="w-full h-full"
              objectPosition="center 60%"
            />
          </div>

          {/* Desktop Overlay Card (Top-Left inside photo) */}
          <div className="hidden md:block absolute top-6 left-6 z-10">
            <VisitCard />
          </div>
        </div>

        {/* Mobile / Small Screen Card Placement (directly beneath photo) */}
        <div className="block md:hidden">
          <VisitCard className="max-w-full" />
        </div>

        {/* Two Pale-Blue Blocks Side-by-Side Below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {VISIT_CONTENT.bottomCards.map((card) => (
            <div
              key={card.title}
              className="bg-[#F0F4FF] rounded-[16px] p-5 sm:p-6 border border-[#e2ecfe] space-y-1.5"
            >
              <h3 className="text-[15px] font-semibold text-[#0D1B49] tracking-tight">
                {card.title}
              </h3>
              <p className="text-[13px] sm:text-[14px] text-[#687080] leading-[1.6]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
