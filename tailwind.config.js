/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/*.{html,js}",
    "./dist/**/*.{html,js}",
  ],
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
          stark_hell: '#5CB6FF',
          hell: '#0A91FF',
          DEFAULT: '#0072CE',
          dunkel: '#004F8F',
          stark_dunkel: '#002D52',
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
          leicht_dunkel: '#212A45',
          dunkel: '#151B2B',
          stark_dunkel: '#0B0F17',
        },
      },
    },
  },
  darkMode: 'class',
}