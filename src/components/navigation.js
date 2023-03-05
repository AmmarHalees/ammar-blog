import React from "react"
import {Link} from "gatsby"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/">Home</Link>
    {/* <Link to="/projects">Projects</Link> */}
    <Link to="/blog">Blog</Link>
    <Link to="/talks">Talks</Link>

  </nav>
  
)