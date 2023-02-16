const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],

  theme: {
    extend: {
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans]
      },
      screens: {
        'tablet': '768px',
        'desktop': '1440px',
      },
      colors: {
        'dark-blue': '#13183F',
        'lavender': '#666CA3',
        'grey': '#83869A',
        'hot-pink': '#F74780',
        'pink': '#FFA7C3',

        'pink-gradient-start': 'hsl(322deg 87% 55%)',
        'pink-gradient-stop': 'hsl(13deg 100% 64%)',
        'purple-gradient-start': 'hsl(237deg 100% 64%)',
        'purple-gradient-stop': 'hsl(322deg 87% 55%)',
      },
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
}
