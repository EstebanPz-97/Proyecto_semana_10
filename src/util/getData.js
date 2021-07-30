import { useEffect, useState } from "react";

let API = 'https://api.jikan.moe/v3/search/anime?q=';


export function GetData() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API).then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return movies;
}