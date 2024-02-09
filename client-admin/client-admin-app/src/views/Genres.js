import { useState, useEffect } from "react";
import GenreRow from "../components/GenreRow";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../store/actions/genreAction";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Movie() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const genresStore = useSelector((state) => state.genreReducer.genres);
  const loadingStore = useSelector((state) => state.genreReducer.loading);

  useEffect(() => {
    dispatch(fetchGenres())
    //console.log(genresStore, "INI GENRES");
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
    <div className="w-full divide-y flex flex-col ">
      <h2 className="text-2xl font-bold">Genres</h2>
      <div id=" " className="py-3 my-2  text-left">
        <NavLink
          to={"/addgenre"}
          href=""
          className="block bg-red-800 text-white py-3 px-3 hover:bg-red-700 float-right rounded-lg"
        >
          <i className="fa fa-plus"></i> Add Genre
        </NavLink>
      </div>
      <div className="flex justify-center">
        <table className=" table-auto divide-y divide-gray-200 border table-fixed border-separate text-center border-collapse w-1/2 border-black ">
          <thead className="bg-red-800 text-white">
            <tr>
              <th className="border border-slate-300 w-1/4">No</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {genresStore.map((genre, i) => {
              //console.log(movie, "INI INDIVIDUAL MOVIE")
              return <GenreRow genre={genre} index={i} key={i}></GenreRow>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
