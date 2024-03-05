import { IMAGE_CDN_URL } from "../utils/constants";

const HoverModal = ({
  config,
  adult,
  backdrop_path: backdropPath,
  poster_path: posterPath,
  popularity,
  original_title: originalTitle,
  genre_ids: genreIds,
  vote_average:voteAverage,
  vote_count:voteCount
}) => {
    console.log(adult,
        backdropPath,
         posterPath,
        popularity,
         originalTitle,
        genreIds,
       voteAverage,
       voteCount)
  const { left, top, width, height } = config;
  return (
    <div
      className={`absolute text-white z-10`}
      style={{ left: left, top: top, width: width, height: height }}
    >
        <img src={IMAGE_CDN_URL + posterPath} />
    </div>
  );
};

export default HoverModal;
