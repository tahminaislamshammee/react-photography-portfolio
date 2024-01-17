/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from 'react';
import ContactImage from '../img/contact/woman.png';
import Input from '../components/Input';
import {motion} from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';

const Contact = () => {
  const {mouseEnterHandler, mouseRemoveHandler} = useContext(CursorContext);
  return <motion.section 
  initial={{opacity: 0, y: '100%'}} 
  animate={{opacity: 1, y: 0}} 
  exit={{opacity: 0, y: "100%"}} 
  transition={transition1} 
  className='section bg-white'>
    <div className="container mx-auto h-full lg:px-[100px] xl:px-0">
      <div className='flex flex-col md:flex-row h-full items-center justify-start pt-36 gap-8 text-center lg:text-left'>
        {/* bg  */}
        <motion.div 
        initial={{opacity: 0, y: '100%'}} 
        animate={{opacity: 1, y: 0}} 
        exit={{opacity: 0, y: "100%"}} 
        transition={transition1} 
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseRemoveHandler}
        className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10'> </motion.div>
        {/* text & form  */}
        <div className='xl:flex-1 lg:pt-20 md:w-[70%] lg:w-auto'>
          <h1 className='h1'>Contact me</h1>
          <p className='mb-5'>I would love to get suggestions from you!</p>
          <form className='flex flex-col gap-y-4'>
            <div className='flex gap-x-10 flex-col'>
              
              <div className='flex gap-x-10 flex-row'>
              <Input type="text" placeholder="Your Name" />

              <Input type="email" placeholder="Your Email" />
              </div>

              <Input type="textarea" placeholder="Your Message" />

              <button className='btn mx-auto lg:mx-0 self-start mt-5 lg:mb-[30px]'>Send it</button>
            </div>
          </form>
        </div>
        {/* image */}
        <motion.div 
        initial={{opacity: 0, y: '100%'}} 
        animate={{opacity: 1, y: 0}} 
        exit={{opacity: 0, y: "100%"}} 
        transition={{transition: transition1,duration: 1.5}}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseRemoveHandler} 
        className='lg:flex-1 xl:h-full lg:h-[500px] md:w-[30%] lg:w-auto'>
          <img src={ContactImage} alt="Contact image" />
        </motion.div>
      </div>
    </div>
  </motion.section>;
};

export default Contact;
