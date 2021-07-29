import './contactenos.css'
import { GetData } from '../../util/getData'

export default function Contactenos(){
     let animes = GetData()
    return (
    <div>
    <div className="contacto">
         {animes.map((anime) =>(
            <div key={anime.id} anime={anime}>
                <h1>{anime.title}</h1>

            </div>
        ))}
        <h1>Contacto</h1> 

    </div>
    </div>
    );
}