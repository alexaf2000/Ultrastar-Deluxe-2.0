<template>
  <div class="songs-list">
    <a class="nav-button left" @click="slide('prev')">Atras</a>
    <nuxt-link
      v-for="(value, key) in computedSongsList"
      :to="{name: 'song-id', params:{ id:value.songID }}"
    >
      <div class="song">
        <img :src="'file:///'+songsFolder+'/'+encodeURI(value.folder)+'/'+ encodeURI(value.cover)" />
        <div style="padding: 0px 15px;">
          <h1>{{value.title}}</h1>
          <h2 style="color: #747474;font-weight: 400;">{{value.artist}}</h2>

          <!-- {{key}} -->
        </div>
      </div>
    </nuxt-link>
    <a class="nav-button right" @click="slide('next')">Siguiente</a>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      songsFolder: null,
      begin: 0,
      end: 4 // or any number you wish to limit to
    };
  },
  computed: {
    songsList() {
      return this.$store.state.songs.songsList;
    },
    computedSongsList() {
      return this.end
        ? this.songsList.slice(this.begin, this.end)
        : this.songsList;
    }
  },
  mounted() {
    const fs = require("fs");
    var path = require("path");
    const ini = require("ini");
    const config = ini.parse(fs.readFileSync("./config.ini", "utf-8"));
    this.songsFolder = config.songs_path;
  },
  methods: {
    slide: function(side) {
      if (side == "next") {
        this.end = this.end + 4;
        this.begin = this.begin + 4;
      } else if (side == "prev") {
        this.end = this.end - 4;
        this.begin = this.begin - 4;
      }
    }
  }
};
</script>

<style>
.songs-list {
  margin-top: 5%;
  background: #000000;
  width: max-content;
  margin-left: auto;
  margin-right: auto;
}
.song {
  width: 350px;
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
.song:hover {
  transform: scale(1.1);
  background: rgb(110, 203, 231);
  color: white;
}
.song:hover h2 {
  color: white !important;
}
.song img {
  width: 350px;
  height: 350px;
  margin: 0 auto;
  display: block;
}
.nav-button {
  position: fixed;
  width: 80px;
  height: 120px;
  background: #e0e0e04d;
  padding: 15px;
  border: 2px solid white;
  transition: 0.3s ease;
}
.nav-button:hover {
  background: white;
  color: black;
}
.nav-button.left {
  left: 20px;
}
.nav-button.right {
  right: 20px;
}
</style>