import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { addMovie } from "../store/actions/movieAction";
import { fetchMovies } from "../store/actions/movieAction";
import Swal from "sweetalert2"


const LOCAL_URL = "http://localhost:3000";
export default function AddForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (body) => {
    dispatch(addMovie(body))
      .then((response) => {
        //console.log(response.message, "INI THEN ADD PERTAMA");
        if (!response.ok) {
          //   throw Error(response.statusText);
          return response.json().then(err => Promise.reject(err));
        }
        return response.json();
      })
      .then((data) => {
        //console.log("ok, INI ADDED MOVIES", data);

        dispatch(fetchMovies());
        navigate('/')
      })
      .catch((error) => {
        //console.log(error.message, "INI CATCH ADD MOVIE");
        Swal.fire(error.message.join(', '))
      });
  };

  return (
    <div className="divide-y ">
      <h2 className=" my-5 text-2xl font-bold">Add Movie Entry</h2>
      <Form
        submitHandler={(val) => {
          //console.log(val, "INI VAL");
          submitHandler(val);
        }}
      ></Form>
    </div>
  );
}
