import { IoGameController, IoLogoGithub } from "react-icons/io5";
import { SiTinder, SiDiscord } from "react-icons/si";
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import DiscordBotDemo from "/assests/discordBotDemo.gif"
import MemoryGameDemo from "/assests/memoryGameDemo.gif"
import FoodTinderDemo from "/assests/foodTinderDemo.gif"


function ProjCard({type}) {
    const [isVisible, setIsVisible] = useState(true);

    const projects = [
        // Discord Bot Info
        {
            title: " Bot",
            blurp: "My goal with this passion project was to annoy my friends to the maximum. My GitHub repository shows all the different features I have implemented.",
            link: "https://github.com/AlanCortez1337/Discord-Bot-Python",
            imgAltName: "discord bot demo project",
            yBoundry: "-20px",
            rotate: "3deg"
        },
        // Memory Game Info
        {
            title: "Memory ",
            blurp: "This is my first finished React project which is a memory card game with funny animals. Additional information about this project is found in my GitHub repository.",
            link: "https://github.com/AlanCortez1337/Memory-Mania",
            imgAltName: "memory game demo project",
            yBoundry: "40px",
            rotate: "-2deg"
        },
        // Food Tinder Info
        {
            title: "Food ",
            blurp: "In collaboration with my ACM club, we developed a Tinder clone for food. My contributions were the \"create post\" page, nav bar, and assisting in the login screen of Food Tinder.",
            link: "https://github.com/acmCSUFDev/Food-Tinder",
            imgAltName: "food tinder demo project",
            yBoundry: "20px",
            rotate: "2deg"
        }
    ]
    
    const yTransition = {
        y: {
            repeat: Infinity, 
            repeatType: "mirror", 
            duration: 2, 
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
                whileHover={{ y: "0px", rotate: 0}}
                transition={yTransition}
                onClick={changeVisibility}
                className={`project-card  bg-${type}`}
            >
                {/* Background Gifs */}
                {type === 0 && 
                    <img 
                        src={DiscordBotDemo} 
                        alt={projects[type].imgAltName} 
                        loading="lazy" 
                        className="bg-Image"
                    />
                }
                {type === 1 && 
                    <img 
                        src={MemoryGameDemo} 
                        alt={projects[type].imgAltName} 
                        loading="lazy" 
                        className="bg-Image"
                    />
                }
                {type === 2 && 
                    <img 
                        src={FoodTinderDemo} 
                        alt={projects[type].imgAltName} 
                        loading="lazy" 
                        className="bg-Image"
                    />
                }
                <AnimatePresence>
                    {isVisible ? 
                        <motion.h3
                            key={`title${type}`}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.75, ease: "easeInOut"}}
                            className="title-card"
                        >
                                {type === 0 && <SiDiscord size={"1.25em"}/>}
                                {projects[type].title}
                                {type === 1 && <IoGameController size={"1.5em"}/>}
                                {type === 2 && <SiTinder size={"1.25em"}/>}
                                
                            
                        </motion.h3> 
                        : 
                        <motion.div
                            key={`content${type}`}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.75, ease: "easeInOut"}}
                            className="hover-effect"
                        >
                            {/* Blurp */}
                            <p> {projects[type].blurp} </p>
                            {/* Github Icon */}
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