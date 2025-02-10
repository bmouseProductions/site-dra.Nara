/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sentir-pele': "url('./assets/images/N-background.svg')",
      },
      backgroundSize: {
        'custom-100': '100%',
        'custom-80': '80%',
        'custom-50': '50%',
      },
      backgroundPosition: {
        'left-bottom': 'left bottom',
        'right-bottom': 'right bottom',
      },
      colors: {
        'sentir-pele': '#663210',
      },
    },
  },
  plugins: [],
}
