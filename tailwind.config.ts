import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'cyan': '#2acfcf',
      'dark-violet': ' #3b3054',
      'red': '#f46262',
      'gray': '#bfbfbf',
      'grayish-violet': '#9e9aa7',
      'very-dark-blue': ' #35323e',
      'very-dark-violet': '#232127',
      'white': '#fff',
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
    fontSize: {
      sm: '0.8rem',
      base: '0.938rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      'x18': '1.125rem'
    }
  },
  plugins: [],
}
export default config
