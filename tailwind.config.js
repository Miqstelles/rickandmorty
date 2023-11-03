/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    colors: {
      'green': '#97CE4C',
      'blue': {
        '100': '#BEE5FD',
        '200': '#01B4C6'
      },
      'pink': '#F675DA'
    },
    extend: {},
  },
  plugins: [],
}

