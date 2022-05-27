import { IoLogoDiscord, IoGameController, IoPhonePortraitOutline, IoLogoGithub } from "react-icons/io5";
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function ProjCard({type}) {
    const [isVisible, setIsVisible] = useState(true);

    const projects = [
        // Discord Bot Info
        {
            title: "Discord Bot",
            blurp: "My goal with this passion project was to annoy my friends to the maximum. Check out the Github repository for the features I developed.",
            link: "https://github.com/AlanCortez1337/Discord-Bot-Python",
            yBoundry: "-5vh"
        },
        // Memory Game Info
        {
            title: "Memory Game",
            blurp: "This is my first finished React project which I added onto from a tutorial. You can find a link to the game in my repository and the additional features I made",
            link: "https://github.com/AlanCortez1337/Memory-Mania",
            yBoundry: "5vh"
        },
        // Food Tinder Info
        {
            title: "Food Tinder",
            blurp: "I alongside a few others in my ACM club decided to work on this fun side project. I spearheaded the front-end aspect using Svelte.",
            link: "https://github.com/acmCSUFDev/Food-Tinder",
            yBoundry: "-5vh"
        }
    ]
    
    const yTransition = {
        repeat: Infinity, 
        repeatType: "mirror", 
        duration: 1, 
        ease: "easeInOut"
    };

    const changeVisibility = () => {
        setIsVisible(!isVisible)
        console.log(isVisible)
    }


    return(
        <>
            <motion.div 
            animate={{y: projects[type].yBoundry}}
            whileHover={{transition: {type: "spring", duration: 1}, y: "0vh"}}
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
                            <h3>{projects[type].title}</h3>
                            {type === 0 && <IoLogoDiscord size={"4em"}/>}
                            {type === 1 && <IoGameController size={"4em"}/>}
                            {type === 2 && <IoPhonePortraitOutline size={"4em"}/>}
                        </motion.div> 
                        : 
                        <motion.div
                            key={`content${type}`}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.75, ease: "easeInOut"}}
                            // might need to change the className in the future
                            className={`content-card bg-${type}`}
                        >
                            <p> {projects[type].blurp} </p>
                            <motion.a
                                initial={{color: "#464D77"}}
                                whileHover={{scale: 1.25, color: "#626daa"}}
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