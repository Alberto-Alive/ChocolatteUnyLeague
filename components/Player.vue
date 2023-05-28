<template>
  <audio ref="audio"></audio>
</template>

<script>
export default {
  mounted() {
    this.audioElement = this.$refs.audio;
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
    this.audioElement.addEventListener('ended', this.handleSongEnd);
  },
  beforeUnmount() {
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    this.pauseAudio();
  },
  data() {
    return {
      songUrls: {
        '/students': '/mp3/students.mp3',
        '/university': '/mp3/university.mp3',
        '/downloads': '/mp3/downloads.mp3',
        '/contact': '/mp3/contact.mp3',
        '/schedule': '/mp3/schedule.mp3',
        '/groups': '/mp3/groups.mp3',
        '/credits': '/mp3/credits.mp3',
      },
      isPlayedOnce: false,
    };
  },
  watch: {
    $route(newRoute) {
      this.isPlayedOnce = false;
      this.handleRouteChange(newRoute.path);
    }
  },
  methods: {
    handleSongEnd() {
    this.isPlayedOnce = true;
  },
    handleRouteChange(newPath) {
        this.audioElement.src = this.songUrls[newPath];
        this.playAudio();
    },
    playAudio() {
      if (this.audioElement) {
        this.audioElement.play();
      }
    },
    pauseAudio() {
      if (this.audioElement) {
        this.audioElement.pause();
      }
    },
    handleVisibilityChange() {
      if (document.hidden) {
        this.pauseAudio();
      } else {
        if (this.audioElement && !this.isPlayedOnce) {
        this.audioElement.play();
      }
      }
    },
  },
};
</script>
