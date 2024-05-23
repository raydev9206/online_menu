/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#E05729',
      primaryLite: '#F2B9A6',
      white: '#FFF'
    },
    keyframes: {
      enterFromRight: {
        from: { opacity: 0, transform: 'translateY(200px)' },
        to: { opacity: 1, transform: 'translateY(10)' }
      },
      enterFromLeft: {
        from: { opacity: 0, transform: 'translateX(-200px)' },
        to: { opacity: 1, transform: 'translateX(0)' }
      },
      exitToRight: {
        from: { opacity: 1, transform: 'translateX(0)' },
        to: { opacity: 0, transform: 'translateX(200px)' }
      },
      exitToLeft: {
        from: { opacity: 1, transform: 'translateX(0)' },
        to: { opacity: 0, transform: 'translateX(-200px)' }
      },
      scaleIn: {
        from: { opacity: 0, transform: 'rotateX(-10deg) scale(0.9)' },
        to: { opacity: 1, transform: 'rotateX(0deg) scale(1)' }
      },
      scaleOut: {
        from: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
        to: { opacity: 0, transform: 'rotateX(-10deg) scale(0.95)' }
      },
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 }
      },
      fadeOut: {
        from: { opacity: 1 },
        to: { opacity: 0 }
      }
    },
    animation: {
      scaleIn: 'scaleIn 200ms ease',
      scaleOut: 'scaleOut 200ms ease',
      fadeIn: 'fadeIn 200ms ease',
      fadeOut: 'fadeOut 200ms ease',
      enterFromLeft: 'enterFromLeft 250ms ease',
      enterFromRight: 'enterFromRight 250ms ease',
      exitToLeft: 'exitToLeft 250ms ease',
      exitToRight: 'exitToRight 250ms ease'
    },
    fontFamily: {
      Roboto: ['Roboto', 'normal'],
      RobotoItalic: ['RobotoItalic', 'italic'],
      RobotoCondensed: ['RobotoCondensed', 'condensed']
    },
    extend: {
      screens: {
        xs: '360px',
        tb: '768px',
        sm: '1024px',
        md: '1366px',
        lg: '1920px'
      }
    }
  },
  plugins: []
}
