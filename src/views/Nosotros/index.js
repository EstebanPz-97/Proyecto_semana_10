import './about.css'
import "./mediaquerys.css"
import foto1 from "../../assets/imgs/jeison.jpg";
import foto2 from "../../assets/imgs/erika.jpeg";
import foto3 from "../../assets/imgs/esteban.jpeg";
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
                <p>Bióloga,  atraída  por el desarrollo web frontend, me encanta crear aplicaciones ya que puede ayudar a resolver  problemas  actuales de  la sociedad, a superar sus desafíos a través de la tecnología.  Estoy buscando    proyectos en los que pueda utilizar mi creatividad y mi capacidad de trabajo en equipo.</p>        
            </div>
        </div>
        <div className="card-1">
            <img src={foto3} alt="FotoProfile" />
            <div className="card-info">
                <h2>Esteban Perez</h2>
                <p>Programador front-end,tecnólogo enfocado en eldesarrollo de software, me gustaleer, los video juegos, aprendernuevas tecnologías, ayudar a lasdemás personas en lo que pueda ycrecer día a día </p>        
            </div>
        </div>
    </div>
);

export default Nosotros;