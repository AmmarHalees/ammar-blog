import React from "react"

function HomeSection({ title , data}) {
  return (

    <section className="_section">

    <div className="sep_container">

      <div className="sep_lineContainer">

        <div className="sep_line sep_left">  </div>

      </div>

      <p className="sep_title sep_large">{title}</p>

      <div className="sep_lineContainer">

        <div className="sep_line sep_right"> </div>

      </div>
    </div >

    <div className="grids">
      {data}
    </div>
  </section>

  )
}

export default HomeSection