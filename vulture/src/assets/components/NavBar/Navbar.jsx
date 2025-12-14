import React from 'react'
import Logo from '../../images/icon512.png'
import '../../styles/navbar.css';

const Navbar = () => {
  return (
    <div className='navbar-container px-20 py-4'>
        <div className="navbar-wrapper flex justify-between items-center cursor-pointer">
            <div className="navbar-logo">
                <div className="logo-image w-[50px] h-[50px]}">
                    <img src={Logo} alt="logo" />
                </div>
            </div>
            <ul className="nav-items uppercase flex gap-[35px]">
                <li className="nav-item active">
                    <a href="#home">home</a>
                </li>
                <li className="nav-item">
                    <a href="#about">about</a>
                </li>
                <li className="nav-item">
                    <a href="#experience">work experience</a>
                </li>
                <li className="nav-item">
                    <a href="#projects">projects</a>
                </li>
                <li className="nav-item">
                    <a href="#contact">contact</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar