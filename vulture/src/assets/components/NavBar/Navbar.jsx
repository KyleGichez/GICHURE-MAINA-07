import React, { useState } from "react";
import Logo from "../../images/icon512.png";
import "../../styles/navbar.css";
import { Link } from "react-scroll";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div className="navbar-container px-20 py-4 w-full fixed">
      <div className="navbar-wrapper flex justify-between items-center cursor-pointer">
        {/* Logo */}
        <div className="navbar-logo">
          <div className="logo-image w-[50px] h-[50px]">
            <img src={Logo} alt="logo" />
          </div>
        </div>

        {/* Desktop nav */}
        <nav role="navigation">
          <ul className="nav-items uppercase flex gap-[35px]">
            <li className="nav-item">
              <Link
                activeClass="nav-item-active"
                to="home"
                spy
                smooth
                offset={-20}
              >
                home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="nav-item-active"
                to="about"
                spy
                smooth
                offset={-20}
              >
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="nav-item-active"
                to="experience"
                spy
                smooth
                offset={-20}
              >
                work experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="nav-item-active"
                to="contact"
                spy
                smooth
                offset={-20}
              >
                contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu toggle */}
        <div className="mobile-view-navbar" onClick={toggleDrawer}>
          <Icon icon="material-symbols:menu-rounded" width="30" height="30" />
        </div>
      </div>

      {/* Overlay */}
      {drawerOpen && (
        <div className="drawer-overlay" onClick={closeDrawer}></div>
      )}

      {/* Right-side drawer */}
      <div className={`drawer-menu ${drawerOpen ? "open" : ""}`}>
        <button className="drawer-close-btn" onClick={closeDrawer}>
          <Icon icon="material-symbols:close-rounded" width="30" height="30" />
        </button>
        <ul>
          <li>
            <Link to="home" smooth offset={-20} onClick={closeDrawer}>
              <span>
                <Icon icon="ic:round-home" width="24" height="24" />
              </span>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth offset={-20} onClick={closeDrawer}>
              <span>
                <Icon icon="arcticons:goabout" width="24" height="24" />
              </span>
              About
            </Link>
          </li>
          <li>
            <Link to="experience" smooth offset={-20} onClick={closeDrawer}>
              <span>
                <Icon icon="ic:baseline-work" width="24" height="24" />
              </span>
              Work Experience
            </Link>
          </li>
          <li>
            <Link to="contact" smooth offset={-20} onClick={closeDrawer}>
              <span>
                <Icon icon="heroicons:phone-20-solid" width="24" height="24" />
              </span>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
