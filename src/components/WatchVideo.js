import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import VideoBackground from "./VideoBackground";
import { GoUnmute } from "react-icons/go";
import { BiVolumeMute } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toggleUnmute } from "../utils/movieSlice";

const WatchVideo = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  if (!params.videoId) navigate("/");
  const unmute = useSelector((stroe) => stroe.movies?.trailerVideo?.unmute);

  const handleUnmute = () => {
    dispatch(toggleUnmute());
  };

  return (
    <>
      <div
        className="absolute cursor-pointer p-2 top-1/2 rounded-3xl right-24 hover:bg-slate-700 z-10 border-2 border-gray-100" 
        onClick={handleUnmute}
      >
        {unmute ? (
          <GoUnmute className="text-2xl text-white" />
        ) : (
            <BiVolumeMute className="text-2xl text-white" />
        )}
      </div>
      <VideoBackground movieId={params.videoId} />
    </>
  );
};

export default WatchVideo;
