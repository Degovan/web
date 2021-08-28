<template>
  <div class="about">
    <div class="boxab-v1">
      <div class="container">

        <div class="wrapper-box-ab-v1">
          <h1><span id="animate-split"><b>Teknologi</b> </span> <span id="animate-split">membuat</span> <span id="animate-split"> kami</span> <spam id="animate-split"><b>berkarya</b></spam> </h1>
          <br><br>

        </div>
    </div>
    <br><br><br>
    <div class="image-frame-community" data-aos="fade-left"></div>
     <div class="container">
        <br>
        <div class="wrapper-box-ab-v1">
          <div class="flex-ab-v1">
             <div class="column-ab-1">
              <h3 data-aos="fade-right">Our goal</h3>
            </div>
            <div class="column-ab-1" data-aos="fade-right">
              <p>Tujuan dan impian kami disini adalah membangun Sebuah Startup , yang menciptakan sebuah teknologi untuk mempermudah klien menjalankan ide bisnis  mereka, kami telah membantu dan mewujudkan permintaan dari klien menemukan solusi luar biasa untuk sebuah ide mereka, mengembangkan website dan aplikasi untuk kebutuhan bisnis atau portfolio yang berkesan. </p>
            </div>
          </div>
        </div>

        
    </div>
    </div>
    <div class="container">
      <div class="tool-skill">
        <div class="title-box-skill">
      <h2 data-aos="fade-up">Tools & Skill</h2>
      <div class="lines"></div>
    </div>
      <br><br>
      <div class="wrapper-icon-technology">
        <div class="wrapper-icon-brand" data-aos="fade-up">
          <div class="item-icon">
            <img src="../assets/image/teknologi/html.png" alt="degovan - html logo png">
          </div>
          <div class="item-icon">
         <img src="../assets/image/teknologi/css.png" alt="degovan - css logo png">
          </div>
          <div class="item-icon">
            <img src="../assets/image/teknologi/sass.png" alt="degovan - sass logo png">
          </div>
          <div class="item-icon">
           <img src="../assets/image/teknologi/js.png" alt="degovan - js logo png">
          </div>
          <div class="item-icon">
            <img src="../assets/image/teknologi/php.png" alt="degovan - php logo png">
          </div>
          <div class="item-icon">
            <img src="../assets/image/teknologi/mysql.png" alt="degovan - mysql logo png">
          </div>
          <div class="item-icon">
            <img src="../assets/image/teknologi/bootstrap.png" alt="degovan - bootstrap logo png">
          </div>
           <div class="item-icon">
            <img src="../assets/image/teknologi/node-js.png" alt="degovan - nodejs logo png">
          </div>
          <div class="item-icon">
            <img src="../assets/image/teknologi/vue.svg" alt="degovan - vue logo svg">
          </div>
          <div class="item-icon">
            <img src="../assets/image/teknologi/react.svg" alt="degovan - react logo svg">
          </div>
          <div class="item-icon">
            <img src="../assets/image/teknologi/laravel.jpg" alt="degovan - laravel logo jpg">
          </div>
          <div class="item-icon">
            <img src="../assets/image/teknologi/codeigniter.svg" alt="degovan - codeigniter logo png">
          </div>
          <div class="item-icon">
            <img src="../assets/image/teknologi/git.png" alt="degovan - git logo png">
          </div>
          <div class="item-icon">
            <img src="../assets/image/teknologi/vscode.png" alt="degovan - vscode logo png">
          </div>
        </div>
      </div>
    </div>
  </div>
    <br><br><br><br>
    <div class="svg-wrapper">
      <svg viewBox="0 0 120 28">
 <defs> 
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="
           1 0 0 0 0  
           0 1 0 0 0  
           0 0 1 0 0  
           0 0 0 13 -9" result="goo" />
      <xfeBlend in="SourceGraphic" in2="goo" />
    </filter>
     <path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
  </defs> 

   <!-- <use id="wave3" class="wave" xlink:href="#wave" x="0" y="-2" ></use>  -->
   <use id="wave2" class="wave" xlink:href="#wave" x="0" y="0" ></use>
 
 
  <g class="gooeff" filter="url(#goo)">
  
  <circle class="drop drop1" cx="1.2" cy="5.4" r="8.8"  />
  <circle class="drop drop2" cx="5.2" cy="5.1" r="7.5"  />
  <circle class="drop drop3" cx="10.2" cy="5.3" r="9.2"  />
    <circle class="drop drop4" cx="3.2" cy="5.4" r="8.8"  />
  <circle class="drop drop5" cx="14.2" cy="5.1" r="7.5"  />
  <circle class="drop drop6" cx="17.2" cy="4.8" r="9.2"  />
  <use id="wave1" class="wave" xlink:href="#wave" x="0" y="1" />
 </g>  
    <!-- g mask="url(#xxx)">
    <path   id="wave1"  class="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
    </g>
  </g -->

</svg>
</div>
<br><br><br>
    <Footer/>
  </div>
</template>
<script>
import gsap from 'gsap';
import Footer from '../components/Footer.vue'
export default {
    components: { 
      Footer
    },
}
let tl = gsap.timeline({
  defaults: {
    ease: "SlowMo.easeOut",
  }}

);
tl.to("#animate-split", {
  y:'0%',
  duration:0.7,
  stragger:0.2
    }
);
</script>