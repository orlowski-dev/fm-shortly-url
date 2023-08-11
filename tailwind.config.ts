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
      'cyan-saturated': '#9AE3E3',
      'dark-violet': ' #3b3054',
      'red': '#f46262',
      'gray': '#bfbfbf',
      'light-gray': '#EFF1F7',
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
      'x18': '1.125rem',
      'h1-d': ['5rem', {
        lineHeight: '5.625rem',
        fontWeight: 700,
        letterSpacing: '-0.125rem'
      }],
      'h1-m': ['2.625rem', {
        lineHeight: '3rem',
        fontWeight: 700,
        letterSpacing: '-0.0656rem'
      }],
      'h2-d': ['3rem', {
        lineHeight: '3rem',
        fontWeight: 700,
        letterSpacing: '-.0625rem'
      }],
      'h2-m': ['1.75rem', {
        lineHeight: '3rem',
        fontWeight: 700,
        letterSpacing: '-0.0437rem'
      }],
      'h2-28-m': ['1.75rem', {
        lineHeight: '3rem',
        fontWeight: 700,
        letterSpacing: '-0.0437rem'
      }],
      'h2-28-d': ['2.5rem', {
        lineHeight: '3rem',
        fontWeight: 700,
        letterSpacing: '-.0625rem'
      }],
      'h3-m': ['1.375rem', {
        fontWeight: 700,
      }],
      'p-d': ['1.375rem', {
        lineHeight: '2.25rem',
        fontWeight: 500,
        letterSpacing: '.0094rem'
      }],
      'p-m': ['1.125rem', {
        lineHeight: '1.875rem',
        fontWeight: 500,
        letterSpacing: '.0077rem'
      }],
      'p16': ['1rem', {
        lineHeight: '2.25rem',
        letterSpacing: '.0075rem',
        fontWeight: 500
      }]
    }
  },
  plugins: [],
}
export default config
