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
      backgroundImage: {
        'black-hole': "url('src/assets/rickandmorty_santaclaus.gif')"
      },
      screens: {
        sm1: '320px',
        sm2: '375px',
        sm3: '414px',
        md1: '768px',
        md2: '1024px',
        md3: '1280px',
        lg1: '1366px',
        lg2: '1440px',
        lg3: '1920px'
      },
      colors: {
        'personagem': 'md2:w-[580px] w-[600px] h-[220px] drop-shadow-2xl duration-[100ms] hover:bg-blue-200 border-[2px] border-blue-200',
        'green': '#97CE4C',
        'blue': {
          '100': '#BEE5FD',
          '200': '#01B4C6'
        },
        'pink': '#F675DA'
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwind-scrollbar')]
}

