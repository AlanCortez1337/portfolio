import Wave from "./components/svg/wave"
import Badge from "./components/images/badge"
import Blurp from "./components/information"
import Card from "./components/projectCard"
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
          <Blurp type={'project'}/>
          <Card type={0}/>
          <Card type={1}/>
          <Card type={2}/>
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
