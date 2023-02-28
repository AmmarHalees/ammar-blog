import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import links from "../../data/social.json";

import PageHero from "../components/PageHero";
import HomeSection from "../components/HomeSection";

import LinkedIN from "../images/linkedin.svg";
import Github from "../images/github.svg";
import Twitter from "../images/twitter.svg";
import Medium from "../images/medium.svg";
import Globe from "../images/square.svg";
import Calendar from "../images/calendar.svg";

const iconMap = {
  linkedin: <LinkedIN />,
  github: <Github />,
  twitter: <Twitter />,
  medium: <Medium />,
  globe: <Globe />,
  calendar: <Calendar />,
};
const IndexPage = ({ data: { site } }) => {
  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
        <meta
          name="google-site-verification"
          content="aN4O0-l0d9j8Pji-eP5vNwuXzIclW6o6yjLjmlbqb1U"
        />
      </Helmet>

      <PageHero title="Ammar Halees" subtitle="" links={links} />
      <HomeSection title="Find me">
        <div class="experience_container">
          {links && (
            <ul className="social-links">
              {links.links.map(({ title, href, id, icon, username }) => (
                <li key={id}>
                  <a
                    style={{ display: "block" }}
                    href={href}
                    title={title}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div className="_education_card">
                      <h2>{iconMap[icon]} {title}</h2>
                      <h2>@{username}</h2>
                    </div>
                  </a>{" "}
                </li>
              ))}
            </ul>
          )}
        </div>
      </HomeSection>
    </Layout>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query IndexPageeQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
