import React, { useEffect, useRef } from 'react';
import { NAV_LINKS, BOOKING_URL } from '../data/siteConfig';
import { Button } from './Button';
import { Logo } from './Logo';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  id?: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, id = 'mobile-menu' }) => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      id={id}
      ref={navRef}
      className="fixed inset-x-0 top-[72px] sm:top-[78px] bottom-0 z-40 bg-white/95 backdrop-blur-md md:hidden flex flex-col justify-between p-6 overflow-y-auto border-t border-[#DDE4EF] animate-in fade-in duration-200"
    >
      <div>
        <div className="mb-6 border-b border-[#DDE4EF] pb-5">
          <Logo />
          <p className="mt-3 text-[12px] font-semibold tracking-wide text-[#556176]">PHYSIOTHERAPY · SPORTS REHAB · CHIROPRACTIC</p>
        </div>
        <nav className="flex flex-col space-y-1" aria-label="Mobile navigation">
          {NAV_LINKS.map((link, index) => (
            <a key={link.label} href={link.href} onClick={onClose} className="flex min-h-[50px] items-center justify-between rounded-xl px-3 py-3 text-[18px] font-bold text-[#101A3A] hover:bg-[#EAF0FF] hover:text-[#2F5BFF] transition-colors">
              <span>{link.label}</span>
              <span className="font-display text-[20px] text-[#2F5BFF]/55">{String(index + 1).padStart(2, '0')}</span>
            </a>
          ))}
        </nav>
      </div>
      <div className="space-y-4 border-t border-[#DDE4EF] pt-5">
        <Button variant="primary" href={BOOKING_URL} external withArrow fullWidth size="lg" onClick={onClose}>
          Book an Appointment
        </Button>
        <p className="text-center text-[12px] font-semibold text-[#556176]">WhatsApp booking · 10 AM–8 PM</p>
      </div>
    </div>
  );
};
