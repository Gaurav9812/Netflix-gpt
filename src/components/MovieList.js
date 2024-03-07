import { useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const MovieList = ({ title, movies }) => {
  const [showSideButtons, setShowSideButtons] = useState(true);
  const movieList = useRef(null);
  const handleListHover = () => {
    // setShowSideButtons(!showSideButtons);
  };

  const handleScroll = (scrollRight) => {
    console.log("sad");
    if(scrollRight){
        movieList.current.scrollLeft+=200
    }else{
        movieList.current.scrollLeft-=200
    }
    
  };

  return (
    <div className="px-6 relative">
      <h1 className="text-white text-lg md:text-2xl py-6 ">{title}</h1>
      <div
        className="flex overflow-hidden"
        onMouseEnter={handleListHover}
        onMouseLeave={handleListHover}
        ref={movieList}
      >
        {showSideButtons && (
          <div className="absolute h-4/5 cursor-pointer text-white z-50 left-0 top-1/2 -translate-y-1/2 flex items-center md:bg-gradient-to-r md:from-black "
          onClick={()=>handleScroll(false)}
          >
            <MdKeyboardArrowLeft className="text-7xl hover:scale-125" />
          </div>
        )}
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
        {showSideButtons && (
          <div className="absolute h-4/5 cursor-pointer z-50 transition top-1/2 -translate-y-1/2 text-white right-0 flex items-center md:bg-gradient-to-l md:from-black"
          onClick={()=>handleScroll(true)}
          >
            <MdKeyboardArrowRight className="text-7xl hover:scale-125" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
