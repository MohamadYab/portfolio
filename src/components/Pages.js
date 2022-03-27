import React, {useState, useEffect} from 'react';
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Hobbies from './pages/Hobbies';

const Pages = () => {
  const [pagesState, setPagesState] = useState({
    About: 'fade-in',
    Projects: '',
    Education: '',
    Skills: '',
    Hobbies: '',
  });
  let inDisplay = 'About';

  const fadeIn = (toDisplay) => {
    switch (toDisplay) {
      case 'About':
        return setPagesState(prevState => ({
          ...prevState,
          About: 'fade-in'
        }));
        
      case 'Projects':
        return setPagesState(prevState => ({
          ...prevState,
          Projects: 'fade-in'
        }));
        
      case 'Education':
        return setPagesState(prevState => ({
          ...prevState,
          Education: 'fade-in'
        }));
        
      case 'Skills':
        return setPagesState(prevState => ({
          ...prevState,
          Skills: 'fade-in'
        }));
        
      case 'Hobbies':
        return setPagesState(prevState => ({
          ...prevState,
          Hobbies: 'fade-in'
        }));

      default:
        return setPagesState({
          About: 'fade-in',
          Projects: '',
          Education: '',
          Skills: '',
          Hobbies: '',
        });
    }
  }

  const fadeOut = (oldHashValue) => {
    switch (oldHashValue) {
      case 'About':
        return setPagesState(prevState => ({
          ...prevState,
          About: 'fade-out'
        }));
        
      case 'Projects':
        return setPagesState(prevState => ({
          ...prevState,
          Projects: 'fade-out'
        }));
        
      case 'Education':
        return setPagesState(prevState => ({
          ...prevState,
          Education: 'fade-out'
        }));
        
      case 'Skills':
        return setPagesState(prevState => ({
          ...prevState,
          Skills: 'fade-out'
        }));
        
      case 'Hobbies':
        return setPagesState(prevState => ({
          ...prevState,
          Hobbies: 'fade-out'
        }));

      default:
        return setPagesState({
          About: 'fade-out',
          Projects: '',
          Education: '',
          Skills: '',
          Hobbies: '',
        });
    }
  }

  const getPage = () => {
      // TODO: Store the value of the previous tab in a ref or in a variable.
      // Fade out the page that was displayed.
      fadeOut(inDisplay);

      // Fade in the page to be displayed.
      const toDisplay = window.location.hash.substring(1);
      fadeIn(toDisplay);
      inDisplay = toDisplay;
    }
  
    useEffect(() => {
      window.addEventListener('hashchange', getPage);
      return () => window.removeEventListener('hashchange', getPage);
    }, []);

    return(
        <div className='page-display'>
            <div className='page-container'>
                <About className={pagesState.About} />
                <Projects className={pagesState.Projects} />
                <Education className={pagesState.Education} />
                <Skills className={pagesState.Skills} />
                <Hobbies className={pagesState.Hobbies} />
            </div>
        </div>
    );
}

export default Pages;