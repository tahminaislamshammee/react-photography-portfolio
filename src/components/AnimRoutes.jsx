import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
const AnimRoutes = () => {
    const location = useLocation();
    return ( 
        <AnimatePresence initial={true} mode='wait'>
             <Routes key={location.pathname} location={location}>
                <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/portfolio' element={<Portfolio/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                <Route/>
             </Routes>
        </AnimatePresence>
    );
}
 
export default AnimRoutes;