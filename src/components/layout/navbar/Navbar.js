import React, { useState } from "react"
import { IconContext } from "react-icons"
import { FaAlignRight, FaTimes } from "react-icons/fa"
import { Link } from "gatsby"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"

import socialIcons from "../../../constants/social-icons"
import links from "../../../constants/links"
import logo from "../../../images/logo.jpg"
import shop from "../../../images/shop.svg"

import styles from "./navbar.module.css"

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(dropdownOpen => !dropdownOpen)
  }

  return (
    <>
      <div className={styles.navCenter} id="navbar">
        <div className={`${styles.navSocialLinks} m-4`}>
          {socialIcons.map((item, index) => {
            return (
              <a
                href={item.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconContext.Provider
                  value={{ style: { verticalAlign: "middle" } }}
                >
                  {item.icon}
                </IconContext.Provider>
              </a>
            )
          })}
        </div>
        <div className={styles.menuToggle}>
          <div
            className={`m-2 menu-btn navbar-toggler ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(true)}
          >
            <div className="menu-btn__burger navbar-toggler-icon"></div>
          </div>
        </div>
        <Link fade to="/">
          <div className={styles.logoHeader}>
            <img src={logo} alt="logo" className={styles.logo} />
          </div>
        </Link>
        <Link fade to="/">
          <div className="m-3 m-sm-4">
            <img src={shop} alt="shop" className={styles.cartImage} />
          </div>
        </Link>
      </div>

      <div className={styles.navHeader}>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((link, index) => {
            return (
              <li key={index}>
                <ScrollLink
                  activeClass="active"
                  to={link.text}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-50}
                  duration={500}
                  delay={300}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                >
                  {link.text}
                </ScrollLink>
              </li>
            )
          })}
        </ul>

        <ul
          className={
            isOpen ? `${styles.navList} ${styles.showNav}` : `${styles.navList}`
          }
        >
          <IconContext.Provider
            value={{
              style: {
                color: "var(--mainColor)",
                verticalAlign: "middle",
                fontSize: "2rem",
                float: "right",
                cursor: "pointer",
              },
            }}
          >
            <div>
              <FaTimes onClick={() => setIsOpen(!isOpen)} />
            </div>
          </IconContext.Provider>
          {links.map((link, index) => {
            return (
              <>
                <li key={index} className={styles.navItem}>
                  <div className={styles.navSpan}>
                    <div>
                      <ScrollLink
                        activeClass="active"
                        to={link.text}
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={50}
                        duration={500}
                        delay={300}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                      >
                        {link.text}
                      </ScrollLink>
                    </div>
                  </div>
                </li>
              </>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Navbar
