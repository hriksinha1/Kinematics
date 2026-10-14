import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { SmartImage } from '../components/SmartImage';
import { TECHNOLOGY_CONTENT } from '../data/content';

export const Technology: React.FC = () => {
  return (
    <section id="technology" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Deep Navy Panel */}
        <div className="bg-[#0D1B49] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 lg:p-12 shadow-[0_8px_30px_rgba(13,27,73,0.16)] text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Image with modern screen/tech */}
            <div className="lg:col-span-5">
              <div className="w-full aspect-[4/3] sm:aspect-[4/5] rounded-[20px] overflow-hidden border border-white/10 shadow-inner">
                <SmartImage
                  src={TECHNOLOGY_CONTENT.image.src}
                  alt={TECHNOLOGY_CONTENT.image.alt}
                  width={TECHNOLOGY_CONTENT.image.width}
                  height={TECHNOLOGY_CONTENT.image.height}
                  aspectRatioClass="w-full h-full"
                  objectPosition="center 30%"
                />
              </div>
            </div>

            {/* Right Column: Eyebrow, H2, and 3 Tech Rows */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <Eyebrow variant="dark">{TECHNOLOGY_CONTENT.eyebrow}</Eyebrow>
                <h2
                  className="font-display text-[34px] sm:text-[42px] md:text-[50px] leading-[1.0] text-white tracking-[0.01em]"
                  style={{ textWrap: 'balance' }}
                >
                  {TECHNOLOGY_CONTENT.headline}
                </h2>
              </div>

              {/* 3 Tech Features with labels on left and descriptions on right */}
              <div className="border-t border-white/12">
                {TECHNOLOGY_CONTENT.rows.map((row, idx) => (
                  <div
                    key={row.tag}
                    className={`py-4 sm:py-5 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 ${
                      idx !== TECHNOLOGY_CONTENT.rows.length - 1
                        ? 'border-b border-white/12'
                        : ''
                    }`}
                  >
                    {/* Small uppercase tag */}
                    <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider text-slate-400 sm:w-16 shrink-0 pt-0.5">
                      {row.tag}
                    </span>

                    {/* Content title + text */}
                    <div className="space-y-1">
                      <h3 className="text-[16px] sm:text-[17px] font-semibold text-white tracking-tight">
                        {row.title}
                      </h3>
                      <p className="text-[13px] sm:text-[14px] text-slate-300 leading-[1.6]">
                        {row.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
