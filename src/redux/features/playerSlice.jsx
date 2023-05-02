import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isPlaying: false,
  isActive: false,
  activeSong: {},
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;

      if (action.payload?.data?.tracks?.hits) {
        state.currentSongs = action.payload.data.tracks.hits;
      } else if (action.payload?.tracks?.properties) {
        state.currentSongs = action.payload.data.tracks;
      } else {
        state.currentSongs = action.payload.data;
      }

      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    nextSong: (state, action) => {
        if(state.currentSongs[action.payload]?.tracks) {
            state.activeSong = action.currentSongs[action.payload]?.tracks;
        } else {
            state.activeSong = action.currentSongs[action.payload];
        }

        state.currentIndex = action.payload;
        state.isActive = true;
    },

    prevSong: (state, action) => {
        if(state.currentSongs[action.payload]?.tracks) {
            state.activeSong = action.currentSongs[action.payload]?.tracks;
        } else {
            state.activeSong = action.currentSongs[action.payload];
        }

        state.currentIndex = action.payload;
        state.isActive = true;
    },

    playPause: (state, action) => {
        state.isPlaying = action.payload;
    },
}
});

export const { setActiveSong, nextSong, prevSong, playPause } = playerSlice.actions;

export default playerSlice.reducer;