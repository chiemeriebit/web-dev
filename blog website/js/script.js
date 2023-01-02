let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('icofont-close');
    navbar.classList.toggle('active');
    searchicon.classList.remove('icofont-close');
    searchform.classList.remove('active');
}
let searchicon = document.querySelector('#search-icon');
let searchform = document.querySelector('.search-form');

searchicon.onclick = () => {
    searchicon.classList.toggle('icofont-close');
    searchform.classList.toggle('active');
    menu.classList.remove('icofont-close');
    navbar.classList.remove('active');
}


window.onscroll  = () => {
    menu.classList.remove('icofont-close');
    navbar.classList.remove('active');
    searchicon.classList.remove('icofont-close');
    searchform.classList.remove('active');
}