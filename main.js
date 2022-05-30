"use strict"

/** Selectors */
const workPage = document.querySelector('#work'),
contactPage = document.querySelector('#contact'),
navItems = document.querySelectorAll('.nav-item'),
form = document.querySelector('#form'),
goTop = document.querySelector('.go-top');

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

/** Scrolling effect */
const debounce = (callback, delay = 150) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callback(...args);
        }, delay);
    }
}

const pageScroll = debounce(() => {
    if(!window.scrollY > 0) {
        goTop.classList.remove('display-to-top');
        return;
    }
    goTop.classList.add('display-to-top');
});

/** Sending Form */
const submitForm = (e) => {
    e.preventDefault();

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
window.addEventListener('scroll', pageScroll);

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
        jumptToSection(item)
    });
})

form.addEventListener('submit', submitForm);