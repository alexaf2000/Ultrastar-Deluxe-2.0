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
        <nuxt-link :tag="div" to="/song" class="selectable-box">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mWAmkHAO8uk?controls=0&autoplay=1&amp;start=59"
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
    </div>

    <footer></footer>
  </div>
</template>
<style>
body {
  margin: 0px;
  padding: 0px;
  background: #7f00ff;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #5211c9, #890ce6);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #5211c9, #890ce6);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: cover;
  background-attachment: fixed;
  color: white;
  font-family: "Open Sans", sans-serif;
  user-select: none;
}
.grid-box {
  display: flex;
}
hr {
  opacity: 0.6;
}

.selectable-box {
  font-size: 36px;
  font-weight: 300;
  width: 100%;
  margin: 2.5px;
  padding: 20px;
  background: white;
  transition: 0.3s ease;
  color: black;
}

.selectable-box:hover {
  transform: scale(1.01);
  background: rgb(0, 153, 125);
  color: white;
}

h1 {
  font-family: Red Hat Display;
  font-weight: 700;
  font-size: 72px;
}

h1 span {
  font-size: 20px;
  vertical-align: top;
  margin-top: 10px;
  display: inline-block;
}

footer {
  width: 100%;
  height: 120px;
  position: absolute;
  bottom: 0px;
  background: #222;
}

div.playable-zone {
  padding: 0px 215px;
}

footer::after {
  content: "";
  position: absolute;
  width: 100%;
  top: -10px;
  background-image: linear-gradient(319deg, #222 16px, transparent 17px),
    linear-gradient(39deg, #222 16px, transparent 17px);
  background-size: 20px 23px;
  background-repeat: repeat-x;
  height: 10px;
  filter: drop-shadow(10px 1px 10px black);
}
 body {cursor: url(http://ani.cursors-4u.net/toons/too-12/too1117.ani), url(http://ani.cursors-4u.net/toons/too-12/too1117.png), auto !important;}
</style>