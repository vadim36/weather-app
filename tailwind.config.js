/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'],
  theme: {
    extend: {
      keyframes: {
        'slide-top': {
          'from': { top: '0', 'z-index': '-10' },
          '50%': { top: '6rem' },
          '100%': { 'z-index': '10', top: '6rem' }
        }
      },
      animation: {
        'slide-top': '400ms linear slide-top forwards'
      }
    }
  },
  plugins: [],
}