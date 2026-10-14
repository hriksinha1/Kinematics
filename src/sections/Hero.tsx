import React, { useRef } from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { Button } from '../components/Button';
import { SmartImage } from '../components/SmartImage';
import { HERO_CONTENT } from '../data/content';
import { BOOKING_URL } from '../data/siteConfig';
import { Check } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="top" className="pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 text-center space-y-5 sm:space-y-6">
        <Eyebrow centered>{HERO_CONTENT.eyebrow}</Eyebrow>
        <h1
          className="font-display text-[44px] sm:text-[56px] md:text-[68px] lg:text-[76px] text-[#0D1B49] leading-[0.98] tracking-[0.01em] mx-auto max-w-[13em]"
          style={{ textWrap: 'balance' }}
        >
          {HERO_CONTENT.headline}
        </h1>
        <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#687080] leading-[1.6] max-w-[46ch] mx-auto">
          {HERO_CONTENT.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button variant="primary" size="md" href={BOOKING_URL} withArrow className="w-full sm:w-auto">
            {HERO_CONTENT.primaryCta}
          </Button>
          <Button variant="secondary" size="md" href="#services" className="w-full sm:w-auto">
            {HERO_CONTENT.secondaryCta}
          </Button>
        </div>
      </div>

      <div className="mt-12 sm:mt-16 w-full relative overflow-x-clip">
        <div
          ref={scrollContainerRef}
          tabIndex={0}
          aria-label="Kinematics physiotherapy and sports rehabilitation gallery"
          className="w-full overflow-x-auto no-scrollbar scroll-smooth flex justify-start md:justify-center items-center py-2 px-4 sm:px-0 focus-visible:outline-2 focus-visible:outline-[#2868F5]"
        >
          <div className="flex items-center gap-3 sm:gap-3.5 shrink-0 mx-auto">
            <div className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] h-[220px] sm:h-[260px] md:h-[310px] lg:h-[340px] rounded-[16px] sm:rounded-[20px] overflow-hidden shrink-0 shadow-[0_1px_3px_rgba(13,27,73,0.06)]">
              <SmartImage src={HERO_CONTENT.collage[0].src} alt={HERO_CONTENT.collage[0].alt} width={HERO_CONTENT.collage[0].width} height={HERO_CONTENT.collage[0].height} aspectRatioClass="w-full h-full" priority />
            </div>

            <div className="relative w-[190px] sm:w-[230px] md:w-[270px] lg:w-[300px] h-[220px] sm:h-[260px] md:h-[310px] lg:h-[340px] rounded-[16px] sm:rounded-[20px] overflow-hidden shrink-0 shadow-[0_1px_3px_rgba(13,27,73,0.06)]">
              <SmartImage src={HERO_CONTENT.collage[1].src} alt={HERO_CONTENT.collage[1].alt} width={HERO_CONTENT.collage[1].width} height={HERO_CONTENT.collage[1].height} aspectRatioClass="w-full h-full" objectPosition="center 20%" priority />
              <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/95 text-[#0D1B49] text-[11px] sm:text-[12px] font-medium shadow-[0_2px_8px_rgba(13,27,73,0.12)] border border-[#E7EAF0] backdrop-blur-xs">
                  <Check className="w-3.5 h-3.5 text-[#2868F5]" strokeWidth={2.5} />
                  <span>{HERO_CONTENT.collage[1].pillLabel}</span>
                </span>
              </div>
            </div>

            <div className="relative w-[280px] sm:w-[420px] md:w-[540px] lg:w-[620px] h-[220px] sm:h-[260px] md:h-[310px] lg:h-[340px] rounded-[16px] sm:rounded-[20px] overflow-hidden shrink-0 shadow-[0_2px_6px_rgba(13,27,73,0.08)]">
              <SmartImage src={HERO_CONTENT.collage[2].src} alt={HERO_CONTENT.collage[2].alt} width={HERO_CONTENT.collage[2].width} height={HERO_CONTENT.collage[2].height} aspectRatioClass="w-full h-full" objectPosition="center 35%" priority />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/95 text-[#0D1B49] text-[11px] sm:text-[12px] font-medium shadow-[0_2px_8px_rgba(13,27,73,0.14)] border border-[#E7EAF0] backdrop-blur-xs whitespace-nowrap">
                  <Check className="w-3.5 h-3.5 text-[#2868F5]" strokeWidth={2.5} />
                  <span>{HERO_CONTENT.collage[2].pillLabel}</span>
                </span>
              </div>
            </div>

            <div className="relative w-[190px] sm:w-[230px] md:w-[270px] lg:w-[300px] h-[220px] sm:h-[260px] md:h-[310px] lg:h-[340px] rounded-[16px] sm:rounded-[20px] overflow-hidden shrink-0 shadow-[0_1px_3px_rgba(13,27,73,0.06)]">
              <SmartImage src={HERO_CONTENT.collage[3].src} alt={HERO_CONTENT.collage[3].alt} width={HERO_CONTENT.collage[3].width} height={HERO_CONTENT.collage[3].height} aspectRatioClass="w-full h-full" objectPosition="center 15%" priority />
            </div>

            <div className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] h-[220px] sm:h-[260px] md:h-[310px] lg:h-[340px] rounded-[16px] sm:rounded-[20px] overflow-hidden shrink-0 shadow-[0_1px_3px_rgba(13,27,73,0.06)]">
              <SmartImage src={HERO_CONTENT.collage[4].src} alt={HERO_CONTENT.collage[4].alt} width={HERO_CONTENT.collage[4].width} height={HERO_CONTENT.collage[4].height} aspectRatioClass="w-full h-full" priority />
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-4 sm:pt-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white text-[#0D1B49] text-[11px] sm:text-[12px] font-medium shadow-[0_1px_4px_rgba(13,27,73,0.08)] border border-[#E7EAF0]">
            <Check className="w-3.5 h-3.5 text-[#2868F5]" strokeWidth={2.5} />
            <span>{HERO_CONTENT.extraPill.label}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
