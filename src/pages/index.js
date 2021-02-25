import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"

const IndexPage = ({
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
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>

      <h1 className="_title">Ammar Halees</h1>

      <h2 className="_subtitle">Software engineer - Front-end @Mawdoo3</h2>


      <section className="_section">


        <div className="sep_container">

          <div className="sep_lineContainer">

            <div className="sep_line sep_left">  </div>

          </div>

          <p className="sep_title sep_large">Highlights</p>

          <div className="sep_lineContainer">

            <div className="sep_line sep_right"> </div>

          </div>
        </div >

        <div className="grids">
          {Posts}
        </div>
      </section>

    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
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
