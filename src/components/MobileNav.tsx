import React, { useEffect, useRef } from 'react';
import { NAV_LINKS, BOOKING_URL } from '../data/siteConfig';
import { Button } from './Button';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  id?: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, id = 'mobile-menu' }) => {
  const navRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      id={id}
      ref={navRef}
      className="fixed inset-x-0 top-[64px] bottom-0 z-40 bg-white/95 backdrop-blur-md md:hidden flex flex-col justify-between p-6 overflow-y-auto border-t border-[#E7EAF0] animate-in fade-in duration-200"
    >
      <nav className="flex flex-col space-y-1">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="flex items-center text-[18px] font-medium text-[#151923] hover:text-[#2868F5] py-3.5 px-3 rounded-xl hover:bg-[#F0F4FF] transition-colors min-h-[48px]"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="pt-6 border-t border-[#E7EAF0] space-y-3">
        <Button
          variant="primary"
          href={BOOKING_URL}
          external
          withArrow
          fullWidth
          size="lg"
          onClick={onClose}
        >
          Book an Appointment
        </Button>
      </div>
    </div>
  );
};
