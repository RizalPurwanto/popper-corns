import { useState, useEffect } from "react";
import MovieRow from "../components/MovieRow";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/actions/movieAction";
import { NavLink } from "react-router-dom";

export default function Movie() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const loadingStore = useSelector((state) => state.movieReducer.loading);
  const moviesStore = useSelector((state) => state.movieReducer.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  if (loadingStore) {
    return (
      <div className="my-5 rounded-lg bg-red-800 text-white h-20 flex flex-start justify-center items-center">
        <img className="h-10 mx-2" src={require("../loading-buffering.gif")}></img>

        <p className="font-extrabold">  Loading ....</p>
      </div>
    );
  }

  return (
    <div className="w-full divide-y overflow-auto flex flex-col mr-7 my-3">
      <h2 className="text-2xl font-bold">Movies</h2>
      <div id=" " className="py-3 my-2  text-left">
        <h1 className="py-3 px-3">Movie Entry List</h1>
        <NavLink
          to={"/add"}
          href=""
          className="block bg-red-800 text-white py-3 px-3 hover:bg-red-700 float-right rounded-lg"
        >
          <i className="fa fa-plus"></i> Add Movie
        </NavLink>
      </div>

      <table className="table-auto divide-y divide-gray-200 border table-fixed border-separate text-center border-collapse w-full border-black ">
        <thead className="bg-red-800 text-white">
          <tr>
            <th className="border border-slate-300">Title</th>
            <th>Genre</th>

            <th className="w-1/4">Synopsis</th>
            <th className="w-48">Poster</th>
            <th className="w-1/6">Trailer</th>
            <th>Author</th>
            <th>Casts</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {moviesStore.map((movie) => {
           // console.log(moviesStore, "INI INDIVIDUAL MOVIE")
            return <MovieRow movie={movie} key={movie.id}></MovieRow>;
          })}
        </tbody>
      </table>
    </div>
  );
}
