import React from 'react';
import '../App.css';
import { useViewport } from '../use-Viewport';
import Logo from '../components/Logo.js'
import ContactForm from './ContactForm';
import Socials from './Socials';
import Tabs from './Tabs';

function Desktop() {
  const { isDesktop } = useViewport();
  const test = () => {
   
  }

  return (
    <div className="App desktop">
      {/** Left Contact Section */}
      <div className='desktop-contact'>
        <div className='gradient '>
          <div className='rose-image'>
            <div className="container">
              <div className='desktop-contact-info'>
                <Logo />
                <ContactForm />
                <Socials />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** Content Section */}
      <div className='desktop'>
        <div className="container red" onClick={test}>
          <Tabs />
        </div>
      </div>
    </div>
  );
}

export default Desktop;
