import React, {Suspense} from 'react'
import Wave from "./components/waves"
import Blurp from "./components/content-info"
const Card = React.lazy(() => import('./components/projectCards'))
import './App.css'


function App() {

  return (
    <>
      <section className="hero">
        {/* Includes welcome bubbles */}
        <Blurp type={'hero'}/>
        <Wave shape={1}></Wave>
        <Wave shape={2}></Wave>
      </section>
      <section className="about-me">
        {/* Includes title, blurp paragraph, and badges */}
        <Blurp type={'about'}/>
        <Wave shape={3}></Wave>
      </section>
      <section className="projects">
        <div className="project-grid">
          {/* Includes title */}
          <Blurp type={'project'}/>
          
          {/* Discord Bot Card */}
          <Suspense fallback={<div>loading Card</div>}>
            <Card type={0}/>
          </Suspense>
          {/* Memory Game Card */}
          <Suspense fallback={<div>loading Card</div>}>
            <Card type={1}/>
          </Suspense>
          {/* Food Tinder Card */}
          <Suspense fallback={<div>loading Card</div>}>
            <Card type={2}/>
          </Suspense>
        </div>
        <Wave shape={4}></Wave>
      </section>
      <section className="contact">
        <Blurp type={'contact'}/>
        <Wave shape={5}></Wave>
        <Wave shape={6}></Wave>
      </section>
    </>
  )
}

export default App
