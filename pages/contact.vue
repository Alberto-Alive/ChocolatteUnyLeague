<script setup lang="ts">
useHead({
    title: 'Contact',
});
const provider = ref([
    { details: 'unyleague@outlook.com', url: 'mailto:unyleague@outlook.com', icon: 'mail', show: false, cover: 'Email us @' },
    { details: '+44 7780 790155', url: 'whatsapp://send?phone=+447780790155', icon: 'smartphone', show: false, cover: 'Whatsapp us @'},
]);
</script>

<template>
    <FullScreenCard class="h-auto">
        <div class="flex flex-wrap">
        <div class="p-2 lg:py-9 lg:w-1/2">
            <h1 class="text-3xl text-chocolate-800 font-bold">Contact</h1>
            <p class="text-base text-chocolate-700">
                You can contact us by email or phone: 
            </p>
            <div class="lg:grid lg:gap-2 mt-4">
                <a v-for="prov in provider" :href="prov.url" class="button w-50 my-1 relative" target="_blank"
                    rel="noreferrer" @mouseenter="prov.show = true" @mouseleave="prov.show = false">
                    <Icon :name="'material-symbols:' + prov.icon" class="block flex-grow-0 shrink-0" width="32"
                        height="32" />
                    <span v-if="prov.show" class="w-full opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
                        {{ prov.details }}
                    </span>
                    <span v-else class="w-full">
                        {{ prov.cover }}
                    </span>
                </a>
            </div>
        </div>
        <div class="p-2 lg:flex-1">
                <img src="/img/postman_1.png" alt="Traveler model" class="h-[25rem] m-auto" />
            </div>
        </div>
            <p class="text-lg text-chocolate-600 font-semibold my-2">We'll reply back within 3-working days. Thanks for contacting us!</p>

    </FullScreenCard>
</template>

<style></style>
