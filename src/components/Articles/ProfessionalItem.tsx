import { ProfessionalExperience, PreviousTitle } from '@content';
import React from 'react';
import Prose from '../Prose/Prose';
import { sortedPreviousTitles } from 'src/helpers/utils';
import { Heading, Container, Text, Section } from '@radix-ui/themes';

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
    <Section>
      <Container className="border-t-2 border-neutral-6 py-6 first-of-type:border-none last-of-type:pb-0">
        <Heading className="text-balance font-mono" size={'6'}>
          <Text as='span' className="rounded-md bg-neutral-12 px-2 text-neutral-1">
            {title}
          </Text>
          <span> at {organization}</span>
        </Heading>

        <div className="mt-1 font-medium tracking-wide">
          <Text size='4' weight={'medium'} className='tracking-wide'>
            {startDate}–{!endDate ? 'Current' : endDate}
          </Text> 
        </div>
        {previousTitlesSorted?.map((prevTitle: PreviousTitle, idx) => (
          <div className="mt-1" key={idx}>
            <Heading size={'4'} weight={'medium'} color='gray' className="tracking-wide mt-1">
              {prevTitle.title} {prevTitle.startDate}–{prevTitle.endDate}
            </Heading>
          </div>
    
        ))}
        <Prose html={body.html} />
      </Container>
    </Section>
  );
};

export default ProfessionalItem;
