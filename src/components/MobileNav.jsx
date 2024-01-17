import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import {motion} from 'framer-motion';
import { NavLink } from "react-router-dom";
import {useState} from 'react';
const MobileNav = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleClick = ()=>{
        setOpenMenu(!openMenu)
    }

    const menuVariants = {
        hidden: {
            x: "100%"
        },
        show: {
            x: 0,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.9],
            }
        }
    }
    return ( 
        <nav className="text-primary lg:hidden">
            <div className="text-3xl cursor-pointer" onClick={handleClick}>
                <CgMenuRight/>
            </div>
            <motion.div variants={menuVariants} initial='hidden'  animate={openMenu ? 'show': ''} className={`bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20`}>
                <div className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer" onClick={handleClick}><IoMdClose/></div>
                <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl">
                    
                    <li>
                        <NavLink to={'/'} onClick={handleClick}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'} onClick={handleClick}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/portfolio'} onClick={handleClick}>Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact'} onClick={handleClick}>Contact</NavLink>
                    </li>
                </ul>
            </motion.div>
        </nav>
     );
}
 
export default MobileNav;