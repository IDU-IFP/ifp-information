let menu = document.querySelector('.menu');
let right = document.querySelector('.right');

function menuToggle() {
  let menuList = [];
  if (menu.classList.contains('on')) {
    menu.classList.remove('on');
    right.style.display = 'block';
  } else {
    menu.classList.add('on');
    right.style.display = 'none';
  }
}
