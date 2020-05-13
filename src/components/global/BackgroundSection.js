import React from "react"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ image, styleClass, children, title }) => {
  return (
    <BackgroundImage className={styleClass} fluid={image}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "Default title",
  styleClass: "default-background",
}

export default BackgroundSection
