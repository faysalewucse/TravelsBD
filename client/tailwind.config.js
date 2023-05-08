/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/assets/Rectangle 1.png')",
      },
      content: {
        search: "url('./src/assets/search.png')",
      },
      colors: {
        primary: "#F9A51A",
        primary2: "#E09417",
      },
    },
  },
  plugins: [],
};
