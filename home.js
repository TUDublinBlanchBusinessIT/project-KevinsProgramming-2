const navList = document.querySelector('ul');

window.addEventListener('resize', function () {
  if (window.innerWidth <= 600) {
    navList.classList.add('show');
  } else {
    navList.classList.remove('show');
  }
});