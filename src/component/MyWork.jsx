import React, { useEffect } from 'react';
import { projects } from '../data';
import { motion, useAnimation } from 'framer-motion';

const MyWork = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12 ' id='work'>
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Work</p>
        <p className="text-gray-400">Check out some of my recent work</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const controls = useAnimation();
  const cardRef = React.useRef();

  const handleScroll = () => {
    const rect = cardRef.current.getBoundingClientRect();
    const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

    if (isInView) {
      controls.start({ opacity: 1, scale: 1 });
    } else {
      controls.start({ opacity: 0, scale: 0.5 });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount to check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, );

  return (
    <motion.div
      ref={cardRef}
      className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
      shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
      h-[200px] bg-cover relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
      <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
      justify-center items-center">
        <span className='text-2xl font-bold text-white tracking-wider'>{project.title}</span>
        <p className="mt-2 text-sm bg-slate-900 p-2 text-white">{project.description}</p>
        <div className="pt-8 text-center">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <button className='text-center rounded-lg hover:ease-out px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Live</button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default MyWork;
