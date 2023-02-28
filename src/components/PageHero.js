import React from "react"

function PageHero({ title, subtitle, links }) {
  return (

    <section className="_heading">

      <h1 className="_title">{title}</h1>

      <h2 className="_subtitle">{subtitle}</h2>


    </section>

  )
}

export default PageHero