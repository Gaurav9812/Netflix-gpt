import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch()

  const searchMovieInTmdb = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const json = await data.json();
    return json?.results;
  };

  const handleGptSearch = async () => {
    const q = searchText.current.value;
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query : " +
      q +
      ". only give me names of 5 movies, comma sepeated like example result given ahead. Example Result : hera pheri, golmaal, animal, gadar, lift";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      return;
    }
    
    const gptMovies = gptResults.choices?.[0]?.message.content.split(",");

    const resArr = gptMovies.map((gptMovie)=>{
        return searchMovieInTmdb(gptMovie);
    });

    const tmdbResults = await Promise.all(resArr);
    dispatch(addGptMovieResult({gptMovies:gptMovies,movieResults:tmdbResults}));
    

  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center items-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder="search"
          ref={searchText}
        />
        <button
          className="py-1 md:py-2 px-4 bg-red-700 text-white col-span-3 m-3 nd:m-4 rounded-lg"
          onClick={handleGptSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
