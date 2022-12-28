import { motion } from "framer-motion";

export default function Modal({isOpen}) {

    const modalVariant = {
        hidden: {
            y: "-100vh",
            opacity: 0
        },
        visible: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 15,
                type: "spring",
                damping: 300,
                stiffness: 550
            }
        },
        exit: {
            y: "-100vh",
            opacity: 0
        }
    }


    return (
        <motion.div
            className="backdrop"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
        >
            <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className="modal"
                    variants={modalVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <h1>Hey guys...</h1>
                    <div>
                        <p>This is an old portfolio that does not demonstrate how cool I am.</p>
                        <p>If you dont mind please head on over to <a href="alancortez.dev">alancortez.dev</a>, unless...</p>
                    </div>
                    <button onClick={isOpen}>you just wanna look around then click here</button>
                </motion.div>
        </motion.div>
    );
}