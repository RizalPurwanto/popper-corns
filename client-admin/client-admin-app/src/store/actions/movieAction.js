
import {
  SET_MOVIES,
  SET_MOVIE,
  SET_LOADING
} from '../actionType'
const BASE_URL = 'https://popper-corns-0fea1b4c183b.herokuapp.com'
const LOCAL_URL = 'http://localhost:3000'

export const fetchMovies = () => {
  //console.log("fetch movies here, from actions");
  //console.log(localStorage.getItem('access_token'), "INI ACC TOKEN DI FETCH MOVIES")
  return (dispatch) => {

    fetch(
      `${BASE_URL}/movies`, {
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
        //console.log("ok, INI MOVIES", data);
        // setMovies(data);
        dispatch(
          { type: SET_MOVIES, payload: data })


      })
      .catch((error) => {
        //console.log(error);

      })
      .finally(() => {

        dispatch({ type: SET_LOADING })

      })
  }

}

export const fetchMovie = (id) => {
  //console.log("fetch one movie here, from actions");

  return (dispatch) => {

    fetch(
      `${BASE_URL}/movies/${id}`, {
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
        //console.log("ok, INI ONE MOVIE", data);

        dispatch(
          { type: SET_MOVIE, payload: data })

      })

      .catch((error) => {

        //console.log(error);
      })
      .finally(() => {

      })

  }

}



export const deleteMovie = (id) => {
  //console.log("fetch movies here, from actions");
  return (dispatch) => {
    fetch(
      `${BASE_URL}/movies/${id}`, {
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
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        //console.log("ok, INI DELETED MOVIES", data);

        //console.log()
        dispatch(fetchMovies())
      })
      .catch((error) => {
        //console.log(error);
      })
      .finally(() => {

      })
  }

}

export const editMovie = (id, body) => {
  //console.log(`EDIT movies here, from actions id = ${id}, `, body);
  console.log(localStorage.getItem('access_token'), "INI AKSES TOKEN")
  return (dispatch) => {
    return fetch(
      `${BASE_URL}/movies/${id}`, {
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

export const addMovie = (body) => {

  //console.log(body, "INI BODY DI ACTION")
  //console.log("Add movies here, from actions");
  return (dispatch) => {

    return fetch(
      `${BASE_URL}/movies/add`, {
      method: 'POST',
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



