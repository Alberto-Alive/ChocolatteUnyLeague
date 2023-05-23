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
    this.playAudio();

    // Add event listener for visibilitychange
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  },
  beforeUnmount() {
    // Remove event listener when the component is unmounted
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);

    // Pause the audio
    this.pauseAudio();
  },
  methods: {
    playAudio() {
      this.$refs.audio.play();
    },
    pauseAudio() {
      this.$refs.audio.pause();
    },
    handleVisibilityChange() {
      // Check if the document is hidden
      if (document.hidden) {
        this.pauseAudio();
      } else {
        this.playAudio();
      }
    },
  },
};
</script>
