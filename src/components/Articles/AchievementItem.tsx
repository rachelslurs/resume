import { Achievement } from '@content'
import React from 'react'
import { Heading } from '../Heading/Heading'
import Prose from '../Prose/Prose'
import DynamicIcon from 'src/helpers/icons'

const AchievementItem: React.FC<Achievement> = ({
  achievement,
  body,
  organization,
  completionYear,
  icon,
}) => {
  return (
    <article className="border-t-2 border-neutral-6 py-6 first-of-type:border-none last-of-type:pb-0">
      <Heading className="text-balance tracking-tight" level={3}>
        {achievement}
      </Heading>

      <div className="mt-1 font-medium">
        {icon && <DynamicIcon className="mr-2" iconSelected={icon} />}
        {organization}, {completionYear}
      </div>

      <Prose html={body.html} />
    </article>
  )
}

export default AchievementItem
