import React from 'react'
import logo from '../images/footerLogo.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import ig from '../images/icon-instagram.svg'

export default function Footer() {
  return (
    <>
        <div className='Boost'>
            <div className='container'>
                <h1>Boost your links today</h1>
                <button className='btn'>Get Started</button>
            </div>
        </div>
        <footer>
            <div className='container'>
                <img src={logo}/>
                <ul>
                    <li className='nav-title'>Features</li>
                    <li><a href='/'>Link Shortrning</a></li>
                    <li><a href='/'>Branded Links</a></li>
                    <li><a href='/'>Analystics</a></li>
                </ul>
                <ul>
                    <li className='nav-title'>Resources</li>
                    <li><a href='/'>Blog</a></li>
                    <li><a href='/'>Developers</a></li>
                    <li><a href='/'>Support</a></li>
                </ul>
                <ul>
                    <li className='nav-title'>Company</li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Our Team</a></li>
                    <li><a href='/'>Careers</a></li>
                    <li><a href='/'>Contact</a></li>
                </ul>
                <ul className='social'>
                    <li><img src={facebook}/></li>
                    <li><img src={twitter}/></li>
                    <li><img src={pinterest}/></li>
                    <li><img src={ig}/></li>
                </ul>
            </div>
        </footer>
    </>
  )
}
