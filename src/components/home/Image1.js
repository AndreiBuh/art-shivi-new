import React from 'react'
import { Parallax } from "react-parallax"

import story from '../../assets/images/story.jpg'

const Image1 = () => {
  return (
    <Parallax  bgImage={story} strength={500}>
      <div style={{ height: 400 }}>
      </div>
  </Parallax>
  )
}

export default Image1
