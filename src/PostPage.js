import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './context/DataContext';

const PostPage = () => {
  const {post,handleDel} = useContext(DataContext);
  const { id } =useParams();
  const match = post.find(postItem=>(postItem.id).toString() === id )
  return (
    <main className='PostPage'>
      <article className='post'>
        {match && 
          <>
            <h1>{match.title}</h1>
            <p>{match.date}</p>
            <p>{match.body}</p>
            <Link to={`/edit/${match.id}`}>
            <button className='editButton'>Edit Post</button>
            </Link>
            <button className='deleteButton' onClick={()=>{
              handleDel(match.id)
            }}>Delete Post</button>
          </>
        } 
        {!match && 
          <>
            <p>Post not found</p>
            <p>You just a F**king RAMBO</p>
          </>
        }
        
      </article>
    </main>
  )
}

export default PostPage