import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header>
      <div className="container">
        <div id="logo">
          <Link to="/">
            <img className="responsive" src={logo} alt="Logo Kasa" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Acceuil</NavLink>
            </li>
            <li>
              <NavLink to="/a-propos">A propos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
