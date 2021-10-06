const button = document.getElementById('header-button')
const menu = document.getElementById('ul-header-menu')

button.addEventListener('click', () =>{
    menu.classList.toggle('header-menu-ul')
})