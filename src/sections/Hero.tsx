import React, { useRef } from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { Button } from '../components/Button';
import { SmartImage } from '../components/SmartImage';
import { HERO_CONTENT } from '../data/content';
import { BOOKING_URL, CONTACT_HOURS } from '../data/siteConfig';
import { Check, Clock3 } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="top" className="kinetics-hero pt-12 sm:pt-16 md:pt-20 pb-10 sm:pb-14 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 text-center space-y-5 sm:space-y-6">
        <p className="kinetics-section-label inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-extrabold text-[#101A3A]/65">
          <span className="kinetics-lime-dot inline-block w-2 h-2 rounded-full" />
          Kinematics Rehabzone <span className="text-[#2F5BFF]">/</span> Kolkata
        </p>
        <Eyebrow centered>{HERO_CONTENT.eyebrow}</Eyebrow>
        <h1
          className="font-display text-[54px] sm:text-[70px] md:text-[88px] lg:text-[104px] text-[#101A3A] leading-[0.88] tracking-[0.005em] mx-auto max-w-[12em]"
          style={{ textWrap: 'balance' }}
        >
          <span className="block">{HERO_CONTENT.headlineLead}</span>
          <span className="kinetics-accent-word block">{HERO_CONTENT.headlineAccent}</span>
        </h1>
        <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#45516A] leading-[1.75] max-w-[48ch] mx-auto">
          {HERO_CONTENT.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
          <Button variant="primary" size="lg" href={BOOKING_URL} external withArrow className="w-full sm:w-auto">
            {HERO_CONTENT.primaryCta}
          </Button>
          <Button variant="secondary" size="lg" href="#services" className="w-full sm:w-auto">
            {HERO_CONTENT.secondaryCta}
          </Button>
        </div>
        <p className="inline-flex items-center justify-center gap-2 text-[12px] sm:text-[13px] font-semibold text-[#556176]">
          <Clock3 className="w-4 h-4 text-[#2F5BFF]" aria-hidden="true" />
          WhatsApp appointments <span className="text-[#2F5BFF]">·</span> {CONTACT_HOURS}
        </p>
      </div>

      <div className="mt-10 sm:mt-14 w-full relative overflow-x-clip">
        <div
          ref={scrollContainerRef}
          tabIndex={0}
          aria-label="Kinematics physiotherapy and sports rehabilitation gallery"
          className="w-full overflow-x-auto no-scrollbar scroll-smooth flex justify-start md:justify-center items-center py-3 px-4 sm:px-0 focus-visible:outline-2 focus-visible:outline-[#2F5BFF]"
        >
          <div className="flex items-center gap-3 sm:gap-3.5 shrink-0 mx-auto">
            <div className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] h-[220px] sm:h-[260px] md:h-[310px] lg:h-[340px] rounded-[18px] sm:rounded-[22px] overflow-hidden shrink-0 border border-white shadow-[0_12px_30px_rgba(16,26,58,0.10)]">
              <SmartImage src={HERO_CONTENT.collage[0].src} alt={HERO_CONTENT.collage[0].alt} width={HERO_CONTENT.collage[0].width} height={HERO_CONTENT.collage[0].height} aspectRatioClass="w-full h-full" priority />
            </div>

            <div className="relative w-[190px] sm:w-[230px] md:w-[270px] lg:w-[300px] h-[220px] sm:h-[260px] md:h-[310px] lg:h-[340px] rounded-[18px] sm:rounded-[22px] overflow-hidden shrink-0 border border-white shadow-[0_12px_30px_rgba(16,26,58,0.10)]">
              <SmartImage src={HERO_CONTENT.collage[1].src} alt={HERO_CONTENT.collage[1].alt} width={HERO_CONTENT.collage[1].width} height={HERO_CONTENT.collage[1].height} aspectRatioClass="w-full h-full" objectPosition="center 20%" priority />
              <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-[#101A3A] text-[11px] sm:text-[12px] font-bold shadow-[0_6px_18px_rgba(16,26,58,0.15)] border border-white/80 backdrop-blur-xs">
                  <Check className="w-3.5 h-3.5 text-[#2F5BFF]" strokeWidth={2.5} />
                  <span>{HERO_CONTENT.collage[1].pillLabel}</span>
                </span>
              </div>
            </div>

            <div className="relative w-[280px] sm:w-[420px] md:w-[540px] lg:w-[620px] h-[220px] sm:h-[260px] md:h-[310px] lg:h-[340px] rounded-[18px] sm:rounded-[22px] overflow-hidden shrink-0 border border-white shadow-[0_16px_36px_rgba(16,26,58,0.15)]">
              <SmartImage src={HERO_CONTENT.collage[2].src} alt={HERO_CONTENT.collage[2].alt} width={HERO_CONTENT.collage[2].width} height={HERO_CONTENT.collage[2].height} aspectRatioClass="w-full h-full" objectPosition="center 35%" priority />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#C8F36A] text-[#101A3A] text-[11px] sm:text-[12px] font-extrabold shadow-[0_8px_20px_rgba(10,18,44,0.20)] whitespace-nowrap">
                  <Check className="w-3.5 h-3.5" strokeWidth={2.7} />
                  <span>{HERO_CONTENT.collage[2].pillLabel}</span>
                </span>
              </div>
            </div>

            <div className="relative w-[190px] sm:w-[230px] md:w-[270px] lg:w-[300px] h-[220px] sm:h-[260px] md:h-[310px] lg:h-[340px] rounded-[18px] sm:rounded-[22px] overflow-hidden shrink-0 border border-white shadow-[0_12px_30px_rgba(16,26,58,0.10)]">
              <SmartImage src={HERO_CONTENT.collage[3].src} alt={HERO_CONTENT.collage[3].alt} width={HERO_CONTENT.collage[3].width} height={HERO_CONTENT.collage[3].height} aspectRatioClass="w-full h-full" objectPosition="center 15%" priority />
            </div>

            <div className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] h-[220px] sm:h-[260px] md:h-[310px] lg:h-[340px] rounded-[18px] sm:rounded-[22px] overflow-hidden shrink-0 border border-white shadow-[0_12px_30px_rgba(16,26,58,0.10)]">
              <SmartImage src={HERO_CONTENT.collage[4].src} alt={HERO_CONTENT.collage[4].alt} width={HERO_CONTENT.collage[4].width} height={HERO_CONTENT.collage[4].height} aspectRatioClass="w-full h-full" priority />
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-4 sm:pt-5 flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-bold tracking-[0.12em] uppercase text-[#101A3A]/65">
            <span className="h-[2px] w-8 bg-[#C8F36A]" />
            Movement-led recovery
          </div>
          <div className="flex items-center gap-2 text-[11px] sm:text-[12px] font-semibold text-[#556176]">
            <span className="rounded-full bg-white/85 border border-[#DDE4EF] px-3 py-1.5">MOVE</span>
            <span className="text-[#2F5BFF]">/</span>
            <span className="rounded-full bg-white/85 border border-[#DDE4EF] px-3 py-1.5">REBUILD</span>
            <span className="text-[#2F5BFF]">/</span>
            <span className="rounded-full bg-[#C8F36A] text-[#101A3A] px-3 py-1.5">RETURN</span>
          </div>
        </div>
      </div>
    </section>
  );
};
