import { motion } from "framer-motion"
import '../App.css'

function Info({type}) {
    const waveBounce = {
        y: {
            duration: 0.8, 
            yoyo: Infinity, 
            ease: "easeInOut",
        }
    }

    return(
        <>
            {type === 'hero' && 
                <motion.div
                    transition={waveBounce}
                    animate={{y: ['50px', '75px']}}
                    className="blurp-hero"
                >
                    <h3>hello i am alan cortez,</h3>
                    <h1>an inspiring full stack developer_</h1>
                    <button>resume</button>
                </motion.div>
            }
            {type === 'about' && 
                <motion.div 
                    transition={waveBounce}
                    animate={{y: ['10px', '-5px']}}
                    className="blurp-abt"
                >
                    <h3 className="title">About Me</h3>
                    <p>
                        I am a simple man with the goal, <span className="highlight">to make your life easier</span>. 
                        Currently attending CSUF with a B.S. in Computer Science that is wrapping up in May of 2024. 
                        I love <span className="highlight">coding</span>, <span className="highlight">baking bread</span>, 
                        playing <span className="highlight">Dungeons and Dragons</span>, but most importantly working with  
                        <span className="highlight"> you</span>.
                    </p>
                </motion.div>
            }
        </>
    );
}

export default Info;