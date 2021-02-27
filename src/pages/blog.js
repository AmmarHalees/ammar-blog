import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PageHero from "../components/PageHero"

const BlogPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>Blog — {site.siteMetadata.title}</title>
        <meta name="description" content={"Blog page of " + site.siteMetadata.description} />
      </Helmet>

      <PageHero title="Blog" subtitle="I write about software and life" links={null} />

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