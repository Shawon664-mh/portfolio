import React from 'react'
import { SectionWrapper } from "../hoc";
import { FrontEnd, BackEnd, Miscellaneous } from './skillCard';

const Tech = () => {
  return (
    <div className='flex flex-wrap justify-evenly gap-10'>
      <FrontEnd/>
      <BackEnd/>
      <Miscellaneous/>
    </div>
  )
}

export default SectionWrapper(Tech, "tech");