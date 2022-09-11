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
        <meta name="google-site-verification" content="aN4O0-l0d9j8Pji-eP5vNwuXzIclW6o6yjLjmlbqb1U" />
      </Helmet>

      <PageHero title="Ammar Halees" subtitle="" links={links} />

      <HomeSection title="Experience">

        <div class="experience_container">



          <div className="_education_card">

            <h2>

              Senior Software Engineer - Seera Group

            </h2>
            <h3>

              Accounts, Payments @ almosafer.com

            </h3>

            <h4>

              April, 2022 - Present

            </h4>


          </div>


          <div className="_education_card">

            <h2>

              Software engineer - Front-end

            </h2>
            <h3>

              Majid Al-Futtaim | Mall of the Emirates

            </h3>

            <h4>

              May, 2021 - April, 2022

            </h4>


          </div>
          <div className="_education_card">

            <h2>

              Software engineer - Front-end

            </h2>
            <h3>

              Mawdoo3.com

            </h3>

            <h4>

              April, 2020 - April, 2021

            </h4>


          </div>
          <div className="_education_card">

            <h2>

              Software engineer - Front-end

            </h2>
            <h3>

              Erabia

            </h3>

            <h4>

              Nov.  2018 - March, 2020

            </h4>


          </div>
        </div>

      </HomeSection>
{/* 
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












          </div>



        </div>

      </HomeSection> */}


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