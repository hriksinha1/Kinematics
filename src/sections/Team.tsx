import React from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { SectionHeading } from '../components/SectionHeading';
import { TeamCard } from '../components/TeamCard';
import { TEAM_CONTENT } from '../data/content';

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 space-y-10 sm:space-y-12">
        {/* Header Block */}
        <div className="space-y-3.5">
          <Eyebrow>{TEAM_CONTENT.eyebrow}</Eyebrow>
          <SectionHeading
            title={TEAM_CONTENT.headline}
            description={TEAM_CONTENT.description}
            maxWidthCh="max-w-[48ch]"
          />
        </div>

        {/* 3-Column Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {TEAM_CONTENT.members.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              credentials={member.credentials}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
