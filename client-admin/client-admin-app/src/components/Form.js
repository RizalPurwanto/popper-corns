import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../store/actions/genreAction";
import { useForm } from "react-hook-form";



export default function MovieForm(props) {
    const dispatch = useDispatch()
  
  const genres = useSelector((state)=> state.genreReducer.genres)
  

  useEffect(() => {
    dispatch(fetchGenres()
    
    )
    console.log(genres, "INI GENRES")
  }, []);

    const [movieInput, setMovieInput] = useState({
        title: '',
        slug: '',
        synopsis: '',
        imgUrl: '',
        rating: 0,
        trailerUrl: '',
        genreId: '',
        authorId: 1,
        casts: [{
            name: '',
            profilePict: ''
        },
        {
            name: '',
            profilePict: ''
        },
        {
            name: '',
            profilePict: ''
        }
    ]

    });
    
    const addCast = ((e) => {
        e.preventDefault();
        setMovieInput({
            ...movieInput, 
            casts: [
               ...movieInput.casts,
               {
                name: '',
                profilePict: ''
               }

            ]
        })
        console.log(movieInput.casts)
    })


    useEffect(() => {
        if (props.movie) {
            setMovieInput({
                title: props.movie.title,
                slug: props.movie.slug,
                synopsis: props.movie.synopsis,
                imgUrl: props.movie.imgUrl,
                rating: props.movie.rating,
                trailerUrl: props.movie.trailerUrl,
                genreId: props.movie.genreId,
                authorId: props.movie.authorId,
                casts: props.movie.Casts

            })
            console.log(props.movie, "INI PROPS ")
            console.log(genres, "INI GENRES ")
           
        }
    }, [props.movie])
    

    
    
    const movieInputHandler = (e) => {
        const { value, name } = e.target
        const newInput = {
            ...movieInput
        }
        console.log(newInput[name], value, name)
        newInput[name] = value
        
        setMovieInput(newInput)
    }

    const castHandler = (e, i) => {
        const { value, name, } = e.target
        console.log(e.target.value, i, "INI NEW INPUT")
        let newCasts = [...movieInput.casts]
        newCasts[i] = {
            ...movieInput.casts[i],
            [name]: value
        }
        const newInput = {
            ...movieInput,
            casts : newCasts
        }
        
        setMovieInput(newInput)
        
    }

    

    const submit = (e) => {
        e.preventDefault();
        console.log(movieInput)
        props.submitHandler(movieInput)

    }


    

    return (
        <div className="my-7">

            <div className="relative flex grid grid-cols-1 divide-y text-center ">
                <div className="flex justify-center ">
                    <form
                        action=""
                        onSubmit={submit}
                        className="bg-gray-500 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2"
                    >



                        <div className="text-gray-700 md:flex md:items-center py-2 flex-col ">
                            <label htmlFor="title" className="font-bold text-white mx-3">Title</label>

                            <div className="md:w-2/3 md:flex-grow">
                                <input

                                    className="
                  w-full
                  h-10
                  px-3
                  text-base
                  placeholder-gray-600
                  border
                  rounded-lg
                  focus:shadow-outline
                "
                                    type="text"
                                    name="title"
                                    id="title"
                                    value={movieInput.title}
                                    onChange={movieInputHandler}
                                />
                            </div>
                        </div>

                        <div className="text-gray-700 md:flex md:items-center py-2 flex-col ">
                            <label htmlFor="synopsis" className="font-bold text-white mx-3">Synopsis</label>

                            <div className="md:w-2/3 md:flex-grow">
                                <input

                                    className="
                  w-full
                  h-10
                  px-3
                  text-base
                  placeholder-gray-600
                  border
                  rounded-lg
                  focus:shadow-outline
                "
                                    type="text"
                                    name="synopsis"
                                    id="synopsis"
                                    value={movieInput.synopsis}
                                    onChange={movieInputHandler}
                                />
                            </div>
                        </div>

                        <div className="text-gray-700 md:flex md:items-center py-2 flex-col ">
                            <label htmlFor="imgUrl" className="font-bold text-white mx-3">Image URL</label>

                            <div className="md:w-2/3 md:flex-grow">
                                <input

                                    className="
                  w-full
                  h-10
                  px-3
                  text-base
                  placeholder-gray-600
                  border
                  rounded-lg
                  focus:shadow-outline
                "
                                    type="text"
                                    name="imgUrl"
                                    id="imgUrl"
                                    value={movieInput.imgUrl}
                                    onChange={movieInputHandler}
                                />
                            </div>
                        </div>

                        <div className="text-gray-700 md:flex md:items-center py-2 flex-col ">
                            <label htmlFor="trailerUrl" className="font-bold text-white mx-3">Trailer URL</label>

                            <div className="md:w-2/3 md:flex-grow">
                                <input

                                    className="
                  w-full
                  h-10
                  px-3
                  text-base
                  placeholder-gray-600
                  border
                  rounded-lg
                  focus:shadow-outline
                "
                                    type="text"
                                    name="trailerUrl"
                                    id="trailerUrl"

                                    value={movieInput.trailerUrl}
                                    onChange={movieInputHandler}
                                />
                            </div>
                        </div>
                        <div className="text-gray-700 md:flex md:items-center py-2 flex-col ">
                            <label htmlFor="rating" className="font-bold text-white mx-3">Rating</label>

                            <div className="md:w-2/3 md:flex-grow">
                                <input
                                    max="100"
                                    min="10"
                                    type="number"
                                    // step=".01"
                                    className="w-full text-center rounded h-10"
                                    name="rating"
                                    id="rating"
                                    value={movieInput.rating}
                                    onChange={movieInputHandler}
                                >



                                </input>
                            </div>
                        </div>
                        <div className="text-gray-700 md:flex md:items-center py-2 flex-col ">
                            <label htmlFor="genre" className="font-bold text-white mx-3">Genre</label>

                            <div className="md:w-2/3 md:flex-grow">
                                <select


                                    className="w-full text-center rounded h-10"
                                    name="genreId"
                                    id="genreId"
                                    value={movieInput.genreId}
                                    onChange={movieInputHandler}
                                >
                                    <option value="" disabled>
                                        -- Select Category --
                                    </option>
                                    {genres?.map((genre, i) => {
                                        //console.log(genre, "INI INDIVIDUAL GENRE")
                                        return <option value={genre.id} key={i}>{genre.name}</option>
                                    })}


                                </select>
                            </div>
                        </div>
                        {movieInput?.casts?.map((cast, i) => {
                            return <div key={i}>
                                <div className="text-gray-700 md:flex md:items-center py-2 flex-col ">
                                    <label htmlFor="trailerUrl" className="font-bold text-white mx-3">Cast Name</label>

                                    <div className="md:w-2/3 md:flex-grow">
                                        <input

                                            className="
             w-full
             h-10
             px-3
             text-base
             placeholder-gray-600
             border
             rounded-lg
             focus:shadow-outline
           "
                                            type="text"
                                            name="name"
                                            id="name"
                                            // key={}
                                            value={cast.name}
                                            onChange={(event) =>castHandler(event, i)}
                                        />
                                    </div>
                                </div>
                                <div className="text-gray-700 md:flex md:items-center py-2 flex-col ">
                                    <label htmlFor="trailerUrl" className="font-bold text-white mx-3">Cast Profile Picture URL</label>

                                    <div className="md:w-2/3 md:flex-grow">
                                        <input

                                            className="
             w-full
             h-10
             px-3
             text-base
             placeholder-gray-600
             border
             rounded-lg
             focus:shadow-outline
           "
                                            type="text"
                                            name="profilePict"
                                            id="profilePict"
                                           
                                            value={cast.profilePict}
                                            onChange={(event) =>castHandler(event, i)}
                                        />
                                    </div>
                                </div>
                            </div>
                        })}
                        {/* <button

                            onClick={addCast}
                            className="
                  text-white
                  bg-yellow-800
                  hover:bg-yellow-700
                 
                  
                  font-bold
                  py-2
                  px-4
                  border border-white 
                  rounded
                "
                        >
                            Add Casts
                        </button> */}
                        <div className="text-gray-700 md:flex py-2">
                            <div className="md:w-1/2 md:flex-grow">

                                <button
                                    type="submit"
                                    className="
                  text-white
                  bg-red-800
                  hover:bg-red-700
                 
                  
                  font-bold
                  py-2
                  px-4
                  border border-white 
                  rounded
                "
                                >
                                    Submit
                                </button>

                            </div>
                        </div>
                        <div className="text-gray-700 md:flex py-2">
                            <div className="md:w-1/2 md:flex-grow">

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}