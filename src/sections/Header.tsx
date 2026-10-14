import React, { useState } from 'react';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { MobileNav } from '../components/MobileNav';
import { NAV_LINKS, BOOKING_URL } from '../data/siteConfig';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-[72px] sm:h-[78px] border-b border-[#DDE4EF] bg-white/95 backdrop-blur-md transition-all">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 h-full flex items-center justify-between gap-5">
        <Logo />
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="relative py-2 text-[14px] lg:text-[15px] text-[#45516A] hover:text-[#2F5BFF] font-semibold transition-colors duration-150 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#C8F36A] after:transition-all after:duration-200 hover:after:w-full">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center">
          <Button variant="primary" size="sm" href={BOOKING_URL} external withArrow className="text-[13px] lg:text-[14px] px-4 lg:px-5 py-2.5">
            Book an Appointment
          </Button>
        </div>
        <button
          type="button"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2.5 text-[#101A3A] hover:bg-[#EAF0FF] rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-[#2F5BFF]"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} id="mobile-menu" />
    </header>
  );
};
