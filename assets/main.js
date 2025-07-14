// AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";

// Swiper
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

// Initialize AOS
AOS.init();




// Example Swiper setup
const swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView:5,
  spaceBetween:30,
  freeMode:true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
   breakpoints: {

    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

   
    768: {
      slidesPerView: 3,
      spaceBetween: 25,
    },

    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});