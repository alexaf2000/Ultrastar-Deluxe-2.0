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
        <div class="selectable-box">
          <h1>Mi perfil</h1>
          <p>Salir del juego.</p>
        </div>
        <nuxt-link tag="div" to="/songs/" class="selectable-box">
          <video autoplay :src="src"></video>
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
      src: `file:///C:/Users/alex_/Documents/projects/Ultrastar/songs/Panic!%20At%20The%20Disco%20-%20High%20Hopes/Panic!%20At%20The%20Disco%20-%20High%20Hopes.mp4#t=60`
    };
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