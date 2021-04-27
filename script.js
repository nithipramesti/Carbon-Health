//CONST & VAR
const menuServices = document.querySelector('#services');
const menuExpandCont = document.querySelector('.menu-expand-container');
menuExpandCont.style.display = 'none';

menuServices.addEventListener('click', function(){
    if(menuExpandCont.style.display === 'none') {
        menuExpandCont.style.display = 'block';
    } else {
        menuExpandCont.style.display = 'none';
    }
})