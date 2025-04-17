import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import mountain from '../assets/mountains.png';
import planets from '../assets/planets.png';
import stars from '../assets/stars.png';

const Parallax = ({ type }) => {
  const [bgType, setBgType] = useState('');
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

  useEffect(() => {
    if (type === 'service') {
      setBgType('linear-gradient(180deg, #111132, #0c0c1d)');
    }
    // Add other types here if needed
  }, [type]);

  return (
    <div
      ref={ref}
      className="section parallax relative overflow-hidden h-screen w-full"
      style={{ background: bgType }}
    >
      {/* Title */}
      <div className='z-0'>

      <motion.h1
        className="text-white text-9xl text-center pt-50  relative"
        style={{ y: yText }}
        >
        {type}
      </motion.h1>
        </div>

      {/* Stars - back layer */}
      <motion.div
        style={{ x: xStars }}
        className="stars absolute top-0 left-0 w-full z-10 will-change-transform"
      >
        <img src={stars} alt="stars" className="w-full object-cover" />
      </motion.div>

      {/* Planets - mid layer */}
      <motion.div
      
        className="planets absolute bottom-0 left-0 w-full z-20 will-change-transform"
      >
        <img style={{Y:yPlanets}} src={planets} alt="planets" className="w-full object-cover" />
      </motion.div>

      {/* Mountains - front layer */}
      <motion.div
        className="mountains absolute bottom-0 left-0 w-full z-30 will-change-transform"
      >
        <img src={mountain} alt="mountain" className="w-full object-cover" />
      </motion.div>
    </div>
  );
};

export default Parallax;
