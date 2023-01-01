/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/src/components/images/Hero Img/hero.jpg')",
        "service-pattern":
          "url('/src/components/images/Logo/hatching-2460786_1920.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
