import Badge from "../components/images/badge"
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

    const scrollToContact = () => {
        window.scrollTo({
            top: (3 * window.innerHeight),
            behavior: "smooth"
        })
    }

    return(
        <>
            {type === 'hero' && 
                <div className="blurp-hero">
                    {/* My Name */}
                    <motion.h3
                        style={{rotate: -18}}
                        transition={waveBounce}
                        animate={{y: ['0px', '15px']}}
                        whileHover={{scale: 1.05}}
                    > I am Alan Cortez </motion.h3>
                     {/* What I do */}
                    <motion.h1
                        style={{rotate: 5}}
                        transition={waveBounce}
                        animate={{y: ['30px', '50px']}}
                        whileHover={{scale: 1.08}}
                    > An inspiring full stack web developer </motion.h1>
                     {/* Resume Button */}

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
                            onClick={scrollToContact}
                        > Contact Me! </motion.button>
                     {/* Reminder to hover */}
                    <motion.h2
                        style={{rotate: 4}}
                        transition={waveBounce}
                        animate={{y: ['60px', '50px']}}
                        whileHover={{scale: 0.95}}
                    > Hover over the bubbles!</motion.h2>
                </div>
            }
            {type === 'about' && 
                <div className="blurp-abt">
                    <motion.h3 
                        transition={waveBounce}
                        animate={{y: ['-5px', '10px']}}
                        style={{rotate: 12}}
                        whileHover={{rotate: 0}}
                        whileTap={{scale: 0.9}}
                        className="title"
                    >About Me</motion.h3>
                    <motion.p
                        style={{rotate: -5}}
                        transition={waveBounce}
                        animate={{y: ['5px', '-5px']}}
                        whileHover={{rotate: 0}}
                        whileTap={{scale: 0.95}}
                    >
                        I am a simple man with the goal, <span className="highlight">to make your life easier</span>. 
                        Currently attending CSUF with a B.S. in Computer Science that is wrapping up in May of 2024. 
                        I love <span className="highlight">coding</span>, <span className="highlight">baking bread</span>, 
                        playing <span className="highlight">Dungeons and Dragons</span>, but most importantly working with  
                        <span className="highlight"> you</span>.
                    </motion.p>
                </div>
            }
            {type === 'project' &&
                <motion.h3
                    style={{rotate: 9}}
                    transition={waveBounce}
                    animate={{y: ['5px', '-5px']}}
                    whileHover={{rotate: 0}}
                    whileTap={{scale: 0.95}}
                    className="project-title"
                >Projects</motion.h3>
            }
            {type === 'contact' &&
                <div className="contact-blurp">  
                    {/* title */}
                    <motion.h3
                        style={{rotate: -8}}
                        transition={waveBounce}
                        animate={{y: ['7px', '-1px']}}
                        whileHover={{rotate: 0}}
                        whileTap={{scale: 1.05}}
                    >Contact Me</motion.h3>
                    {/* badges */}
                    <Badge badgeName={"linkedin"}/>
                    <Badge badgeName={"github"}/>
                    <Badge badgeName={"resume"}/>
                    {/* contact info */}
                    <motion.p
                        style={{rotate: 9}}
                        transition={waveBounce}
                        animate={{y: ['0px', '10px']}}
                        whileHover={{rotate: 0, y:0}}
                    >
                        Thank you for reaching the end, while I currently 
                        have a few things on my plate. I would love to follow 
                        up if you have an inquiry about my skills or talents.
                    </motion.p>
                    <motion.button
                        style={{rotate: -3}}
                        transition={waveBounce}
                        animate={{y: ['5px', '-6px']}}
                        whileHover={{rotate: 0}}
                    >Let's Chat!</motion.button>
                    {/* footer */}
                    <motion.footer
                        transition={waveBounce}
                        animate={{y: ['0px', '-15px']}}
                    >Designed and Developed by Alan Cortez</motion.footer>
                </div>
            }
        </>
    );
}

export default Info;