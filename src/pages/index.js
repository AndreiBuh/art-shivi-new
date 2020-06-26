import React from "react"
import { graphql } from "gatsby"
import { Parallax } from "react-parallax"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Story from "../components/home/Story"
import Shop from "../components/home/Shop"
import Portofoliu from "../components/home/Portofoliu"
import ProductList from "../components/home/ProductList"
import Blog from "../components/home/Blog"
import Contact from "../components/home/Contact"

const image1 =
  "https://images.pexels.com/photos/1548111/pexels-photo-1548111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <Parallax bgImage={image1} strength={500}>
      <div style={{ height: 600 }}>
        <div className="inside">Collection</div>
      </div>
    </Parallax>
    <Story />
    <Shop coffeeItems={data.menu.nodes} />
    <Portofoliu />
    <ProductList />
    <Blog />
    <Contact />
  </Layout>
)

export const query = graphql`
  {
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
