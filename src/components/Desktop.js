import React from 'react';
import '../App.css';
import { useViewport } from '../use-Viewport';
import Logo from '../components/Logo.js'
import Hamburger from '../icons/Hamburger';

function Desktop() {
  const { isDesktop } = useViewport();
  return (
    <div className="App">
      Desktop Here
    </div>
  );
}

export default Desktop;
