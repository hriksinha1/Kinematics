import React from 'react';
import { AtSign, Instagram, MapPin, MessageCircle, Phone, Youtube } from 'lucide-react';
import { Logo } from '../components/Logo';
import { FOOTER_CONTENT } from '../data/content';
import { CLINIC_ADDRESS, PHONE_DISPLAY, PHONE_TEL, CLINIC_HOURS, SITE_METADATA, SOCIAL_LINKS, WHATSAPP_URL } from '../data/siteConfig';

const socialIcon = (label: string) => {
  if (label === 'Instagram') return <Instagram className="w-4 h-4" aria-hidden="true" />;
  if (label === 'YouTube') return <Youtube className="w-4 h-4" aria-hidden="true" />;
  return <AtSign className="w-4 h-4" aria-hidden="true" />;
};

export const Footer: React.FC = () => (
  <footer className="relative overflow-hidden border-t-4 border-[#C8F36A] bg-[#101A3A] pt-12 sm:pt-14 pb-8 text-white">
    <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/[0.06]" />
    <div className="max-w-[1200px] mx-auto px-5 sm:px-6 space-y-10 relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-4 space-y-4">
          <Logo isDark />
          <p className="text-[14px] sm:text-[15px] text-white/60 leading-[1.75] max-w-[34ch]">{SITE_METADATA.tagline}</p>
          <div className="flex items-center gap-2.5 pt-1" aria-label="Kinematics social profiles">
            {SOCIAL_LINKS.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`Kinematics on ${social.label}`} title={social.label} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 hover:border-[#C8F36A] hover:bg-[#C8F36A] hover:text-[#101A3A] transition-colors">
                {socialIcon(social.label)}
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 space-y-3.5">
          <h4 className="text-[12px] font-extrabold tracking-[0.12em] uppercase text-[#C8F36A]">Explore</h4>
          <ul className="space-y-3">
            {FOOTER_CONTENT.explore.map((link) => <li key={link.label}><a href={link.href} className="text-[14px] text-white/65 hover:text-white transition-colors">{link.label}</a></li>)}
          </ul>
        </div>

        <div className="lg:col-span-3 space-y-3.5">
          <h4 className="text-[12px] font-extrabold tracking-[0.12em] uppercase text-[#C8F36A]">Care & Services</h4>
          <ul className="space-y-3">
            {FOOTER_CONTENT.services.map((link) => <li key={link.label}><a href={link.href} className="text-[14px] text-white/65 hover:text-white transition-colors">{link.label}</a></li>)}
          </ul>
        </div>

        <div className="lg:col-span-3 space-y-3.5">
          <h4 className="text-[12px] font-extrabold tracking-[0.12em] uppercase text-[#C8F36A]">Visit & Contact</h4>
          <a href={CLINIC_ADDRESS.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 text-[13px] sm:text-[14px] text-white/65 leading-relaxed hover:text-white transition-colors">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#C8F36A]" aria-hidden="true" /><span>{CLINIC_ADDRESS.fullAddress}</span>
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-[13px] sm:text-[14px] text-white/65 hover:text-white transition-colors">
            <MessageCircle className="w-4 h-4 shrink-0 text-[#C8F36A]" aria-hidden="true" /><span>WhatsApp appointments</span>
          </a>
          <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2.5 text-[13px] sm:text-[14px] text-white/65 hover:text-white transition-colors">
            <Phone className="w-4 h-4 shrink-0 text-[#C8F36A]" aria-hidden="true" /><span>{PHONE_DISPLAY}</span>
          </a>
          <p className="pt-1 text-[12px] font-semibold text-white/45">WhatsApp / contact: {CLINIC_HOURS[0].hours}</p>
        </div>
      </div>
      <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-white/45">
        <p>© {SITE_METADATA.copyrightYear} Kinematics Rehabzone. All rights reserved.</p>
        <div className="flex items-center gap-4">{FOOTER_CONTENT.legal.map((item) => <a key={item.label} href={item.href} className="hover:text-white transition-colors">{item.label}</a>)}</div>
      </div>
    </div>
  </footer>
);
