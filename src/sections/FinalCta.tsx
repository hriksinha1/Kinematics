import React from 'react';
import { Button } from '../components/Button';
import { SmartImage } from '../components/SmartImage';
import { FINAL_CTA_CONTENT } from '../data/content';
import { BOOKING_URL, PHONE_TEL } from '../data/siteConfig';

export const FinalCta: React.FC = () => {
  return (
    <section id="book" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        {/* Split Panel */}
        <div className="rounded-[28px] sm:rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-[0_8px_30px_rgba(40,104,245,0.14)] border border-[#2868F5]/20">
          {/* Left Side: Saturated Blue (~60% width, 7 of 12 cols on desktop) */}
          <div className="lg:col-span-7 bg-[#2868F5] text-white p-7 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h2
                className="font-display text-[36px] sm:text-[44px] md:text-[52px] lg:text-[58px] leading-[0.98] tracking-[0.01em] text-white"
                style={{ textWrap: 'balance' }}
              >
                {FINAL_CTA_CONTENT.headline}
              </h2>
              <p className="text-[15px] sm:text-[16px] text-white/90 leading-[1.6] max-w-[42ch]">
                {FINAL_CTA_CONTENT.description}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Button
                variant="white-solid"
                size="md"
                href={BOOKING_URL}
                external
                className="w-full sm:w-auto"
              >
                {FINAL_CTA_CONTENT.primaryCta}
              </Button>
              <Button
                variant="white-outline"
                size="md"
                href={PHONE_TEL ? `tel:${PHONE_TEL}` : '#visit'}
                className="w-full sm:w-auto"
              >
                {FINAL_CTA_CONTENT.secondaryCta}
              </Button>
            </div>
          </div>

          {/* Right Side: Clean Photography (~40% width, 5 of 12 cols on desktop) */}
          <div className="lg:col-span-5 h-[280px] sm:h-[340px] lg:h-auto min-h-full bg-slate-100">
            <SmartImage
              src={FINAL_CTA_CONTENT.image.src}
              alt={FINAL_CTA_CONTENT.image.alt}
              width={FINAL_CTA_CONTENT.image.width}
              height={FINAL_CTA_CONTENT.image.height}
              aspectRatioClass="w-full h-full"
              objectPosition="center 30%"
              className="h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
