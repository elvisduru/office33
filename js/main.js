// Typed Setup

var options = {
    strings: [
        `We offer creative working environments with unique entrepreneurial spirit.^1000\n`,
        `We provide tenant experience for agile workspaces.^1000\n`,
        `Meet.^500\n Collaborate.^500\n Grow.`,
    ],
    typeSpeed: 40,
    backSpeed: 0,
    smartBackspace: true,
    loop: true
}

var typed = new Typed('#hero-text', options);

// NAV

var openNavBtn = document.querySelector('.open-nav');
var closeNavBtn = document.querySelector('.close-nav');
var mobileNav = document.querySelector('.right-nav');

openNavBtn.addEventListener("click", function() {
    mobileNav.classList.add('slide-in')
})

closeNavBtn.addEventListener("click", function() {
    mobileNav.classList.remove("slide-in");
})