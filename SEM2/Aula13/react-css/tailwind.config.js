/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Adição de cores específicas
      colors: {
        primaryFiap: '#ed145b'
      }
    },
  },
  plugins: [],
}

