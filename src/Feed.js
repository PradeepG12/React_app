import React from 'react'
import Post from './Post'

const Feed = ({post}) => {
  return (
    <div className='feed'>
      <>{
        post.map(posts=>(
          <Post key={posts.id} posts={posts}/>
        ))
      }</>
    </div>
  )
}

export default Feed