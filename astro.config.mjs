import { defineConfig } from 'astro/config';
import react from '@astrojs/react'; // Solo si usas React

export default defineConfig({
  site: 'https://acmapps.github.io',
  base: '/acm-apps-web', // El nombre exacto de tu repositorio en GitHub
  integrations: [react()],
});