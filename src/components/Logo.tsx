import React from 'react';

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', isDark = false }) => {
  return (
    <a
      href="#top"
      className={`inline-flex items-center gap-3 group focus-visible:rounded-md transition-opacity duration-150 hover:opacity-90 ${className}`}
      aria-label="Kinematics Rehabzone — back to top"
    >
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#2F5BFF] shadow-[0_5px_14px_rgba(47,91,255,0.22)] transition-transform duration-200 group-hover:-rotate-3 group-hover:scale-105" aria-hidden="true">
        <svg viewBox="0 0 36 36" fill="none" className="h-7 w-7">
          <path d="M10 8V28M10 18L25 8M10 18L25 28" stroke="white" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M23 7L27 7L27 11" stroke="#C8F36A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M23 29L27 29L27 25" stroke="#C8F36A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[23px] sm:text-[25px] tracking-[0.04em] ${isDark ? 'text-white' : 'text-[#101A3A]'}`}>
          KINEMATICS
        </span>
        <span className={`mt-1 text-[9px] font-bold tracking-[0.24em] ${isDark ? 'text-[#C8F36A]' : 'text-[#2F5BFF]'}`}>
          REHABZONE
        </span>
      </span>
    </a>
  );
};
