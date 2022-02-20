import React, { useRef } from 'react';
import '../App.css';
import { useViewport } from '../use-Viewport';
import Logo from '../components/Logo.js'

function Mobile() {
  const { isDesktop } = useViewport();
  const menuBtn = useRef(null);
  const handleMenuBtn = () => {
    menuBtn.current.classList.toggle('open');
  }

  return (
    <div className="App">
      <header className="header">
        <div className='container h-content'>
          <Logo />
          <div className="menu-btn" ref={menuBtn} onClick={handleMenuBtn} >
            <div className="menu-btn__burger"></div>
          </div>
        </div>
      </header>
      <div>
        Information goes here...
      </div>
    </div>
  );
}

export default Mobile;
