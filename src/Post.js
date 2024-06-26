// import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({posts}) => {
  // const id=posts.id
  return (
    <div className={`post`}>
      <Link to={`/post/${posts.id}`}>
        <h1>{posts.title}</h1>
        <p>{posts.date}</p>
      </Link>

      <p>{
        ((posts.body).length <=25
          ? posts.body 
          : `${(posts.body).slice(0,25)}...` 
      )}</p> 
      
    </div>
    
  )
}

export default Post