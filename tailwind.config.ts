import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}'
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#2563eb',
          600: '#1d4ed8',
          900: '#1e3a8a'
        }
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0, 0, 0, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
