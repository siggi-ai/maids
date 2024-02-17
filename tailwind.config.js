/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bangers: ['Bangers'],
        honk: ['Honk'],
      },
      backgroundImage: {
        'cherry': 'url("/images/Anime-Cherry-Blossom-Background-Full-HD.jpg")',
      }
    },
  },
  plugins: [],
}

