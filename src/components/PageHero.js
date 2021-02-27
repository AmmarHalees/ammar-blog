import React from "react"
import LinkedIN from '../images/linkedin.svg';
import Github from '../images/github.svg';
import Twitter from '../images/twitter.svg';
import Medium from '../images/medium.svg';


const iconMap = {

  "linkedin": <LinkedIN />,
  "github": <Github />,
  "twitter": <Twitter />,
  "medium": <Medium />,

}




function PageHero({ title, subtitle, links }) {
  return (

    <section className="_heading">

      <h1 className="_title">{title}</h1>

      <h2 className="_subtitle">{subtitle}</h2>

      {links && <ul className="social-links">

        {links.links.map(({ title, href, id, icon }) => <li key={id}><a href={href} title={title} target="_blank" rel="noreferrer noopener">{iconMap[icon]}</a> </li>)}

      </ul>}

    </section>

  )
}

export default PageHero