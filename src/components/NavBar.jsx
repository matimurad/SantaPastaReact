import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
import logo from "../assets/santa-pasta-logo.png"

const NavBar = () => {
    return (<nav>
        <Link to='/'><img src={logo} alt="logo" className="logo"/></Link>
        <ul>
            <li>
                <NavLink to='/categoria/rellenas'>Pastas rellenas</NavLink>            
            </li>
            <li>
                <NavLink to='/categoria/cortas'>Pastas cortas</NavLink>            
            </li>
            <li>
                <NavLink to='/categoria/especiales'>Pastas especiales</NavLink>            
            </li>
            <li>
                <NavLink to='/categoria/integrales'>Pastas integrales</NavLink>            
            </li>
        </ul>
        <Link className='carrito' to='/cart'>
            <CartWidget/>
        </Link>
    </nav>)
}
export default NavBar