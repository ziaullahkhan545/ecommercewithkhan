/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: "#0284c7",
        Secondary: "#15803d",
      },
    },
  },
  plugins: [],
};
