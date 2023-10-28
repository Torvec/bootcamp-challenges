/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1536px',
    },
    fontFamily: {
      'sans': ['Fira Sans', 'sans-serif'],
      'mono': ['Fira Mono', 'monospace'],
    },
    extend: {
      colors: {
        'lightbluegray': '#ECEFF1',
        'darkbluegray': '#455A64',
        'white': '#F8FAFC',
        'black': '#0C1D27',
        'darkgray': '#5C6970',
        'orange': '#FF6D00',
      },
    },
  },
  plugins: [],
}