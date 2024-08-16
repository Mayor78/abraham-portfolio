import { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded mb-2">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold  transition-transform hover:transform hover:scale-110">{title}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
          />
        </svg>
      </div>
      {isOpen && (
        <div className="p-4 border-t border-gray-300">
          <p className="text-white-700 primary-color font-bold">{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="max-w-md mx-auto">
      <AccordionItem    
        title="Frontend Development "
        content=" I am proficient in HTML, CSS, and JavaScript, along with popular frameworks and libraries such as React.js,  .
                     I have experience in building responsive, accessible, 
                    and visually appealing user interfaces that deliver seamless interactions across devices and platforms."
      />
      <AccordionItem
        title="Backend Development "
        content=" I am familiar with server-side technologies like Node.js,  
                along with database management systems such as MongoDB, MySQL, or PostgreSQL.
                         I am capable of designing and developing scalable,
                         robust backend systems that power dynamic web applications."
      />
      <AccordionItem
        title="Full-Stack Development "
        content="With expertise in both frontend and backend technologies, I am comfortable working on 
                        all layers of the web development stack. I can architect, develop,
                         and deploy end-to-end web solutions that meet business requirements and user needs."
      />
       <AccordionItem
        title="Version Control and Deployment "
        content=" I have experience using version control systems like Git and deploying web applications
                     to various hosting platforms such as Heroku, Netlify, or AWS. I understand the importance of continuous integration and
                     deployment practices to streamline the development process and ensure project success."
      />
       <AccordionItem
        title="Problem-Solving and Collaboration "
        content=" I approach challenges with a logical and analytical mindset, leveraging problem-solving skills to 
                overcome technical obstacles and deliver optimal solutions. I am an effective communicator and collaborator, 
                    capable of working in cross-functional teams and adapting to diverse project requirements."
      />
      <AccordionItem
        title="Continuous Learning "
        content=" In the rapidly evolving field of web development, I am committed to staying updated with the latest technologies, 
                    trends, and best practices. I actively seek out opportunities for learning and professional 
                    growth to enhance my skills and deliver cutting-edge solutions to clients and stakeholders."
      />
    </div>
  );
};

export default Accordion;