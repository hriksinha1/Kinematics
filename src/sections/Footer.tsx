import React from 'react';
import { AtSign, Instagram, MapPin, MessageCircle, Phone, Youtube } from 'lucide-react';
import { Logo } from '../components/Logo';
import { FOOTER_CONTENT } from '../data/content';
import {
  CLINIC_ADDRESS,
  PHONE_DISPLAY,
  PHONE_TEL,
  CLINIC_HOURS,
  SITE_METADATA,
  SOCIAL_LINKS,
  WHATSAPP_URL,
} from '../data/siteConfig';

const socialIcon = (label: string) => {
  if (label === 'Instagram') return <Instagram className="w-4 h-4" aria-hidden="true" />;
  if (label === 'YouTube') return <Youtube className="w-4 h-4" aria-hidden="true" />;
  return <AtSign className="w-4 h-4" aria-hidden="true" />;
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#E7EAF0] pt-14 pb-12 text-[#151923]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-4 space-y-4">
            <Logo />
            <p className="text-[13px] sm:text-[14px] text-[#687080] leading-[1.6] max-w-[34ch]">
              {SITE_METADATA.tagline}
            </p>
            <div className="flex items-center gap-2.5 pt-1" aria-label="Kinematics social profiles">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Kinematics on ${social.label}`}
                  title={social.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E7EAF0] text-[#0D1B49] hover:border-[#2868F5]/40 hover:bg-[#F0F4FF] hover:text-[#2868F5] transition-colors"
                >
                  {socialIcon(social.label)}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-[13px] font-semibold text-[#0D1B49] tracking-tight">Explore</h4>
            <ul className="space-y-2.5">
              {FOOTER_CONTENT.explore.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[13px] text-[#687080] hover:text-[#2868F5] transition-colors duration-150">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-[13px] font-semibold text-[#0D1B49] tracking-tight">Services</h4>
            <ul className="space-y-2.5">
              {FOOTER_CONTENT.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[13px] text-[#687080] hover:text-[#2868F5] transition-colors duration-150">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-[13px] font-semibold text-[#0D1B49] tracking-tight">Visit & Contact</h4>
            <a
              href={CLINIC_ADDRESS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-[13px] text-[#687080] leading-relaxed hover:text-[#2868F5] transition-colors"
            >
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
              <span>{CLINIC_ADDRESS.fullAddress}</span>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] text-[#687080] hover:text-[#2868F5] transition-colors">
              <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>WhatsApp appointments</span>
            </a>
            {PHONE_TEL ? (
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 text-[13px] text-[#687080] hover:text-[#2868F5] transition-colors">
                <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{PHONE_DISPLAY}</span>
              </a>
            ) : (
              <p className="text-[13px] text-[#687080]">{PHONE_DISPLAY}</p>
            )}
            <p className="pt-1 text-[12px] text-[#687080]">
              WhatsApp / contact: {CLINIC_HOURS[0].hours}
            </p>
          </div>
        </div>

        <div className="border-t border-[#E7EAF0] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#687080]">
          <p>© {SITE_METADATA.copyrightYear} Kinematics. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {FOOTER_CONTENT.legal.map((item, idx) => (
              <React.Fragment key={item.label}>
                <a href={item.href} className="hover:text-[#2868F5] transition-colors duration-150">{item.label}</a>
                {idx !== FOOTER_CONTENT.legal.length - 1 && <span className="text-[#ccd4e0]" aria-hidden="true">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
