import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies:null,
    upcomingMovies:null,
    topRatedMovies:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      console.log(action.payload.key);
      state[action.payload.key] = action.payload.results;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    toggleUnmute: (state, action) => {
      if(state.trailerVideo){
        state.trailerVideo.unmute = !state.trailerVideo.unmute;
      }
      
    },
  },
});

export const { addNowPlayingMovies ,addTrailerVideo,toggleUnmute } = movieSlice.actions;

export default movieSlice.reducer;
