export const _initHead = () => {
    useHead({
        titleTemplate: titleChunk => {
            return titleChunk ? `${titleChunk} | Unyleague` : `Unyleague`;
        },
        htmlAttrs: {
            lang: 'en',
        },
        bodyAttrs: {
            style: 'height: 100vh;',
        },
        meta: [
            // General tags
            { 'http-equiv': 'x-ua-compatible', content: 'IE=edge' },
            { name: 'charset', content: 'utf-8' },
            {
                name: 'description',
                content:
                    '🦧 Hi there, this is Unyleague, a social media platform exclusive for students at university.',
            },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { name: 'author', content: 'Unyleague' },
            { name: 'publisher', content: 'Alberto-Alive' },
            { name: 'theme-color', content: '#ff93b5' },
            { name: 'robots', content: 'index,follow' },
            // Opengraph (Facebook, Discord & average SNS)
            { name: 'og:title', content: 'Unyleague - Promotional Web page' },
            {
                name: 'og:description',
                content:
                    'Alberto is a developer that creates for people',
            },
            { name: 'og:type', content: 'website' },
            { name: 'og:site_name', content: 'Unyleague' },
            { name: 'og:url', content: 'https://unyleague.com' },
            { name: 'og:image:type', content: 'image/png' },
            { name: 'og:image:width', content: '1200' },
            { name: 'og:image:height', content: '600' },
        ],
        link: [
            { rel: 'icon', href: '/svgs/icon.png', type: 'image/svg+xml' },
            { rel: 'canonical', href: 'https://unyleague.com' },
            { rel: 'preload', href: '/img/bells.gif', as: 'image' },
            { rel: 'preload', href: '/img/students.png', as: 'image' },
            { rel: 'preload', href: '/img/logotxtmin.png', as: 'image' },
        ],
        script: [
            {
                async: true,
                defer: true,
                'data-website-id': '26760278-a6e3-4f8a-b5fd-fb8e01427806',
                src: 'https://umami.txt/umami.js',
            },
        ],
    });
};
