// import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { sortedProfessionalExperiences } from 'src/helpers/utils';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import ProfessionalItem from './ProfessionalItem';
import { Card, Flex } from '@radix-ui/themes';

const Professional: React.FC = () => {
  // console.log('sortedProfessionalExperiences', sortedProfessionalExperiences)
  return (
    <Card>
      <Flex gap={'6'} direction="column" justify={'center'}>
          <SectionHeading
            size={'7'}
            text="Experience"
            justify={'center'}
          />
        {sortedProfessionalExperiences.map((professional) => (
          <ProfessionalItem key={professional._id} {...professional} />
        ))}
      </Flex>
    </Card>
  );
};

export default Professional;
