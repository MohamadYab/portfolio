import React, { useRef } from 'react';
import '../App.css';
import { useViewport } from '../use-Viewport';
import Logo from '../components/Logo.js'
import ContactForm from './ContactForm';
import Socials from './Socials';

function Mobile() {
  const { isDesktop } = useViewport();
  const menuBtn = useRef(null);
  const mobileNav = useRef(null);
  
  const handleNavOpen = () => {
    menuBtn.current.classList.toggle('open');
    mobileNav.current.classList.toggle('open-nav');
  }

  /**
   * 
   * @param {event} e 
   * @param {string} targetSection 
   * This function is to handle the navigation to a section of the page.
   * It disables the default scrolling behavior, so we could implement our own.
   * It takes a target section and calculate its position on the HTML page.
   * Later, it scroll to this position - (minus) the header height.
   * This function prevent the header from overlapping the content of the target section 
   * without having to add/take paddings/margins.
   */
  const handleNavigation = (e, targetSection) => {
    e.preventDefault();
    menuBtn.current.classList.toggle('open');
    mobileNav.current.classList.toggle('open-nav');
    const target = document.querySelector(`#${targetSection}`);
    const targetPosition = target.offsetTop - 75;
    window.scrollTo({
      top: targetPosition,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="App">
      <div className='mobile-navigations'>
        <header className="header">
          <div className='container h-content'>
            <Logo />
            <div className="menu-btn" ref={menuBtn} onClick={handleNavOpen} >
              <div className="menu-btn__burger"></div>
            </div>
          </div>
        </header>
        <nav className='mobile-nav' ref={mobileNav} >
          <ul>
            <li><a href='#About' onClick={(e) => handleNavigation(e, 'About')} >About</a></li>
            <li><a href='#Projects' onClick={(e) => handleNavigation(e, 'Projects')} >Projects</a></li>
            <li><a href='#Education' onClick={(e) => handleNavigation(e, 'Education')} >Education</a></li>
            <li><a href='#Skills' onClick={(e) => handleNavigation(e, 'Skills')} >Skills</a></li>
            <li><a href='#Hobbies' onClick={(e) => handleNavigation(e, 'Hobbies')} >Hobbies</a></li>
            <li><a href='#Contact' onClick={(e) => handleNavigation(e, 'Contact')} >Contact</a></li>
          </ul>
        </nav>
      </div>
      
      <section id="About">About</section>
      <section id="Projects">Projects</section>
      <section id="Education">Education</section>
      <section id="Skills">Skills</section>
      <section id="Hobbies">Hobbies</section>
      <section id="Contact">
        <div className='container'>
          <ContactForm />
          <Socials />
        </div>
      </section>
    </div>
  );
}

export default Mobile;
