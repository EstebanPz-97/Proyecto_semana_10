import './footer.css'
import "./mediaquery.css"
import logo1 from "../../assets/icons/facebook.png";
import logo2 from "../../assets/icons/github.png";
import logo3 from "../../assets/icons/instagram.png";
import logo4 from "../../assets/icons/linkedin.png";

const Footer = () => (
    <footer>
        <div className="footer">
            <div className="info-footer1">

                <span>
                    Erika Blanco
                </span>
                <span>
                    erika.blanco@alteru.co
                </span>
                <div class="redes">
                    <a href="#/"><img src={logo1} alt="Facebook" /></a>
                    <a href="#/"><img src={logo2} alt="GitHub" /></a>
                    <a href="#/"><img src={logo3} alt="Instagram" /></a>
                    <a href="http://linkedin.com/in/erikajuliethblancoflorez-b44241116"><img src={logo4} alt="Linkedin" /></a>
                </div>
            </div>

            <div className="info-footer2">
                <span>
                    Esteban Perez
                </span>
                <span>
                    esteban.perez@alteru.co
                </span>
                <div class="redes">
                    <a href="#/"><img src={logo1} alt="Facebook" /></a>
                    <a href="#/"><img src={logo2} alt="GitHub" /></a>
                    <a href="#/"><img src={logo3} alt="Instagram" /></a>
                    <a href="#/"><img src={logo4} alt="Linkedin" /></a>
                </div>
            </div>

            <div className="info-footer3">
                <span>
                    Jeison Cabarcas
                </span>
                <span>
                    jeison.cabarcas@alteru.co
                </span>
                <div class="redes">
                    <a href="https://www.facebook.com/jeison.cabarcas.9"><img src={logo1} alt="Facebook" /></a>
                    <a href="https://github.com/JeisonCabarcasP"><img src={logo2} alt="GitHub" /></a>
                    <a href="https://www.instagram.com/jeisoncabarcas/"><img src={logo3} alt="Instagram" /></a>
                    <a href="https://www.linkedin.com/in/jeisoncabarcas/"><img src={logo4} alt="Linkedin" /></a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;