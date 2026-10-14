import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { SectionHeading } from '../components/SectionHeading';
import { NumberedFeature } from '../components/NumberedFeature';
import { SmartImage } from '../components/SmartImage';
import { EXPERIENCE_CONTENT } from '../data/content';

export const PatientExperience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image (~45% width, 5 of 12 cols on desktop) */}
          <div className="lg:col-span-5 order-1">
            <div className="w-full aspect-[4/3] sm:aspect-[4/5] rounded-[24px] overflow-hidden shadow-[0_2px_8px_rgba(13,27,73,0.06)] border border-[#E7EAF0]">
              <SmartImage
                src={EXPERIENCE_CONTENT.image.src}
                alt={EXPERIENCE_CONTENT.image.alt}
                width={EXPERIENCE_CONTENT.image.width}
                height={EXPERIENCE_CONTENT.image.height}
                aspectRatioClass="w-full h-full"
                objectPosition="center 25%"
              />
            </div>
          </div>

          {/* Right Column: Text & 4 Numbered Steps (~55% width, 7 of 12 cols) */}
          <div className="lg:col-span-7 order-2 space-y-6 sm:space-y-8">
            <div className="space-y-3.5">
              <Eyebrow>{EXPERIENCE_CONTENT.eyebrow}</Eyebrow>
              <SectionHeading
                title={EXPERIENCE_CONTENT.headline}
                maxWidthCh="max-w-[36ch]"
              />
            </div>

            {/* 4 Numbered features list */}
            <div className="border-t border-[#E7EAF0]">
              {EXPERIENCE_CONTENT.points.map((pt, idx) => (
                <NumberedFeature
                  key={pt.number}
                  number={pt.number}
                  title={pt.title}
                  text={pt.text}
                  isLast={idx === EXPERIENCE_CONTENT.points.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
