"use strict"

/** Selectors */
const workPage = document.querySelector('#work'),
contactPage = document.querySelector('#contact'),
navItems = document.querySelectorAll('.nav-item'),
form = document.querySelector('#form');

const jumptToSection = (item) => {
    switch (item.dataset.page) {
        case 'work':
            workPage.scrollIntoView();
            break;
        case 'contact':
            contactPage.scrollIntoView();
            break;
        default:
            break;
    }
}

/** Sending Form */
const submitForm = (e) => {
    e.preventDefault();
    console.log('test');

    const formData = new FormData(form);
    formData.append('service_id', 'gmail');
    formData.append('template_id', 'gmail');
    formData.append('user_id', 'VS0JMyFRa7-cuS9HL');

    const xhttp = new XMLHttpRequest(),
    url = 'https://api.emailjs.com/api/v1.0/email/send-form';

    xhttp.open('POST', url, true);
    xhttp.send(formData);

    xhttp.onreadystatechange = () => {
        if(xhttp.status != 200) {
            console.log('Something went wrong');
            return;
        };
    }
}

/** Event Listeners */
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
        jumptToSection(item)
    });
})

form.addEventListener('submit', submitForm);