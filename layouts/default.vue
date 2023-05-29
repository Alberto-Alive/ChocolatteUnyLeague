<script setup lang="ts">
_initHead();
_greet();


useJsonld((): any => ({
    '@context': 'https://schema.org/',
    '@type': 'Person',
    name: 'Unyleague',
    url: 'https://unyleague.com',
    image: 'https://unyleague.com/img/students.png',
    sameAs: [
        'https://twitter.com/unyleague',
        'https://instagram.com/unyleague',
        'https://youtube.com/@unyleague',
        'https://www.facebook.com/unyleague.Channel',
        'https://unyleague.com',
    ],
    jobTitle: 'Student Social Media',
    gender: 'any',
    worksFor: {
        '@type': 'Organization',
        name: 'Social Media Platform for Students & Universities Project',
    },
}));
</script>

<template>
    <Navigation/>
    <NuxtLoadingIndicator color="#FF6C9B" :throttle="0" :height="3" />
    <div class="container mx-auto p-4 font-lexend">
        <slot />
    </div>
    <VitarView />
    <Player/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;700&display=swap');

.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(8px);
}
</style>
