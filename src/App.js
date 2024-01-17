import './App.css';
import {BrowserRouter, Routes, Router} from 'react-router-dom';
import {motion} from 'framer-motion';
import AnimRoutes from './components/AnimRoutes';
import Header from './components/Header';
import { useContext } from 'react';
import { CursorContext } from './context/CursorContext';
function App() {
  const { cursorVariants, cursorBG } = useContext(CursorContext);

  return (
    <>
      <BrowserRouter>
          <Header/>
          <AnimRoutes/>
      </BrowserRouter>
      {/* cursor */}

      <motion.div
      variants={cursorVariants}
      animate={cursorBG}
      className='w-[32px] h-[32px] rounded-full bg-primary absolute top-0 left-0 pointer-events-none z-50'>

      </motion.div>
    </>
  );
}

export default App;
