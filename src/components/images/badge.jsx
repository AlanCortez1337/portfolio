import MeBadge from "/assests/meBadge.png"
import DndBadge from "/assests/dnd.png"
import LuaBadge from "/assests/lua.png"
import BreadBadge from "/assests/bread.png"
import { motion } from "framer-motion"

function BadgeImage({badgeName}) {

    const badgeBounce = {
        y: {
            yoyo: Infinity, duration: 1, ease: "linear"
        },
        rotate: {
            repeat: Infinity, duration: 10, ease: "linear"
        }
    }

    return(
        <>
            {badgeName === "me" && 
                <motion.img
                    // initial={{ rotate: -45 }}
                    animate={{ rotate: 405, y: ['-75px', '-125px'] }}
                    transition={badgeBounce}
                    whileHover={{transition: {type: "spring", velocity: 4}, rotate: -315, y: ['0px', '0px']}}
                    src={MeBadge} alt="me" className="badge badge1" width={250} height={250} 
                />
            }
            {badgeName === "lua" && 
                <motion.img 
                    whileHover={{transition: {type: "spring", velocity: 4}, rotate: -360}}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    src={LuaBadge} alt="me" className="badge" width={175} height={175} 
                />
            }
            {badgeName === "bread" && 
                <motion.img 
                    whileHover={{transition: {type: "spring", velocity: 4}, rotate: -360}}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    src={BreadBadge} alt="me" className="badge" width={225} height={225} 
                />
            }
            {badgeName === "dnd" && 
                <motion.img 
                    whileHover={{transition: {type: "spring", velocity: 4}, rotate: -315}}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    src={DndBadge} alt="me" className="badge" width={150} height={150} 
                />
            }            
        </>
    );
}

export default BadgeImage;