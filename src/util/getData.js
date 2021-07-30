import { useEffect, useState } from "react";


let API ="https://api.jikan.moe/v3/search/anime?q=action"

export function GetData(){
    const [animes, setAnimes] = useState([])

    useEffect(() => {
        fetch(API).then((response) => response.json())
        .then((data) => {
            setAnimes(data.results);
            console.log(animes);
        });
    },[]);
    return animes
}