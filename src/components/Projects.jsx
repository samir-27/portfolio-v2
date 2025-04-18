import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import job from '../assets/home.png';
import colors from '../assets/color.png';
import stepzone from '../assets/stepzone.png';
import movies from '../assets/movies.png';
import weather from '../assets/weater1.png'

const projects = [
  {
    id: 1,
    title: 'Job Portal App',
    description:
      'Description for project 1 Lorem ipsum, dolor sit amet consectetur...',
    image: job,
  },
  {
    id: 2,
    title: 'Project 2',
    description:
      'Description for project 2 Lorem ipsum, dolor sit amet consectetur...',
    image: weather,
  },
  {
    id: 3,
    title: 'Project 3',
    description:
      'Description for project 3 Lorem ipsum, dolor sit amet consectetur...',
    image: stepzone,
  },
  {
    id: 4,
    title: 'Project 3',
    description:
      'Description for project 3 Lorem ipsum, dolor sit amet consectetur...',
    image: movies,
  },
  {
    id: 5,
    title: 'Project 3',
    description:
      'Description for project 3 Lorem ipsum, dolor sit amet consectetur...',
    image: colors,
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
  return (
    <motion.div variants={projectVariants} initial='initial' whileInView="animate"
      viewport={{ once: false, amount: 0.3 }} className='section flex justify-center items-center container mx-auto'>

      <img
        src={item.image}
        alt={item.title}
        className="rounded-xl shadow-lg border border-white/10"
      />
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
    <div ref={ref} className='relative '>
      <div className='sticky top-0 left-0 w-full z-50'>
        {/* <h1 className='text-6xl md:text-8xl font-bold text-center text-purple-500 py-6'>
          Featured Works
        </h1> */}
        <div className='relative w-full h-2 bg-white/20'>
          <motion.div
            style={{ scaleX }}
            className='origin-left h-full bg-white'
          />
        </div>
      </div>

      {/* Projects */}
      <div className='projects '>
        {projects.map((item) => (
          <Single key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
