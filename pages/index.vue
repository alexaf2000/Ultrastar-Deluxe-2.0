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
    <h1 class="center-middle">
      ultrastar
      <span>™</span>
    </h1>
  </div>
</template>
<script>
export default {
  mounted() {
    var vm = this;
    const fs = require("fs");
    var path = require("path");
    const ini = require('ini');
    const config = ini.parse(fs.readFileSync("./config.ini", "utf-8"));
    const songsFolder = config.songs_path;
    fs.readdir(songsFolder, (err, songs) => {
      //Leer el directorio songsFolder
      songs.forEach(song => {
        //Por cada canción (carpeta)
        console.log(song); //Imprime el titulo de la carpeta
        fs.readdir(songsFolder + "/" + song, (err, files) => {
          //Lee los archivos dentro de esa canción
          files.forEach(file => {
            //Por cada archivo dentro de la carpeta de la canción
            if (path.extname(file) == ".txt") {
              //Si la extensión del archivo es .txt
              console.log("Se ha encontrado fichero .txt"); //Se ha encontrado un dato de canción
              fs.readFile(
                songsFolder + "/" + song + "/" + file,
                "utf-8",
                (err, data) => {
                  if (err) {
                    alert("An error ocurred reading the file :" + err.message);
                    return;
                  }
                  // Change how to handle the file content
                  var result = data.split("#");
                  console.log("The file content is : " + result);
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
    });
    setTimeout(function() {
      vm.$router.replace({ path: "/dashboard/" });
    }, 15000);
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