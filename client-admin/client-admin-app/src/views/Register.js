import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2"
import FormRegister from "../components/FormRegister";
import { addUser } from "../store/actions/userAction";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (body) => {
    dispatch(addUser(body))
      .then((response) => {
        if (!response.ok) {
          // throw Error(response.statusText);
          return response.json().then(err => Promise.reject(err));

        }
        return response.json();
      })
      .then((data) => {
        //console.log("ok, INI ADDED USERS", data);
        navigate("/");
        //console.log();
        // dispatch(fetchMovies())
      })
      .catch((error) => {
        //console.log(error, "INI ERROR REGISTER");
        Swal.fire(error.message.join(', '))
      });
  };

  return (
    <div className="divide-y ">
      <h2 className=" my-5 text-2xl font-bold">Add User</h2>
      <FormRegister
        submitHandler={(val) => {
          //console.log(val, "INI VAL");
          submitHandler(val);
        }}
      ></FormRegister>
    </div>
  );
}
