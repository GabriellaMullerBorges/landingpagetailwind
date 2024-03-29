import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundImage:{
      'img_bg':"url('../assets/bg-hero.jpg')",
    },
    extend: { 
      colors: {
        'primary-blue':'#106EB0',
        'primary-orange':'#EC7000',
        'primary-gray':'#33303E',
        'secondary-gray': '#4E4B59',
        'gray-phone': '#f4f4f4',
        'txt-gray': '#7a7786',
        'opadity-gray':'rgba(100,80,57,0.1)'  
      }
    },
  },
  plugins: [],
}
export default config
