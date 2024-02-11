import MovieCard from "./MovieCard";

const MovieList = ({title,movies})=>{

    return <div className="px-6 ">
        <h1 className="text-white text-lg md:text-2xl py-6">{title}</h1>
        <div className="flex overflow-x-scroll">
            <div className="flex">
                {movies.map((movie=> <MovieCard key={movie.id} posterPath={movie.poster_path} />))}
               
            </div>
        </div>
    </div>;
}

export default MovieList;