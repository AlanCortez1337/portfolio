import Wave from "./components/svg/wave1"
import './App.css'

function App() {

  return (
    <>
      <section className="hero">
        <div className="blurp-hero">
          <h3>hello i am alan cortez,</h3>
          <h1>an inspiring full stack developer_</h1>
          <button>resume</button>
        </div>
        <Wave shape={1}></Wave>
        <Wave shape={2}></Wave>
      </section>
      <section className="about-me">
        <div className="blurp-abt">
          <h3>hello i am alan cortez,</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, sit!</p>
        </div>
        <Wave shape={3}></Wave>
      </section>
      <section className="projects">
        <div className="blurp-abt">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, atque?
        </div>
        <Wave shape={4}></Wave>
      </section>
      {/* <section className="contact">
        <div className="blurp-abt">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, atque?
        </div>
        <Wave shape={5}></Wave>
        <Wave shape={6}></Wave>
      </section> */}
    </>
  )
}

export default App
