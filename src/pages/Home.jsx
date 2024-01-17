import React, { useContext } from 'react';
import WomenImg from '../img/home/woman.png';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import {transition1} from '../transitions'
import { CursorContext } from '../context/CursorContext';
const Home = () => {
  const {mouseEnterHandler, mouseRemoveHandler} = useContext(CursorContext);
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={transition1} className='section'>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col md:flex-row lg:flex-col justify-center md:items-center lg:items-stretch h-full'>
          <motion.div 
          initial={{opacity: 0, y: '-50%'}} 
          animate={{opacity: 1, y: 0}} 
          exit={{opacity: 0, y: "-50%"}} 
          transition={transition1} 
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseRemoveHandler}
          className='w-full pt-[250px] md:pt-[36px] pb-0 md:pb-14 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
            <h1 className='h1'>photographer <br /> & film maker</h1>
            <p className='text-[22px] lg:text-[36px] font-primary mb-4 lg:mb-12'>Los Angeles, USA</p>
            <Link to={'/contact'} className='btn mb-[30px] md:mb-0'>Hire Me</Link>
          </motion.div>
          {/* image */}
          <div className='flex justify-end max-h-96 lg:max-h-max'>
            <motion.div
              initial={{scale: 0}} 
              animate={{scale: 1}} 
              exit={{scale: 0}} 
              transition={transition1}
             className='relative overflow-hidden xl:h-full lg:w-[500px]'>
              <motion.img 
              whileHover={{scale: 1.1}}
              transition={{transition1}}
              onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseRemoveHandler}
              src={WomenImg} alt="image" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
