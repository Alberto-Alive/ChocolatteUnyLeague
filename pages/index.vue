<script setup lang="ts">
useHead({
    title: 'Home',
});
</script>

<template>
    <FullScreenCard class="lg:flex h-auto">
        <div class="hidden p-2 lg:block lg:py-16 lg:flex-1">
            <img src="/img/students.png" alt="Model" class="h-[30rem] w-auto m-auto" height="0" width="0" />
        </div>
        <div class="p-2 lg:py-16 lg:flex lg:w-1/2">
            <div class="my-4 lg:mt-28">
                <h1 class="text-4xl text-chocolate-800 text-center font-bold">📜 Welcome to Unyleague 你好</h1>
                <h2 class="text-md text-slate-400 text-center font-bold italic">パーティー / 思い出 / ともだち</h2>
                <p class="text-base text-chocolate-700 my-3 text-center">
                    Hello everyone, my name is Unyleague. I am a platform for students where you can socialise, make
                    friends, and have fun.
                    I have fraternities and sororities for you to join in. I will help you organise parties and find your
                    partner in 🖤
                    I will be your memory album and will remain your forever friend so we can look back together at the good
                    times we had.
                </p>
                <div class="lg:mt-10">
                    <h1 class="text-3xl text-chocolate-800 text-center font-bold">..a social platform exclusive for
                        students:</h1>
                    <h2 class="text-xl text-chocolate-800 text-center italic">❧ ORGANISE PARTIES</h2>
                    <h2 class="text-xl text-chocolate-800 text-center italic">❧ SHARE PICTURES</h2>
                    <h2 class="text-xl text-chocolate-800 text-center italic">❧ DATE PEOPLE</h2>
                </div>
            </div>

        </div>
        <div class="lg:hidden p-2 block lg:py-16 lg:flex-1">
            <img src="/img/neko_half.webp" alt="Model" class="w-auto m-auto" height="0" width="0" />
        </div>
</FullScreenCard></template>
