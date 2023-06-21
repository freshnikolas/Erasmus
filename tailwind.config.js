/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'lila': {
          hell: '#EACEF3',
          DEFAULT: '#D6A1E7',
          dunkel: '#692580',
        },
        'blau': {
          hell: '#E8EBF7',
          DEFAULT: '#ACBED8',
          dunkel: '#4E73A6',
        },
        'gelb': {
          hell: '#F8E8C9',
          DEFAULT: '#F2D398',
          dunkel: '#E4A125',
        },
        'rot': {
          hell: '#F0BCBF',
          DEFAULT: '#E0777D',
          dunkel: '#D2373F',
          },
        'hinten': {
          hell: '#fff8f8',
          stark_dunkel: '#0D0410',
          dunkel: '#280C31',
          leicht_dunkel: '#421452',
        },
      },
    },
  },
  darkMode: 'class',
}