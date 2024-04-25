import { personal } from '@content'
import React from 'react'
import Prose from '../Prose/Prose'

const AboutMe: React.FC = () => {
  return (
    <>
      <Prose
        html={personal.body.html}
        className="mt-8 max-w-[36rem] xl:max-w-[44rem]"
      />
    </>
  )
}

export default AboutMe
