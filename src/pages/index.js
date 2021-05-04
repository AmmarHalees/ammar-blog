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
import { useMediaQuery } from 'react-responsive'

const IndexPage = ({
  data: {
    site
  },
}) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })

  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
        <meta name="google-site-verification" content="aN4O0-l0d9j8Pji-eP5vNwuXzIclW6o6yjLjmlbqb1U" />
      </Helmet>

      <PageHero title="Ammar Halees" subtitle="Software engineer - Front-end @Mawdoo3." links={links} />

      <HomeSection title="Experience">


        <VerticalTimeline animate={isDesktopOrLaptop}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: '#181326', color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  #181326' }}
            date={<div className="_timeline-date-container">
              <h3>Mawdoo3.com (World’s largest
Arabic content website)</h3>
      Jun. 19th 2020 – present.</div>}
            iconStyle={{ backgroundColor: '#181326', color: '#fff', backgroundImage: `url(https://modo3.com/icon-normal.png)` }}
            icon={null}
          >
            <h3 className="vertical-timeline-element-title">Front-end Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle _subtitle">Amman, Jordan</h4>

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
            // contentStyle={{ background: '#181326', color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  #181326' }}
            date={<div className="_timeline-date-container">
              <h3>Erabia (E-commerce)</h3>
              Dec. 2nd
, 2018 – Jun. 19th 2020</div>}
            iconStyle={{ backgroundRepeat: "no-repeat", backgroundColor: '#c8dbff', color: '#fff', backgroundImage: `url(https://d1alm8p94swy6o.cloudfront.net/wp-content/uploads/2018/12/16160458/erabialogo.png)` }}
            icon={null}
          >
            <h3 className="vertical-timeline-element-title">Front-end Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle _subtitle">Amman, Jordan</h4>

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


        <div className="_education_container" >

          <div className="_education_card">

            <h2>

              B.A in Electronics Engineering

            </h2>
            <h3>

              PSUT

            </h3>

            <h4>

              Sep. 1st /2013 - May. 25th /2018

            </h4>


          </div>

          <h2>Courses</h2>

          <div className="_courses">


            <div className="_education_card ">

              <h2>

                CSX50

</h2>
              <h3 className="_subtitle">

                Harvard (Online)

</h3>

              <h4>

                Aug. 2018


</h4>


            </div>


            <div className="_education_card ">

              <h2>

                JavaScript: Understanding the
                Weird Parts

</h2>
              <h3>

                Udemy - Tony Alicea (Online)

</h3>

              <h4>

                Oct. 2018


</h4>


            </div>



            <div className="_education_card ">

              <h2>

                Easy to Advanced Data-structures


</h2>
              <h3>

                Udemy/Google (Online)

</h3>

              <h4>

                Dec. 2019


</h4>


            </div>


            <div className="_education_card ">

              <h2>

                Mastering NextJS


</h2>
              <h3>

                Lee Robinson (Online)

</h3>

              <h4>

                Jan. 2020


</h4>


            </div>



            <div className="_education_card ">

              <h2>

                Typescript


</h2>
              <h3>

                Udemy (Online)

</h3>

              <h4>

                Jun. 2019


</h4>


            </div>


            <div className="_education_card ">

              <h2>

                A bunch of other React and JS course


</h2>
              <h3>

                Udemy (Online)

</h3>

              <h4>

                Jun. 2019


</h4>


            </div>



          </div>



        </div>

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