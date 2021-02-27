import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import HeroHeader from "../components/heroHeader"
import PageHero from "../components/PageHero"

const Projectspage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet htmlAttributes={{lang:'en'}}>
        <title>Projects - {site.siteMetadata.title}</title>
        <meta name="description" content={"Projects page of " + site.siteMetadata.title} />
      </Helmet>

      <PageHero title="Projects" subtitle="Open source contributions & code templates" links={null}/>


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