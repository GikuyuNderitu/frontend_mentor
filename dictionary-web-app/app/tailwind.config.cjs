const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      screens: {
        'tablet': '768px',
        'desktop': '1440px',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Lora', ...defaultTheme.fontFamily.serif],
        mono: ['Inconsolata', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        'input-bg': 'hsl(var(--input-bg-color) / <alpha-value>)',
        'primary-text': 'hsl(var(--primary-text-color) / <alpha-value>)',
        surface: 'hsl(var(--surface) / <alpha-value>)',

        /* Common Variables */
        'accent-text': 'hsl(var(--accent-text-color) / <alpha-value>)',
        'divider-color': 'hsl(var(--divider-color) / <alpha-value>)',
        'error-state': 'hsl(var(--error-state-color) / <alpha-value>)',
        'icon': 'hsl(var(--icon-color) / <alpha-value>)',
        'secondary-text': 'hsl(var(--secondary-text-color) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}