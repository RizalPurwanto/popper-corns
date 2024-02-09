import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import FormGenre from "../components/FormGenre";
import { addGenre, fetchGenres } from "../store/actions/genreAction";



export default function AddForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submitHandler = (body) => {
        dispatch(addGenre(body)).then((response) => {
            if (!response.ok) {
                // throw Error(response.statusText);
                return response.json().then(err => Promise.reject(err));
            }
            return response.json();
        })
            .then((data) => {
                //console.log("ok, INI ADDED GENRE", data);
                navigate('/genres')
                //console.log()
                dispatch(fetchGenres())
            })
            .catch((error) => {
                //console.log(error);
            });

    };

    return (
        <div className="divide-y ">
            <h2 className=" my-5 text-2xl font-bold">Add Movie Genre</h2>
            <FormGenre
                submitHandler={(val) => {
                    //console.log(val, "INI VAL");
                    submitHandler(val);
                }}
            ></FormGenre>
        </div>
    );
}
