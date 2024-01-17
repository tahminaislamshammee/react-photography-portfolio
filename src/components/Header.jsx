import { useContext } from 'react';
import Socials from '../components/Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';

import {Link, NavLink} from 'react-router-dom';
import { CursorContext } from '../context/CursorContext';

const Header = () => {
    const {mouseEnterHandler, mouseRemoveHandler} = useContext(CursorContext)
    return <header className="fixed bg-white lg:bg-transparent w-full z-30 h-[100px] lg:h-[140px] flex items-center w-full lg:container mx-auto left-0 right-0 px-[15px]">
            <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
                <Link
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseRemoveHandler}
                to={'/'} className='max-w-[200px]'>
                    <img src={Logo} alt="logo" />
                </Link>
                <nav className='hidden lg:flex gap-x-12 font-semibold'
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseRemoveHandler}>
                    <NavLink to={'/'} className='text-[#696c6d] hover:text-primary transition navlink relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-black before:hidden'> Home</NavLink>
                    <NavLink to={'/about'} className='text-[#696c6d] hover:text-primary transition navlink relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-black before:hidden'> About</NavLink>
                    <NavLink to={'/portfolio'} className='text-[#696c6d] hover:text-primary transition navlink relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-black before:hidden'> Portfolio</NavLink>
                    <NavLink to={'/contact'} className='text-[#696c6d] hover:text-primary transition navlink relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-black before:hidden'> Contact</NavLink>
                </nav>
            </div>
            <Socials/>
            <MobileNav/>
        </header>;
}
 
export default Header;