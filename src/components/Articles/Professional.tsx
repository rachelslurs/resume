// import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { sortedProfessionalExperiences } from 'src/helpers/utils'
import ProfessionalItem from './ProfessionalItem'
import { Heading } from '../Heading/Heading'

const Professional: React.FC = () => {
  return (
    <article className="rounded-xl bg-neutral-3 py-12">
      <div className="container">
        <div className="flex justify-center text-center tracking-tight">
          <Heading level={3}>Experience</Heading>
        </div>

        {sortedProfessionalExperiences.map((professional) => (
          <ProfessionalItem key={professional._id} {...professional} />
        ))}
      </div>
    </article>
  )
}

export default Professional
