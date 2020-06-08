import React from "react"
import GatsbyImage from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Work = () => {
  const data = useStaticQuery(graphql`
    {
      allWorkJson {
        edges {
          node {
            title
            period
          }
        }
      }
    }
  `)

  return (
    <div className="grid lg:grid-cols-6 gap-12 items-center">
      <div className="sm:w-3/4 md:block lg:col-span-2 w-3/4 lg:w-3/4 mx-auto">
        <span class="text-white font-mono">Work Experience</span>
        {data.allWorkJson.edges.map(({ node }, index) => {
          return (
            <div>
              {/* <GatsbyImage
                className="w-auto h-8 object-contain"
                {...node.icon.childImageSharp}
              /> */}
              {node.title}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Work
