import React from "react"
import { Link } from "gatsby"

import Title from "../global/Title"

const Info = () => {
  return (
    <section className="p-5" id="story">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-md-7">
            <img
              src="https://scontent.fotp3-2.fna.fbcdn.net/v/t31.0-8/p960x960/21167550_867834840033216_4403102724275606048_o.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=iKYwiQIW8K8AX-U0r3G&_nc_ht=scontent.fotp3-2.fna&_nc_tp=6&oh=b480ae2eaec8fb7fd21b9a6309654f9a&oe=5F1B4F93"
              alt="poza"
              width="100%"
            />
          </div>
          <div className="col-sm-5 d-flex flex-column align-items-center justify-content-center">
            <div
              className="mb-5"
              style={{
                background: "#fff0f0",
                padding: "10px",
                marginLeft: "-400px",
              }}
            >
              <h2>Art Shivi Paint</h2>
            </div>
            <p
              className="lead text-muted font-weight-bold"
              style={{ letterSpacing: "1px" }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus quasi qui delectus accusantium ab non, in sit ipsam
              libero exercitationem excepturi iste architecto deleniti
              blanditiis harum, iure minima tempora quod tenetur minus. Iure
              eius voluptates explicabo similique molestiae beatae, odit enim
              eligendi facere tempora vero dolores magnam fuga ab pariatur
              nesciunt quos recusandae atque labore!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
