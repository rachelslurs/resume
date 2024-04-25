'use client'
import React from 'react'
import { Heading } from '../Heading/Heading'
import Prose from '../Prose/Prose'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import dynamic from 'next/dynamic'
import { LoaderComponent } from 'next/dynamic'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import DynamicIcon from 'src/helpers/icons'

type Skill = {
  _id: string
  title: string
  icon?: string
  body: {
    html: string
  }
}
type SkillItem = {
  skillItem: Skill
}

const SkillListItem: React.FC<SkillItem> = (props) => {
  const { skillItem } = props
  return (
    <div key={skillItem._id}>
      <Heading level={4} className="mt-4 font-extrabold tracking-tight">
        <div className="flex items-center gap-2">
          {skillItem.icon && <DynamicIcon iconSelected={skillItem.icon} />}
          {skillItem.title}
        </div>
      </Heading>
      {skillItem.body?.html && (
        <Prose className="mt-4 text-neutral-11" html={skillItem.body.html} />
      )}
    </div>
  )
}

export default SkillListItem
