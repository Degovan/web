<template>
  <div id="app">
    <Header />
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

    <!--  <button class="floating-bar open-modal">
    <ion-icon name="chatbox-ellipses-sharp"></ion-icon>
    </button> -->
    <br />
    <transition name="router-anim" enter-active-class="" leave-active-class="">
      <router-view />
    </transition>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>
<script>
  import Header from "./components/Header.vue";
  export default {
    components: {
      Header,
    },
    mounted() {
      // tawk to API
      var Tawk_API = Tawk_API || {},
        Tawk_LoadStart = new Date();
      (function() {
        var s1 = document.createElement("script"),
          s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = "https://embed.tawk.to/6144366d25797d7a89ff6ce9/1ffp797un";
        s1.charset = "UTF-8";
        s1.setAttribute("crossorigin", "*");
        s0.parentNode.insertBefore(s1, s0);
      })();

      // progress bar
      this.$Progress.finish();
    },
    created() {
      //  [App.vue specific] When App.vue is first loaded start the progress bar
      this.$Progress.start();
      //  hook the progress bar to start before we move router-view
      this.$router.beforeEach((to, from, next) => {
        //  does the page we want to go to have a meta.progress object
        if (to.meta.progress !== undefined) {
          let meta = to.meta.progress;
          // parse meta tags
          this.$Progress.parseMeta(meta);
        }
        //  start the progress bar
        this.$Progress.start();
        //  continue to next page
        next();
      });
      //  hook the progress bar to finish after we've finished moving router-view
      this.$router.afterEach((to, from) => {
        //  finish the progress bar
        this.$Progress.finish();
      });
    },
  };
</script>
