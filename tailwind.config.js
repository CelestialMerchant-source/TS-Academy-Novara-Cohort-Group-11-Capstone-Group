/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkBlue: '#051540',
          mediumBlue: '#19335e',
          accentBlue: '#164baf',
          accentBlueHover: '#1e4680',
          darkText: '#1a1a2e',
          bodyText: '#333333',
          mutedText: '#666666',
          bgInfo: '#f8f9fa',
          bgGallery: '#eef2f7',
          cellCategoryBg: '#c7daf5',
          cellCategoryText: '#0d3b66',
          cellSubcategoryBg: '#dae8f7',
          inlineAccent: '#0f2a44',
          borderInput: '#d0d0d0',
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
