import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', `./app/*.{js,ts,jsx,tsx,mdx}`],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {},
  plugins: [require('@tailwindcss/forms')],
}
export default config
