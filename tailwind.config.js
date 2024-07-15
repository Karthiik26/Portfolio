/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 2s linear infinite',
        'wave': 'wave 2s linear infinite',
       },
       keyframes: {
        wave: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-1%)' },
          '100%': { transform: 'translateX(0)' },
        }
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgb(232, 84, 84) 0%, rgba(245, 198, 208, 0.922) 70%, rgba(255, 255, 255, 0.896796218487395) 100%)',
        'custom-gradient-2': 'linear-gradient(0deg, rgb(232, 84, 84) 0%, rgba(245, 198, 208, 0.922) 70%, rgba(255, 255, 255, 0.896796218487395) 100%)',
      },
    },
  },
  plugins: [],
}

