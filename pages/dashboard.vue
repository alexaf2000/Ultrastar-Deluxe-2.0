<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Red+Hat+Display&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i&display=swap"
      rel="stylesheet"
    />
    <div class="playable-zone">
      <h1 class="logo">
        ultrastar
        <span>™</span>
      </h1>
      <hr />
      <h3>Bienvenido Jugador 1</h3>
      <hr />
      <div class="grid-box menu-top">
        <nuxt-link tag="div" to="/song/Imagine Dragons - It's Time" class="selectable-box">
          <h1>Title</h1>
          <p>Subtitle</p>
        </nuxt-link>
        <nuxt-link tag="div" to="/songs/" class="selectable-box">
          <video autoplay :src="videosrc"></video>
          <audio autoplay :src="musicsrc"></audio>
          <h1>Jugar a ultrastar</h1>
          <p>Canta tus canciones favoritas</p>
        </nuxt-link>
        <div class="selectable-box">
          <h1>Ajustes</h1>
          <p>Configura tu juego.</p>
        </div>
      </div>
      <div class="grid-box">
        <div class="selectable-box">
          <h1>Mi perfil</h1>
          <p>Juega a las canciones aleatorias.</p>
        </div>
        <div class="selectable-box">
          <h1>Fiesta</h1>
          <p>Juega a las canciones aleatorias.</p>
        </div>
        <div @click="closeProgram" class="selectable-box">
          <h1>Salir</h1>
          <p>Salir del juego.</p>
        </div>
      </div>
    </div>

    <footer></footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      videosrc: `file:///C:/Users/alex_/Documents/Proyectos/Nuxtron/Ultrastar-Deluxe-2.0/songs/Imagine%20Dragons%20-%20It's%20Time/Imagine%20Dragons%20-%20It's%20Time.mp4#t=60`,
      musicsrc: `file:///C:/Users/alex_/Documents/Proyectos/Nuxtron/Ultrastar-Deluxe-2.0/songs/Imagine%20Dragons%20-%20It's%20Time/Imagine%20Dragons%20-%20It's%20Time.mp3#t=60`
    };
  },
  mounted() {
    const fs = require("fs");
    var path = require("path");
    const ini = require("ini");
    const config = ini.parse(fs.readFileSync("./config.ini", "utf-8"));
    const songsFolder = config.songs_path;
    console.log(this.$store.state.songs.songsList);
    let indice = Math.floor(
      Math.random() * this.$store.state.songs.songsList.length
    );
    let cancion = this.$store.state.songs.songsList[indice];
    alert(encodeURI(cancion.video));
    this.videosrc = songsFolder+"/"+encodeURI(cancion.folder)+"/"+encodeURI(cancion.video);
    this.musicsrc = songsFolder+"/"+encodeURI(cancion.folder)+"/"+encodeURI(cancion.audio);
  },
  methods: {
    closeProgram: function() {
      var opcion = confirm("Estas seguro de que deseas salir de Ultrastar?");
      if (opcion) {
        const remote = require("electron").remote;
        let win = remote.getCurrentWindow();
        win.close();
      }
    }
  }
};
</script>