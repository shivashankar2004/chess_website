/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        parallax: "url('./assests/Home.jpg')", // Ensure the correct path to your image
      },
    },
  },
  plugins: [],
};
