import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, movieList } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";


const useNowPlayingMovies=()=>{
    const dispatch = useDispatch();
    const moviesListStore = useSelector((store)=>store.movies);

    const fetchNowPlayingMovies = async (key,fetchUrl)=>{
        const response = await fetch(fetchUrl, API_OPTIONS);
        const data = await response.json();
         dispatch(addNowPlayingMovies({key:key ,results:data.results}));
     }
     
     
    useEffect(()=>{
     
        for(let key in movieList){
            
            if(!moviesListStore[key]){
                fetchNowPlayingMovies(key,movieList[key].fetchUrl);
            }
        }
        
    },[]);
    
}

export default useNowPlayingMovies;