import { useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const MovieList = ({ title, movies }) => {
  const [showSideButtons, setShowSideButtons] = useState({
    showLeftButton:false,
    showRightButton:false,
  });
  const movieList = useRef(null);
  const handleMouseEnterList = () => {
    
    let leftButton = false,rightButton = false;
    const movieListTemp = movieList.current;
    if(movieListTemp){
      if(movieListTemp.scrollLeft != 0){
        leftButton = true;
      }
    
      if((movieListTemp.offsetWidth + movieListTemp.scrollLeft) != movieListTemp.scrollWidth ){
        rightButton = true;
      }
      setShowSideButtons({showLeftButton:leftButton,showRightButton:rightButton});
    }
    
  };

  const handleMouseLeaveList = () => {
    setShowSideButtons({showLeftButton:false,showRightButton:false});
  }

  const handleScroll = (scrollRight) => {
    if(scrollRight){
        movieList.current.scrollLeft+=200
    }else{
        movieList.current.scrollLeft-=200
    }
    handleMouseEnterList()
    
  };

  return (
    <div className="px-6 ">
      <h1 className="text-white text-lg md:text-2xl py-6 ">{title}</h1>
      <div className="relative"
      
      onMouseEnter={handleMouseEnterList}
      onMouseLeave={handleMouseLeaveList}
      >
      {showSideButtons.showLeftButton && (
          <div className="absolute h-full cursor-pointer text-white z-50 left-0 top-1/2 -translate-y-1/2 flex items-center md:bg-gradient-to-r md:from-black "
          onClick={()=>handleScroll(false)}
          >
            <MdKeyboardArrowLeft className="text-7xl hover:scale-125" />
          </div>
        )}
      <div
      className="flex overflow-hidden"
      ref={movieList}
      >
        
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
        
      </div>
      {showSideButtons.showRightButton && (
          <div className="absolute h-full cursor-pointer z-50 transition top-1/2 -translate-y-1/2 text-white right-0 flex items-center md:bg-gradient-to-l md:from-black"
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
