import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { SectionHeading } from '../components/SectionHeading';
import { TeamCard } from '../components/TeamCard';
import { TEAM_CONTENT } from '../data/content';

export const Team: React.FC = () => {
  return (
    <section id="team" className="bg-white py-16 sm:py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 space-y-10 sm:space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
          <div className="space-y-4">
            <Eyebrow>{TEAM_CONTENT.eyebrow}</Eyebrow>
            <SectionHeading title={TEAM_CONTENT.headline} maxWidthCh="max-w-[34ch]" />
          </div>
          <p className="text-[15px] sm:text-[16px] text-[#556176] leading-[1.7] max-w-[42ch] lg:pb-1">{TEAM_CONTENT.description}</p>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-[#C8F36A] via-[#DDE4EF] to-transparent" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {TEAM_CONTENT.members.map((member, index) => (
            <div key={member.id} className="relative rounded-[25px] border border-[#DDE4EF] bg-[#F7F9FC] p-3.5 sm:p-4 shadow-[0_8px_24px_rgba(16,26,58,0.045)] transition-all duration-200 hover:-translate-y-1 hover:border-[#2F5BFF]/30 hover:shadow-[0_16px_32px_rgba(16,26,58,0.09)]">
              <div className="absolute right-5 top-5 z-10 rounded-full bg-[#C8F36A] px-2.5 py-1 text-[9px] font-extrabold tracking-[0.12em] text-[#101A3A]">
                0{index + 1}
              </div>
              <TeamCard name={member.name} role={member.role} credentials={member.credentials} image={member.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
