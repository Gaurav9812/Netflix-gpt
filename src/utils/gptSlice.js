import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    isTmdbSearch: null,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { gptMovies, movieResults,tmbdSearch } = action.payload;
      state.movieResults = movieResults;
      state.movieNames = gptMovies;
      state.isTmdbSearch = tmbdSearch;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
