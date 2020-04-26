import React from "react"
import { Link } from "gatsby"

const NavBar = () => {
  return (
    <nav class="flex bg-black-600 p-6">
      <span class="font-mono text-xl text-white mx-4">
        <Link to="/">Suman Shrestha</Link>
      </span>
      <span class="font-mono text-xl text-white mx-4">
        <Link to="/blog/">
          <span class="font-mono">Blog</span>
        </Link>
      </span>
    </nav>
  )
}

export default NavBar
