import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { movieList } from "../utils/constants";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies.nowPlayingMovies) return;

  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-24 z-20 pl-2 md:pl-12 relative">
        {Object.keys(movieList).map((movie, index) => {
          if (movies[movie]) {
            return (<MovieList key={movieList[movie].title} title={movieList[movie].title} movies={movies[movie]} />);
          }
        })}
      </div>
    </div>
  );
};

export default SecondaryContainer;
