import React, {createContext, useContext, useEffect, useState } from 'react';

/** Initial Values of the context */
const ViewportContext = createContext({
    isDesktop: window.innerWidth > 1024,
    width: window.innerWidth
});

/** Provider */
export const ViewportProvider = ({children}) => {
    /** States */
    const [width, setWidth] = useState(window.innerWidth);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

    /** Handle the resizing of the screen */
    const handleResize = () =>{
        setWidth(window.innerWidth);
        setIsDesktop(window.innerWidth > 1024);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
        <ViewportContext.Provider value={{isDesktop, width}} >
            {children}
        </ViewportContext.Provider>
    );
}

export function useViewport() {
    return useContext(ViewportContext);
}