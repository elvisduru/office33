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