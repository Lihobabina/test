let hamburger = document.querySelector('.hamburger-menu');
let mobMenu = document.querySelector('.menu-mob');
hamburger.addEventListener('click', (e)=>{
    e.preventDefault();
    hamburger.classList.toggle('hamburger-active');
    mobMenu.classList.toggle('menu-mob-active')
})