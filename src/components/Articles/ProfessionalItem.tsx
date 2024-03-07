import { ProfessionalExperience, PreviousTitle } from '@content';
import React from 'react';
import { Heading } from '../Heading/Heading';
import Prose from '../Prose/Prose';
import { sortedPreviousTitles } from 'src/helpers/utils';

const ProfessionalItem: React.FC<ProfessionalExperience> = (props) => {
  const {
    body,
    endDate,
    organization,
    startDate,
    title,
    previousTitles
  } = props;
  const previousTitlesSorted = previousTitles ? sortedPreviousTitles(previousTitles) : []
  return (
    <article className="border-t-2 border-neutral-6 py-6 first-of-type:border-none last-of-type:pb-0">
      <Heading className="text-balance" level={3} font='mono'>
        <span className="rounded-md bg-neutral-12 px-2 text-neutral-1">
          {title}
        </span>
        <span> at {organization}</span>
      </Heading>

      <div className="mt-1 font-medium tracking-wide">
        {startDate}–{!endDate ? 'Current' : endDate}
      </div>
      {previousTitlesSorted?.map((prevTitle: PreviousTitle, idx) => (
        <div className="mt-1" key={idx}>
          <Heading level={6} className="text-neutral-11 font-medium tracking-wide">
            {prevTitle.title} {prevTitle.startDate}–{prevTitle.endDate}
          </Heading>
        </div>
  
      ))}
      <Prose html={body.html} />
    </article>
  );
};

export default ProfessionalItem;
