import React, { useState } from 'react'
import hero from '../assets/heropic.jpg'
import { TypeAnimation } from 'react-type-animation'

import { motion } from 'framer-motion'

    



const Heroo = () => {
    const [showModal, setShowModal] = useState(false);
    const myCv = '/cv.pdf';


    const HandleDownload = ()=>{
        const link = document.createElement('a');
        link.href = myCv;
        link.download = "CV.pdf";
        link.terget ='_self';
        link.click();
        setShowModal(false);
    };
    const handlePreview = ()=>{
        window.open(myCv, '_blank');
        setShowModal(false);
    }






  return (
    <div className='grid grid-cols-1 rounded-full sm:grid-cols-3 gap-8max-w-[1200px]  md:h-[70vh] mx-auto py-8 ' id='home'>
        <motion.div className="col-span-1  my-auto mx-auto w-[170px] h-auto lg:w-[300px]"
        initial={{ y: -400 }}
        animate={{ y: 0 }}

        transition={{ duration: 0.9 }}

        >
         
                <img className='rounded-full' src={hero} alt="imagehero" />
             
        </motion.div>
        <motion.div className="col-span-2 px-5 my-auto"
        initial={{ x: 400 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.9 }}
        >
        <h1 className='text-4xl sm:text-5xl lg:text-8xl font-extrabold'> 
            <span className=" primary-color">
                I'am a 

            </span> <br />
            <TypeAnimation 
                sequence={[
                    "Front-end Dev",
                    1000,
                    "Webdesigner",
                    1000,
                    " Mern stack",
                    1000,
                    "Back-end Dev",
                    1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                />
            </h1>
                <p className=' sm:text-lg my-6 lg:text-xl'>
                    My Name Is Abraham Mayowa I have 1+ years experince in web Developer
                </p>
                <div className="my-8 cv">
                    <button onClick={()=>setShowModal(true)} className='px-6 py-3 w-ful rounded-xl mr-4
                    bg-gradient-to-br from-orange-500 to-pink-500 text-whit'>
                        Download CV

                    </button>
                    {
                        showModal && (
                            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-75 z-50">
                                <div className="flex justify-center items-center h-full">
                                    <div className="bg-blue-400 font-extrabold p-10 rounded-md w-full max-w-[400px]">
                                        <button onClick={handlePreview} className='px-6 my-2 py-3 w-full rounded-xl mr-4
                                        bg-gradient-to-br from-orange-500 to-pink-500 text-white'>
                                            Preview CV
                                        </button>
                                        <button onClick={HandleDownload} className='px-6 my-2 py-3 w-full rounded-xl
                                        bg-gradient-to-br from-orange-500 to-pink-500 text-white'>
                                            Download CV
                                        </button>
                                        <button onClick={()=>setShowModal(false)}
                                        className='px-6 py-3 w-full rounded-xl
                                        bg-gradient-to-br from-orange-500 to-pink-500 my-2 text-white'>Cancel</button>
                                        </div>
                                        </div>
                                        </div>
                         ) }
                   
                    <a href="#contact" className='px-6 py-3 w-full rounded-xl 
                    border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500
                    text-whit hover:border-none '>
                        Contact
                    </a>
                </div>
           
        </motion.div>

    </div>
  )
}

export default Heroo