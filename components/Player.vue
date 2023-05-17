<template>
    <audio ref="audio" :src="songUrl"></audio>
  </template>
  
  <script>
  export default {
    props: {
      songUrl: {
        type: String,
        required: true,
      },
    },
    mounted() {
      this.$refs.audio.play();
    },
    beforeUnmount() {
      this.$refs.audio.pause();
    },
  };
  </script>
  