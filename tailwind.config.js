module.exports = {
  purge: [],
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        header: "#001E26",
        current: "#420FE7",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        quicksand: "'Quicksand', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
