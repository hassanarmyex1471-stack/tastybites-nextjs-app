import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}', './context/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#b02f00',
          container: '#ff5722',
          fixed: '#ffdbd1',
          'fixed-dim': '#ffb5a0',
        },
        secondary: {
          DEFAULT: '#8e4e14',
          container: '#ffab69',
          fixed: '#ffdcc4',
        },
        tertiary: {
          DEFAULT: '#a33d23',
          container: '#e56d4f',
          fixed: '#ffdad2',
        },
        surface: {
          DEFAULT: '#fbf8ff',
          dim: '#dbd9e1',
          bright: '#fbf8ff',
          'container-lowest': '#ffffff',
          'container-low': '#f5f2fb',
          container: '#efecf5',
          'container-high': '#eae7ef',
          'container-highest': '#e4e1ea',
        },
        'on-surface': '#1b1b21',
        'on-surface-variant': '#5b4039',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px rgba(180, 130, 90, 0.08)',
        'warm-card': '0 4px 16px -2px rgba(180, 130, 90, 0.08)',
        'warm-hover': '0 12px 28px -4px rgba(180, 100, 50, 0.12)',
        'glow-primary': '0 8px 24px -2px rgba(255, 87, 34, 0.35)',
        'warm-elevated': '0 16px 40px -6px rgba(40, 25, 20, 0.16)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
