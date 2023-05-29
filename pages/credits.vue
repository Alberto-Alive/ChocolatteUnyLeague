<script setup lang="ts">
useHead({
    title: 'Credits',
});

const dev = ref({
    name: 'Alberto',
    avatar: '/img/dev.png',
    email: 'mailto:alberto-alive@outlook.com',
    youtube: 'https://www.youtube.com/channel/UCdyD0kerFp_bi8N1t7ZT_Ug',
    github: 'https://github.com/Alberto-Alive',
    linkedin: 'https://www.linkedin.com/in/albertopaulpopescu/',
    pngegg: 'https://www.pngegg.com',
    imgbin: 'https://imgbin.com',
    lowliike: 'https://www.youtube.com/watch?v=4u2b4ICs8rk',
    omfg: 'https://www.youtube.com/@alexsavageomfg',
    s3rl: 'https://www.youtube.com/@S3RL',
    choco: 'https://www.youtube.com/@ChocoLatteCh',
    odesza: 'https://www.youtube.com/watch?v=QtLXvh8mv3o',
    vitar: 'https://github.com/LarchLiu/vitar'
});
</script>

<template>
    <FullScreenCard class="h-auto">
        <div class="my-4">
            <h1 class="text-xl text-chocolate-800 text-center font-bold">Welome to my space!</h1>
            <p class="text-sm text-chocolate-700 text-center my-2">
                I hope you enjoyed your journey through Unyleague 🍦
            </p>
        </div>
        <FlexCard>
            <div class="p-2 lg:py-16 lg:flex-1">
                <img :src="dev.avatar" :alt="dev.name"
                    class="h-[10rem] m-auto my-4 lg:my-0 rounded-[50%] shadow-md ring-4 ring-chocolate-700 hover:ring-[#ff7fa8] hover:scale-[1.1] p-1 transition-all" />
            </div>
            <div class="px-5 lg:py-auto lg:flex lg:w-1/2">
                <div class="mb-4 px-3 lg:my-16 m-auto">
                    <h1
                        class="text-2xl text-chocolate-800 hover:text-[#ff7fa8] text-center font-bold hover:underline transition-all">
                        <a :href="dev.github" target="_blank" rel="noreferrer">
                            {{ dev.name }}
                            <Icon name="mdi:wrench" class="text-sky-700" width="22" height="22" />
                        </a>
                    </h1>
                    <p class="text-base text-chocolate-700 text-center my-2">
                        I am the person that conceptualized and had the pleasure to develop Unyleague. A lot of the credit
                        for this work goes to the community:
                    </p>
                    <p class="text-sm text-chocolate-700 text-center my-2 content-evenly">
                        Sound:
                        <a :href="dev.lowliike" class="bg-orange-400 pa-1 mr-1 px-3 rounded-xl my-3 text-white">
                            LowLiike
                        </a>
                        <a :href="dev.omfg" class="bg-sky-400 pa-1 mr-1 px-3 rounded-xl my-3 text-white">
                            OMFG
                        </a>
                        <a :href="dev.s3rl" class="bg-yellow-400 pa-1 mr-1 px-3 rounded-xl my-3 text-white">
                            S3RL
                        </a>
                        <a :href="dev.choco" class="bg-red-400 pa-1 mr-1 px-3 rounded-xl my-3 text-white">
                            Choco
                        </a>
                        <a :href="dev.odesza" class="bg-green-400 pa-1 mr-1 px-3 rounded-xl my-3 text-white">
                            ODESZA
                        </a>
                    </p>
                    <p class="text-sm text-chocolate-700 text-center my-2">
                        Image:
                        <a :href="dev.pngegg" class="bg-purple-400 pa-1 mr-1 px-3 rounded-xl my-3 text-white">
                            PngEgg
                        </a>
                        <a :href="dev.imgbin" class="bg-pink-400 pa-1 px-3 rounded-xl my-3 text-white">
                            ImgBin
                        </a>
                    </p>
                    <p class="text-sm text-chocolate-700 text-center my-2">
                        Plugin:
                        <br class="block md:hidden" />
                        <a :href="dev.vitar" class="bg-slate-400 bg-opacity-70 pa-1 px-3 rounded-xl my-3 text-sky-700">
                            <Icon name="mdi:cog" width="12" height="12" />
                            Vitar
                        </a>
                    </p>
                    <div class="text-center">
                        <a class="my-4 text-chocolate-700 hover:text-[#ff7fa8] transition-all" :href="dev.youtube"
                            target="_blank" rel="noreferrer">
                            <Icon class="mb-4" name="mdi:youtube" width="32" height="32" />
                        </a>
                        <a class="my-4 text-chocolate-700 hover:text-[#ff7fa8] transition-all" :href="dev.github"
                            target="_blank" rel="noreferrer">
                            <Icon class="mb-4" name="mdi:github" width="32" height="32" />
                        </a>
                        <a class="my-4 text-chocolate-700 hover:text-[#ff7fa8] transition-all" :href="dev.linkedin"
                            target="_blank" rel="noreferrer">
                            <Icon class="mb-4" name="mdi:linkedin" width="32" height="32" />
                        </a>
                    </div>
                </div>
            </div>
        </FlexCard>
        <div class="my-4">
            <p class="text-sm text-center text-chocolate-700">
                We do not associate with or represent any of the video, audio or any other form of media material used or
                referenced on this website.
                <br />
                You can contact me @
                <a :href="dev.email" class="hover:text-[#ff7fa8] underline" target="_blank" rel="noreferrer">~ 🍨 ~</a>
            </p>
        </div>
    </FullScreenCard>
</template>
