<template>
<div id="app">
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <!-- <div class="preloader">
    <h2>DGV<b>.</b></h2>
    <div class="wrapper-progressbar">
          <div class="progress-bar"><div class="bars-progress"></div></div>
    </div>
    <br>
  </div> -->
  <header class="header" id="header">
    <div class="container-head">
      <div class="title-brand">
        <a href="/"><h1>Degovan<b>.</b></h1></a>
      </div>
      <div class="button-bars">
        <button class="menu" onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))" aria-label="Main Menu">
        <svg width="40" height="40" viewBox="0 0 100 100">
          <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
          <path class="line line2" d="M 20,50 H 80" />
          <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
        </svg>
        </button>
      </div>
      <div class="menu-bar">
        <div class="menu-wrap">
        <a href="/what-we-do">Apa yang kami lakukan?</a>
        <a href="/about">Tentang kami</a>
        <a href="/project">Project</a>
      </div>
      </div>
    </div>
  </header>
    <button class="floating-bar open-modal">
    <ion-icon name="chatbox-ellipses-sharp"></ion-icon>
    </button>
    <div class="overlay">
      <div class="head-overlay">
        <div class="container">
          <h2>Degovan<b>.</b></h2>
            <button class="btn-close close-modal">Close</button>
        </div>
      </div>
      <div class="container">
      <div class="wrapper-overlay">
        <div class="column-overlay">
          <h1>Hallo, bicarakan tentang ide project mu!</h1>
            <h1>👋😁</h1>
        </div>
        <div class="column-overlay">
          <form action="" method="POST">
            <div class="form-submit-project">
              <div class="input-box">
                <input type="text" name="nama_client" placeholder="Siapa nama mu?">
              </div>
              <div class="input-box">
                <input type="text" name="email_client" placeholder="Alamat email mu?">
              </div>
              <div class="textarea-box">
                <textarea name="pesan_client" id="" cols="30" rows="10" placeholder="Tulis pesan mu"></textarea>
              </div>
              <br><br>
              <div class="input-box">
               
                  <div class="input-file">
                    <label for="up">Tambah tugas atau project <span class="icon-upload"><ion-icon name="cloud-upload-outline"></ion-icon></span></label>
                  </div>
                <input type="file" class="upload up" id="up" onchange="readURL(this);" accept=".png,.jpeg,.jpg,.svg,.sketch,.pdf,.doc,.docx,.ppt,.pptx,image/png,image/jpg,image/jpeg,application/pdf,application/vnd.sealed-ppt,application/vnd.sealed-doc,application/msword,image/svg+xml" multiple hidden/>
                 <input type="text" class="form-control" readonly>
              </div>
            </div><br><br>
            <button class="btn-submit">Submit</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  <br/>
    <router-view/>
</div>
</template>
