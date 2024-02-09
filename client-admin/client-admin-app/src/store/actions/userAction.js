const LOCAL_URL = 'http://localhost:3000'
const BASE_URL = 'https://popper-corns-0fea1b4c183b.herokuapp.com'

export const addUser = (body) => {

    // console.log(body,  "INI BODY")
    // console.log("Add user here, from actions");
    return (dispatch) => {
        return fetch(
            `${BASE_URL}/register`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(body)
        }
        )

    }

}