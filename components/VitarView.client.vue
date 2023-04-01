<script setup lang="ts">
import { Vitar } from '@cloudgeek/vitar';
const showCam = ref(false);
const showMesh = ref(false);
const model = ref<boolean | string>(true);
const names = ['Haru', 'Hiyori', 'Mark', 'Natori', 'Rice'];
const name = names[2];
// model.value = `https://raw.githubusercontent.com/Live2D/CubismWebSamples/develop/Samples/Resources/${name}/${name}.model3.json`; // Uncomment if you want a custom model
const offsetX = name === "Rice" ? -20 : 0;
const display = reactive({
  scale: 2,
  offsetX: offsetX,
  offsetY: 0,
});
</script>

<template>
  <ClientOnly>
    <vitar
      :show-mesh="showMesh"
      :show-cam="showCam"
      :z-index="666"
      :model="model"
      :display="display"
    />
  </ClientOnly>
</template>
