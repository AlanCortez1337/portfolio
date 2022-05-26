import { IoLogoDiscord, IoGameController, IoPhonePortraitOutline, IoLogoGithub } from "react-icons/io5";
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Burger from "/assests/burg.gif"

function ProjCard({type}) {
    const [isVisible, setIsVisible] = useState(true);

    const visible = {
        title: { opacity: 1 },
        content: { opacity: 0 }
    };

    const onClick = () => {
        setIsVisible(!isVisible)
        console.log(isVisible)
    }


    return(
        <>
            {type === 1 &&
                <motion.div 
                    
                onHoverEnd={onClick}
                    className="project-card"
                >
                    <AnimatePresence>
                        {isVisible ? 
                            <motion.div
                                key="title1"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.75, ease: "easeInOut"}}
                                onHoverStart={onClick} 
                                className="title-card"
                            >
                                <h3>Discord Bot</h3>
                                <IoLogoDiscord size={"4em"}/>
                            </motion.div> : 

                            <motion.div
                                key="content1"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.75, ease: "easeInOut"}}
                                
                                className="content-card"
                            >
                                {/* <img src={Burger} alt="discordBotGif"/> */}
                                <p>
                                    My goal with this passion project was to annoy my friends to the maximum.
                                    Check out the Github repository for the features I developed.
                                </p>
                                <motion.a
                                    initial={{color: "#199C8E"}}
                                    whileHover={{scale: 1.25, color: "#02F1BD"}}
                                    transition={{duration: 0.25, ease: "easeInOut"}}
                                    href="https://github.com/AlanCortez1337/Discord-Bot-Python"
                                >
                                    <IoLogoGithub size={"3em"}/>
                                </motion.a>
                            </motion.div>    
                        }
                    </AnimatePresence>
                </motion.div>
            }
            {type === 2 && 
                <div className="project-card">
                    <h3>Memory Game</h3>
                    <IoGameController size={"4em"}/>
                </div>
            }  
            {type === 3 && 
                <div className="project-card">
                    <h3>Food Tinder</h3>
                    <IoPhonePortraitOutline size={"4em"}/>
                </div>
            }  
        </>
    );
}

export default ProjCard;