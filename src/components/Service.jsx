import React from 'react';
import { motion } from 'framer-motion';
import backend from '../assets/backend.svg';
import frontend from '../assets/frontend.svg';
import whitefrontend from '../assets/whitefrontend.svg';
import whitebackend from '../assets/whitebackend.svg';

const ServiceCard = ({ service, isReversed }) => {
  const isFrontend = service.name === 'Frontend Development';
  const defaultImg = isFrontend ? frontend : backend;
  const hoverImg = isFrontend ? whitefrontend : whitebackend;

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl shadow-2xl max-w-6xl mx-auto flex flex-col md:flex-row ${isReversed ? 'md:flex-row-reverse' : ''}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: { backgroundColor: '#ffffff', color: '#1f2937' },
        hover: { backgroundColor: '#9333ea', color: '#ffffff' },
      }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {/* Image */}
      <motion.div
        className="md:w-1/2 flex items-center justify-center p-8 z-10"
        variants={{ rest: {}, hover: {} }}
      >
        <motion.img
          key="default"
          src={defaultImg}
          alt={service.name}
          className="object-contain h-full max-h-80 w-auto absolute"
          initial={{ opacity: 1 }}
          variants={{
            rest: { opacity: 1, scale: 1 },
            hover: { opacity: 0, scale: 1.05 },
          }}
          transition={{ duration: 0.4 }}
        />
        <motion.img
          key="hover"
          src={hoverImg}
          alt={service.name}
          className="object-contain h-full max-h-80 w-auto"
          initial={{ opacity: 0 }}
          variants={{
            rest: { opacity: 0, scale: 0.95 },
            hover: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>

      {/* Text */}
      <motion.div className="md:w-1/2 flex flex-col justify-center p-8 z-10">
        <motion.h2
          className="text-3xl font-bold mb-4"
          variants={{ rest: {}, hover: {} }}
        >
          {service.name}
        </motion.h2>
        <motion.p
          className="text-base leading-relaxed mb-4"
          variants={{ rest: {}, hover: {} }}
        >
          {service.details}
        </motion.p>
        <motion.ul
          className="list-disc list-inside text-sm opacity-90"
          variants={{ rest: {}, hover: {} }}
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
      </motion.div>
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
