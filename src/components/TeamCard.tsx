import React from 'react';
import { SmartImage } from './SmartImage';

export interface TeamMemberProps {
  name: string;
  role: string;
  credentials: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export const TeamCard: React.FC<TeamMemberProps> = ({
  name,
  role,
  credentials,
  image,
}) => {
  return (
    <div className="flex flex-col space-y-3 group">
      {/* Tall aspect ~3:4 rounded (18-20px) photo */}
      <div className="w-full aspect-[3/4] rounded-[20px] overflow-hidden bg-[#F0F4FF] border border-[#E7EAF0]">
        <SmartImage
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          aspectRatioClass="w-full h-full"
          objectPosition="center 18%"
          className="transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      {/* Info block */}
      <div className="space-y-1.5 pt-1">
        <div>
          <h3 className="text-[16px] font-semibold text-[#0D1B49] tracking-tight">
            {name}
          </h3>
          <p className="text-[13px] text-[#687080] font-normal">{role}</p>
        </div>

        {/* Outlined credential pill */}
        <div className="pt-1">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-[12px] text-[#4b5563] border border-[#E7EAF0] bg-[#FAFCFF] leading-normal font-medium">
            {credentials}
          </span>
        </div>
      </div>
    </div>
  );
};
