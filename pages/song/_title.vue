<template>
  <div class="play-interf">
    <h1>{{this.$route.params.title}}</h1>
    <video id="music_video" autoplay :src="videosrc"></video>
    <audio id="music_audio" autoplay :src="musicsrc"></audio>
    <div class="lyrics_display">
      <h1 class="firstLine">
        <div class="lyrics_pointer"></div>It's time to begin, isn't it?
      </h1>
      <h1 class="secondLine">I get a little bit bigger, but then</h1>
    </div>
    <div class="pause_menu" v-if="paused">
      <h1 style="margin: 0 auto;text-align: center;margin-top: 45vh;">Pausado</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paused: false,
      videosrc: `file:///C:/Users/alex_/Documents/Proyectos/Nuxtron/Ultrastar-Deluxe-2.0/songs/Imagine%20Dragons%20-%20It's%20Time/Imagine%20Dragons%20-%20It's%20Time.mp4`,
      musicsrc: `file:///C:/Users/alex_/Documents/Proyectos/Nuxtron/Ultrastar-Deluxe-2.0/songs/Imagine%20Dragons%20-%20It's%20Time/Imagine%20Dragons%20-%20It's%20Time.mp3`,
      GAP: 18282
    };
  },
  props: {
    test: null
  },
  mounted() {
    let ruta = encodeURI(this.$route.params.title);
    console.log(ruta);
    let vm = this;
    window.addEventListener("keydown", function(k) {
      if (k.keyCode == 27 || k.keyCode == 13 || k.keyCode == 32) {
        vm.paused = !vm.paused;
        var vid = document.getElementById("music_video");
        var aud = document.getElementById("music_audio");
        if (vm.paused) {
          vid.pause();
          aud.pause();
        } else {
          vid.play();
          aud.play();
        }
      }
    });
  }
};
</script>

<style>
.play-interf {
  position: fixed;
  background: black;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.lyrics_pointer {
  width: 10px;
  height: 100%;
  background: blue;
  display: inline-block;
}
video {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.lyrics_display {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 150px;
  background: rgba(99, 99, 99, 0.43);
  border-radius: 10px 10px 0px 0px;
  text-align: center;
}
.pause_menu {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    108deg,
    #084387af,
    #1600d2af,
    #d005f2af,
    #a9009caf
  );
  background-size: 800% 800%;

  -webkit-animation: AnimationName 18s ease infinite;
  -moz-animation: AnimationName 18s ease infinite;
  animation: AnimationName 18s ease infinite;
}
@-webkit-keyframes AnimationName {
  0% {
    background-position: 5% 0%;
  }
  50% {
    background-position: 96% 100%;
  }
  100% {
    background-position: 5% 0%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 5% 0%;
  }
  50% {
    background-position: 96% 100%;
  }
  100% {
    background-position: 5% 0%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 5% 0%;
  }
  50% {
    background-position: 96% 100%;
  }
  100% {
    background-position: 5% 0%;
  }
}
</style>