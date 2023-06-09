<script setup lang="ts">
useHead({
    title: 'Schedule',
});
const scheduleDate = ref('');
const scheduleText = ref("Check out today's video!");
const todayLink = ref("https://www.youtube.com/watch?v=xTC_aAFEuRM")
const todayDate = ref('');
onMounted(() => {
    const currentDate = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    scheduleDate.value.textContent = currentDate;
    todayDate.value = currentDate;
});
</script>

<template>
    <FullScreenCard class="h-auto">
        <div class="p-2">
            <h1 class="text-3xl text-chocolate-700 font-bold text-center">Live Schedule</h1>
            <FullScreenCard class="lg:w-[50rem] h-auto m-auto text-center schedule">
                <RoundFlexCard class="h-[13rem] lg:h-auto m-auto">
                    <div class="p-2 lg:py-16 lg:flex-1">
                        <img src="/img/sgmin.png" alt="Traveler model" class="h-[7rem] lg:h-[10rem] m-auto" />
                    </div>
                    <div class="lg:p-2 lg:py-16 lg:flex lg:w-1/2">
                        <div class="lg:my-4 lg:mt-22 mx-auto text-center">
                            <h1 ref="scheduleDate" class="text-xs lg:text-sm text-chocolate-800 text-center font-bold"></h1>
                            <p class="text-[0.65rem] sm:text-xs lg:text-sm text-chocolate-700 my-1 lg:my-3 text-center">
                                Check out today's video!
                            </p>
                            <a :href="todayLink" class="button flex mx-auto max-w-max lg:max-w-min px-4 max-h-4"
                                target="_blank" rel="noreferrer">
                                <Icon name="uiw:link" class="block flex-grow-0 shrink-0 text-xs"/>
                                <span class="flex-grow flex-shrink text-left text-xs p-2">View</span>
                            </a>
                        </div>
                    </div>
                </RoundFlexCard>

                <div>
                    <img src="/img/sbmin.png" alt="Weekly schedule" class="lg:w-[18rem] h-auto m-auto rounded-xl" />

                    <p class="text-chocolate-700 text-[0.65rem] sm:text-sm mt-3">
                        Schedule for {{ todayDate }}:
                        <br />
                        🤎 @2pm Party on the campus meadow
                        <br />
                        🗨️ @4:30 ChitChat gathering in student central
                        <br />
                        🃏 @7:00 Social event for card games in the main halls
                        <br />
                        Last updated on <code class="text-[#ff93b5] font-bold">{{ todayDate }} 10:54:11 GMT+1</code>
                    </p>


                    <a href="https://www.youtube.com/watch?v=Iyt8nSFvQX4" target="_blank" rel="noreferrer nofollow me"
                        class="button w-full lg:w-96 my-3">
                        <Icon name="mdi:youtube" class="block flex-grow-0 shrink-0 text-xl sm:text-4xl"/>
                        <span class="flex-grow flex-shrink text-[0.5rem] sm:text-base text-left w-full">Watch it live on YouTube</span>
                    </a>
                </div>
                <Button class="mx-auto text-xs max-w-max lg:max-w-min px-4 sm:w-40 max-h-4" name="credits" icon="uiw:uiw"
                    dest="/credits" icon-class="w-2 h-2" />
            </FullScreenCard>
        </div>
    </FullScreenCard>
</template>

<style>
.schedule .sign {
    display: none;
}
</style>
