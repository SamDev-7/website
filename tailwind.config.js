module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      },
      screens: {
        '-sm': {'max': '640px'},
        '-md': {'max': '768px'},
        '-lg': {'max': '1024px'},
        '-xl': {'max': '1280px'},
        '-2xl': {'max': '1536px'},
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      }
    }
  },
  variants: {},
  plugins: [],
}

// https://play.tailwindcss.com/smOF7iXoXr
// npx tailwindcss -i ./tailwind.css -o ./main.css --watch
// npx postcss ./tailwind.css -o ./main.css
