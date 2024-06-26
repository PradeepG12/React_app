import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from './context/DataContext'

const Nav = () => {
  const {search,setSearch}=useContext(DataContext)
  return (
    <div className='Nav'>
      <form action="" className='searchForm' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="">Search Posts</label>
        <input id='navInput' type="text" placeholder='Search' 
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
      </form>

    <ul>
      <li><Link className='link' to='/' >Home</Link></li>
      <li><Link to='/post' className='link'>Post</Link></li>
      <li><Link to='/about' className='link'>About</Link></li>
    </ul>
    </div>
    
  )
}

export default Nav