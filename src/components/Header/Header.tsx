import { personal } from '@content'
import React from 'react'
import { fullName } from '../../helpers/utils'
import { Heading } from '../Heading/Heading'
// import PDFDownloadButton from '../PDF/PDFDownloadButton';
// import ModeToggle from '../Mode/ModeToggle';

interface HeaderProps {
  secret?: string
}

export const Header: React.FC<HeaderProps> = ({ secret }) => {
  return (
    <div className="pt-12">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
          <div className="flex-1 space-y-2">
            <Heading
              level={1}
              className="text-4xl font-extrabold tracking-tight"
            >
              {fullName}
            </Heading>
            {personal.title && <Heading level={4}>{personal.title}</Heading>}
          </div>
        </div>
      </div>
    </div>
  )
}
