import { useState, useEffect } from "react";
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Carousel2 from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import { Paper, Button } from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { fetchMovie } from "../store/action/movieAction"


export default function Movie() {
    //const [movies, setMovies] = useState([]);
    
    const dispatch = useDispatch()
    const params = useParams();
    const loadingStore = useSelector((state) => state.movieReducer.loading);
    const movie = useSelector((state) => state.movieReducer.movie);


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    useEffect(() => {
        console.log("fetch movies here");

        dispatch(fetchMovie(params.movieId));
    }, []);

    if (loadingStore) {
        return <div className="my-5 mx-3 rounded-lg bg-red-800 text-white h-20 flex flex-start justify-center items-center">
            <img className="h-10 mx-2" src={require("../loading-buffering.gif")}></img>

            <p className="font-extrabold">  Loading ....</p>
        </div>
    }

    return (
        <div className='h- flex flex-col bg-white grow'>


            <div className=" mx-3 my-4 h-1/2 flex  px-4 py-4">
                <div className="w-1/4 mr-10">
                    <img className="rounded-lg w-full h-full" src={movie?.imgUrl}></img>
                    <p className="my-2 font-semibold bg-red-800 text-white">Genre: {movie?.Genre?.name}</p>
                </div>
                <div className="w-3/4 grow">
                    <div className="h-full my-2">
                        <div className="my-0.1 flex items-baseline ">
                            <div className="bg-red-700 w-5  h-5">

                            </div>
                            <div className="  resize-x">

                                <h2 className="grow  before:text-red-700 after:text-red-700 before:font-extrabold  px-2 text-left font-bold before:bg-red-700 after:bg-red-700" >
                                    <a className="text-3xl ">  {movie?.title}</a> </h2>
                            </div>

                            <div className="bg-red-700 grow w-24  resize-x h-5">

                            </div>
                        </div>
                        <iframe className="w-full h-full rounded-lg"
                            src={movie?.trailerUrl}>
                        </iframe>
                        <div className="">
                            <p className="text-left  font-semibold">article by {movie?.User?.username}</p>
                        </div>
                    </div>



                </div>

            </div>


            <div className=" mx-3 my-4 h-1/2  px-4 py-4">
                <div className="w-3/4 float-right grow">
                    <div className="h-full my-2">
                        <div className="my-0.1 flex items-baseline ">
                            <div className="bg-red-700 w-5  h-5">

                            </div>
                            <div className="  resize-x">

                                <h2 className="grow  before:text-red-700 after:text-red-700 before:font-extrabold  px-2 text-left font-bold before:bg-red-700 after:bg-red-700" >
                                    <a className="text-3xl ">Score Rating</a> </h2>
                            </div>

                            <div className="bg-red-700 grow w-24  resize-x h-5">

                            </div>

                        </div>
                        <div className="">
                            <div className="flex items-center  justify-center">
                                <div className="flex grow items-center  justify-center float-right bg-red-700 h-24 w-1/4 rounded-lg">
                                    <div className="flex grow items-center  justify-center float-right bg-red-700 border-white border h-24 w-1/4 rounded-lg">
                                        <p className="h-1/2 text-white font-bold text-4xl">
                                            {movie?.rating}%
                                        </p>
                                    </div>
                                </div>
                                {movie?.rating >= 75 &&
                                    <div className="flex flex-col  w-1/4"><img className="h-24" src={require("../popLogo2.png")}></img>
                                        <div>
                                            <p className="text-red-700 font-bold text-2xl">POP!</p>
                                        </div></div>

                                }
                                {movie?.rating < 75 &&
                                    <div className="flex flex-col w-1/4"><img className="h-24" src={require("../popLogoSpilled.png")}></img>
                                        <div>
                                            <p className="text-red-700 font-bold text-2xl">POOR...</p>
                                        </div></div>

                                }



                            </div>

                        </div>

                    </div>
                    <div className="h-full my-2">
                        <div className="my-0.1 flex items-baseline ">
                            <div className="bg-red-700 w-5  h-5">

                            </div>
                            <div className="  resize-x">

                                <h2 className="grow  before:text-red-700 after:text-red-700 before:font-extrabold  px-2 text-left font-bold before:bg-red-700 after:bg-red-700" >
                                    <a className="text-3xl "> Synopsis</a> </h2>
                            </div>

                            <div className="bg-red-700 grow w-24  resize-x h-5">

                            </div>

                        </div>
                        <div className="text-left">
                            <p>
                                {movie?.synopsis}

                            </p>
                        </div>

                    </div>



                </div>
                <div className="w-3/4 float-right grow">
                    <div className="h-full my-2">
                        <div className="my-0.1 flex items-baseline ">
                            <div className="bg-red-700 w-5  h-5">

                            </div>
                            <div className="  resize-x">

                                <h2 className="grow  before:text-red-700 after:text-red-700 before:font-extrabold  px-2 text-left font-bold before:bg-red-700 after:bg-red-700" >
                                    <a className="text-3xl "> Casts</a> </h2>
                            </div>

                            <div className="bg-red-700 grow w-24  resize-x h-5">

                            </div>

                        </div>
                        <div className="w-full">
                            <Carousel2

                                className="w-full  h-80" responsive={responsive}>
                                {movie?.Casts?.map((cast) =>
                                    <div className="mx-1 px-2 py-2 h-80 rounded-lg w-full" key={cast?.id}>
                                        <h1 className="text-left font-semibold">{cast?.name}</h1>
                                        <img className="h-full mb-2 rounded-lg" src={cast?.profilePict}></img>

                                    </div>)
                                }


                            </Carousel2>
                        </div>

                    </div>



                </div>
            </div>






        </div>
    );
}
