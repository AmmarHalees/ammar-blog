import React from "react"
import { StaticQuery, graphql } from "gatsby";

import LinkedIN from '../images/linkedin.svg';
import Github from '../images/github.svg';
import Twitter from '../images/twitter.svg';
import Medium from '../images/medium.svg';


const iconMap = {

  "linkedin": <LinkedIN />,
  "github": <Github />,
  "twitter": <Twitter />,
  "medium": <Medium />,

}

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

      {links && <ul className="social-links">

        {links.links.map(({ title, href, id, icon }) => <li key={id}><a href={href} title={title} target="_blank" rel="noreferrer noopener">{iconMap[icon]}</a> </li>)}

      </ul>}

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