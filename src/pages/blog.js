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
      <Helmet htmlAttributes={{lang:'en'}}>
        <title>Blog — {site.siteMetadata.title}</title>
        <meta name="description" content={"Blog page of " + site.siteMetadata.description} />
      </Helmet>

      <h1 className="_title">Blog</h1>

      <h2 className="_subtitle"></h2>

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