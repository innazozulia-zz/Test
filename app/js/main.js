let menu = document.querySelector('.menu__btn');
let navigation = document.querySelector('.header__menu');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navigation.classList.toggle('active');
}
window.onscroll = () => {
  menu.classList.remove('fa-times');
  navigation.classList.remove('active');
}


const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});