import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Eyebrow } from '../components/Eyebrow';
import { SectionHeading } from '../components/SectionHeading';
import { SmartImage } from '../components/SmartImage';
import { VisitCard } from '../components/VisitCard';
import { VISIT_CONTENT } from '../data/content';

export const Visit: React.FC = () => {
  return (
    <section id="visit" className="kinetics-soft-panel py-16 sm:py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 space-y-8 sm:space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3.5">
            <Eyebrow>{VISIT_CONTENT.eyebrow}</Eyebrow>
            <SectionHeading title={VISIT_CONTENT.headline} maxWidthCh="max-w-[17ch]" />
          </div>
          <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[#556176] max-w-[42ch] md:pb-2">{VISIT_CONTENT.subtitle}</p>
        </div>

        <div className="relative w-full rounded-[26px] sm:rounded-[32px] overflow-hidden border-[5px] border-white shadow-[0_20px_48px_rgba(16,26,58,0.12)]">
          <div className="w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[16/7] min-h-[300px]">
            <SmartImage src={VISIT_CONTENT.image.src} alt={VISIT_CONTENT.image.alt} width={VISIT_CONTENT.image.width} height={VISIT_CONTENT.image.height} aspectRatioClass="w-full h-full" objectPosition="center 60%" />
          </div>
          <div className="hidden md:block absolute top-6 left-6 z-10">
            <VisitCard />
          </div>
          <a href="#visit" className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 inline-flex items-center gap-2 rounded-full bg-[#C8F36A] px-4 py-2.5 text-[12px] font-extrabold text-[#101A3A] shadow-[0_8px_20px_rgba(10,18,44,0.18)] transition-transform hover:-translate-y-0.5">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            KOLKATA · VISIT US
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="block md:hidden">
          <VisitCard className="max-w-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {VISIT_CONTENT.bottomCards.map((card, index) => (
            <div key={card.title} className="group bg-white rounded-[20px] p-5 sm:p-6 border border-[#DDE4EF] shadow-[0_6px_20px_rgba(16,26,58,0.035)] hover:border-[#2F5BFF]/30 transition-colors space-y-2">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C8F36A] text-[#101A3A] font-display text-[18px]">{index + 1}</span>
                <h3 className="text-[16px] sm:text-[17px] font-bold text-[#101A3A] tracking-tight">{card.title}</h3>
              </div>
              <p className="pl-10 text-[14px] sm:text-[15px] text-[#556176] leading-[1.7]">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
