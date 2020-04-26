import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <Wrapper style={{ backgroundColor: "#121212" }}>
        <nav class="flex items-center justify-between flex-wrap bg-black-600 p-6">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-mono text-xl tracking-tight">
              <Link to="/">Suman Shrestha</Link>
            </span>
          </div>
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
              <a
                href="#responsive-header"
                class="block mt-4 lg:inline-block lg:mt-0 text-white over:text-white"
              >
                <Link to="/blog/">
                  <span class="font-mono">Blog</span>
                </Link>
              </a>
            </div>
          </div>
        </nav>

        <div class="container mx-auto">
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer>
          <span class="font-mono text-white">
            © {new Date().getFullYear()} Suman Shrestha
          </span>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
