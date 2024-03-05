import { Link } from "react-router-dom";
import { IMAGE_CDN_URL } from "../utils/constants";
import { useEffect, useRef, useState } from "react";
import HoverModal from "./HoverModal";

const MovieCard = ({ id:movieId, poster_path:posterPath,...restParams }) => {
  const [hover, setHover] = useState(false);
  const movieCard = useRef(null);
  const [hoverConfig, setHoverConfig] = useState({
    left: 0,
    top: 0,
    width: 50,
    height: 50,
  });
  useEffect(() => {
    let movieCardCurrent = movieCard.current;
    let left = movieCardCurrent.offsetLeft - 50;
    let top = movieCardCurrent.offsetTop - 50;
    let width = movieCardCurrent.offsetWidth + 100;
    let height = movieCardCurrent.offsetHeight + 100;
    console.log(movieCardCurrent.offsetWidth,movieCardCurrent.offsetHeight);
    setHoverConfig({
      left: left,
      top: top,
      width: width,
      height: height,
    });
  }, []);
  if (!posterPath) return;

  const handleMouseOverAndOut = () => {
    console.log("sad");
    setHover(!hover);
  };

  return (
    <>{
        hover && <HoverModal config={hoverConfig} {...restParams} poster_path={posterPath} />
    }
    <Link
      to={`/watch-video/${movieId}`}
      className="w-36 md:w-48 px-2 ml-4 cursor-pointer overflow-hidden"
    >
      <img
        src={IMAGE_CDN_URL + posterPath}
        alt="Movie Card"
        className="transition duration-[2000ms] hover:scale-125 "
        onMouseOver={handleMouseOverAndOut}
        onMouseOut={handleMouseOverAndOut}
        ref={movieCard}
      />
    </Link>
    </>
  );
};

export default MovieCard;
