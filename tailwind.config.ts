import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          bg: '#FAFAFA',
          text: '#1D1D1F',
          secondary: '#6E6E73',
          tile: '#AABAD6',
          divider: '#D2D2D7',
        },
      },
      fontFamily: {
        apple: ['-apple-system', 'BlinkMacSystemFont', 'Inter', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.04em',
        snug: '-0.02em',
      },
    },
  },
  plugins: [],
}

export default config
