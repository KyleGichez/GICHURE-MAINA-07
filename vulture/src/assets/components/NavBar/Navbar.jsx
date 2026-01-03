import React from 'react';
import Logo from '../../images/icon512.png';
import '../../styles/navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='navbar-container px-20 py-4 w-full fixed'>
        <div className="navbar-wrapper flex justify-between items-center cursor-pointer">
            <div className="navbar-logo">
                <div className="logo-image w-[50px] h-[50px]}">
                    <img src={Logo} alt="logo" />
                </div>
            </div>
            <ul className="nav-items uppercase flex gap-[35px]">
                <li className="nav-item">
                    <Link activeClass='nav-item-active' to='home' spy={true} smooth={true} offset={-50}>home</Link>
                </li>
                <li className="nav-item">
                    <Link activeClass='nav-item-active' to='about' spy={true} smooth={true} offset={-50}>about</Link>
                </li>
                <li className="nav-item">
                    <Link activeClass='nav-item-active' to='experience' spy={true} smooth={true} offset={-50}>work experience</Link>
                </li>
                {/* <li className="nav-item">
                    <Link activeClass='nav-item-active' to='projects' spy={true} smooth={true} offset={-50}>projects</Link>
                </li> */}
                <li className="nav-item">
                    <Link activeClass='nav-item-active' to='contact' spy={true} smooth={true} offset={-50}>contact</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar