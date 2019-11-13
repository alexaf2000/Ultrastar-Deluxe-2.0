export const state = () => ({
    songsList: [],
    song: {
        title: null,
        artist: null,
        year: null,
        folder: null,
        cover: null,
        edition: null,
        audio: null,
        video: null
    }
})

export const mutations = {
    addSong: (state, song) => {
        state.song.title = song.title;
        state.song.artist = song.artist;
        state.song.year = song.year;
        state.song.cover = song.cover;
        state.song.edition = song.cover;
        state.song.audio = song.audio;
        state.song.video = song.video;
        state.song.folder = song.folder;
        state.songsList.push({...state.song });
    },
    removeSong(state, { value }) {
        state.songsList.splice(state.songsList.indexOf(value), 1)
    }
}


export const actions = {
    addSong: (context, song) => {
        context.commit('addSong', song)
    }
}