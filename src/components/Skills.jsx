import React, { useRef, useState } from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { SiExpress, SiTailwindcss } from "react-icons/si"
import { DiMongodb } from "react-icons/di"
import { motion } from 'framer-motion'

// Single skill card component
const SkillCard = ({ icon: Icon, label }) => {
    const cardRef = useRef(null);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const midX = rect.width / 2;
        const midY = rect.height / 2;
        const rotateX = ((y - midY) / midY) * -20;
        const rotateY = ((x - midX) / midX) * 20;
        setRotate({ x: rotateX, y: rotateY });
    };

    const resetRotation = () => {
        setRotate({ x: 0, y: 0 });
    };

    return (
        <div className='w-52 h-52' style={{ perspective: '1000px' }}>
            <motion.div
                ref={cardRef}
                className='w-full h-full border text-purple-400 border-purple/20 bg-white/10 rounded-xl flex flex-col items-center justify-center'
                style={{ transformStyle: 'preserve-3d' }}
                initial={{
                    rotateX: 0,
                    rotateY: 0,
                    opacity: 0,
                    scale: 0.5,
                }}
                whileInView={{
                    opacity: 1,
                    scale: 1,
                }}
                animate={{
                    rotateX: rotate.x,
                    rotateY: rotate.y,
                }}
                whileHover={{
                    scale: 1.1,
                    backgroundColor: "#8b5cf6",
                    color: "#fff",
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                }}
                viewport={{ once: true, amount: 0.3 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={resetRotation}
            >
                <Icon className='text-8xl' />
                <motion.h1 className="text-xl mt-2">{label}</motion.h1>
            </motion.div>
        </div>
    );
};

// Main skills section
const Skills = () => {
    const skills = [
        { icon: FaHtml5, label: "HTML" },
        { icon: FaCss3Alt, label: "CSS" },
        { icon: IoLogoJavascript, label: "JavaScript" },
        { icon: FaReact, label: "React" },
        { icon: FaNodeJs, label: "Node.js" },
        { icon: SiExpress, label: "Express.js" },
        { icon: DiMongodb, label: "MongoDB" },
        { icon: SiTailwindcss, label: "Tailwind" },
        { icon: FaJava, label: "Java" },
    ];

    return (
        <div className='section flex py-10 skills'>
            <div className='grid grid-cols-2 container mx-auto md:grid-cols-3 lg:grid-cols-4 gap-15 place-items-center'>
                {skills.map((skill, index) => (
                    <SkillCard key={index} icon={skill.icon} label={skill.label} />
                ))}
            </div>
        </div>
    );
};

export default Skills;
