import { Link } from "react-router-dom";
import "./navBarDesktop.css";
import Logo from "./Logo";

function NavbarDesktop() {
  return (
    <div className="navbarDesktop">
      <ul className="shadow-button-set">
        <li>
          <Logo />
        </li>

        <li>
          <Link to="/">
            <button className="comic-button" type="button">
              Accueil
            </button>
          </Link>
        </li>

        <li>
          <Link to="/streetart">
            <button className="comic-button" type="button">
              Oeuvres
            </button>
          </Link>
        </li>

        <li>
          <Link to="/post">
            <button className="comic-button" type="button">
              Poster
            </button>
          </Link>
        </li>

        <li>
          <Link to="/contact">
            <button className="comic-button" type="button">
              Contact
            </button>
          </Link>
        </li>
        <li>
          <Link to="/access">
            <button className="comic-button" type="button">
              Compte
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default NavbarDesktop;
