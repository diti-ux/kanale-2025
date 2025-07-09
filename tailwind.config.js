module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#00FF41", // matrix-green
        secondary: "#1A1A1A", // charcoal-900
        accent: "#00CC33", // green-600
        
        // Background Colors
        background: "#0D0D0D", // black-950
        surface: "#1F1F1F", // gray-900
        
        // Text Colors
        "text-primary": "#FFFFFF", // white
        "text-secondary": "#B3B3B3", // gray-400
        
        // Status Colors
        success: "#00FF41", // matrix-green
        warning: "#FFB800", // amber-500
        error: "#FF4444", // red-500
        
        // Additional Shades
        "matrix-green": {
          50: "#E6FFE9", // light-green-50
          100: "#CCFFD4", // light-green-100
          200: "#99FFAA", // light-green-200
          300: "#66FF7F", // light-green-300
          400: "#33FF55", // light-green-400
          500: "#00FF41", // matrix-green (primary)
          600: "#00CC33", // green-600 (accent)
          700: "#009926", // green-700
          800: "#006619", // green-800
          900: "#00330D", // green-900
        },
        
        // Gray Scale
        gray: {
          50: "#F9F9F9", // gray-50
          100: "#F3F3F3", // gray-100
          200: "#E6E6E6", // gray-200
          300: "#D9D9D9", // gray-300
          400: "#B3B3B3", // gray-400 (text-secondary)
          500: "#808080", // gray-500
          600: "#666666", // gray-600
          700: "#4D4D4D", // gray-700
          800: "#333333", // gray-800
          900: "#1F1F1F", // gray-900 (surface)
          950: "#0D0D0D", // gray-950 (background)
        },
        
        // Border Colors
        border: "rgba(255, 255, 255, 0.1)", // border-subtle
        "border-focus": "rgba(0, 255, 65, 0.3)", // border-focus
      },
      
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }], // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }], // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }], // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
      },
      
      spacing: {
        '18': '4.5rem', // 72px
        '88': '22rem', // 352px
        '128': '32rem', // 512px
      },
      
      borderRadius: {
        'lg': '8px',
        'md': '6px',
        'sm': '4px',
      },
      
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0, 255, 65, 0.1)',
        'glow': '0 0 20px rgba(0, 255, 65, 0.1)',
        'glow-lg': '0 0 30px rgba(0, 255, 65, 0.15)',
        'elevation-1': '0 2px 8px rgba(0, 0, 0, 0.3)',
        'elevation-2': '0 4px 12px rgba(0, 0, 0, 0.3)',
        'elevation-3': '0 8px 24px rgba(0, 0, 0, 0.4)',
      },
      
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fade-in 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slide-up 300ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
      
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(0, 255, 65, 0.1)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(0, 255, 65, 0.2)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(10px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'micro': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '250': '250ms',
        '300': '300ms',
      },
      
      scale: {
        '98': '0.98',
        '95': '0.95',
      },
      
      backdropBlur: {
        'subtle': '8px',
      },
    },
  },
  plugins: [],
}