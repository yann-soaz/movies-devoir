import { Link } from "react-router-dom";
import './NavBar.css'
const NavBar = (props) => {
    const {links} = props;
    return (
        <nav className="NavBar">
            <div className="logo">
                TMDB
            </div>
            <ul className="linkList">
                {
                    links.map(([path, text], index) => <li key={index} ><Link to={path}>{text}</Link></li>)
                }
            </ul>
        </nav>
    )
}

export default NavBar;