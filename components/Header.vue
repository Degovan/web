<template>
  <div id="header">
    <header
      class="header fixed top-0 w-full p-2 z-40 lg:bg-transparent bg-white lg:border-none border-b"
    >
      <div class="container mx-auto max-w-6xl box-border">
        <div class="flex justify-between flex-wrap">
          <div class="head-logo flex-shrink-0 flex-wrap">
            <h2
              class="font-bold font-poppins text-2xl text-gray-700 tracking-tighter"
            >
              Degovan<span
                class="text-lg text-transparent background-animate bg-gradient-to-r from-current via-red-500 to-yellow-500 bg-clip-text"
                >.com</span
              >
            </h2>
          </div>

          <div
            class="item-navigation flex-grow ml-10 lg:block hidden lg:static -mt-2 absolute lg:right-auto right-0 lg:border-none top-0 lg:top-auto border-l lg:w-auto w-72 lg:p-0 p-5 lg:bg-transparent bg-white lg:z-0 z-40 lg:h-auto h-screen font-medium text-gray-900 font-quicksand lg:space-x-2 space-y-2 text-sm"
          >
            <Nuxt-link
              :to="menu.link"
              class="px-3 py-2 lg:inline-block block"
              v-for="menu in menuNav"
              :key="menu.name"
              >{{ menu.name }}</Nuxt-link
            >
            <button
              class="lg:hidden block px-3 py-2 text-current shadow-sm font-medium font-quicksand text-sm bg-white rounded-md"
            >
              Mari diskusikan
              <span class="ml-2 text-whitw"
                ><i class="bi bi-chat-left-dots"></i
              ></span>
            </button>
          </div>
          <div class="lg:block hidden">
            <button
              class="px-3 py-2 mr-5 text-current font-semibold font-quicksand text-sm bg-white rounded-md"
            >
              Hubungi via Whatsapp
              <span class="ml-2 text-whitw"
                ><i class="bi bi-whatsapp"></i
              ></span>
            </button>
          </div>
          <div class="lg:hidden block">
            <button
              class="bg-indigo-100 font-bold text-lg hover:bg-current hover:text-white px-4 py-1 rounded-md text-current"
            >
              <i class="bi bi-list"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style>
.item-navigation a {
  @apply hover:bg-gray-50 hover:shadow-sm hover:text-current rounded-md;
}

a.nuxt-link-exact-active {
  @apply bg-gray-50 shadow-sm   text-current rounded-md;
}

.background-animate {
  background-size: 400%;

  -webkit-animation: AnimationName 5s ease infinite;
  -moz-animation: AnimationName 5s ease infinite;
  animation: AnimationName 5s ease infinite;
}

@keyframes AnimationName {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>

<script>
export default {
  data() {
    return {
      menuNav: [
        {
          name: "Tentang",
          link: "/about",
        },
        {
          name: "Team",
          link: "/team",
        },
        {
          name: "Layanan",
          link: "/service",
        },
        {
          name: "Paket",
          link: "/paket",
        },
        {
          name: "Portfolio",
          link: "/portfolio",
        },
      ],
    };
  },
};
</script>
