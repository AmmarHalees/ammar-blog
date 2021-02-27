import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import links from '../../data/social.json';

import PageHero from "../components/PageHero";

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
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>

      <PageHero title="Ammar Halees" subtitle="Software engineer - Front-end @Mawdoo3" links={links}/>


      <section className="_section">

        <div className="sep_container">

          <div className="sep_lineContainer">

            <div className="sep_line sep_left">  </div>

          </div>

          <p className="sep_title sep_large">Experience</p>

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
