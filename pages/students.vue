<script setup lang="ts">
useHead({
    title: 'Students',
});
const identity_text = ref('Memories, Parties and Dates');
const _sns = ref([
    { name: 'Facebook', icon: 'mdi:facebook', url: 'https://www.facebook.com/ChocoLatte.Channel' },
    { name: 'Linkedin', icon: 'mdi:linkedin', url: 'https://www.facebook.com/ChocoLatte.Channel' },
    { name: 'Instagram', icon: 'mdi:instagram', url: 'https://www.instagram.com/chocolattech_' },
    // { name: 'YouTube', icon: 'mdi:youtube', url: 'https://www.youtube.com/channel/UCOrmSFsEeZsMd464vcBTILg' },
    // { name: 'Twitter', icon: 'mdi:twitter', url: 'https://twitter.com/ChocoLatteCh_' },
    // { name: 'TikTok', icon: 'ic:baseline-tiktok', url: 'https://www.tiktok.com/@chocolattech_' },
    // { name: 'Twitch', icon: 'mdi:twitch', href: 'https://www.twitch.tv/chocolattech' },
    // { name: 'Discord server', icon: 'ic:baseline-discord', href: 'https://discord.gg/cVmy5bTaTs' },
]);
</script>

<template>
    <FullScreenCard class="h-auto">
        <div class="lg:flex">
            <div class="p-2 lg:py-9 lg:flex-1">
                <h1 class="text-3xl text-chocolate-700 font-bold">For Students</h1>
                <h2 class="text-lg text-chocolate-600 font-bold my-2">Everything in General</h2>
                <p class="text-base text-chocolate-700">
                    I'm so happy you've made it to university 🎈
                    <br /><br />
                    You'll notice I'm only good at three things: {{ identity_text }}
                    <br />
                    Let's Get You in the Mood
                    <a href="https://youtu.be/2tKHWz4WlnM?t=26" class="underline" style="color:#5b2244;" target="_blank" rel="noreferrer"
                        >happy link?!?</a
                    >
                    <br /><br />
                    Now is time for you to join a fraternity <span class="italic">/ or /</span> sorority.
                    <br/>
                    I hope you'll have a great time at uni ㊗️
                </p>
                <Button class="w-full lg:w-52 mt-4" name="Download" icon="uiw:download" dest="/downloads" />
            </div>
            <div class="lg:py-28">
                <img src="/img/l1.png" alt="Traveler model" class="h-[7rem]" />
            </div>
            <div>
                <img src="/img/cyc.png" alt="Traveler model" class="h-[15rem]" />
            </div>
        </div>
        <div class="lg:flex">
            <div class="p-2 lg:py-3 lg:flex-1">
                <h1 class="text-3xl text-chocolate-700 font-bold">Memories</h1>
                <h2 class="text-lg text-chocolate-600 font-bold my-2">Share pictures with your</h2>
                <ul class="list-disc text-chocolate-700 mx-5">
                    <li>Colleagues</li>
                    <li>Fraternities</li>
                    <li>and Sororities</li>
                </ul>
            </div>
            <div class="p-2 lg:py-3 lg:flex lg:w-1/3">
                <div class="">
                    <h1 class="text-3xl text-chocolate-800 font-bold">Parties</h1>
                    <h2 class="text-lg text-chocolate-600 font-bold my-2">Create and join parties with your</h2>
                    <ul class="list-disc text-chocolate-700 mx-5">
                        <li>Colleagues</li>
                        <li>Fraternities</li>
                        <li>and Sororities</li>
                    </ul>
                </div>
            </div>
            <div class="p-2 lg:py-3 lg:flex lg:w-1/3">
                <div class="">
                    <h1 class="text-3xl text-chocolate-800 font-bold">Dates</h1>
                    <h2 class="text-lg text-chocolate-600 font-bold my-2">Super-like someone to</h2>
                    <ul class="list-disc text-chocolate-700 mx-5">
                        <li>Make new friends</li>
                        <li>Go on dates</li>
                        <li>Fall in love</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-2 md:grid-cols-3 mt-4">
                <div class="grid-card group flex items-center justify-center"  @mouseover=" identity_text = 'Memories'" @mouseleave= " identity_text = '📷'">
                    <img class="grid-card-img  object-cover  m-auto" src="/img/art/selfie.gif" style="width: 350px; height: 200px;" alt="Memories" />
                    <p class="text-lg text-chocolate-600 font-semibold my-2">Memories</p>
                </div>
                <div class="grid-card group bg-[#c9ecff] flex items-center justify-center" @mouseover=" identity_text = 'Parties'" @mouseleave= " identity_text = '🎉'">
                    <img class="grid-card-img object-cover object-center m-auto" src="/img/art/party.gif" style="width: 350px; height: 200px;" alt="Parties" />
                <p class="text-2xl text-chocolate-600 font-semibold my-2">Parties</p>
                </div>
                <div class="grid-card group bg-[#edcaf4] flex items-center justify-center" @mouseover=" identity_text = 'Dates'" @mouseleave= " identity_text = '💓'">
                    <img class="grid-card-img  object-cover object-center m-auto" src="/img/art/love.gif" style="width: 350px; height: 200px;" alt="Dates" />
                    <p class="text-4xl text-chocolate-600 font-semibold my-2">Dates</p>
                </div>
            </div>
        <div class="p-2">
            <h1 class="text-3xl text-chocolate-800 font-bold">Visit me :)</h1>
            <div class="lg:grid grid-cols-1 lg:gap-2 md:grid-cols-3 mt-4">
                <a
                    v-for="sns in _sns"
                    :href="sns.url"
                    target="_blank"
                    rel="noreferrer nofollow me"
                    class="button w-full my-1"
                >
                    <Icon :name="sns.icon" class="block flex-grow-0 shrink-0" width="32" height="32" />
                    <span class="flex-grow flex-shrink text-left w-full">{{ sns.name }}</span>
                </a>
            </div>
        </div>
    </FullScreenCard>
</template>

<style></style>
