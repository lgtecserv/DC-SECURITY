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
        navy: {
          950: '#070D18',
          900: '#0B1528',
          800: '#102244',
          700: '#183466',
          600: '#234C94',
        },
        shield: {
          blue: '#0056B3',
          light: '#0A84FF',
          accent: '#00D2FF',
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
