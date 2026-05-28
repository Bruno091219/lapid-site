/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#FDF8F2',
          100: '#F5EBD8',
          200: '#EBD4AF',
          300: '#D4B896',
          400: '#BEA885',
          500: '#A8906E',
          600: '#9D7147',
          700: '#7A5535',
          800: '#583C24',
          900: '#3A2615',
        },
        cream: '#FAFAF8',
        onyx: '#0A0A0A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #9D7147 0%, #BEA885 50%, #D4B896 100%)',
        'gold-gradient-h': 'linear-gradient(90deg, #9D7147 0%, #BEA885 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0A 0%, #141414 100%)',
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(157,113,71,0.15) 0%, transparent 70%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-gold': 'pulseGold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      boxShadow: {
        'gold': '0 4px 24px rgba(157,113,71,0.25)',
        'gold-lg': '0 8px 48px rgba(157,113,71,0.3)',
        'glass': '0 8px 32px rgba(0,0,0,0.12)',
        'card': '0 2px 16px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
