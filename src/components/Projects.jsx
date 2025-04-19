import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import job from '../assets/home.png';
import colors from '../assets/color.png';
import stepzone from '../assets/stepzone.png';
import movies from '../assets/movies.png';
import weather from '../assets/weater1.png'

import { FaReact, FaNodeJs } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { SiExpress, SiTailwindcss, SiNestjs } from "react-icons/si"
import { DiMongodb } from "react-icons/di"
import { s, source } from 'framer-motion/client';

const projects = [
  {
    id: 1,
    title: 'Job Portal App',
    description:
      'GetPlaced is a job portal built with React, Tailwind, and NestJS, designed to connect job seekers and companies. Users can browse and apply for jobs, while companies can post, update, and manage job listings. Admins have full control. The platform ensures a seamless experience for all users with an intuitive, responsive interface.',
    image: job,
    technology: [FaReact, FaNodeJs, DiMongodb, SiNestjs, SiTailwindcss],
    source: 'https://github.com/samir-27/jobapp-frontend'

  },
  {
    id: 2,
    title: 'StepZone',
    description:
      'StepZone is a modern shoe store built with React, Tailwind, and Express, offering seamless browsing and purchasing.sers can search, filter, and buy shoes, while enjoying a responsive and intuitive UI.Admins manage product listings.',
    image: stepzone,
    technology: [FaReact, FaNodeJs, DiMongodb, SiExpress, SiTailwindcss],
    source: 'https://github.com/samir-27/stepzone-frontend'
  },
  {
    id: 3,
    title: 'Weather App',
    description:
      'Weather-App is a modern React application that delivers real-time weather updates using the OpenWeather API.Users can search any city to view current conditions, temperature, and more.It features a clean, responsive UI for a smooth  experience.',
    image: weather,
    technology: [FaReact, SiTailwindcss],
    source: 'https://github.com/samir-27/my-weather',
    live: 'my-weather27.netlify.app'
  },

  {
    id: 4,
    title: 'Movie App',
    description:
      'MovieMania is a React-based movie app where users can search for movies and add favorites to their personal list.It integrates smooth UI interactions with dynamic search functionality.Built for movie lovers who want quick access to their top picks.',
    image: movies,
    technology: [FaReact, SiTailwindcss],
    live: 'my-movie27.netlify.app',
    source: 'https://github.com/samir-27/movie-app',
  },
  {
    id: 5,
    title: 'Color Palettes',
    description:
      'ColorPellets is a React app powered by the ColorMagic API for exploring curated color palettes.Users can filter palettes by style or mood to spark creative inspiration.',
    image: colors,
    technology: [FaReact, SiTailwindcss],
    source: 'https://github.com/samir-27/color-palletes',
    live: 'color-27.netlify.app'
  },
];


const projectVariants = {
  initial: {
    opacity: 0,
    scale: 0.4
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    }
  }
}

const Single = ({ item }) => {

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
    <motion.div
      variants={projectVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className="section flex justify-center items-center container mx-auto"
    >
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10" style={{ perspective: '1500px' }}>

        <motion.div className="w-full lg:w-1/2 flex justify-center items-center border-white/20 border-2 rounded-xl shadow-xl shadow-purple-500/50 bg-white/20 backdrop-blur-md p-2 h-full"
                  ref={cardRef}
                  viewport={{ once: true, amount: 0.3 }}
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
                                                               backgroundColor: "#8b5cf6",
                                color: "#fff",
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                            }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={resetRotation}
        
        >
          <img
            src={item.image}
            alt={item.title}
            className="rounded-xl object-cover md:h-96"
  
          />
        </motion.div>

        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl text-purple-500 font-semibold">{item.title}</h1>
            <p className="text-white/80 text-lg mt-2">{item.description}</p>
            <h1 className="text-white text-2xl py-5">Technology Used: </h1>
            <div>
              <ul className="flex gap-4">
                {item.technology && item.technology.map((icon, index) => (
                  <li key={index} className="text-4xl text-white/80 hover:scale-125 transition-all duration-300 ease-in-out hover:text-purple-500">
                    {React.createElement(icon)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex gap-4 py-5">
            {item.live && (
              <a href={item.live} className="text-purple-500 hover:text-white hover:bg-purple-500 p-3 border-2 border-purple-500 rounded-md transition-colors duration-300 ease-in-out">View Project</a>
            )}
            <a href={item.source} className="text-purple-500 hover:text-white hover:bg-purple-500 p-3 border-2 border-purple-500 rounded-md transition-colors duration-300 ease-in-out">Source Code</a>
          </div>
        </div>

      </div>
    </motion.div>



  );
};

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <div ref={ref} className='projects'>
      <div className='sticky top-0 left-0 w-full project-header bg-[#0e0e0e]/100 backdrop-blur-md z-30'>

        <h1 className='text-6xl md:text-8xl text-center  text-purple-500 py-6'>
          Featured Works
        </h1>
        <div className='relative w-full h-2 bg-white/20'>
          <motion.div
            style={{ scaleX }}
            className='origin-left h-full bg-white'
          />
        </div>
      </div>

      {/* Projects */}
      <div className=' '>
        {projects.map((item) => (
          <Single key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
