import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'toggle-btn': {
          '0%': {
            transform: 'scaleY(0)'
          },
          '80%': {
            transform: 'scaley(1.2)'
          },
          '100%': {
            transform: 'scaleY(1)',
          },
        }
      },
      animation: {
        'toggle-btn': 'toggle-btn 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}
export default config
