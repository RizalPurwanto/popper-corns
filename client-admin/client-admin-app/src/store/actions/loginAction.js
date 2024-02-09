

const BASE_URL = 'https://popper-corns-0fea1b4c183b.herokuapp.com'
const LOCAL_URL = 'http://localhost:3000'









export const doLogin = (body) => {
    const postBody = {
        email: body.email,
        password: body.password,

    }
    // console.log(body, postBody, "INI BODY")
    // console.log("Add movies here, from actions");
    return (dispatch) => {
        return fetch(
            `${BASE_URL}/login`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(postBody)
        }
        )
            
    }
    
}



