import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import mountain from '../assets/mountains.png';
import planets from '../assets/planets.png';
import stars from '../assets/stars.png';

const Parallax = ({ type }) => {
  const ref = useRef();

  // Scroll progress for the section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'], // start when section hits top, end when it's scrolled past
  });

  // Individual animations
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const yMountains = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);
  const yPlanets = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);
  const xStars = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);



  return (
    <div
      ref={ref}
      className="section parallax relative overflow-hidden h-screen w-full"

    >
      {/* Title */}
      <div className=''>

        <motion.h1
          className="text-white sm:text-9xl text-8xl text-center xl:pt-50 pt-96"
          style={{ y: yText }}
        >
          {type}
        </motion.h1>
      </div>

       <motion.div
        style={{ x: xStars }}
        className="stars absolute top-0 left-0 w-full will-change-transform"
      >
        <img src={stars} alt="stars" className="w-full  lg:h-full h-screen object-cover" />
      </motion.div>

 
      <motion.div

        className="planets absolute bottom-0 left-0 w-full will-change-transform"
      >
        <img style={{ Y: yPlanets }} src={planets} alt="planets" className="w-full object-cover" />
      </motion.div>

      <motion.div
        className="mountains absolute bottom-0 left-0 w-full will-change-transform"
      >
        <img src={mountain} alt="mountain" className="w-full object-cover" />
      </motion.div>
    </div>
  );
};

export default Parallax;
