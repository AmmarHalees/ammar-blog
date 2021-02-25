import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const BlogPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Blog — {site.siteMetadata.title}</title>
        <meta name="description" content={"Blog page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -Blog">
    

      </div>
    </Layout>
  )
}
export default BlogPage
export const pageQuery = graphql`
  query BlogPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`