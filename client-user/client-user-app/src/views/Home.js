import { useState, useEffect } from "react";
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Carousel2 from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import { Paper, Button } from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchMovie, fetchMovies } from "../store/action/movieAction"


export default function Movie() {
    //const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    const loadingStore = useSelector((state) => state.movieReducer.loading);
    const movies = useSelector((state) => state.movieReducer.movies);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
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

        dispatch(fetchMovies());
    }, []);

    // const getMovie = ((id) => {
    //     console.log("get one movie with id" , id)
    //     dispatch(fetchMovie(id))
    // })

    if (loadingStore) {
        return <div className="my-5 mx-3 rounded-lg bg-red-800 text-white h-20 flex flex-start justify-center items-center">
        <img className="h-10 mx-2" src={require("../loading-buffering.gif")}></img>

        <p className="font-extrabold">  Loading ....</p>
      </div>
    }

    return (
        <div className='h- flex flex-col bg-white'>

            
            <div className=" mx-3 my-4 h-1/2  px-4 py-4">
                <h2 className="before:content-['|'] before:text-red-700 before:font-extrabold px-2 text-left font-bold ">Oscar Winners</h2>
                <Carousel2

                    className="  h-80" responsive={responsive}>
                    {movies.map((movie) =>
                        <div className="mx-1 px-2 py-2 h-80 rounded-lg" key={movie.id}>
                            <NavLink 
                            // onClick={getMovie(movie.id)} 
                            to={`movies/${movie.id}`}>
                                <img className="h-full  rounded-lg" src={movie.imgUrl}></img>
                            </NavLink>

                        </div>
                        )
                    }


                </Carousel2>
            </div>

            <div className=" mx-3 my-4 h-1/2  px-4 py-4">
                <h2 className="before:content-['|'] before:text-red-700 before:font-extrabold px-2 text-left font-bold ">Popular In Theaters</h2>
                <ul className="flex divide-y flex-col">
                    {movies.map((movie) =>

                        <li className="mx-2 py-2   " key={movie.id}>
                            <NavLink  hrefLang="" to={`movies/${movie.id}`} className="float-left font-semibold">
                                {movie.title}
                            </NavLink>
                            <NavLink  hrefLang="" to={`movies/${movie.id}`} className="float-right font-bold text-red-700">
                                {movie.rating}%
                            </NavLink>
                        </li>

                    )
                    }


                </ul>
            </div>

            <div className=" mx-3 my-4 h-1/2  px-4 py-4">
                <h2 className="before:content-['|'] before:text-red-700 before:font-extrabold px-2 text-left font-bold ">Popular Streaming Movies</h2>
                <Carousel2

                    className="  h-80" responsive={responsive}>
                    {movies.map((movie) =>
                    
                    <div className="mx-1 px-2 py-2 h-80 rounded-lg" key={movie.id}>
                            <NavLink  to={`movies/${movie.id}`}>
                                <img className="h-full  rounded-lg" src={movie.imgUrl}></img>
                            </NavLink>

                        </div>    
                    )
                    }


                </Carousel2>
            </div>

            <div className=" mx-3 my-4 h-1/2  px-4 py-4">
                <h2 className="before:content-['|'] before:text-red-700 before:font-extrabold px-2 text-left font-bold ">Best Superhero Movies</h2>
                <Carousel2

                    className="  h-80" responsive={responsive}>
                    {movies.map((movie) =>
                        <div className="mx-1 px-2 py-2 h-80 rounded-lg" key={movie.id}>
                            <NavLink  to={`movies/${movie.id}`}>
                                <img className="h-full  rounded-lg" src={movie.imgUrl}></img>
                            </NavLink>

                        </div>)
                    }


                </Carousel2>
            </div>


        </div>
    );
}
