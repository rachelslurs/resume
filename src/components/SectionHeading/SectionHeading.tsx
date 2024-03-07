import React from 'react';
import { Heading, HeadingProps } from '../Heading/Heading';
import DynamicIcon from 'src/helpers/icons';
interface SectionHeadingProps {
  icon?: string | undefined;
  level?: HeadingProps['level'];
  font?: HeadingProps['font'];
  text: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = (props) => {
  const { icon, level = 3, text, font = 'mono' } = props;
  return (
    <Heading level={level} font={font}>
      <div className="flex items-center gap-2">
        {icon && (
          <span className="fa-layers fa-fw hidden md:flex">
            <DynamicIcon iconSelected='faCircle' className='text-neutral-12' />
            <DynamicIcon iconSelected={icon} className='text-neutral-1' transform='shrink-8' aria-hidden />
          </span>
        )}
        <div>{text}</div>
      </div>
    </Heading>
  );
};
