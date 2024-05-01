/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein100: "slidein 1s ease 700ms forwards",
        slidein200: "slidein 1s ease 1400ms forwards",
        slidein300: "slidein 1s ease 2100ms forwards",
        slidein400: "slidein 1s ease 2800ms forwards",
      },
      colors: {
        primary: "#050816",
        secondary: "#8060B6",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/pxfuel.jpg')",
        "universe-pattern": "url('/src/assets/universe.jpg')",
      },
    },
  },
  plugins: [],
};
