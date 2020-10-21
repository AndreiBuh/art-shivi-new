import React from "react"
import Img from "gatsby-image"

const Product = ({ product }) => {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img fluid={product.image.fluid} className="card-img-top rounded-top" />
        <div className="card-body text-center">
          <h6>{product.title}</h6>
          <h6>${product.price}</h6>
          <button
            className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-url="https://pie-gourmet.netlify.app/"
            data-item-description="Delicately spiced, freshly peeled and cut apples and our signature brown sugar crumb crust add savoir- faire to this All American classic. *Please NOTE Crumb topping contains Walnuts*"
            data-item-image={product.image.fluid.src}
            data-item-name={product.title}
            data-item-custom1-name="Quantity"
            data-item-custom1-options="8 inch pie | 3 inch tarts | 10 inch pie"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
