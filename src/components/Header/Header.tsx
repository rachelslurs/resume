import { personal } from '@content';
import React from 'react';
import { fullName } from '../../helpers/utils';
// import { Heading } from '../Heading/Heading';
import { Heading } from '@radix-ui/themes';
import PDFDownloadButton from '../PDF/PDFDownloadButton';
import ModeToggle from '../Mode/ModeToggle';
import { getTheme } from 'src/app/actions.client';

interface HeaderProps {
  secret?: string;
}

export const Header: React.FC<HeaderProps> = ({ secret }) => {
  return (
    <div className="mb-12 border-b-2 border-neutral-4 py-12">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
          <div className="flex-1 space-y-2">
            <Heading size={'9'} className='font-mono'>{fullName}</Heading>
            <Heading className="neutralSubtle text-balance" size={'5'}>
              {personal.title}
            </Heading>
          </div>
          <PDFDownloadButton secret={secret} />
        </div>
      </div>
    </div>
  );
};
