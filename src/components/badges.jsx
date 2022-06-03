import MeBadge from "/assests/meBadge.png"
import DndBadge from "/assests/dnd.png"
import LuaBadge from "/assests/lua.png"
import BreadBadge from "/assests/bread.png"
import { motion } from "framer-motion"
import { IoDocumentText, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

function BadgeImage({badgeName}) { 

    const badgeBounce = {
        y: {
            repeat: Infinity, 
            repeatType: "mirror",
            duration: 1, 
            ease: "easeInOut"
        },
        rotate: {
            repeat: Infinity, 
            duration: 8,
            ease: "linear"
        },
        borderRadius: {
            repeat: Infinity, 
            repeatType: "mirror",
            duration: 1, 
            ease: "easeInOut"
        }
    }

    return(
        <>
            {badgeName === "me" && 
                <motion.img
                    style={{borderRadius: '80px'}} 
                    animate={{rotate: 360, y: '-8vh', borderRadius: '20px'}}
                    whileHover={{scale: 0.9}}
                    transition={badgeBounce}
                    src={MeBadge} alt="me" className="badge badge1" width={225} height={225} 
                />
            }
            {badgeName === "lua" && 
                <motion.img
                    style={{borderRadius: '20px'}} 
                    animate={{ rotate: -360, y: '-3vh', borderRadius: '80px' }}
                    whileHover={{scale: 1.1}}
                    transition={badgeBounce}
                    src={LuaBadge} alt="me" className="badge" width={175} height={175} 
                />
            }
            {badgeName === "bread" && 
                <motion.img
                    style={{borderRadius: '30px'}} 
                    animate={{ rotate: -360, y: '3vh', borderRadius: '90px' }}
                    whileHover={{scale: 0.9}}
                    transition={badgeBounce}
                    src={BreadBadge} alt="me" className="badge" width={225} height={225} 
                />
            }
            {badgeName === "dnd" && 
                <motion.img 
                    style={{borderRadius: '60px'}} 
                    animate={{rotate: 360, y: '3vh', borderRadius: '30px'}}
                    whileHover={{scale: 1.3}}
                    transition={badgeBounce}
                    src={DndBadge} alt="me" className="badge" width={150} height={150} 
                />
            }
            {badgeName === "linkedin" && 
                <motion.a
                    href=""
                    style={{borderRadius: '10px'}}
                    animate={{rotate: -360, y: '-4vh', borderRadius: '60px'}}
                    whileHover={{scale: 0.9}}
                    transition={badgeBounce}
                    className="linkedIn-badge"
                    >
                    <IoLogoLinkedin 
                        size={"8em"} 
                        color={"#464D77"}
                    />
                </motion.a>
            } 
            {badgeName === "github" && 
                <motion.a
                    href=""
                    style={{borderRadius: '100px'}}
                    animate={{rotate: -360, y: '6vh', borderRadius: '40px'}}
                    whileHover={{scale: 0.9}}
                    transition={badgeBounce}
                    className="github-badge"
                >
                    <IoLogoGithub 
                        size={"12em"}
                        color={"#3B617D"}
                    />
                </motion.a>
                
            } 
            {badgeName === "resume" && 
                <motion.a
                    href=""
                    initial={{borderRadius: '50px'}}
                    animate={{rotate: 360, y: '-8vh', borderRadius: '20px'}}
                    whileHover={{scale: 1.3}}
                    transition={badgeBounce}
                    className="resume-badge"
                >
                    <IoDocumentText 
                        size={"5em"}
                        color={"#3B617D"}
                    />
                </motion.a>
            }            
        </>
    );
}

export default BadgeImage;