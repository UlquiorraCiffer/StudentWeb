import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: 'https://eklavyatuition.in',
  output: 'static',
  integrations: [react()],
});