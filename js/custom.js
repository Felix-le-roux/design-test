const menuBtn = document.querySelector('.menu-btn');
const sideBar = document.querySelector('.side-bar');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    sideBar.classList.add('open');
    menuOpen = true;
  } else {
    sideBar.classList.remove('open');
    menuOpen = false;
  }
});

const linkColor = document.querySelectorAll('.nav__link');

function changeActive() {
  linkColor.forEach((l) => l.classList.remove('active'));
  this.classList.add('active');
}

linkColor.forEach((l) => l.addEventListener('click', changeActive));
