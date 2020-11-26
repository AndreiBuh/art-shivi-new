import React from "react"
import { Link } from "gatsby"

import Title from "../global/Title"
import story from "../../assets/images/story.jpg"

const Info = () => {
  return (
    <section className="p-5" id="story">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-md-7">
            <img
              src={story}
              alt="story"
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
              <h2>Art Shivi</h2>
            </div>
            <p
              className="lead text-muted font-weight-bold"
              style={{ letterSpacing: "1px" }}
            >
              Since our humble start in 1987. We opened the doors to our current location in 1988 and have been proudly serving our homemade artisan pies and baked goods to thousands of customers we’ve come to know and love in our hometown of Vienna, VA!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
