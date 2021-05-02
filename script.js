//CONST & VAR
const menuServices = document.querySelector('#services');
const menuExpandCont = document.querySelector('.menu-expand-container');
const menuContainer = document.querySelector('.menu-container');
const menuMobile = document.querySelector('.menu-mobile')
// const menuIcon = document.querySelector('.menu-icon');
// const closeIcon = document.querySelector('.close-icon');

menuExpandCont.style.display = 'none';
menuContainer.style.display = 'none';

menuServices.addEventListener('click', function(){
    if(menuExpandCont.style.display === 'none') {
        menuExpandCont.style.display = 'block';
    } else {
        menuExpandCont.style.display = 'none';
    }
})


//MOBILE MENU ICON
menuMobile.addEventListener('click', function() {
    menuMobile.classList.toggle("close-icon");
    menuMobile.classList.toggle("menu-icon");

    if(menuContainer.style.display === 'none') {
        menuContainer.style.display = 'block';
    } else {
        menuContainer.style.display = 'none';
    }
})