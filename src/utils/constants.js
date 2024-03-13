export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

export const movieList = {
  nowPlayingMovies: {
    title: "Now Playing Movies",
    fetchUrl:
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  },
  popularMovies: {
    title: "Popular Movies",
    fetchUrl:
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  },
  topRatedMovies: {
    title: "Top Rated Movies",
    fetchUrl:
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  },
  upcomingMovies: {
    title: "Upcoming Movies",
    fetchUrl:
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
  },
};

export const genreList = {
  28: "Action",
  12: "Adventure",
  35: "Comedy",
  16: "Animation",
  80: "Crime",
  90: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

export const makeFunctionDebounce = (func,timer)=>{
  let timeout = null;
  return ()=>{
    if(timeout) clearTimeout(timeout);
    timeout =setTimeout(()=>{
        func();
    },timer)
  }

}