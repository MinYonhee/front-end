/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",      // pega todos os arquivos do App Router
    "./src/components/**/*.{js,ts,jsx,tsx}" // se tiver uma pasta de componentes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
