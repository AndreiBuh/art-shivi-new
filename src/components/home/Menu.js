import React, { Component } from "react"
import Title from "../global/Title"
import Img from "gatsby-image"

const getCategories = items => {
  let tempItems = items.map(item => {
    return item.category
  })
  let tempCategories = new Set(tempItems) // get unique values
  let categories = Array.from(tempCategories) // from object to array
  categories = ["all", ...categories]
  return categories
}

class Menu extends Component {
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
        <section className="py-5 menu">
          <div className="container">
            <Title title="our menu" />
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
                      <Img fixed={item.image.fixed} />
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

export default Menu
