import { IoLogoDiscord, IoGameController, IoPhonePortraitOutline } from "react-icons/io5";
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
                    onHoverStart={onClick} 
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
                                <img src={Burger} alt="" width={300} height={350}/>
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