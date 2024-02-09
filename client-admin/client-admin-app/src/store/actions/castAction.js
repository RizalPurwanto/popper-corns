import {
  SET_CASTS
} from '../actionType'
const BASE_URL = 'https://popper-corns-0fea1b4c183b.herokuapp.com'
const LOCAL_URL = 'http://localhost:3000'

export const fetchCasts = (id) => {
  //console.log("fetch one movie here, from actions");
  return (dispatch) => {
    fetch(
      `${BASE_URL}/casts/movie/${id}`, {
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
          return response.json().then(err => Promise.reject(err))

        }
        return response.json();
      })
      .then((data) => {
        //console.log("ok, INI ONE MOVIE", data);

        dispatch(
          { type: SET_CASTS, payload: data })

      })

      .catch((error) => {

        //console.log(error);
      })
      .finally(() => {

      })

  }

}