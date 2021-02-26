import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import LinkedIN from '../images/linkedin.svg';
import Github from '../images/github.svg';
import Twitter from '../images/twitter.svg';
import Medium from '../images/medium.svg';

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

      <ul className="social-links">

        <li>
          <a href="https://www.linkedin.com/in/ammarhalees/" title="linkedin profile" target="_blank" rel="noopener">
            <LinkedIN />
          </a>
        </li>

        <li>
          <a href="https://github.com/AmmarHalees" title="Github profile" target="_blank" rel="noopener">
            <Github />
          </a>
        </li>

        <li>
          <a href="https://twitter.com/ammarhalees" title="Twitter profile" target="_blank" rel="noopener">
            <Twitter />
          </a>
        </li>
{/* 
        <li>
          <a href="https://Medium.com/@ammarhalees" title="Medium profile" target="_blank" rel="noopener">
            <Medium />
          </a>
        </li> */}

      </ul>

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
