import React, {useRef, useEffect} from 'react';
import '../App.css';

const Tabs = () => {
    const slider = useRef();
    const tabsRefs = useRef([]); // Create refs for tabs.
    tabsRefs.current = []; 

    const addToTabsRefs = (tab) => {
        if(tab && !tabsRefs.current.includes(tab)) tabsRefs.current.push(tab);
    }

    const addEvtListeners = (tab) => {
        /**
        * Because handleClick takes one argument, which is the tab element,
        * I could call it without the parentheses and it takes the tab as an argument.
        * This is how callback works somehow, I need to understand this more.
        */
        tab.addEventListener('click', handleClick);
    }

    const removeEvtListeners = () => {
        tabsRefs.current.forEach(tab => {
            tab.removeEventListener('click', handleClick);
        })
    }

    useEffect(() => {
        tabsRefs.current.forEach(tab => {
            addEvtListeners(tab);
        })
        
    },[]);

    /**
     * Return the index of the the clicked tag and add 1 (one) to it.
     * This is so I can calculate the number of tabs clicked,
     * so I know how much to translate it.
     * @param {HTML tag} tab 
     * @returns index of selected tab.
     */
    const tabIndex = (Selectedtab) => {
        return tabsRefs.current.indexOf(Selectedtab);
    }

    /**
     * 
     * @param {Integer} tabsNum 
     * Clone the existing tabs and add them into an array of clones and append the slider...
     */
    const cloneTabs = (tabsNum) => {
        for(let i = 0; i < tabsNum; i++) {
            let clone = tabsRefs.current[i].cloneNode(true);
            slider.current.appendChild(clone);
            tabsRefs.current.push(clone);
        }
    }

    const slideLeft = (slide) => {
        if(slide > 0){
            tabsRefs.current.forEach(item => {
                item.style.setProperty('--endAnimation', `-${slide * 100}%`);
                item.style.animation = `slideLeft 1.05s ease-in-out`;
                
                // Reset Styling of tabs.
                if(item !== tabsRefs.current[slide]) item.classList.remove('scaleFont');
                
                // Make the selected element large...
                tabsRefs.current[slide].classList.add('scaleFont');
            });

            let lastTab = tabsRefs.current.length - 1;     
            
            // Handle Animation End;
            tabsRefs.current[lastTab].addEventListener('animationend', 
            () => {
                removeAnimation();
                removeOldTabs(slide);

                // Re-assign click event listeners.
                tabsRefs.current.forEach(addEvtListeners);
            }, {once : true}); // Once so the event listeners don't stack and cause errors.
        }
        
    }

    const removeAnimation = () => {
        tabsRefs.current.forEach(item => {
            item.style.removeProperty('--endAnimation');
            item.style.animation = '';
        });
    }
    
    const removeOldTabs = (tabsNum) => {
        for(let i = 0; i < tabsNum; i++) {
            tabsRefs.current.shift();
            slider.current.removeChild(slider.current.firstElementChild);
            
        }
    }

    const handleClick = (tab) => {
        // Remove Click Event listeners to prevent clicking during animation...
        removeEvtListeners(); 
        let tabsNum = tabIndex(tab.target);
        cloneTabs(tabsNum);
        slideLeft(tabsNum);
    }

    return(
        <nav className='slider' ref={slider}>
            <div className="slider-item scaleFont"
                id='About' ref={addToTabsRefs} >About</div>

            <div className="slider-item"
                id='Projects' ref={addToTabsRefs} >Projects</div>

            <div className="slider-item"
                id='Education' ref={addToTabsRefs} >Education</div>

            <div className="slider-item"
                id='Skills' ref={addToTabsRefs} >Skills</div>

            <div className="slider-item"
                id='Hobbies' ref={addToTabsRefs} >Hobbies</div>
        </nav>
    );
}

export default Tabs;