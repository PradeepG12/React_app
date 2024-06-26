import React, { useContext } from 'react'
import {FaMobileAlt, FaLaptop,FaTabletAlt} from 'react-icons/fa';
import DataContext from './context/DataContext';

const Header = ({title}) => {
  const {width} = useContext(DataContext);
  return (
    <header className='Header'>
      <h1 className='h1'>
        {title}
      </h1>
      {
        width < 766 ? <FaMobileAlt/>
          : width < 992 ? <FaTabletAlt/> : <FaLaptop/>
      }
    </header>
  )
}

export default Header