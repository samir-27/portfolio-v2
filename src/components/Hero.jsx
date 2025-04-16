import React from 'react'
import '../App.css'
import hero from "../assets/hero.svg"
import { RiScrollToBottomLine } from "react-icons/ri";
import { motion } from 'framer-motion'
import { animate } from 'framer-motion';

const textVariants = {
    initial: {
        x: 500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }

}

const Hero = () => {
    return (
        <div className='section hero relative overflow-hidden'>
            <div className="flex container mx-auto gap-10">
                <div className='h-screen w-1/2'>
                    <img src={hero} alt="" className='h-full' />
                </div>

                <motion.div variants={textVariants} className='h-screen w-1/2 flex flex-col justify-center gap-10 relative' initial="initial" animate="animate">
                    <motion.h2 variants={textVariants} className='text-4xl font-semibold text-purple-500 tracking-widest'>Samir Sumara</motion.h2>
                    <motion.h1 variants={textVariants} className='text-7xl font-bold text-white'>Web Developer </motion.h1>
                    <motion.div variants={textVariants} className='flex gap-4'>
                        <motion.button variants={textVariants} className='p-4 border-1 border-white rounded bg-white cursor-pointer'>See The Latest Works</motion.button>
                        <motion.button variants={textVariants} className='p-4 border-1 border-white rounded text-white cursor-pointer'>Contact me</motion.button>
                    </motion.div>
                    <motion.div animate={textVariants.scrollButton} >
                        <RiScrollToBottomLine className='text-white text-4xl mt-4' />
                    </motion.div>

                </motion.div >
            </div>

        </div>
    )
}

export default Hero

