import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Title from "../global/Title"

import menu from "../../assets/images/menu.jpg"

const Blog = () => {
  return (
    <section className="p-5" id="menu">
      <div className="container">
        <Title title="Holiday Menu" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
          <img src={menu} width="550"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
