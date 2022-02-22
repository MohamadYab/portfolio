import React from 'react';

const ContactForm = () => {
    // !NOTE: Remove Autocomplete='off' when finished.
    return (
        <form action='POST' id='contact-form' className='container' autocomplete='off'>
            <input type='text' name='name' id='name-input' placeholder='Name:' required />
            <input type='email' name='email' id='email-input' placeholder='Email:' required />
            <textarea type='text' name='message' id='message-input' placeholder='Message:' required />
            <button type='submit' name='submit' id='submit'>Send Email
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="1.2em" height="1.2em" viewBox="0 0 139 124"
                preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0,124) scale(0.1,-0.1)"
                    fill="currentcolor" stroke="none">
                    <path d="M621 1222 c-65 -35 -90 -125 -52 -188 10 -17 82 -84 159 -150 l140
                    -119 -387 -5 c-351 -5 -389 -7 -414 -23 -64 -41 -84 -123 -47 -184 42 -69 32
                    -67 461 -73 l387 -5 -140 -119 c-77 -66 -149 -133 -159 -150 -66 -107 48 -241
                    166 -196 25 9 589 483 630 530 15 17 20 36 20 80 0 44 -5 63 -20 80 -41 47
                    -605 521 -630 530 -39 15 -76 12 -114 -8z"/>
                    </g>
                </svg>
            </button>
        </form>
    );
}

export default ContactForm;