import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { SmartImage } from '../components/SmartImage';
import { TECHNOLOGY_CONTENT } from '../data/content';

export const Technology: React.FC = () => {
  return (
    <section id="technology" className="kinetics-grid-surface py-14 sm:py-18 md:py-22">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[34px] border border-white/10 bg-[#101A3A] p-6 sm:p-8 md:p-10 lg:p-12 text-white shadow-[0_24px_60px_rgba(16,26,58,0.20)]">
          <div className="pointer-events-none absolute -right-10 -top-14 h-52 w-52 rounded-full border border-white/[0.08]" />
          <div className="pointer-events-none absolute -right-2 -top-6 h-36 w-36 rounded-full border border-[#C8F36A]/20" />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="w-full aspect-[4/3] sm:aspect-[4/5] rounded-[21px] overflow-hidden border border-white/10 shadow-inner">
                <SmartImage src={TECHNOLOGY_CONTENT.image.src} alt={TECHNOLOGY_CONTENT.image.alt} width={TECHNOLOGY_CONTENT.image.width} height={TECHNOLOGY_CONTENT.image.height} aspectRatioClass="w-full h-full" objectPosition="center 30%" />
              </div>
              <div className="mt-3 flex items-center gap-2 text-[10px] font-extrabold tracking-[0.18em] text-white/55">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C8F36A]" />
                MOVEMENT IS THE MEASURE
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <Eyebrow variant="dark">{TECHNOLOGY_CONTENT.eyebrow}</Eyebrow>
                <h2 className="font-display text-[40px] sm:text-[48px] md:text-[58px] lg:text-[64px] leading-[0.92] text-white tracking-[0.005em]" style={{ textWrap: 'balance' }}>
                  {TECHNOLOGY_CONTENT.headline}
                </h2>
              </div>
              <div className="border-t border-white/15">
                {TECHNOLOGY_CONTENT.rows.map((row, idx) => (
                  <div key={row.tag} className={`py-5 sm:py-6 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-7 ${idx !== TECHNOLOGY_CONTENT.rows.length - 1 ? 'border-b border-white/15' : ''}`}>
                    <span className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#C8F36A] sm:w-[76px] shrink-0 pt-1">{row.tag}</span>
                    <div className="space-y-1.5">
                      <h3 className="text-[17px] sm:text-[19px] font-bold text-white tracking-tight">{row.title}</h3>
                      <p className="text-[14px] sm:text-[15px] text-slate-300 leading-[1.7]">{row.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
