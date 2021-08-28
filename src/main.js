import Vue from 'vue';
import App from './App.vue';
import router from './router';
import AOS from 'aos';

// import Scrollbar from 'smooth-scrollbar';
import $ from 'jquery';
import "aos/dist/aos.css";
import "animate.css";
// css
require('./assets/css/main.css');
// require('./assets/css/animate.css');

Vue.config.productionTip = false


new Vue({
  created(){
    AOS.init();
   
  },
  router,
  render: function (h) { return h(App) }
}).$mount('#app')



$(window).on('scroll', function() {
  if ($(window).scrollTop()) {
    $('header').addClass('bg-head');
    document.querySelector(".floating-bar").style.display = "block";
  }else{
      $('header').removeClass('bg-head');
      document.querySelector(".floating-bar").style.display = "none";
  }
});
 
setTimeout(function() {
   document.querySelector(".bars-progress").style.width = "50%"; 
}, 500);

$(window).on("load", function() {
    // Animate loader off screen
     $(".preloader").fadeOut("slow");
    setTimeout(function() {
     document.querySelector(".bars-progress").style.width = "100%";
     }, 1000); 
  });
let menu = document.querySelector(".menu");
  let menuBar = document.querySelector(".menu-bar");
  menu.addEventListener("click", function(){
    menuBar.classList.toggle('open');
    
    if(menuBar.classList.contains('open')){
      // document.querySelector("#body").style.overflow = "hidden";
      menuBar.style.animation = "fadeInRight 0.9s ease";
      menuBar.style.display = "block";
    }else{
      menuBar.style.animation = "fadeOutLeft 0.6s ease";
      setTimeout(function() {
      menuBar.style.display = "none";
      // document.querySelector("#body").style.overflow = "auto";
      }, 300);
    }
  });

setTimeout(function() {
  document.querySelector(".info-internet").innerHTML = "Memuat halaman...";
}, 10000);


document.querySelector(".btn-close").addEventListener("click", function(){
  document.querySelector(".overlay").style.display = "none";
});


document.querySelector(".open-overlay").addEventListener("click", function(){
  document.querySelector(".overlay").style.display = "block";
});


document.querySelector(".open-modal").addEventListener("click", function(){
  document.querySelector(".overlay").style.display = "block";
});




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
