import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import links from '../../data/social.json';
import Twitter from '../images/twitter.svg';
import Github from '../images/github.svg';

import PageHero from "../components/PageHero";
import HomeSection from "../components/HomeSection";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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

      <PageHero title="Ammar Halees" subtitle="Software engineer - Front-end @Mawdoo3." links={links} />

      <HomeSection title="Experience">


        <VerticalTimeline >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#181326', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #181326' }}
            date={<div className="_timeline-date-container">
              <h3>Mawdoo3.com (World’s largest
Arabic content website)</h3>
      Jun. 19th 2020 – present.</div>}
            iconStyle={{ backgroundColor: '#181326', color: '#fff' , backgroundImage: `url(https://modo3.com/icon-normal.png)` }}
            icon={null}
          >
            <h3 className="vertical-timeline-element-title">Front-end Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Amman, Jordan</h4>

            <ul className="jobstuff">

              <li>
                Working with the web team on a website builder: Using VueJS, Nuxt, Webpack, and corresponding
                tooling.
          </li>

              <li>
                Worked on the “Darsak” and “Saffak” government Educational Platforms : Used mainly VueJS and PHP
                laravel.

          </li>

              <li>
                Lead many efforts in performance optimization of existing websites


          </li>

            </ul>
            

          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#181326', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #181326' }}
            date={<div className="_timeline-date-container">
              <h3>LigaData (Big data analytics)</h3>
              Jan. 21st 2020 – Jun. 19th 2020</div>}
            iconStyle={{ backgroundColor: '#c7b2c7', color: '#fff' , backgroundImage: `url(https://ligadata.com/wp-content/uploads/2019/12/ligadatasvg.svg)` }}
            icon={null}
          >
            <h3 className="vertical-timeline-element-title">Front-end Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Amman, Jordan</h4>

            <ul className="jobstuff">

              <li>
                Worked on the “Sancho Analytics” big data Chat-bot management system.
          </li>

              <li>
                Used mainly: ReactJS , Redux, NextJS, GraphQL, Jest, ExpressJS and more.

          </li>


            </ul>


          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#181326', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #181326' }}
            date={<div className="_timeline-date-container">
              <h3>Erabia (E-commerce)</h3>
              Dec. 2nd
, 2018 – Jan. 19th 2020</div>}
            iconStyle={{    backgroundRepeat: "no-repeat", backgroundColor: '#c8dbff', color: '#fff' , backgroundImage: `url(https://d1alm8p94swy6o.cloudfront.net/wp-content/uploads/2018/12/16160458/erabialogo.png)` }}
            icon={null}
          >
            <h3 className="vertical-timeline-element-title">Front-end Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Amman, Jordan</h4>

            <ul className="jobstuff">

              <li>
                Worked on the “Erabia Dashboard” Project used by the administrators of online stores (Carrefour, Cosmo,
                Kaf and others) to manage products, customers, accounts, orders and more.
          </li>

              <li>
                Worked with technologies such as: ReactJs, (ES6), Nodejs, Puppeteer, NPM, Redux, Webpack,
                Git, SAP Hybris And more, implementing strict functional programming practices.

          </li>


            </ul>


          </VerticalTimelineElement>

        </VerticalTimeline>

      </HomeSection>

      <HomeSection title="Education">


      </HomeSection>


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