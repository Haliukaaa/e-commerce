/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#0E2E5A',
          secondary: '#1a3353',
          success: '#198754',
          warning: '#ffc542',
          error: '#ff6b72',
          accent: '#72849a', // light
          neutral: '#ededed', // lighter
          'base-100': '#fafafb', // bg
          'base-200': '#f7f7f8', // lightest
          'base-300': '#455560', //gray
          info: '#72849a', // text
          border: '#e6ebf1', // border
        },
      },
    ],
  },
};
export default config;
