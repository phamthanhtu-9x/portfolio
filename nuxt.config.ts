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

  modules: [[
    '@nuxtjs/google-fonts',
    {
      families: {
        Poppins: true,
        'Dancing Script': true,
        Pacifico: true,
      },
    },
  ], '@nuxt/icon', '@hypernym/nuxt-gsap', '@vee-validate/nuxt', [
    'nuxt-mail', {
      message: {
        to: process.env.NUXT_MAIL_TARGET,
      },

      smtp: {
        host: process.env.NUXT_MAIL_SMPT,
        port: process.env.NUXT_MAIL_PORT,
        secure: true,
        auth: {
          user: process.env.NUXT_MAIL_USERNAME,
          pass: 'qxqy txkd ercu cnpm',
        }
      }
    }
  ], '@pinia/nuxt'],
});