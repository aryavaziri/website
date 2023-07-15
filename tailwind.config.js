/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",],
  theme: {
    screens: {
      'sm': '450px',
      'md': '899px',
    },
    extend: {
      boxShadow: {
        'arya': '0 0 15px -5px',
      },
      aspectRatio: {
        '1/2': '1 / 2',
      },
      minWidth: {
        '50vh': '50vh',
        '37vh': '38vh',
        '50vw': '50vw'
      },
      maxWidth: {
        '50vh': '50vh',
        '37vh': '38vh',
        '50vw': '50vw',
        '75vh': '75vh',
      },
      maxHeight: {
        '50vh': '50vh',
        '75vh': '75vh',
      },
      colors: {
        'c1': '#aac8c8'
      },
      spacing: {
        '0.25': '0.075rem',
        '0.75': '0.2rem',
        '1/5': '20%',
        '3/4': '75%',
        '4/5': '80%',
        '1/6': '16.66666%',
        '1/8': '12.5%',
        '-1/4': '-25%',
        '-1/2': '-50%',
        '50p': '50%',
        '37vh': '38vh',
        '75vh': '75vh',
        'arya': '-20%',
      },
      width: {
        '1/5': '20%',
        '1/6': '16.66666%',
        '1/8': '12.5%',
      },
      lineHeight: {
        '12': '3rem',
      },
      zIndex: {
        '9910': '-10',
        '9905': '-5',
      }
    },
  },
  plugins: [],
}

