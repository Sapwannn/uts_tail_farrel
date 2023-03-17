/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {

      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif' ]
      },

      flexGrow: {
        5: '5'
      },

      backgroundColor: {
        body: "#e2e8e5",
        primary: "#00c8eb",
        nav: "#00a2c6",
      },

      backgroundImage: {
        'tailwind': "url('/src/img/bgtailwind.png')"
      },


      colors: {
        sapwannn: '#ff00ea',
        primary: '#5268F4',
        text: "#00a2c6",
      }
    },
  },
  plugins: [],
}
