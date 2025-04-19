import React, { useState } from "react";
import { hover, motion } from "framer-motion";

// Toggle button component
const ToggleButton = ({ setOpen }) => {
    return (
        <button
            onClick={() => setOpen((prev) => !prev) && !setOpen}
            className="fixed top-5 left-5 z-50 w-10 h-10 bg-white text-black rounded-full cursor-pointer flex items-center justify-center"
        >
            {setOpen ? "☰" : "✕"}
        </button>
    );
};

// Main sidebar component
const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const variants = {
        open: {
            clipPath: `circle(1200px at 40px 40px)`,
            transition: {
                type: "spring",
                stiffness: 25,
            },
        },
        closed: {
            clipPath: `circle(30px at 40px 40px)`,
            transition: {
                delay: 0.2,
                type: "spring",
                stiffness: 300,
                damping: 30,
            },
        },
    };

    const itemsVarients = {
        open: {
            opacity: 1,
            y:0
        },
        closed: {
            y: 50,
            opacity: 0,

        },
    };

    const linkVareiants = {
        open: {
            transition: {
                staggerChildren: 0.2,
            },
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        }
    }

    return (
        <div>
            <motion.div
                className="fixed top-0 left-0 h-full w-92 bg-white z-50"
                initial="closed"
                animate={open ? "open" : "closed"}
                variants={variants}
            >
                <motion.div variants={linkVareiants} className="h-full flex flex-col items-center justify-center space-y-6 text-5xl gap-8 text-black z-50">
                    <motion.a variants={itemsVarients} whileHover={{scale:1.2}} whileTap={{scale:0.90}}  href="#home" className="mx-4">Home</motion.a>
                    <motion.a variants={itemsVarients} whileHover={{scale:1.2}} whileTap={{scale:0.90}}  href="#services" className="">Services</motion.a>
                    <motion.a variants={itemsVarients} whileHover={{scale:1.2}} whileTap={{scale:0.90}}  href="#projects" className="">Projects</motion.a>
                    <motion.a variants={itemsVarients} whileHover={{scale:1.2}} whileTap={{scale:0.90}}  href="#skills" className="">Skills</motion.a>
                    <motion.a variants={itemsVarients} whileHover={{scale:1.2}} whileTap={{scale:0.90}}  href="#contact" className="">Contact</motion.a>
                </motion.div>
            </motion.div>

            <ToggleButton setOpen={setOpen} />
        </div>
    );
};

export default Sidebar;
