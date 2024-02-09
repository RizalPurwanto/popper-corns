import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(null)


    useEffect(()=>{
        fetch(url)
        .then((resp)=> {
            if(!resp.ok) {
                throw new Error("ERROR")
            }

            return resp.json()
        })
        .then((response)=> {
            setData(response)
        })
        .catch((err)=>{
            setIsError(true)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }, [])

    function reFetch() {
        fetch(url)
        .then((resp)=> {
            if(!resp.ok) {
                throw new Error("ERROR")
            }

            return resp.json()
        })
        .then((response)=> {
            setData(response)
        })
        .catch((err)=>{
            setIsError(true)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }

    function addData(body) {
        fetch(
            "http://localhost:3001/movies", {
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
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                console.log("ok, INI ADDED MOVIES", data);

                console.log()
                navigate('/')
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return {data, isLoading, isError, addData, reFetch}
}