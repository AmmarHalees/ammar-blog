import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import links from '../../data/social.json';

import PageHero from "../components/PageHero";
import HomeSection from "../components/HomeSection";

const IndexPage = ({
  data: {
    site
  },
}) => {


  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>

      <PageHero title="Ammar Halees" subtitle="Software engineer - Front-end @Mawdoo3" links={links} />

      <HomeSection data={null} title="Experience" />

      <HomeSection data={null} title="Education" />

    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query IndexPageeQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`