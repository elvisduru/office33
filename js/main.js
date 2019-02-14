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

// Enquiry form
var trigger = document.querySelector(".callout-btn");
var closeForm = document.querySelector("#schedule-form .fa-times");
var form = document.querySelector("#schedule-form");

trigger.addEventListener("click", function() {
	form.classList.remove("hide-form");
});

closeForm.addEventListener("click", function() {
	form.classList.add("hide-form");
});

window.addEventListener("scroll", function() {
    if (window.scrollY > 399) {
        trigger.classList.add("fix-btn");
    } else {
        trigger.classList.remove("fix-btn");
    }
});
