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

      <PageHero title="Talks" subtitle="" links={null} />

      <HomeSection title="Oct. 2023" >
        <div className="grids">
          <div className="_project_card">

            <h2>

              Why it's difficult to build a web browser.

            </h2>

            <h3>

              <span className="_tech-item">Oct 20th, 2023. </span>


            </h3>

            <div className="_controls-container">

              {/* <a href="https://mosaw.netlify.app" title="Project Material" target="_blank" rel="noreferrer noopener">Material</a> */}
              <a href="https://www.meetup.com/amman-web-devs-community/?_cookie-check=u3DtR5QuPdCEgWbT" title="Project Details" target="_blank" rel="noreferrer noopener">Details</a>

            </div>

          </div>

        </div>
      </HomeSection>

      <HomeSection title="Oct. 2022" >
        <div className="grids">
          <div className="_project_card">

            <h2>

              How we use DevTools to Improve workflow.

            </h2>

            <h3>

              <span className="_tech-item">Oct 18th, 2022. </span>


            </h3>

            <div className="_controls-container">

              {/* <a href="https://mosaw.netlify.app" title="Project Material" target="_blank" rel="noreferrer noopener">Material</a> */}
              <a href="https://www.meetup.com/amman-web-devs-community/?_cookie-check=u3DtR5QuPdCEgWbT" title="Project Details" target="_blank" rel="noreferrer noopener">Details</a>

            </div>

          </div>

        </div>
      </HomeSection>
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

              {/* <a href="https://mosaw.netlify.app" title="Project Material" target="_blank" rel="noreferrer noopener">Material</a> */}
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