import React from "react"

import Layout from "../components/layout"

import AboutMe from "../sections/AboutMe"

import "../css/global.css"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <AboutMe />
      </Layout>
    )
  }
}

export default IndexPage
