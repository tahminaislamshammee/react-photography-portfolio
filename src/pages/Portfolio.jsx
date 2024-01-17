import React, { useContext } from 'react';
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';
import {motion} from 'framer-motion';
import { transition1 } from '../transitions';

import { Link } from 'react-router-dom';
import { CursorContext } from '../context/CursorContext';

const Portfolio = () => {
  const {mouseEnterHandler, mouseRemoveHandler} = useContext(CursorContext);
  const imagePool = [Image1, Image2, Image3, Image4]
  console.log(imagePool)
  return <motion.section
  initial={{opacity: 0, y: '100%'}} 
  animate={{opacity: 1, y: 0}} 
  exit={{opacity: 0, y: "100%"}} 
  transition={transition1} 
  className='section'>
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
        {/* text */}
        <motion.div 
        initial={{opacity: 0, y: '-80%'}} 
        animate={{opacity: 1, y: 0}} 
        exit={{opacity: 0, y: "-80%"}} 
        transition={transition1} 
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseRemoveHandler}
        className='flex flex-col lg:items-start'>
          <h1 className='h1'>Portfolio</h1>
          <p className='mb-12 max-w-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam omnis ipsam dolore accusantium asperiores quaerat similique doloremque reprehenderit soluta magni!
            <br />
            <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ex dolorem, dolores voluptas asperiores blanditiis!
          </p>
            <Link to={'/contact'} className='btn self-center mb-[30px] mx:auto lg:mx-0'>Hire me !</Link>
        </motion.div>
        {/* image */}
        <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-2'>
          {imagePool.map((image)=>(
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={image} alt="portfolio images" />
          </div>
          ))}

        </div>
      </div>
    </div>
  </motion.section>;
};

export default Portfolio;
