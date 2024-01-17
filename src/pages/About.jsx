import React, { useContext } from 'react';
import WomenImg from '../img/about/woman.png';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';

const About = () => {
  const {mouseEnterHandler, mouseRemoveHandler} = useContext(CursorContext);
  return (
    <motion.section 
    initial={{opacity: 0, y: '100%'}} 
    animate={{opacity: 1, y: 0}} 
    exit={{opacity: 0, y: "100%"}} 
    transition={transition1} 
    onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseRemoveHandler}
    className='section'>
      <div className="container mx-auto h-full relative">
        <div className='flex flex-col md:flex-row h-full items-center justify-center md:gap-5 text-center lg:text-left lg:pt-16'>
          {/* image */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none pt-[20px] md:overflow-hidden'>
            <img src={WomenImg} alt="image" />
          </div>
          {/* text */}
          <motion.div 
          initial={{opacity: 0, y: '-80%'}} 
          animate={{opacity: 1, y: 0}} 
          exit={{opacity: 0, y: "-80%"}} 
          transition={transition1} 
          className='flex-1 pt-[250px] md:pt-0 pb-0 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
            <h1 className='h1'>About me</h1>
            <p className='mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam omnis ipsam dolore accusantium asperiores quaerat similique doloremque reprehenderit soluta magni!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ex dolorem, dolores voluptas asperiores blanditiis!
            </p>
            <Link to={'/portfolio'} className='btn self-center'>View my work</Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
