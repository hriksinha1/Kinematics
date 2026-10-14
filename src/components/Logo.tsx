import React from 'react';

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', isDark = false }) => {
  return (
    <a
      href="#top"
      className={`inline-flex items-center gap-2.5 group focus-visible:rounded-md transition-opacity duration-150 hover:opacity-90 ${className}`}
      aria-label="Aurora Dental - Back to top"
    >
      {/* 8-pointed sparkle / aurora logo mark matching reference */}
      <span className="w-5 h-5 flex items-center justify-center shrink-0 text-[#2868F5] transition-transform duration-200 group-hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
        </svg>
      </span>
      <span
        className={`text-[15px] sm:text-[16px] font-semibold tracking-tight ${
          isDark ? 'text-white' : 'text-[#0D1B49]'
        }`}
      >
        Aurora Dental
      </span>
    </a>
  );
};
