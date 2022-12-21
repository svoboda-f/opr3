/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  plugins: [require("daisyui")],
  daisyUi: {
    themes: ["light", "dark"],
  },
};
