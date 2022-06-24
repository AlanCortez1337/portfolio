import MeBadge from "/assests/meBadge.webp"
import DndBadge from "/assests/dnd.webp"
import LuaBadge from "/assests/lua.webp"
import BreadBadge from "/assests/bread.webp"
import { motion } from "framer-motion"
import { IoDocumentText, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

function BadgeImage({badgeName}) { 

    const badgeBounce = {
        y: {
            repeat: Infinity, 
            repeatType: "mirror",
            duration: 1.5, 
            ease: "easeInOut"
        },
        rotate: {
            repeat: Infinity, 
            duration: 12,
            ease: "linear"
        },
        borderRadius: {
            repeat: Infinity, 
            repeatType: "mirror",
            duration: 2, 
            ease: "easeInOut"
        }
    }

    return(
        <>
            {badgeName === "me" && 
                <motion.img
                    style={{borderRadius: '80px'}} 
                    animate={{rotate: 360, y: '-30px', borderRadius: '20px'}}
                    whileHover={{scale: 0.8}}
                    whileTap={{scale: 1.1}}
                    transition={badgeBounce}
                    src={MeBadge} alt="mebadge" loading="lazy" className="badge badge1" width={225} height={225} 
                />
            }
            {badgeName === "lua" && 
                <motion.img
                    style={{borderRadius: '20px'}} 
                    animate={{ rotate: -360, y: '-20px', borderRadius: '80px' }}
                    whileHover={{scale: 1.2}}
                    whileTap={{scale: 0.8}}
                    transition={badgeBounce}
                    src={LuaBadge} alt="luabadge" loading="lazy" className="badge" width={175} height={175} 
                />
            }
            {badgeName === "bread" && 
                <motion.img
                    style={{borderRadius: '30px'}} 
                    animate={{ rotate: -360, y: '50px', borderRadius: '30px' }}
                    whileHover={{scale: 0.8}}
                    whileTap={{scale: 1.1}}
                    transition={badgeBounce}
                    src={BreadBadge} alt="breadBadge" loading="lazy" className="badge" width={225} height={225} 
                />
            }
            {badgeName === "dnd" && 
                <motion.img 
                    style={{borderRadius: '60px'}} 
                    animate={{rotate: 360, y: '60px', borderRadius: '30px'}}
                    whileHover={{scale: 1.2}}
                    whileTap={{scale: 0.8}}
                    transition={badgeBounce}
                    src={DndBadge} alt="dndBadge" loading="lazy" className="badge" width={150} height={150} 
                />
            }
            {badgeName === "linkedin" && 
                <motion.a
                    href="https://www.linkedin.com/in/alancortez1337/"
                    style={{borderRadius: '10px'}}
                    animate={{rotate: -360, y: '-20px', borderRadius: '60px'}}
                    whileHover={{scale: 0.8}}
                    whileTap={{scale: 1.1}}
                    transition={badgeBounce}
                    aria-label="LinkedIn"
                    className="linkedIn-badge bright-green-bubble"
                    >
                    <IoLogoLinkedin 
                        size={"3em"} 
                        color={"#464D77"}
                    />
                </motion.a>
            } 
            {badgeName === "github" && 
                <motion.a
                    href="https://github.com/AlanCortez1337"
                    style={{borderRadius: '60px'}}
                    animate={{rotate: -360, y: '60px', borderRadius: '20px'}}
                    whileHover={{scale: 0.8}}
                    whileTap={{scale: 1.1}}
                    transition={badgeBounce}
                    aria-label="GitHub Profile"
                    className="github-badge bright-green-bubble"
                >
                    <IoLogoGithub 
                        size={"3em"}
                        color={"#3B617D"}
                    />
                </motion.a>
                
            } 
            {badgeName === "resume" && 
                <motion.a
                    href="https://docs.google.com/document/d/1WgFxvm5z1IBIdMeri4NDSyZzI855fQZRAZP5GZUopmc/edit?usp=sharing"
                    initial={{borderRadius: '50px'}}
                    animate={{rotate: 360, y: '-40px', borderRadius: '20px'}}
                    whileHover={{scale: 1.3}}
                    whileTap={{scale: 0.8}}
                    transition={badgeBounce}
                    aria-label="Resume"
                    className="resume-badge bright-green-bubble"
                >
                    <IoDocumentText 
                        size={"3em"}
                        color={"#3B617D"}
                    />
                </motion.a>
            }            
        </>
    );
}

export default BadgeImage;