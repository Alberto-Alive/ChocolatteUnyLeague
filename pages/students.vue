<script setup lang="ts">
useHead({
    title: 'For students',
});

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
                    You'll notice I'm only good at three things: pictures 📷 parties 🎉 and dates 💕
                    <br />
                    Let's Get You in the Mood
                    <a href="https://youtu.be/2tKHWz4WlnM?t=26" class="underline" target="_blank" rel="noreferrer"
                        >happy link?!?</a
                    >.
                    <br /><br />
                    Excited already!?! You have to <span class="italic">/ TRY /</span>
                    it first!
                </p>
                <h2 class="text-lg text-chocolate-600 font-bold my-2">Together we can:</h2>
                <p class="text-base text-chocolate-700">
                    ❥ Post pictures!
                    <br />
                    ❥ Organise parties!
                    <br />
                    ❥ Go on dates!
                </p>
            </div>
            <div class="p-2 lg:py-9 lg:flex lg:w-1/2">
                <div class="">
                    <h1 class="text-3xl text-chocolate-800 font-bold">..my History</h1>
                    <h2 class="text-lg text-chocolate-600 font-bold mt-2">October 02, 2022</h2>
                    <p class="text-base text-chocolate-700">inspired by the American Pie to make the uni-life as amazing</p>
                    <h2 class="text-lg text-chocolate-600 font-bold mt-2">January 11, 2023</h2>
                    <p class="text-base text-chocolate-700">I embarked on this journey to make it happen</p>
                    <h2 class="text-lg text-chocolate-600 font-bold mt-2">March 01, 2023</h2>
                    <p class="text-base text-chocolate-700">and realised I can change students' life just by being</p>
                    <p class="text-sm text-center text-chocolate-700 my-2">simple . . .</p>
                </div>
            </div>
        </div>
        <div class="lg:flex">
            <div class="p-2 lg:py-3 lg:flex-1">
                <h1 class="text-3xl text-chocolate-700 font-bold">Likes</h1>
                <h2 class="text-lg text-chocolate-600 font-bold my-2">What Unyleague likes?</h2>
                <ul class="list-disc text-chocolate-700 mx-5">
                    <li>Safety</li>
                    <li>Privacy</li>
                    <li>Security</li>
                    <li>You</li>
                </ul>
            </div>
            <div class="p-2 lg:py-3 lg:flex lg:w-1/3">
                <div class="">
                    <h1 class="text-3xl text-chocolate-800 font-bold">Dislikes</h1>
                    <h2 class="text-lg text-chocolate-600 font-bold my-2">What Unyleague dislikes?</h2>
                    <ul class="list-disc text-chocolate-700 mx-5">
                        <li>Rude people</li>
                        <li>Agressive behaviour</li>
                        <li>Bad words</li>
                        <li>Wrong kind of pictures <span class="font-bold">🚩 :P</span></li>
                        <li>Sad feelings</li>
                        <li>Anything but You</li>
                    </ul>
                </div>
            </div>
            <div class="p-2 lg:py-3 lg:flex lg:w-1/3">
                <div class="">
                    <h1 class="text-3xl text-chocolate-800 font-bold">Goals</h1>
                    <h2 class="text-lg text-chocolate-600 font-bold my-2">Things I can help you with</h2>
                    <ul class="list-disc text-chocolate-700 mx-5">
                        <li>Get university updates</li>
                        <li>Find or create events and parties</li>
                        <li>Make new friends</li>
                        <li>Share pictures with others</li>
                        <li>Find love</li>
                        <li>Stay sane, happy and safe</li>
                    </ul>
                </div>
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
