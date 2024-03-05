import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const HomePage = () => {
    
    useNowPlayingMovies();
  return (
    <>
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default HomePage;
