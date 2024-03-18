import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  // darkMode: resumeConfig.appTheme === ThemeSetting.System ? 'media' : 'class',
  darkMode: 'selector',
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus']);
    }),
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      fontFamily: {
        mono: ['var(--font-jetbrains-mono)'],
        sans: ['var(--font-inter)'],
        serif: ['var(--font-lora)'],
      },
    },
  },
} satisfies Config;
