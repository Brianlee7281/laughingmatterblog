/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'primary': '#1a202c',
        'secondary': '#4a5568',
        'accent': '#718096',
      },
    },
  },
  plugins: [],
}
