import React from 'react';

const About = ({className}) => {
    return(
        <div className={ `page ${className}`}>
            <p className='about-me'>
                My name is Mohamad Yabroudi and I am a web developer. Being a web developer has always been my dream. Now, I am making it the reality! Coming from Syria, in 2014, with no English knowledge, to becoming a computer science graduate, with a 2:1 degree, in seven years was a tough challenge that I am proud of accomplishing. 
                <br/>
                My passion for web development is derived from the fact that the web brings people closer, despite the distances.
                <br/>
                Additionally, it is an infinite medium to develop new and creative ideas. 
                I am currently available for new challenges, and I am looking forward to future opportunities to add them to my career and achievements.<br/>
                Contact me to be my next opportunity!
            </p>
            <div className='me'>
                Image
            </div>
        </div>
    );
}

export default About;