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
            <div className="lg:flex container mx-auto gap-10">
                <div className='lg:h-screen lg:w-1/2 w-full lg:pb-0 pb-4 flex justify-center items-center'>
                    <img src={hero} alt="" className='lg:h-full h-[32rem] ' />
                </div>

                <motion.div variants={textVariants} className='lg:h-screen lg:w-1/2 w-full flex flex-col justify-center lg:items-start items-center gap-10 relative' initial="initial" animate="animate">
                    <motion.h2 variants={textVariants} className='md:text-4xl text-3xl font-semibold text-purple-500 tracking-widest'>Samir Sumara</motion.h2>
                    <motion.h1 variants={textVariants} className='md:text-7xl text-5xl font-bold text-white'>Web Developer </motion.h1>
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

