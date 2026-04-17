import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#1A5FAF',
          dark: '#0F3F7A',
          mid: '#2272C3',
          light: '#EBF3FC',
        },
        gold: {
          DEFAULT: '#C9A040',
          light: '#E8C97A',
          dark: '#A07C20',
        },
        'off-white': '#F8FAFD',
        slate: '#334155',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease forwards',
      },
    },
  },
  plugins: [],
};
export default config;
