import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        // Apply dark mode based on saved preference or default
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
            document.body.classList.add('dark');
        }

        const closeMenu = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setNav(false);
            }
        };

        document.addEventListener('click', closeMenu);

        return () => {
            document.removeEventListener('click', closeMenu);
        };
    }, []);

    const handleNav = (event) => {
        event.stopPropagation();
        setNav(!nav);
    };

    const handleLinkClick = () => {
        setNav(false); // Close the navbar when a link is clicked
    };

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        document.body.classList.toggle('dark', newDarkMode);
        localStorage.setItem('theme', newDarkMode ? 'dark' : 'light'); // Save preference
    };

    return (
        <div className={`h-[100px] max-w-[1200px] mx-auto top-0 sticky z-10 backdrop:blur-lg rounded-md  flex justify-between items-center px-4 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-blue-500 text-white '}`}>
            <h1 className='text-3xl font-bold primary-color'>A. Mayor</h1>
            <ul className='hidden md:flex'>
                {['About', 'Contact', 'Work'].map((section, index) => (
                    <motion.li
                        key={index}
                        className='p-5'
                        whileHover={{ scale: 1.1, color: darkMode ? '#fff' : '#000', textDecoration: 'underline' }}
                    >
                        <a href={`#${section.toLowerCase()}`} onClick={handleLinkClick}>{section}</a>
                    </motion.li>
                ))}
            </ul>
            <div className="flex items-center">
                <button onClick={toggleDarkMode} className="mr-4">
                    {darkMode ? <FaSun size={25} /> : <FaMoon size={25} />}
                </button>
                <div onClick={(event) => handleNav(event)} className="block md:hidden">
                    {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                </div>
            </div>

            <AnimatePresence>
                {nav && (
                    <motion.div
                        ref={navRef}
                        className={`z-10 fixed top-0 left-0 w-[60%] h-auto ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'} md:hidden`}
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        <h1 className='text-3xl primary-color m-4'>A. Mayor</h1>
                        <ul className='p-8 text-2xl'>
                            {['Home', 'About', 'Work', 'Contact'].map((section, index) => (
                                <motion.li
                                    key={index}
                                    className='p-2'
                                    whileHover={{ scale: 1.1, color: darkMode ? '#fff' : '#000', textDecoration: 'underline' }}
                                    onClick={handleLinkClick}
                                >
                                    <a href={`#${section.toLowerCase()}`}>{section}</a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Navbar;
