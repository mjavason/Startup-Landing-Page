import type { Config } from 'tailwindcss';
import { heroui } from '@heroui/react';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins, sans-serif',
      },
      colors: {
        primary: {
          50: '#ECE8FB', // Lightest shade
          100: '#D3C8F6',
          200: '#B8A5F1',
          300: '#9C81EB',
          400: '#8160E6',
          500: '#2F1893', // Base color
          600: '#29157F',
          700: '#22126B',
          800: '#1C0E58',
          900: '#150A44', // Darkest shade
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
} satisfies Config;
