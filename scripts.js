var burger = document.querySelector('.nav-btn')
var navLinks = document.querySelector('nav ul')

burger.addEventListener('click', function () {
  navLinks.classList.toggle('show')
})
