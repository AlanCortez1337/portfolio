import MeBadge from "/assests/meBadge.png"
import DndBadge from "/assests/dnd.png"
import LuaBadge from "/assests/lua.png"
import BreadBadge from "/assests/bread.png"
import { motion } from "framer-motion"

function BadgeImage({badgeName}) {
    const badgeRotation = {
        badge1: {
            rotate: 360, 
            y: '-8vh'
        },
        badge2: {
            rotate: 360, 
            y: '3vh'
        },
    }
    

    const badgeBounce = {
        y: {
            yoyo: Infinity, 
            duration: 1, 
            ease: "easeInOut"
        },
        rotate: {
            repeat: Infinity, 
            duration: 10, 
            ease: "linear"
        }
    }

    return(
        <>
            {badgeName === "me" && 
                <motion.img
                    animate={badgeRotation.badge1}
                    transition={badgeBounce}
                    whileHover={{transition: {type: "spring", velocity: 6}, rotate: -315, y: '-10vh'}}
                    onHoverStart={() => {badgeRotation.badge1.rotate = 406}}
                    src={MeBadge} alt="me" className="badge badge1" width={225} height={225} 
                />
            }
            {badgeName === "lua" && 
                <motion.img 
                    animate={{ rotate: -360, y: '-3vh' }}
                    transition={badgeBounce}
                    whileHover={{transition: {type: "spring", velocity: 4}, rotate: 360, y: '-6vh'}}
                    src={LuaBadge} alt="me" className="badge" width={175} height={175} 
                />
            }
            {badgeName === "bread" && 
                <motion.img 
                    animate={{ rotate: -360, y: '3vh' }}
                    transition={badgeBounce}
                    whileHover={{transition: {type: "spring", velocity: 1}, rotate: 360, y: '0vh'}}
                    src={BreadBadge} alt="me" className="badge" width={225} height={225} 
                />
            }
            {badgeName === "dnd" && 
                <motion.img 
                    animate={badgeRotation.badge2}
                    transition={badgeBounce}
                    whileHover={{transition: {type: "spring", velocity: 4}, rotate: -315, y: '1vh'}}
                    onHoverStart={() => {badgeRotation.badge2.rotate = 406}}
                    src={DndBadge} alt="me" className="badge" width={150} height={150} 
                />
            }            
        </>
    );
}

export default BadgeImage;