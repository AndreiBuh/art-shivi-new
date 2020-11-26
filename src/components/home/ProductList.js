import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Product from "./Product"
import Title from "../global/Title"

const getProducts = graphql`
  {
    products: allContentfulPies {
      nodes {
        id
        title
        price
        image {
          fluid(maxHeight: 400) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`

const ProductList = () => {
  const { products } = useStaticQuery(getProducts)
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our products" />
        <div className="row">
          {products.nodes.map(product => {
            return <Product key={product.id} product={product} />
          })}
        </div>
      </div>
    </section>
  )
}

export default ProductList
