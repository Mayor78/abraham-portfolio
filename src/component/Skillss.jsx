import React from 'react';
import html from '../assets/icons8-html-5-480.png';
import css from '../assets/css.png';
import tailwind from '../assets/tailwind.png';
import javascript from '../assets/javascript.png';
import mongodb from '../assets/mongo.png';
import nodejs from '../assets/nodejs.png';
import react from '../assets/react.png';

const skills = [
  { src: html, label: 'HTML' },
  { src: css, label: 'CSS' },
  { src: javascript, label: 'JAVASCRIPT' },
  { src: tailwind, label: 'TAILWIND' },
  { src: react, label: 'REACT' },
  { src: mongodb, label: 'MONGODB' },
  { src: nodejs, label: 'NODEJS' },
];

const Skillss = () => {
  return (
    <div className="overflow-hidden relative  text-white py-8">
      <h2 className="text-center text-2xl font-bold mb-4">My Tech Stack</h2>
      <div className="whitespace-nowrap animate-scroll flex">
        {skills.concat(skills).map((skill, index) => (
          <div key={index} className="flex flex-col items-center mx-4 animate-shake">
            <div className="w-24 h-24 flex items-center justify-center bg-gray-700 rounded-full p-2">
              <img src={skill.src} alt={skill.label} className="w-full h-full object-contain" />
            </div>
            <p className="mt-2 text-sm">{skill.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skillss;
