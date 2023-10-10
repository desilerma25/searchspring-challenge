/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    fontFamily: {
      SuperDream: ["SuperDream", "sans-serif"]
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({})],
}

