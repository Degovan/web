import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import VueProgressBar from "vue-progressbar";

// import Scrollbar from 'smooth-scrollbar';
import "aos/dist/aos.css";
import "animate.css";
// css
require("./assets/css/main.css");
// require('./assets/css/animate.css');

Vue.config.productionTip = false;
Vue.component("ion-icon");

Vue.use(VueProgressBar, {
  color: "#750FE7",
  failedColor: "red",
  height: "10px",
});

new Vue({
  router,
  created() {
    AOS.init();
  },
  render: function(h) {
    return h(App);
  },
}).$mount("#app");

$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $("header").addClass("bg-head");
  } else {
    $("header").removeClass("bg-head");
  }
});

// setTimeout(function() {
//    document.querySelector(".bars-progress").style.width = "50%";
// }, 500);

// $(window).on("load", function() {
//     // Animate loader off screen
//      $(".preloader").fadeOut("slow");
//     setTimeout(function() {
//      document.querySelector(".bars-progress").style.width = "100%";
//      }, 1000);
//   });

$(document).on("change", ".up", function() {
  var names = [];
  var length = $(this).get(0).files.length;
  for (var i = 0; i < $(this).get(0).files.length; ++i) {
    names.push($(this).get(0).files[i].name);
  }
  // $("input[name=file]").val(names);
  if (length > 2) {
    var fileName = names.join(", ");
    $(this)
      .closest(".input-box")
      .find(".form-control")
      .attr("value", length + " files selected");
  } else {
    $(this)
      .closest(".input-box")
      .find(".form-control")
      .attr("value", names);
  }
});

let menu = document.querySelector(".menu");
let menuBar = document.querySelector(".menu-bar-mobile");
menu.addEventListener("click", function() {
  menuBar.classList.toggle("open");

  if (menuBar.classList.contains("open")) {
    // document.querySelector("#body").style.overflow = "hidden";
    menuBar.style.animation = "fadeInRight 0.9s ease";
    menuBar.style.display = "block";
  } else {
    menuBar.style.animation = "fadeOutLeft 0.6s ease";
    setTimeout(function() {
      menuBar.style.display = "none";
      // document.querySelector("#body").style.overflow = "auto";
    }, 300);
  }
});
router.afterEach((to, from, next) => {
  menuBar.style.display = "none";
});
// let openOverlay = document.querySelector(".open-modal");
// let overlay = document.querySelector(".overlay");
// openOverlay.addEventListener("click", function(){
//     document.body.style.overflow = "hidden";
//     // document.querySelector("#body").style.overflow = "hidden";
//     overlay.style.animation = "fadeInRight 0.4s ease";
//     overlay.style.display = "block";

//   });

// let closeOverlay = document.querySelector(".close-modal");
// closeOverlay.addEventListener("click", function() {
//   document.body.style.overflow = "auto";
//   overlay.style.animation = "fadeOutRight 0.4s ease";
//   setTimeout(function() {
//     overlay.style.display = "none";
//     // document.querySelector("#body").style.overflow = "auto";
//   }, 300);
// });

// document.querySelector(".btn-close").addEventListener("click", function(){
//   document.querySelector(".overlay").style.display = "none";
// });

// document.querySelector(".open-overlay").addEventListener("click", function(){
//   document.querySelector(".overlay").style.display = "block";
// });

// $(".owl-carousel").owlCarousel({
//   items: 1,
// });

// jangan hapus ini

// gsap.set('section.footer-container', { yPercent: -50 })

// const uncover = gsap.timeline({ paused:true })

// uncover
// .to('section.footer-container', { yPercent: 0, ease: 'none' })
// ;

// ScrollTrigger.create({
//   trigger: 'section.conclusion',
//   start: 'bottom bottom',
//   end: '+=75%',
//   animation: uncover,
//   scrub: true,
// })
