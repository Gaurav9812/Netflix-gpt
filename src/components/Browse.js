import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import { movieList } from "../utils/constants";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  
  return (
    <>
      
      
        <GptSearch />
      
    </>
  );
};

export default Browse;
