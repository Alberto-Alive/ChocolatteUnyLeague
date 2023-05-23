<script setup lang="ts">
useHead({
    title: 'Groups',
});

const groups = [
    {
        name: '..join a Fraternity',
        desc: 'Joining a fraternity is one of the best decisions you can make in college. Fraternities offer a unique and rewarding college experience that you won\'t find anywhere else. Fraternity life is all about brotherhood, friendship, and fun. You\'ll make lifelong friends who will support you through thick and thin.',
        img: '/img/fr.png',
        icon: 'man',
        url: 'https://www.youtube.com/watch?v=tFlI19513Ao',
    },
    {
        name: 'or a Sorority...',
        desc: 'Sororities are more than just social clubs. They\'re a community of like-minded girls who support each other through thick and thin. Whether you\'re looking for a place to make lifelong friends, get involved on campus, or just have some fun, joining a sorority is the perfect way to make the most of your college experience.',
        img: '/img/sr.png',
        icon: 'woman',
        url: 'https://www.youtube.com/watch?v=mBAYmz6dfqw',
    }

];
</script>

<template>
    <FullScreenCard class="h-auto">
        <FlexCard v-for="(entity, index) in groups" :key="index">
            <div class="p-2 lg:py-24 lg:flex-1">
                <img :src="entity.img" alt="Group image" class="h-[16rem] m-auto rounded-xl" />
            </div>
            <div class="px-5 lg:py-auto lg:flex lg:w-1/2">
                <div class="my-4 px-3 lg:mt-36 mx-auto">
                    <h1 class="text-2xl text-chocolate-800 text-center font-bold">
                        {{ entity.name }}
                    </h1>
                    <p class="text-base text-chocolate-700 mb-4 mt-2 text-center">{{ entity.desc }}</p>
                    <a :href="entity.url" class="button w-full mb-4" target="_blank" rel="noreferrer">
                        <Icon :name="'material-symbols:' + entity.icon" class="block flex-grow-0 shrink-0" width="32"
                            height="32" />
                        <span class="flex-grow flex-shrink text-left w-full">watch me</span>
                    </a>
                </div>
            </div>
        </FlexCard>
    </FullScreenCard>
</template>
