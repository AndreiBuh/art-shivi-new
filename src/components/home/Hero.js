import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`)

  return (
    <div>
       <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Hero image"
          />
    </div>
  )
}

export default Hero
