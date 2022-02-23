import React from 'react';
import Arrow from '../icons/Arrow';

const ContactForm = () => {
    // !NOTE: Remove Autocomplete='off' when finished.
    return (
        <form action='POST' id='contact-form' autocomplete='off'>
            <input type='text' name='name' id='name-input' placeholder='Name:' required />
            <input type='email' name='email' id='email-input' placeholder='Email:' required />
            <textarea type='text' name='message' id='message-input' placeholder='Message:' required />
            <button type='submit' name='submit' id='submit'>
                <span>Send Email</span>
                <span id='arrow-icon'>
                    <Arrow />
                </span>
            </button>
        </form>
    );
}

export default ContactForm;