import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

export const Header = () => {
  return (
    <header className='containerLogo'>
    <Link to={"/"}>
        <img src='logo.png' alt="Hark logo" className='logo'/>
    </Link>
    </header>
  )
}


