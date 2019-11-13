<template>
  <div class="songs-list">
    <table>
      <tr>
        <td v-for="(value, key) of songsList">
            <nuxt-link  :to="{name: 'song-id', params:{ id:key }}">
            {{value.title}}
            {{key}}
            </nuxt-link>
          </td>
        </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    songsList() {
      return this.$store.state.songs.songsList;
    }
  }
};
</script>

<style>
.songs-list {
  margin-top: 5%;
  width: 350vw;
  background: red;
  height: 75vh;
}
</style>