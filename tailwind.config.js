module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Solana signature purple
        primary: {
          50: "#F3EFFF", // purple-50
          100: "#E6DBFF", // purple-100
          200: "#D4C4FF", // purple-200
          300: "#B89EFF", // purple-300
          400: "#A572FF", // purple-400
          500: "#9945FF", // purple-500 - main primary
          600: "#8B3AE6", // purple-600
          700: "#7C2FCC", // purple-700
          800: "#6D24B3", // purple-800
          900: "#5E1A99", // purple-900
          DEFAULT: "#9945FF", // purple-500
        },
        
        // Secondary Colors - Solana complementary green
        secondary: {
          50: "#EDFFF8", // green-50
          100: "#D1FFF0", // green-100
          200: "#A3FFE1", // green-200
          300: "#75FFD2", // green-300
          400: "#14F195", // green-400 - main secondary
          500: "#10D97F", // green-500
          600: "#0DC169", // green-600
          700: "#0AA953", // green-700
          800: "#07913D", // green-800
          900: "#047927", // green-900
          DEFAULT: "#14F195", // green-400
        },
        
        // Accent Colors - warm orange for CTAs
        accent: {
          50: "#FFF4F0", // orange-50
          100: "#FFE8E0", // orange-100
          200: "#FFD1C1", // orange-200
          300: "#FFBAA2", // orange-300
          400: "#FF9269", // orange-400
          500: "#FF6B35", // orange-500 - main accent
          600: "#E65A2E", // orange-600
          700: "#CC4927", // orange-700
          800: "#B33820", // orange-800
          900: "#992719", // orange-900
          DEFAULT: "#FF6B35", // orange-500
        },
        
        // Background Colors
        background: "#0D0E14", // slate-900 - deep navy-black
        surface: "#1A1B23", // slate-800 - elevated dark surface
        "surface-hover": "#252631", // slate-700
        
        // Text Colors
        "text-primary": "#FFFFFF", // white - maximum readability
        "text-secondary": "#A0A3BD", // slate-400 - muted purple-gray
        "text-muted": "#6B7280", // gray-500
        
        // Semantic Colors
        success: {
          50: "#EDFFF9", // teal-50
          100: "#D1FFF2", // teal-100
          200: "#A3FFE5", // teal-200
          300: "#75FFD8", // teal-300
          400: "#00D4AA", // teal-400 - main success
          500: "#00BF97", // teal-500
          600: "#00AA84", // teal-600
          700: "#009571", // teal-700
          800: "#00805E", // teal-800
          900: "#006B4B", // teal-900
          DEFAULT: "#00D4AA", // teal-400
        },
        
        warning: {
          50: "#FFFBEB", // yellow-50
          100: "#FFF7D6", // yellow-100
          200: "#FFEFAD", // yellow-200
          300: "#FFE784", // yellow-300
          400: "#FFDF5B", // yellow-400
          500: "#FFB800", // yellow-500 - main warning
          600: "#E6A600", // yellow-600
          700: "#CC9400", // yellow-700
          800: "#B38200", // yellow-800
          900: "#997000", // yellow-900
          DEFAULT: "#FFB800", // yellow-500
        },
        
        error: {
          50: "#FFF1F2", // red-50
          100: "#FFE4E6", // red-100
          200: "#FFC9CC", // red-200
          300: "#FFAEB3", // red-300
          400: "#FF7B85", // red-400
          500: "#FF4757", // red-500 - main error
          600: "#E63E4E", // red-600
          700: "#CC3545", // red-700
          800: "#B32C3C", // red-800
          900: "#992333", // red-900
          DEFAULT: "#FF4757", // red-500
        },
        
        // Border Colors
        border: "rgba(255, 255, 255, 0.1)", // white-10
        "border-focus": "rgba(153, 69, 255, 0.3)", // primary-30
      },
      
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // headings and body text
        mono: ['JetBrains Mono', 'monospace'], // data and code
        inter: ['Inter', 'sans-serif'], // explicit Inter usage
        'jetbrains': ['JetBrains Mono', 'monospace'], // explicit JetBrains usage
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
        '5xl': ['3rem', { lineHeight: '1' }], // 48px
        '6xl': ['3.75rem', { lineHeight: '1' }], // 60px
      },
      
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      
      boxShadow: {
        'primary': '0 4px 20px rgba(153, 69, 255, 0.15)', // primary shadow
        'secondary': '0 2px 10px rgba(153, 69, 255, 0.1)', // secondary shadow
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.12)', // subtle shadow
        'card': '0 4px 20px rgba(153, 69, 255, 0.15)', // card elevation
        'card-hover': '0 8px 30px rgba(153, 69, 255, 0.2)', // card hover state
      },
      
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 400ms cubic-bezier(0.4, 0, 0.2, 1)',
        'gradient-pulse': 'gradient-pulse 2s ease-in-out infinite',
        'bounce-subtle': 'bounce-subtle 1s ease-in-out infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient-pulse': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
        },
      },
      
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
      
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      
      borderRadius: {
        'lg': '0.5rem', // 8px
        'xl': '0.75rem', // 12px
        '2xl': '1rem', // 16px
      },
      
      spacing: {
        '18': '4.5rem', // 72px
        '88': '22rem', // 352px
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-gradient': {
          'background': 'linear-gradient(45deg, var(--color-primary), var(--color-secondary))',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.bg-ambient': {
          'background-image': `
            radial-gradient(circle at 25% 25%, rgba(153, 69, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(20, 241, 149, 0.05) 0%, transparent 50%)
          `,
        },
      }
      addUtilities(newUtilities)
    }
  ],
}