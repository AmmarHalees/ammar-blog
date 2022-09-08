import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PageHero from "../components/PageHero"
import HomeSection from "../components/HomeSection"

const Downloadpage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>Talks - {site.siteMetadata.title}</title>
        <meta name="description" content={"Talks page of " + site.siteMetadata.title} />
      </Helmet>

      <PageHero title="/Talks" subtitle="" links={null} />

      <HomeSection title="Sep. 2022" >
        Click here to download
      </HomeSection>

    </Layout>
  )
}
export default Downloadpage
export const pageQuery = graphql`
  query DownloadpageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`