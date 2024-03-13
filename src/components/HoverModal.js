import { IMAGE_CDN_URL, genreList } from "../utils/constants";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";

import { AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";

const HoverModal = ({
  config,
  adult,
  backdrop_path: backdropPath,
  poster_path: posterPath,
  popularity,
  original_title: originalTitle,
  genre_ids: genreIds,
  vote_average: voteAverage,
  vote_count: voteCount,
  movieId
}) => {
  console.log(
    adult,
    backdropPath,
    posterPath,
    popularity,
    originalTitle,
    genreIds,
    voteAverage,
    voteCount,
    config
  );
  const { left, top, width, height } = config;
  return (
    <div
      className={` absolute text-white z-20 shadow-slate-950 bg-[#141414] rounded-md overflow-hidden`}
      style={{ left: left, top: top, width: width,height:height }}
    >
      <img
        src={IMAGE_CDN_URL + posterPath}
        className="w-full h-3/5 object-cover "
      />
      <div className=" pt-2">
        <div className="text-3xl">
          <div className="w-3/4 text-3xl flex" >
          <Link to={`/watch-video/${movieId}`} className="mx-2 inline box-border hover:text-slate-300">
           <MdOutlinePlayCircleFilled />
          </Link>
          <button className="mx-2 border-white box-border hover:text-slate-300">
          <CiCirclePlus />
          </button>
          <button className="mx-2 border-white box-border hover:text-slate-300 ">
          <AiOutlineLike />
          </button>
          </div>
        </div>
        <div className="flex flex-col p-2 px-4">
        <p className=" font-bold">{(originalTitle)}</p>
        <p className="font-bold text-green-500 py-2">{voteAverage}<span> Rating </span><span className="ml-2 text-gray-300">{voteCount}</span></p>
        <div className="text-gray-400 [&>*:last-child]:after:content-none">
            {genreIds.map((genreId)=>{
              return <div className=' inline-flex items-center after:content-[" "] after:mx-2 after:w-1 after:h-1 after:bg-gray-400 after:rounded-full '>{genreList[genreId]}</div>; 
            })}
        </div>
        </div>
      </div>
    </div>
  );
};

export default HoverModal;
