import Wave from "./components/svg/wave"
import './App.css'
import MeBadge from "/assests/meBadge.png"
import DndBadge from "/assests/dnd.png"
import LuaBadge from "/assests/lua.png"
import BreadBadge from "/assests/bread.png"

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
        {/* <div className="abt-wrapper"> */}
          <div className="abt-grid">
            <div className="blurp-abt">
              <h3>About Me</h3>
              <p>
                I am a simple man with a modest goal, to make people's lives easier. Currently attending CSUF with a B.S. in Computer Science wrapping up in May 2024. I love coding, baking bread, playing D&D, but most importantly helping you.
              </p>
            </div>
            <img src={MeBadge} alt="me" className="badge" width={250} height={250} />
            <img src={LuaBadge} alt="me" className="badge" width={175} height={175} />
            <img src={BreadBadge} alt="me" className="badge" width={225} height={225} />
            <img src={DndBadge} alt="me" className="badge" width={150} height={150} />
          </div>
        {/* </div> */}
        <Wave shape={3}></Wave>
      </section>
      <section className="projects">
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
        {/* <Wave shape={4}></Wave> */}
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
