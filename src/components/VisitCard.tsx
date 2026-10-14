import React from 'react';
import { MapPin, MessageCircle, Phone } from 'lucide-react';
import { CLINIC_ADDRESS, CLINIC_HOURS, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../data/siteConfig';
import { Button } from './Button';

interface VisitCardProps {
  className?: string;
}

export const VisitCard: React.FC<VisitCardProps> = ({ className = '' }) => (
  <div className={`relative w-full max-w-[350px] space-y-4 overflow-hidden rounded-[22px] border border-[#DDE4EF] border-t-[4px] border-t-[#C8F36A] bg-white p-5 sm:p-6 shadow-[0_18px_40px_rgba(16,26,58,0.13)] ${className}`}>
    <div className="space-y-2">
      <span className="kinetics-section-label inline-flex text-[10px] font-extrabold text-[#2F5BFF]">Find your way to</span>
      <h3 className="font-display text-[28px] leading-[0.95] text-[#101A3A]">KINEMATICS<br /><span className="text-[#2F5BFF]">REHABZONE</span></h3>
      <div className="flex items-start gap-2.5 pt-1">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2F5BFF]" aria-hidden="true" />
        <p className="text-[13px] sm:text-[14px] font-semibold leading-[1.6] text-[#45516A]">
          {CLINIC_ADDRESS.street}<br />{CLINIC_ADDRESS.city}, {CLINIC_ADDRESS.province} {CLINIC_ADDRESS.postalCode}
        </p>
      </div>
    </div>
    <div className="space-y-2.5 border-t border-[#DDE4EF] pt-3.5">
      {CLINIC_HOURS.map((item) => (
        <div key={item.days} className="flex items-start justify-between gap-3 text-[12px] sm:text-[13px]">
          <span className="text-[#687080]">{item.days}</span>
          <span className="text-right font-bold text-[#101A3A]">{item.hours}</span>
        </div>
      ))}
      <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 pt-1 text-[13px] font-bold text-[#2F5BFF] hover:text-[#101A3A] transition-colors">
        <Phone className="h-4 w-4" aria-hidden="true" />{PHONE_DISPLAY}
      </a>
    </div>
    <div className="space-y-2 pt-1">
      <Button variant="primary" href={WHATSAPP_URL} external fullWidth withArrow className="text-[13px] py-2.5 rounded-full">
        <span className="inline-flex items-center gap-2"><MessageCircle className="h-4 w-4" aria-hidden="true" />Book on WhatsApp</span>
      </Button>
      <Button variant="secondary" href={CLINIC_ADDRESS.googleMapsUrl} external fullWidth className="text-[13px] py-2.5 rounded-full">
        Get directions
      </Button>
    </div>
  </div>
);
