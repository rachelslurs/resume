// import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { sortedProfessionalExperiences } from 'src/helpers/utils';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import ProfessionalItem from './ProfessionalItem';

const Professional: React.FC = () => {
  // console.log('sortedProfessionalExperiences', sortedProfessionalExperiences)
  return (
    <article className="rounded-xl bg-neutral-3 py-12">
      <div className="container">
        <div className="flex justify-center text-center">
          <SectionHeading
            level={2}
            text="Experience"
          />
        </div>

        {sortedProfessionalExperiences.map((professional) => (
          <ProfessionalItem key={professional._id} {...professional} />
        ))}
      </div>
    </article>
  );
};

export default Professional;
