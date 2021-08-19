 <template>
  <div class="home">
    <button class="floating-bar">
    <ion-icon name="chatbox-ellipses-sharp"></ion-icon>
    </button>
    <div class="box-v1">
    <div class="container">
      <div class="flex-1">
      <div class="column-flex-1">
        <div class="column-body">
           <h2>Konsultasi <b>Ide</b> Anda Bersama <b>Spesialis</b> kami.</h2><br/>
           <p>Kami bersedia untuk mewujudkan ide yang anda punya dengan developer spesialis dari tim kami.</p><br/>
           <button class="btn btn-radius btn-primary">Ayo, kita bicarakan!</button><router-link to="/project"><button class="btn btn-radius btn-default right-button">Lihat Project</button></router-link>
        </div>
      </div>
      <div class="column-flex-1">
        <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_7ijjquao.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
        <br><br>  
      </div>
    </div>
    </div>
  </div>
  <div class="box-v2">
    <div class="flex-2">
      <div class="column-flex-2">
        <h2>Secure payment</h2>
        <br/>
         <h1>Cara sistem kami agar aman dalam pembayaran.</h1>
            <div class="lines"></div>
         <br/>
         <div class="wrapper-card">
           <div class="card">
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
            <div class="card">
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
            <div class="card">
            <div class="card-icons">
              <ion-icon name="laptop-outline"></ion-icon>
            </div>
             <div class="card-body">
               <div class="title-card">
                 <h3>Full/Demo Aplikasi</h3>
               </div><br/>
               <div class="card-content">
                 <p>Tim kami akan menyelesaikan semua fitur-fitur dan sementara sourcecode akan kami tahan sebelum anda melunasinya.</p>
               </div>
             </div>
           </div>
            <div class="card">
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
    <div class="container">
    <div class="title-box">
    <h2>Projects</h2>
    <h1>Pekerjaan kita</h1>
    <div class="lines"></div>
    <br/>
    <div class="wrapper-projects"> 
     <div class="project-image">
       300 x 300      
    </div>
     <div class="project-image">
       300 x 300      
    </div><br/>            
    </div>
  </div>   
    </div> 
  </div><br><br>
  <section class="conclusion"></section>
<footer class="footer">
  <section class="footer-container">
  <div class="body-footer">
      <div class="container">
        <h1>Degovan.</h1>
        <a href=""><h2>Punya ide, ayo kita bahas</h2></a>
        <br><br>
        <a href="">info@degovan.com</a>
        <div class="menu-footer">
            <a href="https://intagram.com/degovan.it/"><ion-icon name="logo-instagram"></ion-icon> degovan.it</a>
            <a href="javascript:void(0)"><ion-icon name="logo-linkedin"></ion-icon> degovan</a>
            <a href="https://intagram.com/degovan.it/"><ion-icon name="logo-whatsapp"></ion-icon> +685853656272</a>
        </div>
        <div class="copyright-footer">
          <p>&copy; Degovan All Rights Reserved</p>
        </div>
      </div>
    </div>    
  </section>
</footer> 
</div>
</template>
