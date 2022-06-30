import { defineConfig } from 'astro/config';

const breakpoints = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1840px',
};

// https://astro.build/config
export default defineConfig({
  server: { port: 2424, host: false },

  site: 'https://juliancataldo.github.io',
  base: 'astro',

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@julian_cataldo/astro-breakpoints/use-breakpoints.scss" as * with (
              $breakpoints: (
                "xs": ${breakpoints.xs},
                "sm": ${breakpoints.sm},
                "md": ${breakpoints.md},
                "lg": ${breakpoints.lg},
                "xl": ${breakpoints.xl},
                "xxl": ${breakpoints.xxl},
              )
            );
            @use "@julian_cataldo/astro-color-mode/use-color-mode.scss" as *;
            `,
        },
      },
    },
  },
});
