import MovieCardShimmer from "./MovieCardShimmer";

const MovieListShimmer = ()=>{

    return (<div className="px-6 ">
    <h1 className="py-1 rounded-full animate-pulse bg-gradient-to-r from-slate-300 to-slate-500 h-3 w-1/2">sad</h1>
    <div className="flex overflow-x-scroll">
        <div className="flex">
            {Array(20).fill(0).map((item,index)=>{
                return <MovieCardShimmer key={index} />
            })}
           
        </div>
    </div>
</div>);
}

export default MovieListShimmer;