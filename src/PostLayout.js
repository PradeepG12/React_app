import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const PostLayout = () => {
  return (
    <div>
      
      <Link to='/postPage/newpost'>NewUserPost</Link>
      <Outlet/>
    </div>
  )
}

export default PostLayout