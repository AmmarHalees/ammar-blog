import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PageHero from "../components/PageHero"
import HomeSection from "../components/HomeSection"

const Projectspage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>Projects - {site.siteMetadata.title}</title>
        <meta name="description" content={"Projects page of " + site.siteMetadata.title} />
      </Helmet>

      <PageHero title="Projects" subtitle="Open source contributions & code templates." links={null} />


      <HomeSection title="For fun" >
        <div className="grids">

          <div className="_project_card ">

            <h2>

              Social Feed

            </h2>

            <h3>

              <span className="_tech-item">React </span>
              <span className="_tech-item">Unsplash API </span>
              <span className="_tech-item">Redux </span>
              <span className="_tech-item">React Router </span>


            </h3>

            <div className="_controls-container">

              <a href="https://mosaw.netlify.app" title="unsplash api" target="_blank" rel="noreferrer noopener">Demo</a>

              <a href="https://mosaw.netlify.app" title="unsplash api" target="_blank" rel="noreferrer noopener">----</a>


            </div>


          </div>


          <div className="_project_card ">

            <h2>

              Twitter Feed

            </h2>

            <h3>

              <span className="_tech-item">React </span>
              <span className="_tech-item">React Router </span>


            </h3>

            <div className="_controls-container">

              <a href="https://ammarhalees.github.io/twitter-feed/#/" title=" Twitter Feed" target="_blank" rel="noreferrer noopener">Demo</a>

              <a href="https://github.com/AmmarHalees/twitter-feed" title=" Twitter Feed source code" target="_blank" rel="noreferrer noopener">Source</a>


            </div>


          </div>


          <div className="_project_card ">

            <h2>

              react-bna : <span className="_subtitle">before and after image slider component</span>

            </h2>

            <h3>

              <span className="_tech-item">Babel 6.x.x
              </span>
              <span className="_tech-item">Webpack 4.x.x </span>

              <span className="_tech-item">ES6+

              </span>
            </h3>

            <div className="_controls-container">

              <a href="https://sliderbna.netlify.app/" title="Slider before and after" target="_blank" rel="noreferrer noopener">Demo</a>

              <a href="" title="Slider before and after" target="_blank" rel="noreferrer noopener">Source</a>


            </div>


          </div>


          <div className="_project_card ">

            <h2>

              Hooks form validation

            </h2>

            <h3>

              <span className="_tech-item">React</span>


              <span className="_tech-item">ES6+

              </span>
            </h3>

            <div className="_controls-container">

              <a href="https://ammarhalees.github.io/hooks-form-website/" title="Hooks form validation" target="_blank" rel="noreferrer noopener">Demo</a>

              <a href="https://github.com/AmmarHalees/hooks-form-website/blob/master/src/utils/validator.js" title="Hooks form validation source" target="_blank" rel="noreferrer noopener">Source</a>


            </div>


          </div>



        </div>
      </HomeSection>


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