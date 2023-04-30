<script setup lang="ts">
useHead({
    title: 'Downloads',
});
</script>

<template>
    <FullScreenCard class="h-auto">
        <FlexCard>
            <div class="p-2 lg:py-16 lg:flex lg:w-1/2">
                <div class="my-4 lg:mt-28 mx-auto text-center">
                    <h1 class="text-2xl text-chocolate-800 text-center font-bold">iOS - App Store</h1>
                    <p class="text-base text-chocolate-700 my-3 text-center">
                        "You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future." - Steve Jobs
                    </p>
                    <a href="https://www.apple.com/uk/app-store/" class="button w-full lg:w-52" target="_blank" rel="noreferrer">
                        <Icon 
                            name="uiw:download"
                            class="block flex-grow-0 shrink-0"
                            width="32"
                            height="32"
                        />
                        <span class="flex-grow flex-shrink text-left w-full">App Store</span>
                    </a>
                </div>
            </div>
            <div class="p-2 lg:py-16 lg:flex-1">
                <img src="/img/applet.png" alt="Traveler model" class="h-[25rem] m-auto" />
            </div>
        </FlexCard>
        <FlexCard>
            <div class="p-2 lg:py-16 lg:flex lg:w-1/2">
                <div class="my-4 lg:mt-28 mx-auto text-center">
                    <h1 class="text-2xl text-chocolate-800 text-center font-bold">Android - Google Play</h1>
                    <p class="text-base text-chocolate-700 my-3 text-center">
                    "Your phone is a tool for communicating. You shouldn’t be communicating with the phone; you should be communicating with somebody on the other side of the phone." - Andy Rubin
                    </p>
                    <a href="https://play.google.com/store/" class="button w-full lg:w-52" target="_blank" rel="noreferrer">
                        <Icon 
                            name="uiw:download"
                            class="block flex-grow-0 shrink-0"
                            width="32"
                            height="32"
                        />
                        <span class="flex-grow flex-shrink text-left w-full">Google Play</span>
                    </a>
                </div>
            </div>
            <div class="p-2 lg:py-16 lg:flex-1">
                <img src="/img/androidt.png" alt="Princess model" class="h-[25rem] m-auto" />
            </div>
        </FlexCard>
        <FlexCard>
            <div class="p-2 lg:py-16 lg:flex lg:w-1/2">
                <div class="my-4 lg:mt-32 mx-auto text-center">
                    <h1 class="text-2xl text-chocolate-800 text-center font-bold">Tech support</h1>
                    <p class="text-base text-chocolate-700 my-3 text-center">
                        Unyleague is compatible with
                        <br />
                        iOS 14 or later and Android 8.0 (Oreo) or later.
                        <br />
                        Please get in touch for technical support.
                    </p>
                    <Button class="w-full lg:w-52" name="Contact" icon="uiw:right" dest="/contact" />
                </div>
            </div>
            <div class="p-2 lg:py-16 lg:flex-1">
                <img src="/img/browny.png" alt="Loli model" class="h-[25rem] m-auto" />
            </div>
        </FlexCard>
        <h1 class="text-xl my-7 text-chocolate-800 text-center font-bold">
            [All rights reserved] Unyleague © 2023
        </h1>
    </FullScreenCard>
</template>

<style></style>
