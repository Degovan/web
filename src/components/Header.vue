<template>
  <div id="headerwrap">
    <header class="header" id="header">
      <div class="container-head">
        <div class="title-brand">
          <router-link to="/" exact
            ><h1>Degovan<b>.</b></h1></router-link
          >
        </div>
        <div class="button-bars">
          <button class="menu">
            <ion-icon name="menu-outline"></ion-icon>
          </button>
        </div>
        <div class="menu-bar">
          <div class="menu-wrap">
            <router-link to="what-we-do">Apa yang kami lakukan?</router-link>
            <router-link to="about">Tentang kami</router-link>
            <router-link to="event"
              >Event
              <label for=""><span class="badge">New</span></label></router-link
            >
            <router-link to="/project">Project </router-link>
            <!-- <router-link to="/feedback">Umpan balik </router-link> -->
          </div>
        </div>
        <div class="menu-bar-mobile">
          <div class="menu-wrap">
            <router-link to="what-we-do">Apa yang kami lakukan?</router-link>
            <router-link to="about">Tentang kami</router-link>
            <router-link to="event">Event</router-link>
            <router-link to="project">Project</router-link>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
