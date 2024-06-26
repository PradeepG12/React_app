import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import DataContext from './context/DataContext';

const EditPost = () => {
  const {post,editBody,setEditBody,editTitle,setEditTitle,handleUpdate} = useContext(DataContext);
  const { id } =useParams();
  const match = post.find(post=>(post.id).toString() === id )
  
  useEffect(()=>{
    if(match){
      setEditTitle(match.title)
      setEditBody(match.body)
    }
  },[match,setEditTitle,setEditBody]);

  return (
    <main className='NewPost'>
      {editTitle && 
        <>
          <h2>New Post</h2>
          <form action="" className='newPostForm' onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="postTitle">Title:</label>
            <input type="text" id="postTitle" 
              required
              value={editTitle} 
              onChange={(e)=>setEditTitle(e.target.value)}
            />
            <label htmlFor="postBody">Post:</label>
            <textarea name="" id="postBody" required
              value={editBody}
              onChange={e=>setEditBody(e.target.value)}  
            />
            <button type="submit" onClick={()=>handleUpdate(match.id)}>Submit</button>
          </form>
        </>
      }
      {!editTitle && 
          <>
            <p>Post not found</p>
            <p>You just a F**king RAMBO</p>
          </>
        }
    </main>
  )
}

export default EditPost