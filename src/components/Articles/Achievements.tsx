import React from 'react'
import { sortedAchievements } from 'src/helpers/utils'
import { SectionHeading } from '../SectionHeading/SectionHeading'
import AchievementItem from './AchievementItem'
import { Heading } from '../Heading/Heading'

const Achievements: React.FC = () => {
  return (
    <article className="rounded-xl bg-neutral-3 py-12">
      <div className="container">
        <div className="flex justify-center text-center tracking-tight">
          <Heading level={3}>Achievements</Heading>
        </div>

        {sortedAchievements.map((achievement) => (
          <AchievementItem key={achievement._id} {...achievement} />
        ))}
      </div>
    </article>
  )
}

export default Achievements
