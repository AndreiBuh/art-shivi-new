import React from 'react'
import { animateScroll as scroll } from "react-scroll"
import { IconContext } from "react-icons"
import { FaChevronUp } from "react-icons/fa"

const scrollToTop = () => {
  scroll.scrollToTop()
}

const ScrollToTop = () => {
  return (
    <div className="back-to-top">
        <a
          href="javascript:void(0)"
          onClick={scrollToTop}
          style={{ color: "white", fontSize: "1.3rem" }}
        >
          <IconContext.Provider value={{ style: { verticalAlign: "bottom" } }}>
            <div style={{ padding: "10px" }}>
              <FaChevronUp />
            </div>
          </IconContext.Provider>
        </a>
      </div>
  )
}

export default ScrollToTop
