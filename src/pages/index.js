import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Story from "../components/home/Story"
import Shop from "../components/home/Shop"
import ProductList from "../components/home/ProductList"
import Blog from "../components/home/Blog"
import Hero from "../components/home/Hero"
import Contact from "../components/home/Contact"
import Image1 from "../components/home/Image1"
import Image2 from "../components/home/Image2"
import Image3 from "../components/home/Image3"



const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Story />  
    <Shop coffeeItems={data.menu.nodes} />
    <Image2 />
    <ProductList />
    <Image1 />
    <Blog />
    <Image3 />
    <Contact />
  </Layout>
)

export const query = graphql`
  {
    menu: allContentfulPies{
      nodes {
        title
        id
        price
        category
        description {
          description
        }
        image {
          fixed(width: 120, height: 120) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
      }
    }
  }
`

export default IndexPage
