/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dot-pattern": 'url("/img/dot_pattern.png")',
      },
    },
  },
  plugins: [],
};
