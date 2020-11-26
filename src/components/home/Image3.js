import React from 'react'
import { Parallax } from "react-parallax"

import story3 from '../../assets/images/story3.jpg'

const Image1 = () => {
  return (
    <Parallax  bgImage={story3} strength={500}>
      <div style={{ height: 400 }}>
      </div>
  </Parallax>
  )
}

export default Image1
