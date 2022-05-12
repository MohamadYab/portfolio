"use strict"

/** Selectors */
const menuBtn = document.querySelector('.menu-btn'),
mobileNav = document.querySelector('.navigation'),
aboutPage = document.querySelector('#about'),
workPage = document.querySelector('#about'),
contactPage = document.querySelector('#about');

/** Functions */

/** Display navigation section by toggling classes to elements Classlists */
const toggleMobileNav = () => {
    menuBtn.classList.toggle('open');
    mobileNav.classList.toggle('open-nav');
}


/** Event Listeners */
menuBtn.addEventListener('click', toggleMobileNav);