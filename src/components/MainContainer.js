import { useSelector,shallowEqual } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { createSelector } from "@reduxjs/toolkit";
import { memo, useEffect, useState } from "react";




const MainContainer = ()=>{
    
    const movies = useSelector(store=>{return store.movies.nowPlayingMovies},{equalityFn:shallowEqual});
    const [mainMovies,setMainMovies]= useState(null);
    useEffect(()=>{
        if(!movies) return; 
        const randMovie = Math.floor(Math.random()*movies.length);
        const mainMovies = movies[randMovie];
        
        setMainMovies(mainMovies);
    },[movies]);
    if(!movies || !mainMovies) return; 
    const {original_title, overview, id} = mainMovies;
    return <div className="pt-[30%] bg-black md:pt-0">
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
    </div>;
}

export default MainContainer;