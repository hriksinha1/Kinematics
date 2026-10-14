import React from 'react';
import { SmartImage } from './SmartImage';

export interface TeamMemberProps {
  name: string;
  role: string;
  credentials: string;
  image: { src: string; alt: string; width: number; height: number };
}

export const TeamCard: React.FC<TeamMemberProps> = ({ name, role, credentials, image }) => (
  <div className="flex flex-col gap-3.5 group">
    <div className="w-full aspect-[3/4] rounded-[18px] overflow-hidden bg-[#EAF0FF] border border-[#DDE4EF]">
      <SmartImage src={image.src} alt={image.alt} width={image.width} height={image.height} aspectRatioClass="w-full h-full" objectPosition="center 18%" className="transition-transform duration-500 group-hover:scale-[1.035]" />
    </div>
    <div className="space-y-2 px-1 pb-1">
      <div>
        <h3 className="text-[20px] sm:text-[22px] font-bold text-[#101A3A] tracking-[-0.02em] leading-tight">{name}</h3>
        <p className="mt-1.5 text-[14px] sm:text-[15px] text-[#2F5BFF] font-bold">{role}</p>
      </div>
      <span className="inline-flex max-w-full items-center rounded-full border border-[#DDE4EF] bg-white px-3 py-1.5 text-[11px] sm:text-[12px] leading-snug font-semibold text-[#556176]">{credentials}</span>
    </div>
  </div>
);
