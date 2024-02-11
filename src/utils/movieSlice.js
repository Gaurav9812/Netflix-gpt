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
      state[action.payload.key] = action.payload.results;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies ,addTrailerVideo } = movieSlice.actions;

export default movieSlice.reducer;
