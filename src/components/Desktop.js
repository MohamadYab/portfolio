import React from 'react';
import '../App.css';
import { useViewport } from '../use-Viewport';
import Logo from '../components/Logo.js'
import ContactForm from './ContactForm';
import Socials from './Socials';

function Desktop() {
  const { isDesktop } = useViewport();
  return (
    <div className="App">
      <div className='desktop-contact'>
        <div className='gradient '>
          <div className='rose-image'>
            <div className='container desktop-contact-info'>
              <Logo />
              <ContactForm />
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desktop;
