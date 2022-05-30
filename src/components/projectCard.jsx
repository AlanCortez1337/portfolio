import { IoGameController, IoLogoGithub } from "react-icons/io5";
import { SiTinder, SiDiscord } from "react-icons/si";
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function ProjCard({type}) {
    const [isVisible, setIsVisible] = useState(true);

    const projects = [
        // Discord Bot Info
        {
            title: " Bot",
            blurp: "My goal with this passion project was to annoy my friends to the maximum. Hover to check out a demo of the working bot.",
            link: "https://github.com/AlanCortez1337/Discord-Bot-Python",
            yBoundry: "-2vh",
            rotate: "3deg"
        },
        // Memory Game Info
        {
            title: "Memory ",
            blurp: "This is my first finished React project which is a simple memory game with funny looking animals, hover for more.",
            link: "https://github.com/AlanCortez1337/Memory-Mania",
            yBoundry: "2vh",
            rotate: "-2deg"
        },
        // Food Tinder Info
        {
            title: "Food ",
            blurp: "In collaboration with my ACM club, I developed the create post page, the nav bar, and assisted in the login screen.",
            link: "https://github.com/acmCSUFDev/Food-Tinder",
            yBoundry: "-2vh",
            rotate: "2deg"
        }
    ]
    
    const yTransition = {
        y: {
            repeat: Infinity, 
            repeatType: "mirror", 
            duration: 1, 
            ease: "easeInOut"
        }
    };

    const changeVisibility = () => {
        setIsVisible(!isVisible)
        console.log(isVisible)
    }


    return(
        <>
            <motion.div
            style={{rotate: projects[type].rotate}} 
            animate={{y: projects[type].yBoundry}}
            whileHover={{ y: "0vh", rotate: 0}}
            transition={yTransition}
            onHoverEnd={changeVisibility}
                className="project-card"
            >
                <AnimatePresence>
                    {isVisible ? 
                        <motion.div
                            key={`title${type}`}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.75, ease: "easeInOut"}}
                            onHoverStart={changeVisibility} 
                            className="title-card"
                        >
                            <h3>
                                {type === 0 && <SiDiscord size={"1.25em"}/>}
                                {projects[type].title}
                                {type === 1 && <IoGameController size={"1.5em"}/>}
                                {type === 2 && <SiTinder size={"1.25em"}/>}
                            </h3>
                            
                            <p> {projects[type].blurp} </p>
                        </motion.div> 
                        : 
                        <motion.div
                            key={`content${type}`}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.75, ease: "easeInOut"}}
                            className={`hover-effect bg-${type}`}
                        >
                            <motion.a
                                initial={{color: "#f8f8f8"}}
                                whileHover={{scale: 1.25, color: "#02F1BD"}}
                                transition={{duration: 0.25, ease: "easeInOut"}}
                                href={projects[type].link}
                            >
                                <IoLogoGithub size={"3em"}/>
                            </motion.a>
                        </motion.div>    
                    }
                </AnimatePresence>
            </motion.div>
        </>
    );
}

export default ProjCard;