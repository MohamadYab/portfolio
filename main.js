"use strict"

/** Selectors */
const menuBtn = document.querySelector('.menu-btn'),
mobileNav = document.querySelector('.navigation'),
aboutPage = document.querySelector('#about'),
workPage = document.querySelector('#work'),
contactPage = document.querySelector('#contact'),
pages = document.querySelectorAll('.page'),
navItems = document.querySelectorAll('.nav-item');

/** Functions */
const activeNavHandler = (currectPageId) => {
    navItems.forEach(item => {
        if(item.dataset.page === currectPageId) {
            item.classList.add('active-nav-item');
            return;
        }
        item.classList.remove('active-nav-item');
    })
}

const jumptToSection = (item) => {
    switch (item.dataset.page) {
        case 'about':
            aboutPage.scrollIntoView();
            break;
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
/** Display navigation section by toggling classes to elements Classlists */
const toggleMobileNav = () => {
    menuBtn.classList.toggle('open');
    mobileNav.classList.toggle('open-nav');
}

/** Intersection observer */
const callback = (section, sectionWatcher) => {
    section.forEach(section => {
        if(!section.isIntersecting) return;
        activeNavHandler(section.target.id)
    })
}

const sectionWatcher = new IntersectionObserver (callback, {
    threshold: .6
});

pages.forEach(page => {
    sectionWatcher.observe(page);
});

/** Event Listeners */
menuBtn.addEventListener('click', toggleMobileNav);
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
        jumptToSection(item)
    })
})