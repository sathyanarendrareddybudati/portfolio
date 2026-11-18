/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#07070a',
          surface: '#12121a',
          card: 'rgba(18, 18, 26, 0.7)',
          accent: '#ef4444',
          neon: '#ff3366',
          crimson: '#dc2626',
          darkRed: '#7f1d1d',
          textMuted: '#94a3b8',
          textLight: '#f8fafc',
          border: 'rgba(239, 68, 68, 0.25)',
          borderHover: 'rgba(239, 68, 68, 0.6)',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace', 'ui-monospace'],
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        display: ['"Rajdhani"', 'system-ui', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-spin': 'spin 12s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      },
      boxShadow: {
        'neon-red': '0 0 25px rgba(239, 68, 68, 0.45)',
        'neon-red-lg': '0 0 50px rgba(239, 68, 68, 0.6)',
        'neon-red-sm': '0 0 10px rgba(239, 68, 68, 0.3)',
      }
    },
  },
  plugins: [],
}
