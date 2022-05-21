import { motion } from 'framer-motion'
import '../../App.css'

function Shapes({shape}) {

    const waveBounce = {
        y: {
            duration: 0.8, 
            yoyo: Infinity, 
            ease: "easeInOut",
        }
    }

    return(

            <>
                {shape === 1 && 
                    <motion.svg
                        transition={waveBounce}
                        animate={{y: ['50px', '75px']}}
                        className="wave-1-svg" viewBox="0 0 1512 865" fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                        <path className="wave-1" d="M1512 200C1512 200 745.5 254.5 738 61C730.5 -132.5 0 200 0 200V865H1512V200Z" fill="#248889"/>
                    </motion.svg>
                }
                {shape === 2 && 
                    <motion.svg
                        transition={waveBounce}
                        animate={{y: ['75px', '50px']}}
                        className="wave-2-svg" viewBox="0 0 1512 500" fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                        <path className="wave-2" d="M0 173C0 173 887.5 295 1032.5 77.5001C1177.5 -140 1512 173 1512 173V500H0V173Z" fill="#3B617D"/>
                    </motion.svg>                    
                }
                {/* Fix width/height */}
                {shape === 3 && 
                    <motion.svg
                        transition={waveBounce}
                        animate={{y: ['50px', '25px']}}
                        className="wave-3-svg" viewBox="0 0 1512 843" fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M1.19209e-05 216C1.19209e-05 216 -97.5001 -150.5 631 73.5001C1359.5 297.5 1512 216 1512 216V842.999H1.19209e-05V216Z" fill="#464D77"/>
                    </motion.svg>
                }
                {/* FIX ANIMATION DISTANCES FOR Y BELOW */}
                {shape === 4 && 
                    <motion.svg
                        transition={waveBounce}
                        animate={{y: ['50px', '75px']}}
                        className="wave-4-svg" viewBox="0 0 1512 783" fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M1.90381e-05 145C1.90381e-05 145 -14.4999 -93.0001 750 41.9999C1514.5 177 1512 145 1512 145V783H1.90381e-05V145Z" fill="#3B617D"/>
                    </motion.svg>
                    
                }
                {shape === 5 && 
                    <motion.svg 
                        transition={waveBounce}
                        animate={{y: ['50px', '75px']}}
                        className="wave-5-svg" viewBox="0 0 1512 719" fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 71.2992C0 71.2992 268 115.767 556.5 89.7151C845 63.6634 978 35.3657 1192 5.72061C1406 -23.9245 1512 71.2992 1512 71.2992V719H0V71.2992Z" fill="#248889"/>
                    </motion.svg>
                }
                {shape === 6 && 
                    <motion.svg 
                        transition={waveBounce}
                        animate={{y: ['50px', '75px']}}
                        className="wave-6-svg" viewBox="0 0 1512 207" fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M2.78652e-05 57C2.78652e-05 57 -18.5 -32.5 233 13C484.5 58.5 1512 57 1512 57V207H2.78652e-05V57Z" fill="#02C39A"/>
                    </motion.svg>
                }
            </>
    );
}
export default Shapes;