import React, { useState } from 'react';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { MobileNav } from '../components/MobileNav';
import { NAV_LINKS, BOOKING_URL } from '../data/siteConfig';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xs border-b border-[#E7EAF0] h-[64px] sm:h-[70px] transition-all">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 h-full flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Logo />

        {/* Center / Right-of-center: Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-8"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] lg:text-[14px] text-[#687080] hover:text-[#151923] font-medium transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Far Right: Desktop CTA button */}
        <div className="hidden md:flex items-center">
          <Button
            variant="primary"
            size="sm"
            href={BOOKING_URL}
            external
            withArrow
            className="text-[13px] px-4 py-2 font-medium"
          >
            Book an Appointment
          </Button>
        </div>

        {/* Mobile menu trigger button */}
        <button
          type="button"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-[#0D1B49] hover:bg-[#F0F4FF] rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#2868F5]"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile navigation drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        id="mobile-menu"
      />
    </header>
  );
};
