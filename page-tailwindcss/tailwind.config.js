/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.js",
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'blue-dark':'#252b42',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96px',
        '9xl': '128px',
      },
      borderRadius: {
        'ra': '35px',
      },
      backgroundImage: {
        'hero-pattern': "url('/imgic/Home_background.png')",
      }
    }
  },
  plugins: [],
}
