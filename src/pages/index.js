import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/global/BackgroundSection"
import Info from "../components/home/Info"
import Menu from "../components/home/Menu"
import ProductList from "../components/home/ProductList"
import Contact from "../components/home/Contact"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      title="starbuck coffee"
      image={data.homeImage.childImageSharp.fluid}
      styleClass="default-background"
    />
    <Info />
    <Menu coffeeItems={data.menu.nodes} />
    <ProductList />
    <Contact />
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
    menu: allContentfulCoffeeItem {
      nodes {
        title
        id
        price
        category
        description {
          description
        }
        image {
          fixed(width: 50, height: 50) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
      }
    }
  }
`

export default IndexPage
