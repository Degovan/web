<template>
  <div id="index">
    <section class="hero-section mt-28">
      <div
        class="container lg:max-w-6xl max-w-full box-border mx-auto lg:p-2 p-5"
      >
        <div class="lg:block hidden absolute right-0 top-0">
          <img
            src="../assets/mockup.png"
            class="clip-image object-cover lg:h-auto w-full"
            alt=""
          />
        </div>
        <div
          class="z-20 box-border lg:text-left text-center bg-[url('../assets/mockup.png')]"
        >
          <span
            class="px-5 py-2 bg-indigo-100 text-current rounded-full font-semibold text-xs font-quicksand"
          >
            👋 .kami juga menjual produk template dengan harga terjangkau
          </span>
          <div class="space-y-8 mt-5">
            <h1
              class="font-bold tracking-tighter font-poppins lg:text-5xl lg:mx-0 mx-auto text-4xl max-w-xl text-gray-800"
            >
              Konsultasi
              <span
                class="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text"
                >ide</span
              >
              mu bersama tim developer Spesialis dari kami.
            </h1>
            <p
              class="text-xs font-medium text-gray-500 font-quicksand max-w-lg lg:mx-0 mx-auto"
            >
              kami tidak hanya menyediakan jasa pembuatan kami juga bisa
              membantu anda dalam perbaikan, maintenance dan perancangan ulang
              website atau aplikasi android, Perlu anda ingat cuman perancangan
              ulang tidak termasuk dengan semua fitur yang ada, kami akan
              mengerjakan dengan harga tingkat kesulitan dan waktu yang akan
              diberikan.
            </p>
            <div class="wrapper-button space-x-5">
              <button
                class="px-5 py-3 bg-current lg:text-sm text-xs rounded-md shadow-md font-quicksand font-semibold text-white"
              >
                Mulai, Merencanakan
                <span class="ml-2"
                  ><i class="bi bi-arrow-right-circle"></i
                ></span>
              </button>
              <button
                class="px-5 py-3 bg-indigo-100 lg:text-sm text-xs rounded-md font-quicksand font-semibold text-current"
              >
                Beli Template
                <span class="ml-2"><i class="bi bi-cart3"></i></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="z-0 lg:hidden block mt-20">
        <img
          src="../assets/mockup-2.png"
          class="object-cover h-56 w-full bg-center"
          alt=""
        />
      </div>
    </section>
    <section class="hero-section-2 mt-28 h-screen">
      <div
        class="container lg:max-w-6xl max-w-full box-border mx-auto lg:p-2 p-5"
      >
        <div class="hero-title">
          <h2
            class="text-3xl text-gray-800 font-bold tracking-tighter font-poppins"
          >
            Bagaimana cara sistem pembayarannya?
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
.clip-image {
  width: 120vh;
  -webkit-clip-path: circle(64.1% at 75% 24%);
  clip-path: circle(64.1% at 75% 24%);
}
.image-mobile {
  height: 400px;
}
</style>
<script>
export default {
  name: "IndexPage",
};
</script>
