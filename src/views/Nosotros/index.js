import './about.css'
import "./mediaquerys.css"
import foto1 from "../../assets/imgs/jeison.jpg";
import foto2 from "../../assets/imgs/erika.jpeg";


const Nosotros = () => (
    <div className="about">
        <div className="card-1">
            <img src={foto1} alt="FotoProfile" />
            <div className="card-info">
                <h2>Jeison Cabarcas</h2>
                <p>Ingeniero electrónico apasionado por las matemáticas y la programación. Me gustan los desafíos donde se involucre resolver problemas ya sean cotidianos o del ámbito laboral, puesto que así siempre pongo aprueba mis capacidades y conocimientos. </p>        
            </div>
        </div>
        <div className="card-1">
            <img src={foto2} alt="FotoProfile" />
            <div className="card-info">
                <h2>Erika Blanco</h2>
                <p>Ingeniero electrónico apasionado por las matemáticas y la programación. Me gustan los desafíos donde se involucre resolver problemas ya sean cotidianos o del ámbito laboral, puesto que así siempre pongo aprueba mis capacidades y conocimientos. </p>        
            </div>
        </div>
        <div className="card-1">
            <img src={foto1} alt="FotoProfile" />
            <div className="card-info">
                <h2>Jeison Cabarcas</h2>
                <p>Ingeniero electrónico apasionado por las matemáticas y la programación. Me gustan los desafíos donde se involucre resolver problemas ya sean cotidianos o del ámbito laboral, puesto que así siempre pongo aprueba mis capacidades y conocimientos. </p>        
            </div>
        </div>
    </div>
);

export default Nosotros;