import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import hero from '../assets/heropic.jpg'

    



const Heroo = () => {






  return (
    <div className='grid grid-cols-1 rounded-full sm:grid-cols-3 gap-8max-w-[1200px]  md:h-[70vh] mx-auto py-8 ' id='home'>
        <div className="col-span-1  my-auto mx-auto w-[170px] h-auto lg:w-[300px]">
         
                <img className='rounded-full' src={hero} alt="imagehero" />
             
        </div>
        <div className="col-span-2 px-5 my-auto">
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
                    <a href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:406abbda-c383-4474-acbb-b46a17aabe2b" className='px-6 py-3 w-full rounded-xl mr-4
                    bg-gradient-to-br from-orange-500 to-pink-500 text-whit'>
                        Download CV

                    </a>
                    <a href="#contact" className='px-6 py-3 w-full rounded-xl 
                    border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500
                    text-whit hover:border-none '>
                        Contact
                    </a>
                </div>
           
        </div>

    </div>
  )
}

export default Heroo