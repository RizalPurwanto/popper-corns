import { deleteGenre, fetchGenres } from "../store/actions/genreAction";
import { useDispatch, useSelector } from "react-redux";

import { NavLink, useNavigate } from "react-router-dom";


export default function GenreRow({ genre, index }) {
  const dispatch = useDispatch();
  const navigate = useNavigate() 
  const deleteHandler = () => {
    console.log("DELETE GENRE NUMBER", genre.id)
    dispatch(deleteGenre(genre.id)).then((response) => {
      if (!response.ok) {
        return response.json().then(err => Promise.reject(err));
      }
      return response.json();
    })
      .then((data) => {
        console.log("ok, INI DELETED GENRE", data);

        console.log()
        dispatch(fetchGenres())
        navigate('/genres')
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {

      })
  };

  return (
    <tr key={genre.id}>
      <td className="border border-slate-300">{index+1}</td>
      <td className="border border-slate-300">{genre.name}</td>
      <td className="border border-slate-300">
        <button
          onClick={deleteHandler}
          className="w-24 font-bold my-3 bg-red-700 text-white rounded hover:bg-red-600"
        >
          DELETE
        </button>

        <NavLink to={`/genres/${genre.id}`} className="mx-3 font-bold w-24 my-3 bg-green-800 hover:bg-green-700 text-white rounded px-3">
                    EDIT
                </NavLink>
      </td>
    </tr>
  );
}
