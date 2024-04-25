import { personal } from '@content'
import React from 'react'
import Prose from '../Prose/Prose'

const AboutMe: React.FC = () => {
  return (
    <>
      <Prose
        html={personal.body.html}
        className="mt-4 max-w-[36rem] text-lg font-light xl:max-w-[43.5rem]"
      />
    </>
  )
}

export default AboutMe
