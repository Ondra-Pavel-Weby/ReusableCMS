/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#F45D00',
        secondary: '#BFC0C0',
        accent: '#3F4A5D',
        light: '#FFFFFF',
        dark: '#1E202C',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#F45D00',
          secondary: '#BFC0C0',
          accent: '#3F4A5D',
          neutral: '#1E202C', // text
          'base-100': '#FFFFFF', // background
        },
        dark: {
          primary: '#F45D00',
          secondary: '#BFC0C0',
          accent: '#3F4A5D',
          neutral: '#FFFFFF',
          'base-100': '#1E202C',
        },
      },
    ],
  },
}
