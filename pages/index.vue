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
    <h1 class="logo center-middle">
      ultrastar
      <span>™</span>
    </h1>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      test: "tst"
    };
  },
  methods: {
    addSong: function(object) {
      this.$store.commit("songs/addSong", object);
    }
  },
  mounted() {
    var vm = this;
    const fs = require("fs");
    var path = require("path");
    const ini = require("ini");
    const config = ini.parse(fs.readFileSync("./config.ini", "utf-8"));
    const songsFolder = config.songs_path;
    if (fs.existsSync(songsFolder)) {
      fs.readdir(songsFolder, (err, songs) => {
        //Leer el directorio songsFolder
        let songsCounter = 0;
        songs.forEach(song => {
          //Por cada canción (carpeta)
          //console.log(song); //Imprime el titulo de la carpeta
          fs.readdir(songsFolder + "/" + song, (err, files) => {
            //Lee los archivos dentro de esa canción
            files.forEach(file => {
              //Por cada archivo dentro de la carpeta de la canción
              if (path.extname(file) == ".txt") {
                //Si la extensión del archivo es .txt
                //console.log("Se ha encontrado fichero .txt"); //Se ha encontrado un dato de canción
                fs.readFile(
                  songsFolder + "/" + song + "/" + file,
                  "latin1",
                  (err, data) => {
                    if (err) {
                      alert(
                        "An error ocurred reading the file :" + err.message
                      );
                      return;
                    }
                    // Change how to handle the file content
                    var songLines = data.split("\n");
                    console.log("Leyendo fichero .txt");
                    for (let i = 0; i < songLines.length; i++) {
                      if (songLines[i][0] == "#") {
                        let lineConfiguration = songLines[i].split(":");
                        lineConfiguration[1] = lineConfiguration[1].trim();
                        switch (lineConfiguration[0].toUpperCase()) {
                          case "#TITLE":
                            var title = lineConfiguration[1];
                            break;
                          case "#ARTIST":
                            var artist = lineConfiguration[1];
                            break;
                          case "#LANGUAGE":
                            var lang = lineConfiguration[1];
                            break;
                          case "#EDITION":
                            var edition = lineConfiguration[1];
                            break;
                          case "#GENRE":
                            var genre = lineConfiguration[1];
                            break;
                          case "#CREATOR":
                            break;
                          case "#YEAR":
                            var year = lineConfiguration[1];
                            break;
                          case "#MP3":
                            var audio = lineConfiguration[1];
                            break;
                          case "#VIDEO":
                            var video = lineConfiguration[1];
                            break;
                          case "#BACKGROUND":
                            var background = lineConfiguration[1];
                            break;
                          case "#COVER":
                            var cover = lineConfiguration[1];
                            break;
                          case "#GAP":
                            var gap = lineConfiguration[1];
                            break;
                          case "#VIDEOGAP":
                            var videogap = lineConfiguration[1];
                            break;
                          case "#BPM":
                            var bpm = lineConfiguration[1];
                            break;
                          case "#MEDLEYSTARTBEAT":
                            var medleystartbeat = lineConfiguration[1];
                            break;
                          case "#MEDLEYENDBEAT":
                            var medleyendbeat = lineConfiguration[1];
                            break;
                          case "#START":
                            var start = lineConfiguration[1];
                            break;
                          case "#END":
                            var end = lineConfiguration[1];
                            break;
                          case "#DUETSINGERP1":
                            var duetP1 = lineConfiguration[1];
                            break;
                          case "#DUETSINGERP2":
                            var duetP2 = lineConfiguration[1];
                            break;
                          default:
                            console.warn(
                              lineConfiguration[0] + lineConfiguration[1]
                            );
                            break;
                        }
                      }
                    }
                    var folder = song;
                    this.addSong({
                      songID: songsCounter,
                      title: title,
                      artist: artist,
                      year: year,
                      edition: edition,
                      cover: cover,
                      audio: audio,
                      folder: folder,
                      video: video
                    });
                    songsCounter++;
                    // console.log("The file content is : " + result);
                  }
                );

                //alert("Se ha encontrado un fitchero txt en la canción " + song);
                //Añadir a base de datos de mongoDB o SQL lite

                // fs.readFile(
                //   "./songs/" + file + "/" + file + ".txt",
                //   "utf-8",
                //   (err, data) => {
                //     if (err) {
                //       alert("An error ocurred reading the file :" + err.message);
                //       return;
                //     }

                //     // Change how to handle the file content
                //     console.log("The file content is : " + data);
                //   }
                // );
              }
            });
          });
        });
        vm.$router.replace({ path: "/dashboard/" });
      });
    } else {
      alert(
        `No se ha encontrado la carpeta de canciones: \n${songsFolder} \nSi la ruta no es correcta modifica el fichero config.ini .`
      );
      const remote = require("electron").remote;
      var win = remote.getCurrentWindow();
      win.close();
    }
    // setTimeout(function() {
    //  vm.$router.replace({ path: "/dashboard/" });
    // }, 15000);
  }
};
</script>
<style scoped>
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>