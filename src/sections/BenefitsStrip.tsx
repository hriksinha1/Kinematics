import React from 'react';
import { Activity, Compass, HeartPulse, Target } from 'lucide-react';
import { BENEFITS_CONTENT } from '../data/content';

const BENEFIT_ICONS = [Target, Compass, HeartPulse, Activity];

export const BenefitsStrip: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#101A3A] py-10 sm:py-12 text-white">
      <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/[0.07]" />
      <div className="pointer-events-none absolute -right-6 -top-10 h-44 w-44 rounded-full border border-[#C8F36A]/15" />
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-3 space-y-3">
            <p className="kinetics-section-label text-[10px] sm:text-[11px] font-extrabold text-[#C8F36A]">The Kinematics difference</p>
            <h2 className="font-display text-[30px] sm:text-[34px] leading-[0.95] tracking-[0.02em] text-white">CARE THAT<br />KEEPS YOU MOVING.</h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.65] text-white/65 max-w-[30ch]">Clear guidance, purposeful movement and a plan shaped around your goals.</p>
          </div>
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-0">
            {BENEFITS_CONTENT.map((item, index) => {
              const Icon = BENEFIT_ICONS[index] ?? Activity;
              return (
                <div key={item.title} className={`group flex items-start gap-3.5 rounded-2xl sm:rounded-none p-4 sm:px-5 sm:py-3 bg-white/[0.045] sm:bg-transparent border border-white/[0.07] sm:border-0 ${index > 0 ? 'xl:border-l xl:border-white/15' : ''}`}>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C8F36A] text-[#101A3A] transition-transform duration-200 group-hover:-translate-y-0.5">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="space-y-1.5">
                    <span className="block text-[14px] sm:text-[15px] font-bold leading-snug text-white">{item.title}</span>
                    <span className="block text-[12px] sm:text-[13px] leading-[1.55] text-white/60">{item.subtitle}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
