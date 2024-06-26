import { createContext, useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import {format} from 'date-fns';
import api from "../api/postJson.js"
import useWindowSize from '../hooks/useWindowSize.js';
import useAxiosFetch from '../hooks/useAxiosFetch.js';


const DataContext= createContext({})

export const DataProvider = ({children})=>{

  const [post,setPost]=useState([])
  const [search,setSearch]=useState('');
  const [searchRes,setSearchRes]=useState([]);
  const [postTitle,setPostTitle] = useState('');
  const [editTitle,setEditTitle] = useState('');
  const [postBody,setPostBody] = useState('');
  const [editBody,setEditBody] = useState('');
  const navigate=useNavigate();
  const {width} = useWindowSize();
  const {data,fetchError,isLoading} = useAxiosFetch('http://localhost:3500/post');

  useEffect(()=>{
    setPost(data);
  },[data])

  useEffect(()=>{
    const filterPosts= post.filter((post)=>(
      (post.body).toLowerCase().includes(search.toLowerCase()) 
        || (post.title).toLowerCase().includes(search.toLowerCase()) 
    ))
    setSearchRes(filterPosts.reverse())
  },[search,post])

  const handleSubmit=async (e)=>{
    e.preventDefault();
    const id = post.length ? post[post.length-1].id+1 : 1;
    const date = format(new Date(),'MMMM dd, yyyy pp');
    const newPost = {id,title:postTitle,date:date,body:postBody}
    // const allPost=[...post,newPost];
    try {
      const response = await api.post('/post',newPost);
      const allPost = [...post,response.data]
      setPost(allPost);
      setPostTitle('');
      setPostBody('');
      navigate('/');
    } catch (error) {
      console.log(error.Message+"Error");
    }
  }

  const handleUpdate= async (id)=>{
    const date = format(new Date(),'MMMM dd, yyyy pp');
    const updatePost = {id,title:editTitle,date:date,body:editBody}
    try {
      const response= await api.put(`/post/${id}`,updatePost);
      // [...post,response.data]
      setPost(post.map(post=>post.id === id ? {...response.data}: post));
      setEditTitle('');
      setEditBody('');
      navigate('/');
    } catch (error) {
      console.log(error.Message)
    }
  }

  const handleDel=async(id)=>{
    try{
      await api.delete(`/post/${id}`);
      const allNewPost = post.filter((post)=>post.id !== id);
      setPost(allNewPost);
      navigate('/');
    }catch(e){
      console.log(e.Message+'Error');
    }
  }
  
  return (
    <DataContext.Provider value={{
      width,search,setSearch,searchRes,fetchError,isLoading,handleSubmit,
      postTitle,setPostTitle,postBody,setPostBody,post,handleDel,editBody,
      setEditBody,editTitle,setEditTitle,handleUpdate
    }}>
      {children}
    </DataContext.Provider>
  )
}
export default DataContext;