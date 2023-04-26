/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      carbone: {
        DEFAULT: '#30333F',
        secondary: '#1F2128',
        tertiary: '#1E1E1E',
      },
      gray: {
        DEFAULT: '#E5E5E5',
        dark: '#616268'
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      red:{
        light: '#F45B49'
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
