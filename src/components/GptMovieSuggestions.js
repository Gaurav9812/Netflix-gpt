import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions =()=>{
    const  {movieResults,movieNames,isTmdbSearch} = useSelector((store)=>{console.log(store.gpt); return store.gpt});
    if(!movieNames) return null;
    
    return <div className="p-4 m-1 md:m-4 bg-black opacity-90 "> 
        {
            isTmdbSearch ? 
                 <MovieList title="Search Result" movies={movieResults} />
            :
            movieNames.map((movieName,index)=>{
                    return <MovieList key={movieName} title={movieName} movies={movieResults[index]} />
            })
        }
    </div>
} 

export default GptMovieSuggestions;