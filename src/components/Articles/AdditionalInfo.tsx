import { additionalInfo } from '@content';
import React from 'react';
import Prose from '../Prose/Prose';
import { SectionHeading } from '../SectionHeading/SectionHeading';

export const AdditionalInfo: React.FC = () => {
  return (
    <article className="py-12">
      <div className="mb-6 flex justify-center">
        <SectionHeading
          level={2}
          text={additionalInfo.title}
        />
      </div>
      <Prose html={additionalInfo.body.html} />
    </article>
  );
};
