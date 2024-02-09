import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { editMovie } from "../store/actions/movieAction";
import Swal from "sweetalert2"
import Form from "../components/Form";
import { fetchMovie } from "../store/actions/movieAction";


export default function EditForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movieReducer.movie);

  const params = useParams();

  useEffect(() => {
    //console.log(`fetch  movie ${params.movieId} here`);
    dispatch(fetchMovie(params.movieId));
  }, []);

  const submitHandler = (body) => {
    //console.log(body, "INI BODY EDIT");
    dispatch(editMovie(params.movieId, body))
      .then((response) => {
        if (!response.ok) {
          // throw Error(response.statusText);
          return response.json().then(err => Promise.reject(err));
        }
        return response.json();
      })
      .then((data) => {
        //console.log("ok, INI EDITED MOVIES", data);

        //console.log();
        navigate("/");
      })
      .catch((error) => {
        //console.log(error);
        Swal.fire(error.message.join(', '))
      });
  };

  return (
    <div className="divide-y ">
      <h2 className=" my-5 text-2xl font-bold">Update Movie Entry</h2>
      <Form
        submitHandler={(val) => {
          //console.log(val, "INI VAL");
          submitHandler(val);
        }}
        movie={movie}
      ></Form>
    </div>
  );
}
