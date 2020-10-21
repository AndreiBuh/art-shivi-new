import React from 'react'
import { Parallax } from "react-parallax"

import story2 from '../../assets/images/story2.jpg'

const Image1 = () => {
  return (
    <Parallax  bgImage={story2} strength={500}>
      <div style={{ height: 400 }}>
      </div>
  </Parallax>
  )
}

export default Image1
