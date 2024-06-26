import React, { useContext } from 'react'
import Feed from './Feed'
import DataContext from './context/DataContext'

const Home = () => {
  const {searchRes,fetchError,isLoading} = useContext(DataContext)
  return (
    <div className='Home'>
        {isLoading && <p>Feed is Loading... <br />Please Wait!</p>}
        {!isLoading && fetchError && <p style={{color:'red'}}>{fetchError}</p>}
        {
          !isLoading && !fetchError && ( searchRes.length ? 
           <Feed post={searchRes}/> 
          : <p> No items to displayy </p>)
        }
    </div>
  )
}

export default Home