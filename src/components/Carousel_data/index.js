import { Carousel } from "react-bootstrap";
import { GetData } from "../../util/getData";
import "./carousel.css"
export default function Carousel_data(){
  let animes = GetData()

    return (
      <container className="container-carousel">    
          <Carousel>

        {
            animes.map((anime) =>(
        <Carousel.Item key={anime.id} interval={1000}>
          <img
            className="d-block w-100"
            src={anime.image_url}
            alt={anime.title}
            height="500"
          />        
          <Carousel.Caption>
            <h5>{anime.title}</h5>
            <p>Episodes: {anime.episodes } type: {anime.type}</p>
          </Carousel.Caption>
       
        </Carousel.Item>
            ))
        }
      </Carousel>
    </container>
    )

}