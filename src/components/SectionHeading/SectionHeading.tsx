import React from 'react';

import DynamicIcon from 'src/helpers/icons';
import { Flex, Heading, flexPropDefs } from '@radix-ui/themes';
import { HeadingProps } from '@radix-ui/themes/dist/cjs/components/heading';
import { FlexProps } from '@radix-ui/themes/dist/cjs/components/flex';
interface SectionHeadingProps {
  className?: string;
  icon?: string | undefined;
  size?: HeadingProps['size'] | undefined;
  font?: string | undefined;
  text: string;
  justify?: FlexProps['justify'] | undefined;
}

export const SectionHeading: React.FC<SectionHeadingProps> = (props) => {
  const { icon, size = '7', text, font = 'mono', className, justify = 'start' } = props;
  return (
    <Heading size={size} className={`font-${font} ${className}`}>
      <Flex gap='2' justify={justify}>
        {icon && (
          <span className="fa-layers fa-fw hidden md:flex">
            <DynamicIcon iconSelected='faCircle' className='text-neutral-12' />
            <DynamicIcon iconSelected={icon} className='text-neutral-1' transform='shrink-8' aria-hidden />
          </span>
        )}
        <div>{text}</div>
      </Flex>
    </Heading>
  );
};
