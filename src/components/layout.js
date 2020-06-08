import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import NavBar from "../components/Navbar"

import BackgroundImage from "gatsby-background-image"

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    {
      photo: file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const backgroundImage = data.photo.childImageSharp.fluid
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
    <Wrapper>
      <BackgroundImage
        Tag="section"
        fluid={backgroundImage}
        backgroundColor={`#040e18`}
      >
        <NavBar />
        <div class="container mx-auto">
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer>
          <span class="font-mono text-white">
            © {new Date().getFullYear()} Suman Shrestha
          </span>
        </Footer>
      </BackgroundImage>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
`
const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
