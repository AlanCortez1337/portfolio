import { useState } from 'react'
import Layer1 from '/assests/hero-1.png'
import Layer2 from '/assests/hero-2.png'
import './App.css'

function App() {

  return (
    <>
      <section className="hero">
        <div className="blurp">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, hic error? Perferendis id, eveniet ratione amet omnis delectus error quos aliquid blanditiis maxime deleniti adipisci odit. Nihil necessitatibus nostrum animi?
        </div>
        {/* <img src={Layer1} alt="first layer" className='asdf1'/>
        <img src={Layer2} alt="first layer" className='asdf2'/> */}
        
        <div className="wave-1-bg"></div>
        <div className="wave-1"></div>
      </section>
      <section className="about-me">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A eveniet voluptate labore nostrum odit quam temporibus est ut facilis earum magnam vero, suscipit vel odio iusto! Ab illum iusto adipisci.
      </section>
      {/* <section className="projects">

      </section>
      <section className="contact">

      </section> */}
    </>
  )
}

export default App
