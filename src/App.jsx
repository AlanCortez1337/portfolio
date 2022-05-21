import Wave from "./components/svg/wave"
import Badge from "./components/images/badge"
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
          <div className="abt-grid">
            <div className="blurp-abt">
              <h3>About Me</h3>
              <p>
                I am a simple man with a modest goal, to make people's lives easier. Currently attending CSUF with a B.S. in Computer Science wrapping up in May 2024. I love coding, baking bread, playing D&D, but most importantly helping you.
              </p>
            </div>
            <Badge badgeName={"me"}/>
            <Badge badgeName={"lua"}/>
            <Badge badgeName={"bread"}/>
            <Badge badgeName={"dnd"}/>
          </div>
        <Wave shape={3}></Wave>
      </section>
      {/* <section className="projects">
        <div className="project-grid">
          <div className="proj1">
            asdf
          </div>
          <div className="proj2">
            asdffff
          </div>
          <div className="proj3">
            asdfsaf
          </div>
          <div className="proj4">
            asdfasdf
          </div>
          <div className="proj5">
            asdfsdf
          </div>
        </div>
        <Wave shape={4}></Wave>
      </section> */}
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
