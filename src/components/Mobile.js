import React from 'react';
import '../App.css';
import { useViewport } from '../use-Viewport';
import Logo from '../components/Logo.js'
import Hamburger from '../icons/Hamburger';

function Mobile() {
  const { isDesktop } = useViewport();
  return (
    <div className="App">
      <header className="header">
        <div className='container h-content'>
          <Logo />
          <Hamburger />
        </div>
      </header>
      <div>
        Information goes here...
      </div>
    </div>
  );
}

export default Mobile;
