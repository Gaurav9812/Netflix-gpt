import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.user?.showGptSearch);

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
    let gptMovies = q;
    let tmdbResults;
    let tmbdSearch;
    if (showGptSearch) {
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

      gptMovies = gptResults.choices?.[0]?.message.content.split(",");
      tmbdSearch = false;
      const resArr = gptMovies.map((gptMovie) => {
        return searchMovieInTmdb(gptMovie);
      });
      tmdbResults = await Promise.all(resArr);
    } else {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${q}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const json = await data.json();
      tmdbResults = json?.results;
      console.log(tmdbResults);
      tmbdSearch = true;
    }

    dispatch(
      addGptMovieResult({
        gptMovies: gptMovies,
        movieResults: tmdbResults,
        tmbdSearch: tmbdSearch,
      })
    );
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex flex-col justify-center items-center">
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
      <p className="text-white bg-black p2">
        {showGptSearch ? (
          "Gpt Search"
        ) : (
          <p className="p-1 text-red-500">
            Since Gpt Api is paid so if u want to search using gpt api. Request
            for &nbsp;
            <a href="https://www.linkedin.com/in/gaurav-mehra-02b81621b/" target="_blank" className="text-blue-600">
              access
            </a>
          </p>
        )}
      </p>
    </div>
  );
};

export default GptSearchBar;
