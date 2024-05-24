import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { FaFacebookF, FaTwitter, FaBars, FaTimes } from 'react-icons/fa'; 
import logo from '../../assets/SALogo.png';
import './navbar.scss';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.lp__navbar');
    const homeSection = document.querySelector('#home');
    const scrollPosition = window.scrollY;
    // const navbarHeight = navbar.offsetHeight;
    const gap = 10 * parseFloat(getComputedStyle(navbar).fontSize); // Convert rem to pixels

    // Calculate the threshold scroll position based on the gap
    const thresholdPosition = homeSection.offsetTop + gap;

    // Add a class to change the background color when scrolling down
    if (scrollPosition > thresholdPosition) {
        navbar.classList.add('scrolling');
    } else {
        navbar.classList.remove('scrolling');
    }
});


  return (
    <div className="lp__navbar">
      <div className="lp__navbar-links">
        <div className="lp__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="lp__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#intro">Intro</a></p>
          <p><a href="#services">Services</a></p>
          <p><a href="#calls">Call Me</a></p>
          <p><a href="#project">Project</a></p>
          <p><a href="#contact">Contact</a></p>
        </div>
      </div>
      <div className="lp__icon">
        <li className="icon">
            <FaFacebookF />
        </li>
        <li className="icon">
            <FaTwitter />
        </li>
      </div>
      <div className="lp__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="lp__navbar-menu_container scale-up-center">
          <div className="lp__navbar-menu_container-links">
          <li className="icon">
           <FaBars />
          </li>
          <li className="icon">
           <FaTimes />
          </li>
            <p><a href="#home">Home</a></p>
            <p><a href="#intro">Intro</a></p>
            <p><a href="#services">Services</a></p>
            <p><a href="#calls">Call Me</a></p>
            <p><a href="#project">Project</a></p>
            <p><a href="#contact">Contact</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;