import React, { useState } from 'react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackText?: string;
  className?: string;
  containerClassName?: string;
  aspectRatioClass?: string;
  objectPosition?: string;
  priority?: boolean;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  fallbackText,
  className = '',
  containerClassName = '',
  aspectRatioClass = '',
  objectPosition = 'center',
  priority = false,
  ...imgProps
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#F0F4FF] ${aspectRatioClass} ${containerClassName}`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          style={{ objectPosition }}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...imgProps}
        />
      ) : (
        /* Graceful fallback with subtle dental motif */
        <div className="w-full h-full flex flex-col items-center justify-center bg-[#F0F4FF] text-[#2868F5]/70 p-4 text-center">
          <svg
            className="w-10 h-10 mb-2 opacity-60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
          </svg>
          <span className="text-[12px] font-medium text-[#687080]">
            {fallbackText || alt || 'Aurora Dental'}
          </span>
        </div>
      )}
    </div>
  );
};
