import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Card from './Components/Card'
import Footer from './Components/Footer.jsx'
import data from './data.js'


function App() {
  console.log(data)
  const cards = data.map((items) => {
      return(
        <Card
          key = {items.id}
          {...items}
        />
      )
  });
  return (

    <div>
      <Navbar />
      <Hero />
      <div className='cardGridDiv'>
        {cards}
      </div>
      <Footer />
    </div>
  )
}

export default App
