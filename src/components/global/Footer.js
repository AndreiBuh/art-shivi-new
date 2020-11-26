import React, {useState, useEffect} from "react"
import ScrollToTop from './ScrollToTop'

const Footer = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  useEffect(() => {
    window.onscroll = function() {
    window.pageYOffset > 1500 ? setShowScrollToTop(true) : setShowScrollToTop(false)
  }}, [])

  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto col-md-6 text-yellow text-center text-capitalize">
            <h6> all rights reserved &copy; {new Date().getFullYear()} Art Shivi</h6>   
            { showScrollToTop ? <ScrollToTop /> : null}
          </div>         
        </div>
      </div>  
    </footer>
  )
}

export default Footer
