import Vue from 'vue'
import App from './App.vue'
import router from './router'
import $ from 'jquery'
// css
require('./assets/css/main.css');
require('./assets/css/animate.css');

Vue.config.productionTip = false

new Vue({
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

gsap.set('section.footer-container', { yPercent: -50 })

const uncover = gsap.timeline({ paused:true })

uncover
.to('section.footer-container', { yPercent: 0, ease: 'none' })
;

ScrollTrigger.create({  
  trigger: 'section.conclusion',
  start: 'bottom bottom',
  end: '+=75%',
  animation: uncover,
  scrub: true,  
})
