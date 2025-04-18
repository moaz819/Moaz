let menu = decoment.querySelector('#menu-icon');
let navbar = decoment.querySelector('.navbar');
let header = decoment.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
window.addEventListener('scroll',() => {
header.classList.toggle('shadow',window.scrollY>0)
});
sr.reveal('.text-home',{delay:200, origin:'top'})
sr.reveal('.text-img',{delay:400, origin:'top'})
sr.reveal('.about-title, .about-text ,.heading, .box ,.input ,.textarea' ,{delay:400, origin:'top'})