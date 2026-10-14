import React from 'react';
import { ArrowRight, Sparkles, Smile, ShieldCheck } from 'lucide-react';
import { SmartImage } from './SmartImage';

export interface FeaturedServiceCardProps {
  title: string;
  description: string;
  linkText: string;
  href: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export const FeaturedServiceCard: React.FC<FeaturedServiceCardProps> = ({
  title,
  description,
  linkText,
  href,
  image,
}) => {
  return (
    <div className="group flex flex-col justify-between bg-[#EAF1FF] rounded-[24px] p-5 sm:p-6 transition-all duration-200 hover:shadow-[0_2px_8px_rgba(40,104,245,0.06)] border border-[#d8e4fc] h-full">
      <div className="space-y-4">
        <div className="rounded-[18px] overflow-hidden aspect-[4/3] sm:aspect-[16/10] w-full">
          <SmartImage
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            aspectRatioClass="w-full h-full"
            className="transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
        <div className="space-y-2 pt-1">
          <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#0D1B49] tracking-tight">
            {title}
          </h3>
          <p className="text-[14px] sm:text-[15px] text-[#687080] leading-[1.6]">
            {description}
          </p>
        </div>
      </div>
      <div className="pt-4 mt-2">
        <a
          href={href}
          className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#2868F5] hover:text-[#1b56dc] transition-colors duration-150 group/link"
        >
          <span>{linkText.replace('→', '').trim()}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export interface RegularServiceCardProps {
  iconType: 'sparkle' | 'tooth' | 'aligner';
  title: string;
  description: string;
  linkText: string;
  href: string;
  isWide?: boolean;
}

export const RegularServiceCard: React.FC<RegularServiceCardProps> = ({
  iconType,
  title,
  description,
  linkText,
  href,
  isWide = false,
}) => {
  const renderIcon = () => {
    switch (iconType) {
      case 'sparkle':
        return <Sparkles className="w-5 h-5 text-[#2868F5]" />;
      case 'tooth':
        return <ShieldCheck className="w-5 h-5 text-[#2868F5]" />;
      case 'aligner':
      default:
        return <Smile className="w-5 h-5 text-[#2868F5]" />;
    }
  };

  return (
    <div
      className={`group flex flex-col justify-between bg-white rounded-[24px] p-5 sm:p-6 border border-[#E7EAF0] transition-all duration-200 hover:border-[#2868F5]/40 hover:shadow-[0_2px_8px_rgba(13,27,73,0.04)] ${
        isWide ? 'h-full' : 'h-full'
      }`}
    >
      <div className="space-y-3.5">
        <div className="w-10 h-10 rounded-xl bg-[#EAF1FF] flex items-center justify-center shrink-0">
          {renderIcon()}
        </div>
        <div className="space-y-1.5">
          <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#0D1B49] tracking-tight">
            {title}
          </h3>
          <p className="text-[14px] sm:text-[15px] text-[#687080] leading-[1.6]">
            {description}
          </p>
        </div>
      </div>
      <div className="pt-4 mt-2">
        <a
          href={href}
          className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#2868F5] hover:text-[#1b56dc] transition-colors duration-150 group/link"
        >
          <span>{linkText.replace('→', '').trim()}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
        </a>
      </div>
    </div>
  );
};
