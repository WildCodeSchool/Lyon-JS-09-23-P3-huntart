import { Link } from "react-router-dom";
import "./navBarDesktop.css";

function NavbarDesktop() {
  return (
    <div className="navbar-desktop">
      <Link to="/liste" className="textLink">
        Liste
      </Link>
      <Link to="/profile" className="textLink">
        Profil
      </Link>
    </div>
  );
}

export default NavbarDesktop;
