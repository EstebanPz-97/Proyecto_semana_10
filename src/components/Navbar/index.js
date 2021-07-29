import './navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar(props){
    
    return <div className="navbar">
         <span><Link to="/">Home</Link></span>
        <span><Link to="/contactenos" className=""> {props.contactenos}</Link>
        <Link to="/about">  { props.about}</Link></span>
    </div>
    
}