import { ProfessionalExperience, PreviousTitle } from '@content'
import React from 'react'
import { Heading } from '../Heading/Heading'
import Prose from '../Prose/Prose'
import { sortedPreviousTitles } from 'src/helpers/utils'

const ProfessionalItem: React.FC<ProfessionalExperience> = (props) => {
  const { body, endDate, organization, startDate, title, previousTitles } =
    props
  const previousTitlesSorted = previousTitles
    ? sortedPreviousTitles(previousTitles)
    : []
  return (
    <article className="border-t-2 border-neutral-6 py-6 first-of-type:border-none last-of-type:pb-0">
      <Heading level={4}>
        <span className="rounded-md bg-neutral-12 px-2 text-neutral-1">
          {title}
        </span>
        <span> at {organization}</span>
      </Heading>

      {previousTitlesSorted.length === 0 && (
        <div className="font-bold tracking-tight text-neutral-12">
          {startDate}–{!endDate ? 'Current' : endDate}
        </div>
      )}
      {previousTitlesSorted?.map((prevTitle: PreviousTitle, idx) => (
        <div className="mt-1" key={idx}>
          <p className="font-bold tracking-tight text-neutral-12">
            {prevTitle.title} {prevTitle.startDate}–{prevTitle.endDate}
          </p>
        </div>
      ))}
      <Prose html={body.html} />
    </article>
  )
}

export default ProfessionalItem
