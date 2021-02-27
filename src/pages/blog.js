import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PageHero from "../components/PageHero"
import PostLink from "../components/post-link"
import HomeSection from "../components/HomeSection"

const BlogPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)


  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>Blog - {site.siteMetadata.title}</title>
        <meta name="description" content={"Blog page of " + site.siteMetadata.title} />
      </Helmet>

      <PageHero title="Blog" subtitle="I write about software , engineering and life" links={null} />

      <HomeSection  title="Development" >

        {Posts}

      </HomeSection>

      <HomeSection  title="Thoughts" >

        {/* {Posts} */}

      </HomeSection>

    </Layout>
  )
}
export default BlogPage
export const pageQuery = graphql`
  query BlogPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`
