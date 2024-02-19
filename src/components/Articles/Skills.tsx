import { allSkills } from '@content';
import React from 'react';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import SkillListItem from './SkillListItem';

type Skill = {
  _id: string;
  title: string;
  icon?: string;
  body: {
      html: string;
  };
};

const Skills: React.FC = () => {
  
  
  return (
    <article>
      <SectionHeading level={3} text="Skills" />

      <div className="mt-2 grid grid-flow-row gap-6 lg:grid-flow-col">

        {allSkills.sort((a, b) => a.order - b.order).map((skill: Skill, skillIndex) => {
            return (
              <SkillListItem key={skillIndex} skillItem={{
                _id: skill._id,
                title: skill.title,
                icon: skill.icon,
                body: skill.body
              }} />
            )
          })}
      </div>
    </article>
  );
};

export default Skills;
