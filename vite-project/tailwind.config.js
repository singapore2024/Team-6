/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#7848F4",
        lightPurple: "#F1ECFD",
        white: "#FFFFFF",
        grey: "#7E7E7E",
        darkBlue: "#080357",
        offwhite: "#F8F8FA",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        garamond: ["Garamond"],
        product: ["Product Sans"],
      },
    },
  },
  plugins: [],
}

