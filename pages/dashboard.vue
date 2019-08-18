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
      <h1>
        ultrastar
        <span>™</span>
      </h1>
      <hr />
      <h3>Bienvenido Jugador 1</h3>
      <hr />
      <div class="grid-box">
        <div class="selectable-box">Mi perfil</div>
        <nuxt-link :tag="div" to="/songs/" class="selectable-box">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wogS2WPp-0g?controls=0&autoplay=1&amp;start=59"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>Jugar a ultrastar
        </nuxt-link>
        <div class="selectable-box">Ajustes</div>
      </div>
      <div class="grid-box">
        <div class="selectable-box">Mi perfil</div>
        <div class="selectable-box">Fiesta</div>
        <div class="selectable-box">Ajustes</div>
      </div>
      <div @click="closeProgram" class="selectable-box">Salir</div>
    </div>

    <footer></footer>
  </div>
</template>
<script>
export default {
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