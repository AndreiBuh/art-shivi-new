import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/global/BackgroundSection"
import Info from "../components/home/Info"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      title="starbuck coffee"
      image={data.homeImage.childImageSharp.fluid}
      styleClass="default-background"
    />
    <Info />
  </Layout>
)

export const query = graphql`
  {
    homeImage: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
