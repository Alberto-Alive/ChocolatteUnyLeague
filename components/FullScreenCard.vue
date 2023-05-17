<script setup lang="ts"></script>

<template>
    <div class="h-[95vh] bg-[#efefef] bg-opacity-60 backdrop-blur-sm p-4 rounded-xl shadow-lg">
        <slot />
        <img
            src="/img/bells.gif"
            alt="Signature"
            class="flex absolute h-28 bottom-[-85px] right-0 md:right-[-62px] -rotate-12 pointer-events-none sign"
        />
    </div>
</template>

<style></style>
