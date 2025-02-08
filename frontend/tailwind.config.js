/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "300px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1400px",
      // // => @media (min-width: 1280px) { ... }

      "2xl": "1500px",
      // // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        barlow: [ 'Barlow'],
        manrope: [ 'Manrope'],
        dm: [ 'DM Sans'],
        yan: [ 'Yantramanav'],
        Mulish: [ 'Mulish'],
        inter: ['Inter'],
        sand: ['Quicksand'],
        roboto: ['Roboto'],
        space: ['Space Grotesk'],
        pop: ['Poppins'],
        syne: ['Syne'],
        plus: ['Plus Jakarta Sans'],
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        spinfast: 'spin 0.5s linear infinite',
      },
    },
  },
  plugins: [],
};
