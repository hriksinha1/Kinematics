import React from 'react';
import { CLINIC_ADDRESS, CLINIC_HOURS, WHATSAPP_URL } from '../data/siteConfig';
import { Button } from './Button';

interface VisitCardProps {
  className?: string;
}

export const VisitCard: React.FC<VisitCardProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white rounded-[20px] border border-[#E7EAF0] p-5 sm:p-6 shadow-[0_4px_16px_rgba(13,27,73,0.06)] w-full max-w-[340px] space-y-4 ${className}`}>
      <div className="space-y-1">
        <span className="text-[12px] font-medium text-[#687080] tracking-wide block">
          {CLINIC_ADDRESS.name}
        </span>
        <p className="text-[15px] sm:text-[16px] font-semibold text-[#0D1B49] leading-snug">
          {CLINIC_ADDRESS.street}
        </p>
        <p className="text-[13px] text-[#687080]">
          {CLINIC_ADDRESS.city}, {CLINIC_ADDRESS.province} {CLINIC_ADDRESS.postalCode}
        </p>
      </div>

      <div className="border-t border-[#E7EAF0] pt-3.5 space-y-2">
        {CLINIC_HOURS.map((item) => (
          <div key={item.days} className="flex items-center justify-between gap-3 text-[12px] sm:text-[13px]">
            <span className="text-[#687080] font-normal">{item.days}</span>
            <span className="text-[#0D1B49] font-medium text-right">{item.hours}</span>
          </div>
        ))}
      </div>

      <div className="pt-1 space-y-2">
        <Button variant="primary" href={WHATSAPP_URL} external fullWidth withArrow className="text-[13px] py-2.5 rounded-full">
          Book on WhatsApp
        </Button>
        <Button variant="secondary" href={CLINIC_ADDRESS.googleMapsUrl} external fullWidth className="text-[13px] py-2.5 rounded-full">
          Get directions
        </Button>
      </div>
    </div>
  );
};
