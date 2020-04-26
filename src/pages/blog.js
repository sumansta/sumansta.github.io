import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

import "../css/global.css"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div class="grid grid-cols-3 gap-4">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div class="mx-8 rounded overflow-hidden shadow-md bg-gray-200">
                <div class="px-6 py-4">
                  <div key={node.fields.slug}>
                    <div class="font-bold text-xl mb-2">
                      <Link
                        style={{ boxShadow: `none` }}
                        to={`blog${node.fields.slug}`}
                      >
                        {title}
                      </Link>
                    </div>
                    <small>{node.frontmatter.date}</small>
                    <p
                      class="text-gray-700 text-base truncate"
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
