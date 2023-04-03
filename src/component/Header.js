import React, { useState } from 'react'
import logo from '../images/logo.svg'


export default function Header() {
    const [isShown, setIsShown]=useState(false)
  return (
    <header>
        <div className='container'>
            <a href='/'>
                <img src={logo} className='logo'/>
            </a>
            <nav className={isShown ? 'active':''}>
                <ul className='nav-links'>
                    <li><a href='#'>Features</a></li>
                    <li><a href='#'>Pricing</a></li>
                    <li><a href='#'>Resources</a></li>
                </ul>
                <ul >
                    <li><a href='#'>Login</a></li>
                    <li><a href='#' className='btn'>Sign Up</a></li>
                </ul>
            </nav>
            <i className='fas fa-bars' onClick={()=> setIsShown(!isShown)}></i>
        </div>
    </header>
  )
}
