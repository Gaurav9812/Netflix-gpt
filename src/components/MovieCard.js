import { Link } from "react-router-dom";
import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({movieId,posterPath})=>{
        if(!posterPath) return;
    return <Link to={`/watch-video/${movieId}`} className="w-36 md:w-48 px-4 ml-4 cursor-pointer">
        <img src={IMAGE_CDN_URL+posterPath} alt="Movie Card"/>
    </Link>;
}

export default MovieCard;