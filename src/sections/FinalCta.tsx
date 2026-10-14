import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../components/Button';
import { SmartImage } from '../components/SmartImage';
import { FINAL_CTA_CONTENT } from '../data/content';
import { BOOKING_URL, WHATSAPP_URL } from '../data/siteConfig';

export const FinalCta: React.FC = () => {
  return (
    <section id="book" className="kinetics-soft-panel py-14 sm:py-18 md:py-22">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <div className="relative rounded-[28px] sm:rounded-[34px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-[#101A3A]/10 shadow-[0_24px_60px_rgba(16,26,58,0.18)]">
          <div className="relative lg:col-span-7 bg-[#101A3A] text-white p-7 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-between gap-8">
            <div className="absolute right-0 top-0 h-36 w-36 rounded-bl-full bg-[#2F5BFF]/20" aria-hidden="true" />
            <div className="relative space-y-5">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] border border-white/15 px-3.5 py-2 text-[10px] font-extrabold tracking-[0.16em] text-[#C8F36A]">
                <span className="h-2 w-2 rounded-full bg-[#C8F36A]" />
                YOUR NEXT MOVE STARTS HERE
              </p>
              <h2 className="font-display text-[42px] sm:text-[50px] md:text-[62px] lg:text-[70px] leading-[0.91] tracking-[0.005em] text-white" style={{ textWrap: 'balance' }}>
                {FINAL_CTA_CONTENT.headline}
              </h2>
              <p className="text-[16px] sm:text-[17px] text-white/70 leading-[1.75] max-w-[42ch]">{FINAL_CTA_CONTENT.description}</p>
            </div>
            <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <Button variant="white-solid" size="lg" href={BOOKING_URL} external withArrow className="w-full sm:w-auto">
                {FINAL_CTA_CONTENT.primaryCta}
              </Button>
              <Button variant="white-outline" size="lg" href={WHATSAPP_URL} external className="w-full sm:w-auto">
                {FINAL_CTA_CONTENT.secondaryCta}
              </Button>
            </div>
            <p className="relative inline-flex items-center gap-2 text-[12px] font-semibold text-white/55">
              <ArrowUpRight className="h-4 w-4 text-[#C8F36A]" aria-hidden="true" />
              WhatsApp booking · 10 AM–8 PM
            </p>
          </div>
          <div className="relative lg:col-span-5 min-h-[280px] sm:min-h-[340px] lg:min-h-full bg-[#DDE4EF]">
            <SmartImage src={FINAL_CTA_CONTENT.image.src} alt={FINAL_CTA_CONTENT.image.alt} width={FINAL_CTA_CONTENT.image.width} height={FINAL_CTA_CONTENT.image.height} aspectRatioClass="absolute inset-0 w-full h-full" objectPosition="center 30%" className="h-full" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 rounded-2xl bg-[#C8F36A] px-4 py-3 text-[#101A3A] shadow-[0_8px_22px_rgba(10,18,44,0.18)]">
              <p className="text-[9px] font-extrabold tracking-[0.16em] uppercase">KINEMATICS REHABZONE</p>
              <p className="mt-1 text-[14px] font-bold">Move. Rebuild. Return.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
