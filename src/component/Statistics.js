import { useState,useEffect } from 'react'

import recognition from '../images/icon-brand-recognition.svg'
import records from '../images/icon-detailed-records.svg'
import customizable from '../images/icon-fully-customizable.svg'
import Shorten from './Shorten'




export default function Statistics() {
    const [shorten, setShorten]=useState([])
    const [search, setSearch]=useState('')
    const [invalid, setInvalid]=useState(true)
    

    useEffect(()=> {
        if (localStorage.getItem('shorten') != null){
            setShorten(JSON.parse(localStorage.getItem('shorten')))
        }
    },[])

    function getShorten(event) {
        event.preventDefault()
        if ( /\w+.(com|io|net|org|ru|uk)/ig.test(search) &&search != ''){
            setInvalid(true)
            fetch(`https://api.shrtco.de/v2/shorten?url=${search}`)
            .then(req => req.json())
            .then(data => setShorten(prev => [...prev,data]))
        }else {
            setInvalid(false)
        }

        
    }

    useEffect(()=> {
        localStorage.setItem('shorten',JSON.stringify(shorten))
    },[shorten])

  return (
    <div className='statistics'>
        <div className='container'>
            <div className='shorten'>
                <form onSubmit={getShorten}>
                    <input className={invalid ? '':'invalid'} placeholder='Shorten a Link here...' onChange={(e)=> setSearch(e.target.value.trim())}/>
                    <button className='btn'>Shorten It!</button>
                    
                    {!invalid && <p>Please enter a valid URL</p>}
                </form>
                <ul>
                {shorten.length !=0 && shorten.map(e => <Shorten key={e.result.code} original_link={e.result.original_link} short_link={e.result.short_link}/>)}
                </ul>
            </div>
            <h1>Advanced Statistics</h1>
            <p>Trach how your links performing across the web with our advanced statistics dashboard.</p>
            <div className='cards'>
                <div className='card'>
                    <div className='img'>
                        <img src={recognition}/>
                    </div>
                    <h2>Brand Recognition</h2>
                    <p> Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <div className='card'>
                    <div className='img'>
                        <img src={records}/>
                    </div>
                    <h2>Detailed Records</h2>
                    <p> Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>
                <div className='card'>
                    <div className='img'>
                        <img src={customizable}/>
                    </div>
                    <h2>Fully Customizable</h2>
                    <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}
