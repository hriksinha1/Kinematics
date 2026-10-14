import React from 'react';
import { Logo } from '../components/Logo';
import { FOOTER_CONTENT } from '../data/content';
import { CLINIC_ADDRESS, PHONE_DISPLAY, PHONE_TEL, CLINIC_HOURS, SITE_METADATA } from '../data/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#E7EAF0] pt-14 pb-12 text-[#151923]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-4 space-y-4">
            <Logo />
            <p className="text-[13px] sm:text-[14px] text-[#687080] leading-[1.6] max-w-[34ch]">
              {SITE_METADATA.tagline}
            </p>
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
            <h4 className="text-[13px] font-semibold text-[#0D1B49] tracking-tight">Visit</h4>
            <div className="space-y-2 text-[13px] text-[#687080] leading-relaxed">
              <p>
                {CLINIC_ADDRESS.street}
                {CLINIC_ADDRESS.city && (
                  <>
                    <br />
                    {CLINIC_ADDRESS.city}{CLINIC_ADDRESS.province ? `, ${CLINIC_ADDRESS.province}` : ''} {CLINIC_ADDRESS.postalCode}
                  </>
                )}
              </p>
              {PHONE_TEL ? (
                <p><a href={`tel:${PHONE_TEL}`} className="hover:text-[#2868F5] transition-colors duration-150">{PHONE_DISPLAY}</a></p>
              ) : (
                <p>{PHONE_DISPLAY}</p>
              )}
              <p className="pt-1 text-[12px] text-[#687080]">
                {CLINIC_HOURS[0].days}: {CLINIC_HOURS[0].hours}
              </p>
            </div>
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
