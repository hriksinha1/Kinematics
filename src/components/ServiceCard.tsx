import React from 'react';
import { ArrowRight, Activity, Move, Dumbbell } from 'lucide-react';
import { SmartImage } from './SmartImage';

export interface FeaturedServiceCardProps {
  title: string;
  description: string;
  linkText: string;
  href: string;
  image: { src: string; alt: string; width: number; height: number };
}

export const FeaturedServiceCard: React.FC<FeaturedServiceCardProps> = ({ title, description, linkText, href, image }) => (
  <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[26px] border border-[#DDE4EF] border-t-[4px] border-t-[#C8F36A] bg-white p-4 sm:p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(16,26,58,0.10)]">
    <div className="space-y-4">
      <div className="overflow-hidden rounded-[19px] bg-[#EAF0FF] aspect-[4/3] sm:aspect-[16/10] w-full">
        <SmartImage src={image.src} alt={image.alt} width={image.width} height={image.height} aspectRatioClass="w-full h-full" className="transition-transform duration-500 group-hover:scale-[1.035]" />
      </div>
      <div className="space-y-2.5 px-1 pt-1">
        <span className="kinetics-section-label inline-flex text-[10px] font-extrabold text-[#2F5BFF]">01 / CORE CARE</span>
        <h3 className="text-[23px] sm:text-[26px] font-bold text-[#101A3A] tracking-[-0.025em] leading-tight">{title}</h3>
        <p className="text-[15px] sm:text-[16px] text-[#556176] leading-[1.7]">{description}</p>
      </div>
    </div>
    <div className="pt-5 mt-2 px-1">
      <a href={href} className="inline-flex items-center gap-2 text-[14px] font-extrabold text-[#2F5BFF] hover:text-[#101A3A] transition-colors duration-150 group/link">
        <span>{linkText.replace('→', '').trim()}</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
      </a>
    </div>
  </div>
);

export interface RegularServiceCardProps {
  iconType: 'activity' | 'move' | 'strength';
  title: string;
  description: string;
  linkText: string;
  href: string;
  isWide?: boolean;
}

export const RegularServiceCard: React.FC<RegularServiceCardProps> = ({ iconType, title, description, linkText, href, isWide = false }) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'activity': return <Activity className="w-5 h-5 text-[#101A3A]" aria-hidden="true" />;
      case 'move': return <Move className="w-5 h-5 text-[#101A3A]" aria-hidden="true" />;
      case 'strength':
      default: return <Dumbbell className="w-5 h-5 text-[#101A3A]" aria-hidden="true" />;
    }
  };

  return (
    <div className={`group relative flex h-full flex-col justify-between rounded-[24px] border border-[#DDE4EF] bg-white p-5 sm:p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#2F5BFF]/30 hover:shadow-[0_16px_32px_rgba(16,26,58,0.08)] ${isWide ? 'sm:flex-row sm:items-end sm:gap-8' : ''}`}>
      <div className={`space-y-4 ${isWide ? 'sm:flex sm:items-start sm:gap-4 sm:space-y-0 sm:flex-1' : ''}`}>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#C8F36A] transition-transform duration-200 group-hover:rotate-[-4deg] group-hover:scale-105">
          {renderIcon()}
        </div>
        <div className="space-y-2">
          <h3 className="text-[19px] sm:text-[21px] font-bold text-[#101A3A] tracking-[-0.02em] leading-tight">{title}</h3>
          <p className="text-[14px] sm:text-[15px] text-[#556176] leading-[1.7]">{description}</p>
        </div>
      </div>
      <div className="pt-5 mt-1">
        <a href={href} className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-extrabold text-[#2F5BFF] hover:text-[#101A3A] transition-colors duration-150 group/link">
          <span>{linkText.replace('→', '').trim()}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
        </a>
      </div>
    </div>
  );
};
