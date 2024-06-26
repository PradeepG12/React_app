import React from 'react'
import { useParams } from 'react-router-dom'


const UserPost = () => {
  const {id} = useParams()
  return (
    <>
      <h1>Maplaoiii  {id}</h1>
    </>
  )
}

export default UserPost