import type { Config } from 'tailwindcss'
const { fontFamily } = require("tailwindcss/defaultTheme")

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
      fontFamily: {
        sans: ['var(--font-satoshi)', ...fontFamily.sans],
        // TODO pick and add default serif font
        // other fonts:
        arimo: ['var(--font-arimo)', ...fontFamily.sans], // Arimo 
        inter: ['var(--font-inter)', ...fontFamily.sans], // Inter
      },
    },
  },
  plugins: [],
}
export default config
