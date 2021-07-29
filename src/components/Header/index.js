import './header.css'
import Logo from '../Logo'
import Navbar from '../Navbar'
export default function Header (){
    return <header>
        <Logo />
        <Navbar contactenos="contactenos" about="about" />
    </header>
}