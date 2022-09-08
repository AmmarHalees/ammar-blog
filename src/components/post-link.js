import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (

  <div className="_project_card ">

  <h2>

  {post.frontmatter.title}

  </h2>

  <h3>

    <span className="_tech-item">{post.frontmatter.date} </span>
 


  </h3>

  <div className="_controls-container">

    <a href={post.frontmatter.path} title={post.frontmatter.title}  rel="noreferrer noopener">Read</a>



  </div>


</div>
  // <article className="card ">
  //   <Link to={post.frontmatter.path}>
  //     {!!post.frontmatter.thumbnail && (
  //       <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
  //     )}
  //   </Link>
  //   <header>
  //     <h2 className="post-title">
  //       <Link to={post.frontmatter.path} className="post-link">
  //         {post.frontmatter.title}
  //       </Link>
  //     </h2>
  //     <div className="post-meta">{post.frontmatter.date}</div>
  //   </header>
  // </article>
)
export default PostLink
