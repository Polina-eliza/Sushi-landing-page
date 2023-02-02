const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar__list');
const navbarItems = document.querySelectorAll('.navbar__item');

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
})

document.querySelectorAll('.navbar__item').forEach(n => n.
    addEventListener('click', () => {
        hamburger.classList.remove('active');
        navbar.classList.remove('active');
}));

navbarItems.forEach(item => {
  item.addEventListener('click', function() {
    navbarItems.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
  });
});