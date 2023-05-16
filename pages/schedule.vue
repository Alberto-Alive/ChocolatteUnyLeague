<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useHead } from '@vueuse/head';

useHead({
  title: 'Live Schedule',
});
const scheduleDate = ref(null);
const todayHey = ref("Check out today's video!");
const todayLink = ref("https://www.youtube.com/watch?v=QtLXvh8mv3o")
// const getLink = () => todayLink.value;
function getLink() {
  return "https://www.youtube.com/watch?v=QtLXvh8mv3o";
}
onMounted(() => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
  day: "numeric",
  year: "numeric"
  });

  // Set the current date in the h1 element
  scheduleDate.value.textContent = currentDate;

});
</script>

<template>
    <FullScreenCard class="h-auto">
        <div class="p-2">
            <h1 class="text-3xl text-chocolate-700 font-bold text-center">Live Schedule</h1>
            <FullScreenCard class="lg:w-[50rem] h-auto m-auto text-center schedule">
                <RoundFlexCard class="m-auto">
                    <div class="p-2 lg:py-16 lg:flex-1">
                        <img src="/img/a.png" alt="Traveler model" class="h-[10rem] m-auto" />
                    </div>
                    <div class="p-2 lg:py-16 lg:flex lg:w-1/2">
                        <div class="my-4 lg:mt-22 mx-auto text-center">
                            <h1 ref="scheduleDate" class="text-sm text-chocolate-800 text-center font-bold"></h1>
                            <p id="scheduleText" class="text-xs text-chocolate-700 my-3 text-center">
                               {{todayHey}}
                            </p>
                            <!-- class="button max-w-max lg:w-28 lg:h-6 w-full sm:w-40 sm:h-6" -->
                            <a id="scheduleLink" href="https://www.youtube.com/watch?v=QtLXvh8mv3o"
                            class="button flex mx-auto  max-w-max lg:max-w-min px-4 sm:w-40 max-h-4"
                                 target="_blank" rel="noreferrer">
                                <Icon name="uiw:link" class="block flex-grow-0 shrink-0" width="12" height="12" />
                                <span class="flex-grow flex-shrink text-left text-xs md:text-xs p-2">View</span>
                            </a>
                        </div>
                    </div>
                </RoundFlexCard>

                <div>
                    <img src="/img/angel.png" alt="Weekly schedule"
                        class="lg:w-[18rem] h-auto m-auto rounded-xl " />
                    <p class="text-chocolate-700 text-sm mt-3">
                        Schedule for March 12, 2023 - March 18, 2023
                        <br />
                        Last updated on <code class="text-[#ff93b5] font-bold">Wed Mar 15 2023 21:54:11 GMT+7</code>
                    </p>
                    <a href="https://www.youtube.com/@ChocoLatteCh" target="_blank" rel="noreferrer nofollow me"
                        class="button w-full lg:w-96 my-3">
                        <Icon name="mdi:youtube" class="block flex-grow-0 shrink-0" width="32" height="32" />
                        <span class="flex-grow flex-shrink text-left w-full">Watch stream on YouTube</span>
                    </a>
                </div>
            </FullScreenCard>
        </div>
    </FullScreenCard>
</template>

<style>
.schedule .sign {
    display: none;
}
</style>
