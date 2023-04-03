import React from 'react'
import hero from '../images/illustration-working.svg'


export default function Hero() {
  return (
    <section className='hero'>
        <div className='container'>
            <div className='hero-content'>
                <div className='hero-text'>
                    <h1>More than just <br /> shorter links</h1>
                    <p> Build your brand’s recognition and get detailed insights on how your links are performing. </p>
                    <a href='/' className='btn'>Get Started</a>
                </div>
                <div className='hero-img'>
                    <img src={hero} />
                </div>
            </div>
        </div>
    </section>
  )
}
