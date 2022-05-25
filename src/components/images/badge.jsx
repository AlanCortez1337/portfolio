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
            repeat: Infinity, 
            repeatType: "mirror",
            duration: 1, 
            ease: "easeInOut"
        },
        rotate: {
            repeat: Infinity, 
            duration: 6, 
            ease: "linear"
        }
    }

    return(
        <>
            {badgeName === "me" && 
                <motion.img
                    animate={badgeRotation.badge1}
                    transition={badgeBounce}
                    // since we want to see my face vertical I need to rotate 45 deg from the original point
                    // essentially turns the square into a diamond
                    whileHover={{transition: {type: "spring", velocity: 6}, rotate: -315, y: '-10vh'}}
                    // now that we set the new origin to -315, we still want to make a full loop around
                    // to do so we just need to make sure the badge is combating the -315 by adding 45 to 360
                    // in order to make it seem as if it is going full circle
                    // onHoverStart={() => {badgeRotation.badge1.rotate = 406}}
                    onHoverStart={(e) => {
                        const startPoint = e.target.style.transform.search("rotate") + 7;
                        const endPoint = e.target.style.transform.search("deg");

                        
                        let newStartDegree = parseFloat(e.target.style.transform.substring(startPoint, endPoint));
                        console.log(e.target.style);
                        
                        let rotateDegrees;
                        // TODO
                            // fix the comments above
                            // do the math calculation so that it does a full loop no matter what
                            // victory lap
                        // let newLoopAngle = newStartDegree
                        // console.log(360 + newStartDegree);
                        if(newStartDegree > 0) {
                            console.log("positive", newStartDegree);
                            // 360 = newStartDegree + rotation => 360 - newStartDegree = rotation
                            // rotation + 360 => rotate
                            rotateDegrees = newStartDegree;
                            console.log(rotateDegrees+405);
                            badgeRotation.badge1.rotate = rotateDegrees;
                        } else {
                            console.log("negative", newStartDegree);
                            
                            rotateDegrees = 360 - (newStartDegree);
                            // rotateDegrees = rotateDegrees + 360;
                            console.log(rotateDegrees, "result: ", rotateDegrees);
                            badgeRotation.badge1.rotate = rotateDegrees;
                            console.log(badgeRotation.badge1.rotate);
                        }

                        // badgeRotation.badge1.rotate = (360 + newStartDegree);
                    }}
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