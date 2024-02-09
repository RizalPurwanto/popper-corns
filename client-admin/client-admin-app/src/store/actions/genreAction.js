import {
    SET_ONEGENRE,
    SET_GENRE,
    SET_LOADING
} from '../actionType'
const BASE_URL = 'https://popper-corns-0fea1b4c183b.herokuapp.com'
const LOCAL_URL = 'http://localhost:3000'

export const fetchGenres = () => {

    return (dispatch) => {
        //console.log("fetch genres here from actions");

        fetch(
            `${BASE_URL}/genres`, {
            headers: {
                'Content-Type': 'application/json',
                'access_token': localStorage.getItem('access_token')
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        }
        ).then((response) => {
            if (!response.ok) {
                //   throw Error(response.statusText);
                return response.json().then(err => Promise.reject(err));
            }
            return response.json();
        })
            .then((data) => {


                dispatch({ type: SET_GENRE, payload: data })

            })
            .catch((error) => {
                //console.log(error);
            })
            .finally(() => {
                dispatch({ type: SET_LOADING })
            })

    }

}

export const deleteGenre = (id) => {
    //console.log("delete genre here, from actions");
    return (dispatch) => {
        return fetch(
            `${BASE_URL}/genres/${id}`, {
            method: 'DELETE',
            mode: 'cors',
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                'access_token': localStorage.getItem('access_token')
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },

        }
        )

    }



}

export const editGenre = (body, id) => {
    ////console.log(body, id, "edit genre here, from actions");

    return (dispatch) => {
        return fetch(
            `${BASE_URL}/genres/${id}`, {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                'access_token': localStorage.getItem('access_token')
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(body)

        }
        )

    }



}
export const oneGenre = (id) => {
    ////console.log("one genre here, from actions");
    return (dispatch) => {
        return fetch(
            `${BASE_URL}/genres/${id}`, {
            method: 'Get',
            mode: 'cors',
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                'access_token': localStorage.getItem('access_token')
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },


        }
        )
            .then((response) => {
                if (!response.ok) {
                    //   throw Error(response.statusText);
                    return response.json().then(err => Promise.reject(err));
                }
                return response.json();
            })
            .then((data) => {

                ////console.log(data, "INI GENRE")
                dispatch({ type: SET_ONEGENRE, payload: data.name })

            })
            .catch((error) => {
                //console.log(error);
            })
            .finally(() => {
                dispatch({ type: SET_LOADING })
            })

    }

}


export const addGenre = (body) => {
    const postBody = {
        name: body.name,

    }
    //console.log(body, postBody, "INI BODY")
    //console.log("Add genre here, from actions");
    return (dispatch) => {

        //console.log(body, postBody, "INI BODY GENRE")
        return fetch(
            `${BASE_URL}/genres/add`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                'access_token': localStorage.getItem('access_token')
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(postBody)
        }
        )

    }

}