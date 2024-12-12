// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  gsap: {
    composables: true,
    provide: false,
  },

  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Poppins: true,
          'Dancing Script': true,
          Pacifico: true,
        },
      },
    ],
    '@nuxt/icon',
    '@hypernym/nuxt-gsap',
    '@vee-validate/nuxt'
  ],
});
