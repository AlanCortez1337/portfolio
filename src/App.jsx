// import React, {Suspense} from 'react'
import Wave from "./components/waves"
import Blurp from "./components/content-info"
import Card from "./components/projectCards"
import Modal from "./components/modal"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"


function App() {

  const [modalOpen, setModalOpen] = useState(true)

  const close = () => setModalOpen(false);

  return (
    <>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modalOpen && <Modal isOpen={close}/> }
      </AnimatePresence>
      <section className="hero">
        {/* Includes welcome bubbles */}
        {/* <Suspense fallback={<div>Loading Hero Section Information</div>}> */}
          <Blurp type={'hero'}/>
        {/* </Suspense> */}
        <Wave shape={1}></Wave>
        <Wave shape={2}></Wave>
      </section>
      <section className="about-me">
        {/* Includes title, blurp paragraph, and badges */}
        {/* <Suspense fallback={<div>Loading About Section Information</div>}> */}
          <Blurp type={'about'}/> 
        {/* </Suspense> */}
        {/* <Suspense fallback={<div>woosh woosh wave loading</div>}> */}
          <Wave shape={3}></Wave>
        {/* </Suspense> */}
      </section>
      <section className="projects">
        <div className="project-grid">
          {/* Includes title */}
          {/* <Suspense fallback={<div>Loading Project Section Information</div>}> */}
            <Blurp type={'project'}/>
          {/* </Suspense> */}
          
          {/* Discord Bot Card */}
          {/* <Suspense fallback={<div>loading discord bot card...</div>}> */}
            <Card type={0}/>
          {/* </Suspense> */}
          {/* Memory Game Card */}
          {/* <Suspense fallback={<div>loading memory game card...</div>}> */}
            <Card type={1}/>
          {/* </Suspense> */}
          {/* Food Tinder Card */}
          {/* <Suspense fallback={<div>loading food tinder card...</div>}> */}
            <Card type={2}/>
          {/* </Suspense> */}
        </div>
        {/* <Suspense fallback={<div>woosh woosh wave loading</div>}> */}
        {/* </Suspense> */}
        <Wave shape={4}></Wave>
      </section>
      <section className="contact">
        {/* <Suspense fallback={<div>Loading Contact Section Information</div>}> */}
          <Blurp type={'contact'}/>
        {/* </Suspense> */}
        {/* <Suspense fallback={<div>woosh woosh wave loading</div>}> */}
          <Wave shape={5}></Wave>
        {/* </Suspense> */}
        {/* <Suspense fallback={<div>woosh woosh wave loading</div>}> */}
          <Wave shape={6}></Wave>
        {/* </Suspense> */}
      </section>
    </>
  )
}

export default App
