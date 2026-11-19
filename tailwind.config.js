/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#102147',
          accent: '#C35614',
          accentHover: '#A7450D',
          dark: '#0C1835',
        },
        navy: {
          950: '#070D18',
          900: '#102147',
          800: '#142959',
          700: '#183466',
          600: '#234C94',
        },
        shield: {
          blue: '#102147',
          light: '#1B3878',
          accent: '#C35614',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F4D068',
          dark: '#AA8518',
        }
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
