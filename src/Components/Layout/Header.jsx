import React from 'react'
import "./Style/Header.css"
import Logo from "../../assets/Logo.svg"
import {BiSolidUserCircle} from "react-icons/bi"

const Header = () => {
  return (
    
    <div className='header'>
      <div >
        <img src={Logo} alt="logo"/>
      </div>

      <div >
        <button className='btnHeder'>
            <BiSolidUserCircle className='mt-1 text-2xl'></BiSolidUserCircle><span>Signin</span>
        </button>
      </div>
      
    </div>
    

    
  )
}

export default Header