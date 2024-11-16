import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/SALogo.png';
import './navbar.scss';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = 'home';

    setIsScrolled(window.scrollY > 20);

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 2 && window.scrollY < sectionTop + sectionHeight / 2) {
        currentSection = section.getAttribute('id');
      }
    });

    setActiveSection(currentSection);
  };

  window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (section) => {
    setActiveSection(section); // Set the active section immediately
    setToggleMenu(false);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`lp__navbar ${isScrolled ? 'scrolling' : ''} ${activeSection}`}>
      <div className="lp__navbar-links">
        <div className="lp__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="lp__navbar-links_container">
          <p><a href="#home" onClick={() => handleMenuClick('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a></p>
          <p><a href="#intro" onClick={() => handleMenuClick('intro')} className={activeSection === 'intro' ? 'active' : ''}>Intro</a></p>
          <p><a href="#services" onClick={() => handleMenuClick('services')} className={activeSection === 'services' ? 'active' : ''}>Services</a></p>
          <p><a href="#calls" onClick={() => handleMenuClick('calls')} className={activeSection === 'calls' ? 'active' : ''}>Call Me</a></p>
          <p><a href="#project" onClick={() => handleMenuClick('project')} className={activeSection === 'project' ? 'active' : ''}>Project</a></p>
          <p><a href="#about" onClick={() => handleMenuClick('about')} className={activeSection === 'about' ? 'active' : ''}>About&#9660;</a></p>
          <p><a href="#contact" onClick={() => handleMenuClick('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></p>
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
            <p><a href="#home" onClick={() => handleMenuClick('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a></p>
            <p><a href="#intro" onClick={() => handleMenuClick('intro')} className={activeSection === 'intro' ? 'active' : ''}>Intro</a></p>
            <p><a href="#services" onClick={() => handleMenuClick('services')} className={activeSection === 'services' ? 'active' : ''}>Services</a></p>
            <p><a href="#calls" onClick={() => handleMenuClick('calls')} className={activeSection === 'calls' ? 'active' : ''}>Call Me</a></p>
            <p><a href="#project" onClick={() => handleMenuClick('project')} className={activeSection === 'project' ? 'active' : ''}>Project</a></p>
            <p><a href="#about" onClick={() => handleMenuClick('about')} className={activeSection === 'about' ? 'active' : ''}>About&#9660;</a></p>
            <p><a href="#contact" onClick={() => handleMenuClick('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
