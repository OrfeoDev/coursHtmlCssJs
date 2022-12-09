const menu = document.querySelector('.liste-nav');
const btnMenu = document.querySelector('.btn-toggle_container');

btnMenu.addEventListener('click',()=>{
    menu.classList.toggle('active-menu')
})