/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",],
  theme: {
    extend: {
      spacing: {
        '0.25': '0.075rem',
        '0.75': '0.2rem',
        '1/5': '20%',
        '1/6': '16.66666%',
        '1/8': '12.5%',
      },
      width: {
        '1/5': '20%'
      },
      lineHeight: {
        '12': '3rem',
      }
    },
  },
  plugins: [],
}

