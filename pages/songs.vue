<template>
  <div class="songs-list">
            <nuxt-link v-for="(value, key) of songsList"  :to="{name: 'song-id', params:{ id:key }}">
              <div class="song">
                <img :src="'file:///'+songsFolder+'/'+encodeURI(value.folder)+'/'+ encodeURI(value.cover)">
                <div style="padding: 0px 15px;">
            <h1>{{value.title}}</h1>
            <h2 style="color: #747474;font-weight: 400;">{{value.artist}}</h2>
  
            <!-- {{key}} -->
           </div>
            </div>
            </nuxt-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data(){
    return{
      songsFolder: null
    }
  },
  computed: {
    songsList() {
      return this.$store.state.songs.songsList;
    }
  },
  mounted(){
      const fs = require("fs");
    var path = require("path");
    const ini = require("ini");
    const config = ini.parse(fs.readFileSync("./config.ini", "utf-8"));
    this.songsFolder = config.songs_path;
  }
};
</script>

<style>
.songs-list {
  margin-top: 5%;
  background: #000000;
  width: max-content;
}
.song{
  width: 400px;
  background: white;
  height: 540px;
  color: black;
  text-decoration: none;
  transition: 0.3s ease;
  font-weight: 600;
  display: inline-block;
  float: left;
  margin: 40px;
}
.song:hover{
  transform: scale(1.1);
  background: rgb(110, 203, 231);
  color: white;
}
.song:hover h2{
  color: white!important;
}
.song img{
  width: 400px;
  height: 400px;
  margin: 0 auto;
  display: block;
}
</style>