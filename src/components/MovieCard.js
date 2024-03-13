import { Link } from "react-router-dom";
import { IMAGE_CDN_URL } from "../utils/constants";
import { useEffect, useRef, useState } from "react";
import HoverModal from "./HoverModal";
import { createPortal } from "react-dom";

const MovieCard = ({ id: movieId, poster_path: posterPath, ...restParams }) => {
  const [hover, setHover] = useState(false);
  const movieCard = useRef(null);
  const timer = useRef(0);
  const [hoverConfig, setHoverConfig] = useState({
    left: 0,
    top: 0,
    width: 50,
    height: 50,
  });
  useEffect(() => {}, []);
  if (!posterPath) return;

  const handleMouseOver = () => {
    if (!hover) {
      let movieCardCurrent = movieCard.current;
      let left = movieCardCurrent.getBoundingClientRect().x - 75;
      if (movieCardCurrent.getBoundingClientRect().x < 75) {
        left = movieCardCurrent.getBoundingClientRect().x;
      }

      let top = movieCardCurrent.getBoundingClientRect().y + window.scrollY - 75;

      let width = movieCardCurrent.offsetWidth + 150;
      let height = movieCardCurrent.offsetHeight + 150;
      
      if (
        document.body.offsetHeight <=
        movieCardCurrent.getBoundingClientRect().y + window.scrollY + height -75
      ) {
        top = movieCardCurrent.getBoundingClientRect().y + window.scrollY - (movieCardCurrent.getBoundingClientRect().y + window.scrollY + height-(document.body.offsetHeight));
      }
      
      if(document.body.offsetWidth <= movieCardCurrent.getBoundingClientRect().x+width){
        left = movieCardCurrent.getBoundingClientRect().x-(movieCardCurrent.getBoundingClientRect().x+width-document.body.offsetWidth)-20;
      }
      setHoverConfig({
        left: left,
        top: top,
        width: width,
        height: height,
      });
    }
    timer.current = setTimeout(() => {
      console.log("timer in");
      setHover(true);
    }, 1000);
  };

  const handleMouseOut = () => {
    clearTimeout(timer.current);
    setHover(false);
  };

  return (
    <div
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
      ref={movieCard}
      className="w-36 md:w-48 px-2 ml-4 cursor-pointer overflow-hidden"
    >
      {hover &&
        createPortal(
          <HoverModal
            config={hoverConfig}
            movieId={movieId}
            {...restParams}
            poster_path={posterPath}
          />,
          document.body
        )}
      <Link to={`/watch-video/${movieId}`}>
        <img
          src={IMAGE_CDN_URL + posterPath}
          alt="Movie Card"
          className="transition duration-[2000ms] hover:scale-125 "
        />
      </Link>
    </div>
  );
};

export default MovieCard;
