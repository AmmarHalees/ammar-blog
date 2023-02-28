import React from "react"
import { StaticQuery, graphql } from "gatsby";

const graphMap = {

  "home" : graphql`
  query HeadingQuery {
    site {
      siteMetadata {
        home {
          title
          description
        }
      }
    }
  }
`


}



export default ({links , page}) => (
  <StaticQuery
    query={graphMap[page]}
    render={data => (

      <section className="_heading">

      <h1 className="_title">{data.site.siteMetadata.home.title}</h1>

      <h2 className="_subtitle">{data.site.siteMetadata.home.description}</h2>



    </section>

      // <div className="hero-header">
      //   <div className="headline">{data.site.siteMetadata.home.title}</div>
      //   <div 
      //     className="primary-content" 
      //     dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
      //   />

      // </div>
    )}
  />
)