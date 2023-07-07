import React from 'react'
import HeroLeft from './HeroLeft'
import { HeroRight } from './HeroRight'

const index = () => {
  return (
    <div className='grid grid-cols-2 mx-[100px]'>
        <HeroLeft></HeroLeft>
        <HeroRight></HeroRight>
    </div>
  )
}

export default index