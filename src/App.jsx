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
        <div className="abt-wrapper">
          <div className="blurp-abt">
            <h3>hello i am alan cortez,</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, sit!</p>
          </div>
          <div className="abt-grid">
              {/* <p>a</p>
              <p>b</p>
              <p>c</p>
              <p>d</p> */}

              <img src={MeBadge} alt="me" className="badge" />
              <img src={LuaBadge} alt="me" className="badge" />
              <img src={BreadBadge} alt="me" className="badge" />
              <img src={DndBadge} alt="me" className="badge" />
          </div>
        </div>
        <Wave shape={3}></Wave>
      </section>
      {/* <section className="projects">
        <div className="blurp-abt">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, atque?
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
