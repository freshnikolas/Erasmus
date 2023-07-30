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
        'blau': {
          stark_hell: '#5CB6FF',
          hell: '#0A91FF',
          DEFAULT: '#0072CE',
          dunkel: '#004F8F',
          stark_dunkel: '#002D52',
        },
        'hinten': {
          hell: '#ededee',
          dunkel_hover: '#202635',
          leicht_dunkel: '#212A45',
          dunkel: '#151B2B',
          stark_dunkel: '#0B0F17',
        },
        'text': {
          hell: '#151B2B',
          dunkel: '#ededee',
        },
        'karte': {
          hell: '',
          dunkel: '#252E49',
        },
      },
    },
  darkMode: 'class',
  }
}