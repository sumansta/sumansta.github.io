import React from "react"
import GatsbyImage from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import Social from "../components/Social"

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    {
      photo: file(relativePath: { eq: "about/profile.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section id="about-me">
      <div className="grid lg:grid-cols-6 gap-12 items-center">
        <div className="hidden md:block lg:col-span-2 w-1/3 lg:w-3/4 mx-auto wow fadeInLeft">
          <GatsbyImage {...data.photo.childImageSharp} />
        </div>
        <div className="text-justify lg:col-span-4 wow fadeIn">
          <h1 class="text-white text-xl">Suman Shrestha</h1>
          <span class="font-mono text-white">Software Engineer</span>
          <div className="w-full md:w-auto h-6 my-6">
            <Social />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
