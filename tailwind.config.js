/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "black": "var(--primary-color)",
        "orange": "var(--secondary-color)",
        "brown":"var(--body-text-color)",
        "grey":"var(--background-color)"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

