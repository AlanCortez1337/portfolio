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
                <div className="blurp-hero">
                    <motion.h3
                        style={{rotate: -18}}
                        transition={waveBounce}
                        animate={{y: ['0px', '15px']}}
                        whileHover={{scale: 1.05}}
                    > I am Alan Cortez </motion.h3>
                    <motion.h1
                        style={{rotate: 5}}
                        transition={waveBounce}
                        animate={{y: ['60px', '50px']}}
                        whileHover={{scale: 1.08}}
                    > An inspiring full stack web developer </motion.h1>
                    <motion.button
                        style={{rotate: -5}}
                        initial={{color: '#f8f8f8', borderRadius: '30px 20px 30px 20px'}}
                        transition={waveBounce}
                        animate={{y: ['15px', '45px']}}
                        whileHover={{
                            transistion: {
                                duration: 0.8, 
                                yoyo: Infinity, 
                                ease: "ease"
                            }, 
                            color: '#02F1BD', 
                            borderRadius: '20px 30px 20px 30px',
                            scale: 1.05
                        }}
                        whileTap={{
                            scale: 0.95
                        }}
                    > resume </motion.button>
                </div>
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