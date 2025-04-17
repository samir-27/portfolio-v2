import React, { useState } from 'react';
import backend from '../assets/backend.svg';
import frontend from '../assets/frontend.svg';
import whitefrontend from '../assets/whitefrontend.svg';
import whitebackend from '../assets/whitebackend.svg';
import { motion } from 'framer-motion';

const expandingCircleVariants = {
  rest: { scale: 0, opacity: 0 },
  hover: { scale: 10, opacity: 1 },
};

const textVariants = {
  rest: { color: '#9333ea' },
  hover: { color: '#ffffff' },
};

const contentVariants = {
  rest: { color: '#1f2937' },
  hover: { color: '#ffffff' },
};

const ServiceCard = ({ service, isReversed }) => {
  const [isHovered, setIsHovered] = useState(false);

  const isFrontend = service.name === 'Frontend Development';
  const imageSrc = isHovered
    ? isFrontend
      ? whitefrontend
      : whitebackend
    : isFrontend
      ? frontend
      : backend;

  return (
    <motion.div
      className={`relative overflow-hidden bg-white rounded-2xl shadow-2xl max-w-6xl mx-auto flex flex-col md:flex-row ${isReversed ? 'md:flex-row-reverse' : ''}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Expanding Circle */}
      <motion.div
        className="absolute z-0 top-1/2 left-1/2 w-40 h-40 rounded-full bg-purple-500"
        style={{ transform: 'translate(-50%, -50%)' }}
        variants={expandingCircleVariants}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      />

      {/* Image */}
      <div className="md:w-1/2 flex items-center justify-center p-8 z-10">
        <motion.img
          key={imageSrc}
          src={imageSrc}
          alt={service.name}
          className="object-contain h-full max-h-80 w-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Text Content */}
      <div className="md:w-1/2 flex flex-col justify-center p-8 z-10">
        <motion.h2
          variants={textVariants}
          transition={{ duration: 0.3 }}
          className="text-3xl font-bold mb-4"
        >
          {service.name}
        </motion.h2>
        <motion.p
          variants={contentVariants}
          transition={{ duration: 0.3 }}
          className="text-base leading-relaxed mb-4"
        >
          {service.details}
        </motion.p>
        <motion.ul
          variants={contentVariants}
          transition={{ duration: 0.3 }}
          className="list-disc list-inside text-sm opacity-90"
        >
          {isFrontend ? (
            <>
              <li>Component-based architecture with React</li>
              <li>Responsive design using Tailwind and Bootstrap</li>
              <li>Interactive UI with reusable components</li>
            </>
          ) : (
            <>
              <li>RESTful APIs with Express</li>
              <li>MongoDB integration and schema design</li>
              <li>Authentication, validation, and error handling</li>
            </>
          )}
        </motion.ul>
      </div>
    </motion.div>
  );
};

const Service = () => {
  const services = [
    {
      id: 1,
      name: 'Frontend Development',
      image: frontend,
      details:
        'I have knowledge of front-end development technologies, including React for creating dynamic user interfaces, HTML for structuring content, and Tailwind CSS and Bootstrap for responsive and modern styling.',
    },
    {
      id: 2,
      name: 'Backend Development',
      image: backend,
      details:
        'I have knowledge in backend development, using Node.js and Express to build server-side applications. I work with MongoDB for efficient database management.',
    },
  ];

  return (
    <div className="section service">
      <div className="px-4 container mx-auto min-h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} isReversed={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
