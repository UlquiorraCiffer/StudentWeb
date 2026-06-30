import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      tsconfigFilename: './tsconfig.json',
    },
  },
  site: 'https://eklavyatuition.in',
  output: 'static',
});
