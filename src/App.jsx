import Wave from "./components/svg/wave1"
import './App.css'

function App() {

  return (
    <>
      <section className="hero">
        <div className="blurp-hero">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, hic error? Perferendis id, eveniet ratione amet omnis delectus error quos aliquid blanditiis maxime deleniti adipisci odit. Nihil necessitatibus nostrum animi?
        </div>
        <Wave shape={1}></Wave>
        <Wave shape={2}></Wave>
      </section>
      <section className="about-me">
        <div className="blurp-abt">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, atque?
        </div>
        <Wave shape={3}></Wave>
      </section>
      {/* <section className="projects">

      </section>
      <section className="contact">

      </section> */}
    </>
  )
}

export default App
