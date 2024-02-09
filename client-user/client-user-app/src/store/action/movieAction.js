
import {
    SET_MOVIES,
    SET_MOVIE,
    SET_LOADING_FALSE,
    SET_LOADING_TRUE
} from '../actionType'
const BASE_URL = 'https://popper-corns-0fea1b4c183b.herokuapp.com'


export const fetchMovies = () => {
    //console.log("fetch movies here, from actions");
   console.log(BASE_URL, "ININ BASE")
    return (dispatch) => {
        dispatch({ type: SET_LOADING_TRUE })
        fetch(
            `${BASE_URL}/pub`, {
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',

            },
        }
        )
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                //console.log("ok, INI MOVIES", data);
                // setMovies(data);
                dispatch(
                    { type: SET_MOVIES, payload: data })


            })
            .catch((error) => {
                console.log(error);

            })
            .finally(() => {

                dispatch({ type: SET_LOADING_FALSE })

            })
    }

}

export const fetchMovie = (id) => {
    //console.log("fetch one movie here, from actions");

    return (dispatch) => {
        dispatch({ type: SET_LOADING_TRUE })
        fetch(
            `${BASE_URL}/pub/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'access_token': localStorage.getItem('access_token')
            },
        }
        )
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                console.log("ok, INI ONE MOVIE", data);

                dispatch(
                    { type: SET_MOVIE, payload: data })

            })

            .catch((error) => {

                console.log(error);
            })
            .finally(() => {
                dispatch({ type: SET_LOADING_FALSE })
            })

    }

}







