import './header.css'
import { Link } from 'react-router-dom'


export default function Header (props){
    console.log(props);
    return <header>
        
        <span><Link to="/">Home</Link></span>

        <span><Link to="/contactenos" className=""> {props.contactenos}</Link>
        <Link to="/about">  { props.about}</Link></span>



    </header>
}