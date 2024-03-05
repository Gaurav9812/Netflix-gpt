import { memo, useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  
  useMovieTrailer(movieId);


  if (!trailerVideo) return;
  const unmute = trailerVideo.unmute ? 0 : 1;
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=${unmute}&controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};


export default VideoBackground;
