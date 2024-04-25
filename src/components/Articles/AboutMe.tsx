import { personal } from '@content'
import React from 'react'
import Prose from '../Prose/Prose'

const AboutMe: React.FC = () => {
  return (
    <>
      <Prose html={personal.body.html} className="mt-6 text-xl" />
    </>
  )
}

export default AboutMe
