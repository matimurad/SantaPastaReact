import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import logo from "../assets/santa-pasta-logo.png"

const NavBar = () => {
    return (<nav>
        <Link to='/'><img src={logo} alt="logo" className="logo"/></Link>
        <ul>
            <li>
                <Link to='/categoria/rellenas'>Pastas rellenas</Link>            
            </li>
            <li>
                <Link to='/categoria/cortas'>Pastas cortas</Link>            
            </li>
            <li>
                <Link to='/categoria/especiales'>Pastas especiales</Link>            
            </li>
            <li>
                <Link to='/categoria/integrales'>Pastas integrales</Link>            
            </li>
        </ul>
        <CartWidget/>
    </nav>)
}
export default NavBar