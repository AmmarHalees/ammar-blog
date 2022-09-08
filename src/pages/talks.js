import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PageHero from "../components/PageHero"
import HomeSection from "../components/HomeSection"

const Talkspage = ({
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

      <PageHero title="Talks" subtitle="Open source contributions & code templates." links={null} />

      <HomeSection title="Sep. 2022" >
        <div className="grids">

          <div className="_project_card">

            <h2>

              Controlling the browser with Puppeteer @JOSA.

            </h2>

            <h3>

              <span className="_tech-item">September 10th, 2022. </span>


            </h3>
            
            <div className="_controls-container">

              <a href="https://mosaw.netlify.app" title="Project Material" target="_blank" rel="noreferrer noopener">Material</a>

            </div>
            <div className="_controls-container">

<a href="https://josa.ngo/events/122/josa-workshop--controlling-the-browser-with-puppeteer" title="Project Details" target="_blank" rel="noreferrer noopener">Details</a>

</div>
          </div>

        </div>
      </HomeSection>

    </Layout>
  )
}
export default Talkspage
export const pageQuery = graphql`
  query TalkspageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`