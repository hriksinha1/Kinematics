import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '../components/Eyebrow';
import { SectionHeading } from '../components/SectionHeading';
import { NumberedFeature } from '../components/NumberedFeature';
import { SmartImage } from '../components/SmartImage';
import { EXPERIENCE_CONTENT } from '../data/content';

export const PatientExperience: React.FC = () => {
  return (
    <section id="experience" className="kinetics-soft-panel py-16 sm:py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 order-1">
            <div className="relative rounded-[28px] bg-white p-2.5 sm:p-3 shadow-[0_18px_44px_rgba(16,26,58,0.12)]">
              <div className="relative w-full aspect-[4/3] sm:aspect-[4/5] rounded-[21px] overflow-hidden border border-white">
                <SmartImage src={EXPERIENCE_CONTENT.image.src} alt={EXPERIENCE_CONTENT.image.alt} width={EXPERIENCE_CONTENT.image.width} height={EXPERIENCE_CONTENT.image.height} aspectRatioClass="w-full h-full" objectPosition="center 25%" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-xl bg-[#101A3A]/90 p-3.5 text-white backdrop-blur-sm">
                  <span className="space-y-1">
                    <span className="block text-[9px] font-extrabold tracking-[0.16em] text-[#C8F36A]">THE KINEMATICS WAY</span>
                    <span className="block text-[13px] font-semibold leading-tight">Understand. Rebuild. Return.</span>
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C8F36A] text-[#101A3A]">
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
              <div className="absolute -left-3 -top-3 h-12 w-12 rounded-tl-[20px] border-l-[5px] border-t-[5px] border-[#C8F36A]" aria-hidden="true" />
            </div>
          </div>

          <div className="lg:col-span-7 order-2 space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <Eyebrow>{EXPERIENCE_CONTENT.eyebrow}</Eyebrow>
              <SectionHeading title={EXPERIENCE_CONTENT.headline} maxWidthCh="max-w-[36ch]" />
            </div>
            <div className="border-t border-[#DDE4EF]">
              {EXPERIENCE_CONTENT.points.map((pt, idx) => (
                <NumberedFeature key={pt.number} number={pt.number} title={pt.title} text={pt.text} isLast={idx === EXPERIENCE_CONTENT.points.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
