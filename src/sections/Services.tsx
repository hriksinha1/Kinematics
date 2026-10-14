import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '../components/Eyebrow';
import { SectionHeading } from '../components/SectionHeading';
import { FeaturedServiceCard, RegularServiceCard } from '../components/ServiceCard';
import { SERVICES_CONTENT } from '../data/content';

export const Services: React.FC = () => {
  return (
    <section id="services" className="kinetics-soft-panel py-16 sm:py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 space-y-9 sm:space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
          <div className="space-y-4">
            <Eyebrow>{SERVICES_CONTENT.eyebrow}</Eyebrow>
            <SectionHeading title={SERVICES_CONTENT.headline} maxWidthCh="max-w-[17ch]" />
          </div>
          <p className="text-[15px] sm:text-[16px] text-[#556176] leading-[1.7] max-w-[44ch] lg:pb-1">{SERVICES_CONTENT.description}</p>
        </div>

        <div className="flex items-center justify-between gap-4 border-y border-[#DDE4EF] py-3.5">
          <span className="kinetics-section-label text-[10px] sm:text-[11px] font-extrabold text-[#101A3A]/55">Personalised care pathways</span>
          <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] font-extrabold uppercase tracking-[0.1em] text-[#2F5BFF]">
            Explore services <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          <div className="lg:col-span-5 h-full">
            <FeaturedServiceCard title={SERVICES_CONTENT.featured.title} description={SERVICES_CONTENT.featured.description} linkText={SERVICES_CONTENT.featured.linkText} href={SERVICES_CONTENT.featured.href} image={SERVICES_CONTENT.featured.image} />
          </div>
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 justify-between h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 flex-1">
              <RegularServiceCard iconType="activity" title={SERVICES_CONTENT.cards[0].title} description={SERVICES_CONTENT.cards[0].description} linkText={SERVICES_CONTENT.cards[0].linkText} href={SERVICES_CONTENT.cards[0].href} />
              <RegularServiceCard iconType="move" title={SERVICES_CONTENT.cards[1].title} description={SERVICES_CONTENT.cards[1].description} linkText={SERVICES_CONTENT.cards[1].linkText} href={SERVICES_CONTENT.cards[1].href} />
            </div>
            <div className="flex-1">
              <RegularServiceCard iconType="strength" title={SERVICES_CONTENT.cards[2].title} description={SERVICES_CONTENT.cards[2].description} linkText={SERVICES_CONTENT.cards[2].linkText} href={SERVICES_CONTENT.cards[2].href} isWide />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
