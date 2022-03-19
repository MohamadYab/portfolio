import {useState, useEffect, useRef} from 'react';

const useMatchMedia = (width = 1024) => { // Initial breakpoint with default value of 1024.
    // useState to return if the window was resized passed the breakpoint or not...
    const [resized, setResized] = useState(false);

    // a ref to assign the matchMedia to...
    const matchMediaRef = useRef(null);

    useEffect(() => {
        // Assign the matchMedia rule to the ref...
        matchMediaRef.current = window.matchMedia(`(min-width:${width}px)`);

        // Firat initial to check if the media query is true or false.
        const matched = matchMediaRef.current.matches;
        matched? setResized(true) : setResized(false);

        // A listener to check if the media query is true or false.
        const checkResized = (event) => {
            event.matches? setResized(true) : setResized(false);
        }

        matchMediaRef.current.addListener(checkResized);

        // Listener clean up function.
        return () => matchMediaRef.current.removeListener(checkResized);
    }, [width]);

    return resized;
}

export default useMatchMedia;