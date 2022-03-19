import React from 'react';
import './App.css';
import Mobile from './components/Mobile';
import Desktop from './components/Desktop';
import useMatchMedia from './components/useMatchMedia';

function App() {
  const desktop = useMatchMedia();
  return (
    <div>
      {desktop? <Desktop /> : <Mobile /> }
    </div>
  );
}

export default App;
