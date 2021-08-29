 <template>
  <div class="home">
    <div class="box-v1">
    <div class="container">
      <div class="flex-1">
      <div class="column-flex-1">
        <div class="column-body">
           <h2>Konsultasi <b>Ide</b> Anda Bersama <b>Spesialis</b> kami.</h2><br/>
           <p>Kami bersedia untuk mewujudkan ide dengan developer spesialis dari tim kami.</p><br/>
           <button id="openModal" class="btn btn-radius btn-primary">Ayo, kita bicarakan!</button><router-link to="/project"><button class="btn btn-radius btn-default right-button">Lihat Project</button></router-link>
        </div>
      </div>
      <div class="column-flex-1">
        <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_7ijjquao.json"  id="load" background="transparent"  speed="1"  loop  autoplay></lottie-player>
        <br><br>  
      </div>
    </div>
    </div>
  </div>
  <div class="box-v2">
    <div class="flex-2">
      <div class="column-flex-2">
        <h2 data-aos="fade-up">Secure payment</h2>
        <br/>
         <h1 data-aos="fade-down">Cara sistem kami agar aman dalam pembayaran.</h1>
            <div class="lines" data-aos="fade-left"></div>
         <br/>
         <div class="wrapper-card">
           <div class="card"  data-aos="fade-up">
            <div class="card-icons">
              <ion-icon name="chatbox-ellipses-sharp"></ion-icon>
            </div>
             <div class="card-body">
               <div class="title-card">
                 <h3>Konsultasi</h3>
               </div><br/>
               <div class="card-content">
                 <p>Cara pertama ini adalah cara menyampaikan ide anda atau fitur yang telah anda siapkan.</p>
               </div>
             </div>
           </div>
            <div class="card"  data-aos="fade-up">
            <div class="card-icons">
              <ion-icon name="card-sharp"></ion-icon>
            </div>
             <div class="card-body">
               <div class="title-card">
                 <h3>DP/Uang muka</h3>
               </div><br/>
               <div class="card-content">
                 <p>Tim kami akan menggarap fitur yang telah diberikan dengan pengerjaan 20% dan kemudian anda membayarnya.</p>
               </div>
             </div>
           </div>
            <div class="card"  data-aos="fade-up">
            <div class="card-icons">
              <ion-icon name="laptop-outline"></ion-icon>
            </div>
             <div class="card-body">
               <div class="title-card">
                 <h3>Demo Aplikasi</h3>
               </div><br/>
               <div class="card-content">
                 <p>Tim kami akan menyelesaikan semua fitur-fitur dan sementara sourcecode akan kami tahan sebelum anda melunasinya.</p>
               </div>
             </div>
           </div>
            <div class="card"  data-aos="fade-up">
            <div class="card-icons">
             <ion-icon name="options-sharp"></ion-icon>
            </div>
             <div class="card-body">
               <div class="title-card">
                 <h3>Maintenance & Deployment</h3>
               </div><br/>
               <div class="card-content">
                 <p>Kami siap membantu anda untuk mendeploy aplikasi yang sudah jadi untuk dilihat banyak orang dan kami siap untuk mengatasi bug atau error pada aplikasi yang terjadi kesalahan kami sendiri.</p>
               </div>
             </div>
           </div>
         </div>
      </div>
    </div>
  </div>
  <div class="box-v3">
    <div class="box-body-v3">
    <div class="container">
    <div class="title-box">
    <h2 data-aos="fade-up">Projects</h2>
    <h1 data-aos="fade-down">Pekerjaan kami</h1>
    <div class="lines" data-aos="fade-right"></div>
    <br/>
     </div> 
    <div class="wrapper-projects" data-aos="fade-up"> 
      <carousel :autoplay="true" :items="3" :nav="false" :responsive="{1440:{items:3,nav:false},768:{items:2,nav:false},425:{items:1,nav:false},375:{items:1,nav:false},320:{items:1,nav:false}}">
        <div class="item-carousel">
          <img src="../assets/image/project/p1.jpeg" alt="degovan project 1">
             <br>
          <h2>Salfood</h2>
          <br>
          <p>05 Januari 2021</p>
        </div>
        <div class="item-carousel">
          <img src="../assets/image/project/p2.jpeg" alt="degovan project 2">
             <br>
          <h2>KBC</h2>
          <br>
          <p>13 Maret 2021</p>
        </div>
        <div class="item-carousel">
          <img src="../assets/image/project/p3.jpeg" alt="degovan project 3">
             <br>
          <h2>SMK DARUL MUQOMAH</h2>
          <br>
          <p>14 April 2021</p>
        </div>
        <div class="item-carousel">
          <img src="../assets/image/project/p4.jpeg" alt="degovan project 4">
          <br>
          <h2>Sorot Daerah</h2>
          <br>
          <p>23 April 2021</p>
        </div>
      </carousel>
    </div>
  </div>
    </div> 
  </div><br><br>
  <div class="box-v4">
    <div class="container">
    <div class="wrap-counter">
      <div class="card-count">
        <div class="total-count">
          <h2 class="num1" data-aos="fade-up"></h2>
        </div><br>
        <p>Pelanggan puas</p>
      </div>
      <div class="card-count">
      <div class="total-count" data-aos="fade-down">
          <h2 class="num2"></h2>
        </div><br>
        <p>Project Selesai</p>
      </div>
      <div class="card-count">
        <div class="total-count">
          <h2 class="num3" data-aos="fade-up"></h2>
        </div><br>
        <p>Spesialis</p>
      </div>
    </div>
  </div>
  <br><br>
  </div>
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
<br><br><br><br>    
<Footer/>
</div>
</template>
<style scoped>

</style>

<script>

import carousel from 'vue-owl-carousel'
import Footer from '../components/Footer.vue'
export default {
    components: { 
      carousel, 
      Footer
    },
}

</script>