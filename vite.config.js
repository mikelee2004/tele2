import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';
import path from 'path';
import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from 'vite';

const targets = browserslistToTargets(browserslist('>=0.25%'));

export default defineConfig ({
  base: "/tele2-ch",
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: targets,
    },
  },
  plugins: [
    handlebars({
      partialDirectory: 'src/partials',
    }),
  ],
  build: {
    cssMinify: 'lightningcss'
  },
});