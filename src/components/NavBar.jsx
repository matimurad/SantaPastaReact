import CartWidget from "./CartWidget"
import logo from "../assets/santa-pasta-logo.png"

const NavBar = () => {
    return (<nav>
        <img src={logo} alt="logo" className="logo"/>
        <ul>
            <li>
                <a>
                    Pastas rellenas
                </a>
            </li>
            <li>
                <a>
                    Pastas largas
                </a>
            </li>
            <li>
                <a>
                    Pastas cortas
                </a>
            </li>
            <li>
                <a>
                    Pastas especiales
                </a>
            </li>
            <li>
                <a>
                    Pastas integrales
                </a>
            </li>
        </ul>
        <CartWidget/>
    </nav>)
}
export default NavBar