import React from 'react'
import { FaGithub, FaXTwitter  } from "react-icons/fa6";
import { MdWhatsapp } from "react-icons/md";

const Footer = () => {
  return (
    <section className='footer '>
        <div className=" max-w-[1200px] p-12 flex justify-between mx-auto">
            <span className='primary-color'>A. Mayor</span>
            <p className='text-2xl hover:text-primary-color cursor-pointer'>Abrahammayowa78@gmail.com <br /></p>
        </div>
        <div className="    flex py-3 items-center justify-center mb-5 ">
         <a href="https://github.com/Mayor78"> <FaGithub className='5-xl m-10 hover:bg-primary-color '/></a>
         <a href="https://wa.link/js0ug9"> <MdWhatsapp className='5-xl m-8 ' /></a>
         <a href="https://twitter.com/Abraham00803508"><FaXTwitter className='5-xl m-8 '/></a>

        </div>
    
    </section>
  )
}

export default Footer