import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperGallery = () => {
  new Swiper('.swiper-gallery', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 50,
    speed: 800,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 80,
      },
      1440: {
        slidesPerView: 3.7,
      },
    },
  });
};

export default swiperGallery;
