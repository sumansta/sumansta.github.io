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
        <div className="sm:w-3/4 md:block lg:col-span-2 w-3/4 lg:w-3/4 mx-auto">
          <GatsbyImage {...data.photo.childImageSharp} />
        </div>
        <div className="text-justify lg:col-span-4  sm:w-4/5 mx-auto">
          <h1 class="text-white text-xl">Suman Shrestha</h1>
          <span class="font-mono text-white">Software Engineer</span>
          <div className="sm:w-4/5 md:w-auto h-6 my-6 mx-auto">
            <Social />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
