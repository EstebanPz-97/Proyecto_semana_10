import "./movie.scss";
import { Link } from "react-router-dom";



export const Anime = ({anime}) => {
  return (
    <Link to={anime.id}><article className="movie-card">
      <img
        src={anime.image_url}
        alt="Carátula de la película"
      ></img>
      <div>{anime.title}</div>
    </article></Link>
  );
}