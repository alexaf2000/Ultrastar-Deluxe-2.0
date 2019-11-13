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
    <transition name="slide-fade">
    <div class="pause_menu" v-if="paused">
      <h1 style="margin: 0 auto;text-align: center;margin-top: 45vh;">Pausado</h1>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paused: false,
      videosrc: `file:///C:/Users/alex_/Documents/projects/Ultrastar/songs/Charlie%20Puth%20-%20Attention/Charlie%20Puth%20-%20Attention.mp4`,
      musicsrc: `file:///C:/Users/alex_/Documents/projects/Ultrastar/songs/Charlie%20Puth%20-%20Attention/Charlie%20Puth%20-%20Attention.mp3`,
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
.slide-fade-enter-active {
  transition: all .3s ease-in;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {

  opacity: 0;
}
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
  background: rgba(0, 0, 0, 0.43);
  text-align: center;
}
.play-interf, .play-interf *{ 
  cursor: none!important;
}
.play-interf, .play-interf *:active:hover {
	cursor: none !important;
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
  
  -webkit-animation: AnimationName 10s ease infinite;
  -moz-animation: AnimationName 10s ease infinite;
  animation: AnimationName 10s ease infinite;
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