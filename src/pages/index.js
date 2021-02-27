import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import links from '../../data/social.json';
import Twitter from '../images/twitter.svg';
import Github from '../images/github.svg';

import PageHero from "../components/PageHero";
import HomeSection from "../components/HomeSection";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
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

      <PageHero title="Ammar Halees" subtitle="Software engineer - Front-end @Mawdoo3" links={links} />

      <HomeSection  title="Experience">

        
      <VerticalTimeline >
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#181326', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #181326' }}
    date="2011 - present"
    iconStyle={{ background: '#181326', color: '#fff' }}
    icon={<Twitter />}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#181326', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #181326' }}
    date="2011 - present"
    iconStyle={{ background: '#181326', color: '#fff' }}
    icon={<Twitter />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>

</VerticalTimeline>
      
      </HomeSection>

      <HomeSection title="Education">

      <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#181326', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #181326' }}
    date="2011 - present"
    iconStyle={{ background: '#181326', color: '#fff' }}
    icon={<Twitter />}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#181326', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #181326' }}
    date="2011 - present"
    iconStyle={{ background: '#181326', color: '#fff' }}
    icon={<Twitter />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>

</VerticalTimeline>
      
      
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