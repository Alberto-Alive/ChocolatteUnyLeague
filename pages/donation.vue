<script setup lang="ts">
useHead({
    title: 'Donation',
});
const provider = ref([
    { details: 'unyleague@outlook.com', url: 'mailto:unyleague@outlook.com', icon: 'mail', show: false },
    { details: '+44 7780 790155', url: 'whatsapp://send?phone=+447780790155', icon: 'smartphone', show: false },
]);
</script>

<template>
    <FullScreenCard class="h-auto">
        <div class="p-2 lg:py-9">
            <h1 class="text-3xl text-chocolate-800 font-bold">Donation</h1>
            <p class="text-base text-chocolate-700">
                You can support by donating Chocoin to help choco creating more content!
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
                        {{ 'HII' }}
                    </span>
                </a>
            </div>
            <p class="text-base text-chocolate-700 my-3">Each support is appreciated. Thanks for your support!</p>
        </div>
    </FullScreenCard>
</template>

<style></style>
