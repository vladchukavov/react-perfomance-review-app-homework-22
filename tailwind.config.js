/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-midnight-green': '#215A5D',
        'brand-teal': '#087F8C',
        'brand-uranian-blue': '#A0DDFF',
        'brand-periwinkle': '#C1CEFE',
        'brand-thistle': '#E7C8DD',
      },
    },
    fontFamily: {
      'playfair-display': ['Playfair Display', 'sans-serif'],
      montserrat: ['Montserrat', 'serif'],
    },
  },
  plugins: [],
};
