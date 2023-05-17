<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps(['name', 'icon', 'dest', 'iconClass']);
</script>

<template>
  <RouterLink class="button" :to="props.dest">
    <Icon :name="props.icon" :class="['block flex-grow-0 shrink-0', props.iconClass]" width="32" height="32" />
    <span class="flex-grow flex-shrink text-left w-full">{{ props.name }}</span>
  </RouterLink>
</template>

<style scoped></style>
