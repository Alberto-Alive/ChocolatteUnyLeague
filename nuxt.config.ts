// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    modules: ['@nuxtjs/tailwindcss', 'nuxt-jsonld', 'nuxt-icon'],
    builder: 'vite',
    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in',
        },
    },
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
    },
    imports: {
        dirs: ['./composables', './components', './scripts', './utils'],
    },
});
