console.log("Hello World!");

import "./index.scss";
import AOS from "aos";
import 'aos/dist/aos.css'; 

import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
Swiper.use([Navigation, Pagination]);

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

function stickyMenu(el: Element) {
  let top = window.pageYOffset;
  if (top > 0) {
    if (el.className.indexOf('sticky') < 0) {
      el.classList.add("sticky")
    }
  } else {
    el.className = el.className.replace('sticky', '');
  }
}
window.addEventListener("scroll", function() {
  stickyMenu(document.getElementById("header"))
});

// function stickySecondMenu(el: Element) {
//   var top = window.pageYOffset || document.documentElement.scrollTop;
//   if (top > window.scrollY + document.querySelector('second-navigation').getBoundingClientRect().top) {
//     if (el.className.indexOf('top') < 0) {
//       el.classList.add("top");
//     }
//   } else {
//     el.className = el.className.replace(' top', '');
//   }
// }
// window.addEventListener("scroll", function() {
//   stickySecondMenu(document.getElementById("second-navigation"))
// });

const navbar_mobile = document.getElementById("navigation-mobile");
let navigation = document.querySelector(".topbar__mobile__navigation");
navbar_mobile.addEventListener("click",function(){
  navigation.classList.toggle("sticky__bar");
})

let navbar_mobile_close = document.getElementById("btn-close");
navbar_mobile_close.addEventListener("click",function(){
  navigation.classList.toggle("sticky__bar");
})

 
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  slidesPerView: 1,
  spaceBetween: 10,
  // using "ratio" endpoints
});