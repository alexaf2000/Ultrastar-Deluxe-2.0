export const state = () => ({
    songsList: [],
    song: {
        title: null,
        artist: null,
        year: null,
        folder: null,
        cover: null,
        audio: null,
        video: null
    }
})

export const mutations = {
    addSong(state, song) {
        state.songsList.push(song)
    },
    removeSong(state, { value }) {
        state.songsList.splice(state.songsList.indexOf(value), 1)
    }
}