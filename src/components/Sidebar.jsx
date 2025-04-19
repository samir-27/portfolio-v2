import React, { useState } from "react";
import { motion } from "framer-motion";

const ToggleButton = ({ open, setOpen }) => {
    return (
        <button
            onClick={() => setOpen((prev) => !prev)}
            className="fixed top-5 left-5 z-50 w-20 h-20 bg-white text-black rounded-full cursor-pointer flex items-center justify-center text-2xl"
        >
            {open ? "✕" : "☰"}
        </button>
    );
};

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
            clipPath: `circle(30px at 60px 60px)`,
            transition: {
                delay: 0.2,
                type: "spring",
                stiffness: 300,
                damping: 30,
            },
        },
    };

    const itemsVariants = {
        open: {
            opacity: 1,
            y: 0,
        },
        closed: {
            opacity: 0,
            y: 50,
        },
    };

    const linkVariants = {
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
        },
    };

    const handleLinkClick = () => setOpen(false);

    return (
        <div>
            <motion.div
                className="fixed top-0 left-0 h-full w-92 bg-white z-40"
                initial="closed"
                animate={open ? "open" : "closed"}
                variants={variants}
            >
                <motion.div
                    variants={linkVariants}
                    className="h-full flex flex-col items-center justify-center text-5xl gap-8 text-black"
                >
                    {["Home", "Services", "Projects", "Skills", "Contact"].map((text, index) => (
                        <motion.a
                            key={index}
                            href={`#${text.toLowerCase()}`}
                            variants={itemsVariants}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleLinkClick}
                            className="cursor-pointer"
                        >
                            {text}
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>

            <ToggleButton open={open} setOpen={setOpen} />
        </div>
    );
};

export default Sidebar;
