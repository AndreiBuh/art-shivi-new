import React, { Component } from "react"
import Title from "../global/Title"
import Img from "gatsby-image"
import { Parallax } from "react-parallax"

const image1 =
  "https://images.pexels.com/photos/669734/pexels-photo-669734.jpeg?cs=srgb&dl=pexels-element-digital-669734.jpg&fm=jpg"

const getCategories = items => {
  let tempItems = items.map(item => {
    return item.category
  })
  let tempCategories = new Set(tempItems) // get unique values
  let categories = Array.from(tempCategories) // from object to array
  categories = ["all", ...categories]
  return categories
}

class Shop extends Component {
  state = {
    items: this.props.coffeeItems,
    coffeeItems: this.props.coffeeItems,
    categories: getCategories(this.props.coffeeItems),
  }

  handleItems = category => {
    let tempItems = [...this.state.items]
    if (category === "all") {
      this.setState(() => {
        return { coffeeItems: tempItems }
      })
    } else {
      let items = tempItems.filter(item => item.category === category)
      this.setState(() => {
        return { coffeeItems: items }
      })
    }
  }

  render() {
    if (this.state.coffeeItems.length > 0) {
      return (
        <Parallax  strength={500}>
          <div style={{ height: 800 }} id="shop">
            <section className="py-5 menu">
              <div className="container">
                <Title title="our shop" />
                {/* Categories */}
                <div className="row mb-5">
                  <div className="col-10 mx-auto text-center">
                    {this.state.categories.map((category, index) => {
                      return (
                        <button
                          type="button"
                          className="btn btn-yellow text-capitalize m-3"
                          key={index}
                          onClick={() => this.handleItems(category)}
                        >
                          {category}
                        </button>
                      )
                    })}
                  </div>
                </div>
                {/* Items */}
                <div className="row">
                  {this.state.coffeeItems.map(item => {
                    return (
                      <div
                        key={item.id}
                        className="col-11 col-md-6 my-3 d-flex mx-auto"
                      >
                        <div>
                          <Img fixed={item.image.fixed} className="rounded" />
                        </div>
                        <div className="flex-grow-1 px-3">
                          <div className="d-flex justify-content-between">
                            <h6 className="mb-0 text-uppercase">
                              <small>{item.title}</small>
                            </h6>
                            <h6 className="mb-0 text-yellow">
                              <small>${item.price}</small>
                            </h6>
                          </div>
                          <p className="text-muted">
                            <small>{item.description.description}</small>
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>
          </div>
        </Parallax>
      )
    } else {
      return (
        <section className="py-5 menu">
          <div className="container">
            <Title title="our menu" />
            <div className="row"></div>
          </div>
        </section>
      )
    }
  }
}

export default Shop
