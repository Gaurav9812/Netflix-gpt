import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = ()=>{
    const movies = useSelector(store=>store.movies?.nowPlayingMovies);

    if(!movies) return; 
    const mainMovies = movies[Math.floor(Math.random()*movies.length) ];
    
    const {original_title, overview, id} = mainMovies;

    return <div className="pt-[30%] bg-black md:pt-0">
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
    </div>;
}

export default MainContainer;