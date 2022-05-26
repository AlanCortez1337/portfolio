import Wave from "./components/svg/wave"
import Badge from "./components/images/badge"
import Blurp from "./components/information"
import './App.css'


function App() {

  return (
    <>
      <section className="hero">
        <Blurp type={'hero'}/>
        <Wave shape={1}></Wave>
        <Wave shape={2}></Wave>
      </section>
      <section className="about-me">
        <div className="abt-grid">
          <Blurp type={'about'}/>
          <Badge badgeName={"me"}/>
          <Badge badgeName={"lua"}/>
          <Badge badgeName={"bread"}/>
          <Badge badgeName={"dnd"}/>
        </div>
        <Wave shape={3}></Wave>
      </section>
      <section className="projects">
        <div className="project-grid">
          <h3>Projects</h3>
          <div className="proj1">
            asdf
          </div>
          <div className="proj2">
            asdffff
          </div>
          <div className="proj3">
            asdfsaf
          </div>
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
