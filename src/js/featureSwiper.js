import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperFeature = () => {
  new Swiper('.swiper-feature', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 80,
    speed: 800,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      1440: {
        slidesPerView: 4.2,
      },
    },
  });
};

export default swiperFeature;
