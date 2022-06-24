import Badge from "./badges"
import { motion } from "framer-motion"
import { IoDocumentText, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

function Info({type}) {
    const waveBounce = {
        y: {
            duration: 1.8, 
            yoyo: Infinity, 
            ease: "easeInOut",
        }
    }

    const waveBounceSlow = {
        y: {
            duration: 2.8, 
            yoyo: Infinity, 
            ease: "easeInOut",
        }
    }

    const scrollToContact = () => {
        window.scrollTo({
            top: 3650,
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
                        whileTap={{rotate: 0}}
                        className="cyan-bubble"
                    > I am Alan Cortez </motion.h3>
                     {/* What I do */}
                    <motion.h1
                        style={{rotate: 5}}
                        transition={waveBounce}
                        animate={{y: ['30px', '50px']}}
                        whileHover={{scale: 1.08}}
                        whileTap={{rotate: 0}}
                        className="cyan-bubble"
                    > An aspiring full stack web developer </motion.h1>
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
                        whileTap={{rotate: 0, scale: 0.95}}
                        onClick={scrollToContact}
                    > Contact Me! </motion.button>
                     {/* Reminder to hover */}
                    <motion.h2
                        style={{rotate: 4}}
                        transition={waveBounce}
                        animate={{y: ['60px', '50px']}}
                        whileHover={{scale: 0.95}}
                        whileTap={{rotate: 0, scale: 0.95}}
                        className="purple-bubble"
                    > 
                        <span className="desktop-notice">
                            Hover over the bubbles!
                        </span>
                        <span className="mobile-notice">
                            Tap the bubbles!
                        </span>
                    </motion.h2>
                </div>
            }
            {type === 'about' && 
                <div className="blurp-abt">
                    <motion.h3 
                        transition={waveBounce}
                        animate={{y: ['-5px', '10px']}}
                        style={{rotate: 12}}
                        whileHover={{rotate: 0}}
                        whileTap={{rotate: 0, scale: 0.9}}
                        className="purple-bubble"
                    >About Me</motion.h3>
                    <motion.p
                        style={{rotate: -5}}
                        transition={waveBounce}
                        animate={{y: ['5px', '-5px']}}
                        whileHover={{rotate: 0}}
                        whileTap={{rotate: 0, scale: 0.95}}
                        className="cyan-bubble"
                    >
                        Hey, how's it going? <i>Well I suppose you can't answer that...</i> My name is Alan and I want <span className="highlight">to make your life easier</span>. 
                        Attending CSUF made me realize how far a great website can go, <i>and how bad one can get</i>. 
                        My road so far has led me to dabbling in <span className="highlight">Svelte</span>, and <span className="highlight">React</span>.
                        On the side I love <span className="highlight">baking bread</span>, 
                        playing <span className="highlight">D&D</span>, and chilling with my bird <span className="highlight">Lua</span>.
                    </motion.p>
                    <Badge badgeName={"me"}/>
                    <Badge badgeName={"lua"}/>
                    <Badge badgeName={"bread"}/>
                    <Badge badgeName={"dnd"}/>
                </div>
            }
            {type === 'project' &&
                <>
                    <motion.h3
                        style={{rotate: 9}}
                        transition={waveBounce}
                        animate={{y: ['5px', '-5px']}}
                        whileHover={{rotate: 0}}
                        whileTap={{rotate: 0, scale: 0.95}}
                        className="project-title cyan-bubble"
                    >Projects</motion.h3>
                    <motion.i
                        style={{rotate: -3}}
                        transition={waveBounce}
                        animate={{y: ['-3px', '-9px']}}
                        whileHover={{rotate: 0}}
                        whileTap={{rotate: 0, scale: 0.95}}
                        className="small-info cyan-bubble"
                    >
                        Tap For More Info
                    </motion.i>
                </>
            }
            {type === 'contact' &&
                <div className="contact-blurp">  
                    {/* title */}
                    <motion.h3
                        style={{rotate: -8}}
                        transition={waveBounce}
                        animate={{y: ['7px', '-1px']}}
                        whileHover={{rotate: 0}}
                        whileTap={{rotate: 0, scale: 1.05}}
                        className="green-bubble"
                    >Contact Me</motion.h3>
                    {/* badges */}
                    <Badge badgeName={"linkedin"}/>
                    <Badge badgeName={"github"}/>
                    <Badge badgeName={"resume"}/>
                    {/* contact info */}
                    <motion.p
                        style={{rotate: 3}}
                        transition={waveBounce}
                        animate={{y: ['0px', '10px']}}
                        whileHover={{rotate: 0, y:0}}
                        whileTap={{rotate: 0}}
                        className="bright-green-bubble"
                    >
                        Thank you for reaching the end. While I currently 
                        have a few things on my plate, I would love to follow 
                        up if you have any inquiries about my skills or talents.
                    </motion.p>
                    <motion.a
                        style={{rotate: -6}}
                        transition={waveBounce}
                        animate={{y: ['0px', '-18px']}}
                        whileHover={{rotate: 0, scale: 1.05}}
                        whileTap={{rotate: 0, scale: 0.9}}
                        href="mailto:cortez.alan060@gmail.com"
                        className="contact-me-button"
                    >
                        <motion.button
                            initial={{borderRadius: '20px 30px 20px 30px'}}
                            transition={waveBounce}
                            whileHover={{
                                transistion: {
                                    duration: 0.4, 
                                    yoyo: Infinity, 
                                    ease: "ease"
                                }, 
                                borderRadius: '30px 20px 30px 20px',
                            }}
                            className="bright-green-bubble-inverse"
                        >Let's Chat!</motion.button>
                    </motion.a>
                    {/* footer */}
                    <motion.footer
                        transition={waveBounceSlow}
                        animate={{y: ['0px', '-15px']}}
                    >
                        <div className="mobile-socials">
                            <a 
                                href="https://docs.google.com/document/d/1WgFxvm5z1IBIdMeri4NDSyZzI855fQZRAZP5GZUopmc/edit?usp=sharing"
                                aria-label="Resume"
                            >
                                <IoDocumentText size={"2em"}/>
                            </a>
                            <a 
                                href="https://github.com/AlanCortez1337"
                                aria-label="GitHub Profile"
                            >
                                <IoLogoGithub size={"2em"}/>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/alancortez1337/" 
                                aria-label="LinkedIn"
                            >
                                <IoLogoLinkedin size={"2em"}/>
                            </a>
                        </div>
                        Designed and developed by Alan Cortez
                    </motion.footer>
                </div>
            }
        </>
    );
}

export default Info;