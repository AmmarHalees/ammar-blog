import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const Projectspage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Projects — {site.siteMetadata.title}</title>
        <meta name="description" content={"Blog page of " + site.siteMetadata.description} />
      </Helmet>

      <h1 className="_title">Projects</h1>

      <h2 className="_subtitle">Open source contributions & code templates</h2>

      <div className="two-grids -Blog">

      </div>
    </Layout>
  )
}
export default Projectspage
export const pageQuery = graphql`
  query ProjectspageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`