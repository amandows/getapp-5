const btn = document.querySelector('#menu-bar');
const menu = document.querySelector('#menu');
btn.addEventListener('click', () => {
  btn.classList.toggle('menu-bar-active');
  btn.classList.toggle('menu-bar');
  menu.classList.toggle('menu-active');
  menu.classList.toggle('menu');
})

