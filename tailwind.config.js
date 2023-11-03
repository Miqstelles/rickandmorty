/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.jsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      'ALFASLAB': ["'Alfa Slab One'", 'serif'],
      'JOCKEYONE': ["'Jockey One'", 'sans-serif']
    },
    extend: {
      colors: {
        'green': '#97CE4C',
        'blue': {
          '100': '#BEE5FD',
          '200': '#01B4C6'
        },
        'pink': '#F675DA'
      },
    },
  },
  plugins: [],
}

