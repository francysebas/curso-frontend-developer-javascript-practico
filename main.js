const menuEmail= document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

//quitar y mostrar (intercambiar el menú)
menuEmail.addEventListener('click', toggleDesktopmenu);

function toggleDesktopmenu(){
  desktopMenu.classList.toggle('inactive');
}