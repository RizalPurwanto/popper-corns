import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import FormGenre from "../components/FormGenre";
import { editGenre, fetchGenres, oneGenre } from "../store/actions/genreAction";



export default function AddForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const genre = useSelector((state) => state.genreReducer.genre);

    useEffect(() => {
        //console.log(`fetch  movie ${params.genreId} here`);
        dispatch(oneGenre(params.genreId));
    }, []);
    const submitHandler = (body) => {
        dispatch(editGenre(body, params.genreId)).then((response) => {
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
            <h2 className=" my-5 text-2xl font-bold">Update Movie Genre</h2>
            <FormGenre
                submitHandler={(val) => {
                    //console.log(val, "INI VAL");
                    submitHandler(val);
                }}
                genre={genre}
            ></FormGenre>
        </div>
    );
}
