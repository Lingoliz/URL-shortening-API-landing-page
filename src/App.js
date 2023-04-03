import React from 'react'
import Footer from './component/Footer'
import Header from './component/Header'
import Hero from './component/Hero'
import Statistics from './component/Statistics'

export default function App() {
  return (
  <>
    <Header />
    <main>
      <Hero />
      <Statistics />
    </main>
    <Footer />
  </>
    
  )
}
