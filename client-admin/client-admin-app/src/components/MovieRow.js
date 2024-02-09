import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { deleteMovie } from "../store/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import { fetchCasts } from "../store/actions/castAction";

export default function MovieRow({ movie }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const casts = useSelector((state) => state.castReducer.casts);
  const handleOpen = () => {
    castHandler();
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const deleteHandler = () => {
    console.log("DELETE MOVIE NUMBER", movie.id);
    dispatch(deleteMovie(movie.id));
  };

  const castHandler = () => {
    dispatch(fetchCasts(movie.id));
  };
  return (
    <tr className="" key={movie.id}>
      <td className="border border-slate-300">{movie.title}</td>
      <td className="border border-slate-300">{movie.Genre.name}</td>
      <td className="border border-slate-300">{movie.synopsis}</td>
      <td className="border border-slate-300">
        <img className="w-full h-72" src={movie.imgUrl}></img>
      </td>
      <td className="border border-slate-300">
        <iframe className="w-full" src={movie.trailerUrl}></iframe>
      </td>
      <td className="border border-slate-300">
      {movie.User.username}
      </td>
      <td className="border border-slate-300">
        {" "}
        <button
          onClick={handleOpen}
          className="py-3 px-3 font-bold my-3 bg-blue-700 text-white rounded hover:bg-blue-600"
        >
          Show Casts
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <MultiCarousel className="  h-80" responsive={responsive}>
              {casts.map((cast) => (
                <div className="mx-1 px-2 py-2 h-80 rounded-lg" key={cast.id}>
                  <p>{cast.name}</p>
                  <img
                    className="h-full  rounded-lg"
                    src={cast.profilePict}
                  ></img>
                </div>
              ))}
            </MultiCarousel>
          </Box>
        </Modal>
      </td>
      <td className="border border-slate-300 flex flex-col px-1 justify-center h-96">
        <NavLink
          to={`movies/${movie.id}`}
          className="font-bold my-3 bg-green-800 hover:bg-green-700 text-white rounded"
        >
          EDIT
        </NavLink>

        <button
          onClick={deleteHandler}
          className="font-bold my-3 bg-red-700 text-white rounded hover:bg-red-600"
        >
          DELETE
        </button>
      </td>
    </tr>
  );
}
